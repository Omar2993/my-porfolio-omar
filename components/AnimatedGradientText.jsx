export default function AnimatedGradientText({
  children,
  className = "",
}) {
  return (
    <span
      style={{ backgroundSize: "600% 100%" }}
      className={`
        text-transparent
        bg-clip-text
        bg-[linear-gradient(90deg,#ef4444,#8b5cf6,#3b82f6,#ef4444,#8b5cf6,#3b82f6,#ef4444,#8b5cf6,#3b82f6)]
        animate-gradient
        ${className}
      `}
    >
      {children}
    </span>
  );
}