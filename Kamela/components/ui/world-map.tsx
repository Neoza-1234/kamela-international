"use client";

import { useRef, useMemo, memo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

// Simplified static point component (no continuous animation)
const StaticPoint = memo(({ x, y, color }: { x: number; y: number; color: string }) => (
  <circle cx={x} cy={y} r="3" fill={color} />
));

StaticPoint.displayName = "StaticPoint";

// Pulsing point only animates once on mount
const PulsingPoint = memo(({ x, y, color }: { x: number; y: number; color: string }) => (
  <g>
    <circle cx={x} cy={y} r="3" fill={color} />
    <motion.circle
      cx={x}
      cy={y}
      r="3"
      fill={color}
      initial={{ r: 3, opacity: 0.8 }}
      animate={{ r: 12, opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  </g>
));

PulsingPoint.displayName = "PulsingPoint";

function WorldMap({ dots = [], lineColor = "#0866ff" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" }); 
    const isDark = theme === "dark";
    return map.getSVG({
      radius: 0.22,
      color: isDark ? "#FFFFFF30" : "#00000030", 
      shape: "circle",
      backgroundColor: isDark ? "black" : "white",
    });
  }, [theme]);

  const svgDataUrl = useMemo(
    () => `data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`,
    [svgMap]
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Pre-calculate all paths and points
  const pathData = useMemo(
    () =>
      dots.map((dot) => {
        const start = projectPoint(dot.start.lat, dot.start.lng);
        const end = projectPoint(dot.end.lat, dot.end.lng);
        return {
          path: createCurvedPath(start, end),
          start,
          end,
        };
      }),
    [dots]
  );

  // Don't render animations until mounted (prevents SSR issues)
  if (!mounted) {
    return (
      <div className="w-full aspect-2/1 dark:bg-black bg-white rounded-lg relative font-sans">
        <Image
          src={svgDataUrl}
          className="h-full w-full pointer-events-none select-none"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
          }}
          alt="world map"
          height={400}
          width={800}
          draggable={false}
        />
      </div>
    );
  }

  return (
    <div className="w-full aspect-2/1 dark:bg-black bg-white rounded-lg relative font-sans">
      <Image
        src={svgDataUrl}
        className="h-full w-full pointer-events-none select-none"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
        }}
        alt="world map"
        height={400}
        width={800}
        draggable={false}
        loading="lazy"
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated paths - animate once on mount */}
        {pathData.map((data, i) => (
          <motion.path
            key={`path-${i}`}
            d={data.path}
            fill="none"
            stroke="url(#path-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.3 * i,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Points with single pulse animation */}
        {pathData.map((data, i) => (
          <g key={`points-${i}`}>
            <PulsingPoint x={data.start.x} y={data.start.y} color={lineColor} />
            <PulsingPoint x={data.end.x} y={data.end.y} color={lineColor} />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default memo(WorldMap);