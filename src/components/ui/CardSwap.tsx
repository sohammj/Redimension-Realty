"use client";

import {
  Children,
  cloneElement,
  createRef,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  type HTMLAttributes,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type RefAttributes,
  type RefObject,
} from "react";
import gsap from "gsap";

export type CardSwapProps = {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  className?: string;
  children: ReactNode;
};

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  customClass?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass = "", className = "", ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`
        absolute left-1/2 top-1/2 overflow-visible
        [backface-visibility:hidden] [transform-style:preserve-3d]
        [will-change:transform] ${customClass} ${className}
      `}
    />
  ),
);

Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement | null>;

type Slot = {
  x: number;
  y: number;
  z: number;
  zIndex: number;
};

const makeSlot = (
  index: number,
  distanceX: number,
  distanceY: number,
  total: number,
): Slot => ({
  x: index * distanceX,
  y: -index * distanceY,
  z: -index * distanceX * 1.5,
  zIndex: total - index,
});

const placeImmediately = (
  element: HTMLElement,
  slot: Slot,
  skewAmount: number,
) => {
  gsap.set(element, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skewAmount,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });
};

export default function CardSwap({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  className = "",
  children,
}: CardSwapProps) {
  const childArray = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children],
  );

  const refs = useMemo<CardRef[]>(
    () => childArray.map(() => createRef<HTMLDivElement>()),
    [childArray.length],
  );

  const orderRef = useRef<number[]>(
    Array.from({ length: childArray.length }, (_, index) => index),
  );
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const animation = useMemo(
    () =>
      easing === "elastic"
        ? {
            ease: "elastic.out(0.6,0.9)",
            dropDuration: 2,
            moveDuration: 2,
            returnDuration: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: "power1.inOut",
            dropDuration: 0.8,
            moveDuration: 0.8,
            returnDuration: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          },
    [easing],
  );

  useEffect(() => {
    const total = refs.length;
    orderRef.current = Array.from({ length: total }, (_, index) => index);

    refs.forEach((cardRef, index) => {
      if (!cardRef.current) return;

      placeImmediately(
        cardRef.current,
        makeSlot(index, cardDistance, verticalDistance, total),
        skewAmount,
      );
    });

    const swapCards = () => {
      if (orderRef.current.length < 2) return;

      const [frontCard, ...remainingCards] = orderRef.current;
      const frontElement = refs[frontCard]?.current;

      if (!frontElement) return;

      timelineRef.current?.kill();

      const timeline = gsap.timeline();
      timelineRef.current = timeline;

      timeline.to(frontElement, {
        y: "+=500",
        duration: animation.dropDuration,
        ease: animation.ease,
      });

      timeline.addLabel(
        "promote",
        `-=${animation.dropDuration * animation.promoteOverlap}`,
      );

      remainingCards.forEach((cardIndex, position) => {
        const element = refs[cardIndex]?.current;
        if (!element) return;

        const slot = makeSlot(position, cardDistance, verticalDistance, total);

        timeline.set(element, { zIndex: slot.zIndex }, "promote");
        timeline.to(
          element,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: animation.moveDuration,
            ease: animation.ease,
          },
          `promote+=${position * 0.15}`,
        );
      });

      const backSlot = makeSlot(
        total - 1,
        cardDistance,
        verticalDistance,
        total,
      );

      timeline.addLabel(
        "return",
        `promote+=${animation.moveDuration * animation.returnDelay}`,
      );

      timeline.call(
        () => gsap.set(frontElement, { zIndex: backSlot.zIndex }),
        undefined,
        "return",
      );

      timeline.to(
        frontElement,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: animation.returnDuration,
          ease: animation.ease,
        },
        "return",
      );

      timeline.call(() => {
        orderRef.current = [...remainingCards, frontCard];
      });
    };

    const startInterval = () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }

      intervalRef.current = window.setInterval(swapCards, delay);
    };

    const pauseAnimation = () => {
      timelineRef.current?.pause();

      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const resumeAnimation = () => {
      timelineRef.current?.play();
      startInterval();
    };

    startInterval();

    const container = containerRef.current;

    if (pauseOnHover && container) {
      container.addEventListener("mouseenter", pauseAnimation);
      container.addEventListener("mouseleave", resumeAnimation);
    }

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }

      timelineRef.current?.kill();

      if (pauseOnHover && container) {
        container.removeEventListener("mouseenter", pauseAnimation);
        container.removeEventListener("mouseleave", resumeAnimation);
      }
    };
  }, [
    animation,
    cardDistance,
    delay,
    pauseOnHover,
    refs,
    skewAmount,
    verticalDistance,
  ]);

  const renderedCards = childArray.map((child, index) => {
    if (!isValidElement<CardProps>(child)) return child;

    return cloneElement(child, {
      key: child.key ?? index,
      ref: refs[index],
      style: {
        width,
        height,
        ...(child.props.style ?? {}),
      },
      onClick: (event: MouseEvent<HTMLDivElement>) => {
        child.props.onClick?.(event);
        onCardClick?.(index);
      },
    } as CardProps & RefAttributes<HTMLDivElement>);
  });

  return (
    <div
      ref={containerRef}
      className={`relative overflow-visible [perspective:1200px] ${className}`}
      style={{ width, height }}
    >
      <div className="absolute inset-0 [transform-style:preserve-3d]">
        {renderedCards}
      </div>
    </div>
  );
}
