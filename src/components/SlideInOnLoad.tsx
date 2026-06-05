import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  direction?: "left" | "right" | "up";
  delayMs?: number;
  className?: string;
};

const hiddenTransforms: Record<NonNullable<Props["direction"]>, string> = {
  left: "translate3d(-48px, 0, 0)",
  right: "translate3d(48px, 0, 0)",
  up: "translate3d(0, 48px, 0)",
};

const SlideInOnLoad = ({
  children,
  direction = "up",
  delayMs = 0,
  className,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      requestAnimationFrame(() => setIsVisible(true));
    }, delayMs);

    return () => window.clearTimeout(timeoutId);
  }, [delayMs]);

  return (
    <div
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : hiddenTransforms[direction],
        transitionProperty: "opacity, transform",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default SlideInOnLoad;
