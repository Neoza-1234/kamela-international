import { ArrowUpRight } from "lucide-react";

interface PrimaryButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  className?: string;
}

export default function PrimaryButton({
  label,
  href,
  onClick,
  target = "_blank",
  rel = "noopener noreferrer",
  className = "",
}: PrimaryButtonProps) {
  const sharedClassName = `group bg-(--prime) text-white font-medium inline-flex flex-row justify-between items-center py-3 px-5 rounded-full w-52 border border-(--prime) transition-all duration-200 ease-in-out hover:bg-transparent hover:text-(--prime) cursor-pointer ${className}`;

  const inner = (
    <>
      <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-8">
        {label}
      </span>
      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-35 group-hover:rotate-45 group-hover:bg-black">
        <ArrowUpRight
          className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white"
          strokeWidth={1.67}
        />
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={sharedClassName}
      >
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={sharedClassName}>
      {inner}
    </button>
  );
}