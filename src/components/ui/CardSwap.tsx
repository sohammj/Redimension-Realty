"use client";

import {
  Children,
  isValidElement,
  useEffect,
  useMemo,
  useState,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

type CardSwapProps = {
  children: ReactNode;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  className?: string;
};

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={[
        "h-full w-full overflow-hidden rounded-[2rem] bg-white",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

function isCardElement(child: ReactNode): child is ReactElement<CardProps> {
  return isValidElement<CardProps>(child);
}

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = true,
  className = "",
}: CardSwapProps) {
  const cards = useMemo(
    () => Children.toArray(children).filter(isCardElement),
    [children]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (cards.length <= 1) return;
    if (pauseOnHover && isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, delay);

    return () => window.clearInterval(interval);
  }, [cards.length, delay, isPaused, pauseOnHover]);

  if (!cards.length) return null;

  return (
    <div
      className={["relative h-full w-full", className].join(" ")}
      style={{ perspective: "1400px" }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {cards.map((card, index) => {
        const position = (index - activeIndex + cards.length) % cards.length;
        const isVisible = position <= 3;
        const isActive = position === 0;

        const x = position * cardDistance;
        const y = position * verticalDistance;
        const scale = 1 - position * 0.055;
        const rotate = position * -4;
        const zIndex = cards.length - position;

        return (
          <div
            key={index}
            className={[
              "absolute inset-0 rounded-[2rem] transition-all duration-700 will-change-transform",
              "ease-[cubic-bezier(0.22,1,0.36,1)]",
              isActive ? "shadow-2xl" : "shadow-xl",
            ].join(" ")}
            style={{
              zIndex,
              opacity: isVisible ? 1 : 0,
              pointerEvents: isActive ? "auto" : "none",
              transform: `
                translate3d(${x}px, ${y}px, ${-position * 90}px)
                scale(${scale})
                rotate(${rotate}deg)
              `,
            }}
          >
            {card}
          </div>
        );
      })}
    </div>
  );
}