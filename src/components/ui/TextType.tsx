"use client";

import {
  ElementType,
  useEffect,
  useRef,
  useState,
  createElement,
  useMemo,
  useCallback,
} from "react";
import { gsap } from "gsap";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [isComplete, setIsComplete] = useState(false);

  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;

    const { min, max } = variableSpeed;

    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "inherit";

    return textColors[currentTextIndex % textColors.length];
  };

  /*
   * Start animation when visible
   */
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [startOnVisible]);

  /*
   * Cursor blinking
   */
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    const cursor = cursorRef.current;

    // If typing is complete, fade cursor out
    if (isComplete) {
      gsap.killTweensOf(cursor);

      gsap.to(cursor, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
      });

      return;
    }

    // Start blinking while typing
    gsap.killTweensOf(cursor);

    gsap.set(cursor, {
      opacity: 1,
    });

    const blinkAnimation = gsap.to(cursor, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => {
      blinkAnimation.kill();
    };
  }, [showCursor, cursorBlinkDuration, isComplete]);

  /*
   * Typing animation
   */
  useEffect(() => {
    if (!isVisible || isComplete) return;

    let timeout: ReturnType<typeof setTimeout>;

    const currentText = textArray[currentTextIndex];

    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      /*
       * Typing
       */
      if (!isDeleting) {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(
                (prev) => prev + processedText[currentCharIndex],
              );

              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed,
          );
        } else {
          /*
           * Finish permanently when loop is false
           */
          if (!loop) {
            onSentenceComplete?.(
              textArray[currentTextIndex],
              currentTextIndex,
            );

            setIsComplete(true);

            return;
          }

          /*
           * Continue looping
           */
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }

      /*
       * Deleting
       */
      else {
        if (displayedText === "") {
          setIsDeleting(false);

          setCurrentTextIndex(
            (prev) => (prev + 1) % textArray.length,
          );

          setCurrentCharIndex(0);

          onSentenceComplete?.(
            textArray[currentTextIndex],
            currentTextIndex,
          );
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      }
    };

    if (
      currentCharIndex === 0 &&
      !isDeleting &&
      displayedText === ""
    ) {
      timeout = setTimeout(
        executeTypingAnimation,
        initialDelay,
      );
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    isComplete,
    reverseMode,
    variableSpeed,
    getRandomSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length ||
      isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },

    <span
      className="inline"
      style={{
        color: getCurrentTextColor() || "inherit",
      }}
    >
      {displayedText}
    </span>,

    showCursor && !shouldHideCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block ${cursorClassName}`}
      >
        {cursorCharacter}
      </span>
    ),
  );
};

export default TextType;