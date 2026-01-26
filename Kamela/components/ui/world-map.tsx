"use client";

import { useRef, useMemo, memo } from "react";
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

// Memoized animated point component to prevent re-renders
const AnimatedPoint = memo(({ x, y, color }: { x: number; y: number; color: string }) => (
  <g>
    <circle cx={x} cy={y} r="2" fill={color} />
    <circle cx={x} cy={y} r="2" fill={color} opacity="0.5">
      <animate
        attributeName="r"
        from="2"
        to="8"
        dur="1.5s"
        begin="0s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        from="0.5"
        to="0"
        dur="1.5s"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  </g>
));

AnimatedPoint.displayName = "AnimatedPoint";

function WorldMap({ dots = [], lineColor = "#0866ff" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  // Optimize SVG map generation with proper memoization
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    const isDark = theme === "dark";
    return map.getSVG({
      radius: 0.22,
      color: isDark ? "#FFFFFF40" : "#00000040",
      shape: "circle",
      backgroundColor: isDark ? "black" : "white",
    });
  }, [theme]);

  // Memoize the SVG data URL to prevent recreation
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

  // Pre-calculate all points to avoid recalculation during render
  const projectedDots = useMemo(
    () =>
      dots.map((dot) => ({
        start: projectPoint(dot.start.lat, dot.start.lng),
        end: projectPoint(dot.end.lat, dot.end.lng),
      })),
    [dots]
  );

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
        height={495}
        width={1056}
        draggable={false}
        priority
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

        {projectedDots.map((dot, i) => (
          <motion.path
            key={`path-${i}`}
            d={createCurvedPath(dot.start, dot.end)}
            fill="none"
            stroke="url(#path-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              delay: 0.5 * i,
              ease: "easeOut",
            }}
          />
        ))}

        {projectedDots.map((dot, i) => (
          <g key={`points-${i}`}>
            <AnimatedPoint x={dot.start.x} y={dot.start.y} color={lineColor} />
            <AnimatedPoint x={dot.end.x} y={dot.end.y} color={lineColor} />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default memo(WorldMap);