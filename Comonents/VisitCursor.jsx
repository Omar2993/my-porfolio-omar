import { Eye } from "lucide-react";

export default function VisitCursor() {
  return (
    <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-[#2b1a1a] shadow-xl">
      {/* Rotating Text */}
      <svg
        className="absolute inset-0 w-full h-full animate-[spin_8s_linear_infinite]"
        viewBox="0 0 100 100"
      >
        <defs>
          <path
            id="circlePath"
            d="M50,50
               m-36,0
               a36,36 0 1,1 72,0
               a36,36 0 1,1 -72,0"
          />
        </defs>

        <text
          fill="white"
          fontSize="8"
          fontWeight="600"
          letterSpacing="2"
        >
          <textPath href="#circlePath">
            • VISIT PROJECT • VISIT PROJECT •
          </textPath>
        </text>
      </svg>

      {/* Center Icon */}
      <Eye className="w-6 h-6 text-white z-10" />
    </div>
  );
}