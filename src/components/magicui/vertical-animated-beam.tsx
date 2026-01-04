"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { RefObject, useEffect, useState } from "react";

export interface VerticalAnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const VerticalAnimatedBeam: React.FC<VerticalAnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        setSvgDimensions({ width: containerRect.width, height: containerRect.height });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-0 top-0 h-full w-full",
        className,
      )}
    >
      <svg
        width={svgDimensions.width}
        height={svgDimensions.height}
        className="pointer-events-none"
      >
        <path
          d={pathD}
          stroke={pathColor}
          strokeWidth={pathWidth}
          strokeOpacity={pathOpacity}
          fill="none"
        />
      </svg>
      {pathD && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${pathWidth}px`,
            height: "40px",
            background: `linear-gradient(to bottom, transparent, ${gradientStartColor}, ${gradientStopColor}, transparent)`,
            borderRadius: `${pathWidth / 2}px`,
            offsetPath: `path("${pathD}")`,
            offsetRotate: "auto 90deg",
            transform: "translate(calc(-50% + 1px), -50%)", // Center the beam on the path
          }}
          initial={{ offsetDistance: reverse ? "100%" : "0%" }}
          animate={{ offsetDistance: reverse ? "0%" : "100%" }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0,
          }}
        />
      )}
    </div>
  );
};
