import React, { type PropsWithChildren } from "react";

import styled, { css, keyframes } from "styled-components";

import { useIntersectionObserver } from "usehooks-ts";

type AnimationTiming = "ease-in" | "ease-in-out" | "ease-out" | "linear";
type AnimationFillMode = "backwards" | "both" | "forwards" | "none";
type AnimationType =
  | "fadeDown"
  | "fadeIn"
  | "fadeLeft"
  | "fadeOut"
  | "fadeUp"
  | "reduceHeight"
  | "scaleIn"
  | "wiggle";

export interface AnimationProperties {
  className?: string;
  delay?: number;
  duration?: number;
  fillMode?: AnimationFillMode;
  iterationCount?: number;
  onAnimationEnd?: () => void;
  timing?: AnimationTiming;
  type?: AnimationType;
}

type Keyframes = ReturnType<typeof keyframes>;

interface AnimationConfig {
  $count: string;
  $delay: string;
  $duration: string;
  $fillMode: AnimationFillMode;
  $isVisible: boolean;
  $keyframes: Keyframes;
  $style?: React.CSSProperties;
  $timing: AnimationTiming;
  onAnimationEnd?: () => void;
}

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`;

const fadeUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
`;

const fadeDown = keyframes`  
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
`;

const fadeLeft = keyframes`
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
`;

const scaleIn = keyframes`
    0% {
      opacity: 0;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
`;

const reduceHeight = keyframes`
    0% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
`;

const wiggle = keyframes`
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;

const keyframesByType = (type: string | undefined): Keyframes => {
  switch (type) {
    case "fadeIn": {
      return fadeIn;
    }
    case "fadeOut": {
      return fadeOut;
    }
    case "fadeUp": {
      return fadeUp;
    }
    case "fadeDown": {
      return fadeDown;
    }
    case "fadeLeft": {
      return fadeLeft;
    }
    case "scaleIn": {
      return scaleIn;
    }
    case "reduceHeight": {
      return reduceHeight;
    }
    case "wiggle": {
      return wiggle;
    }
    default: {
      return fadeIn;
    }
  }
};

const MovingContainer = styled.div<AnimationConfig>(
  ({
    $count,
    $delay,
    $duration,
    $fillMode,
    $isVisible,
    $keyframes,
    $timing,
  }) => {
    return $isVisible
      ? css`
          animation-name: ${$keyframes};
          animation-timing-function: ${$timing};
          animation-duration: ${$duration};
          animation-delay: ${$delay};
          animation-iteration-count: ${$count};
          animation-fill-mode: ${$fillMode};
        `
      : css`
          opacity: 0;
        `;
  },
);

const Animation: React.FC<PropsWithChildren<AnimationProperties>> = (
  properties,
) => {
  const [reference, isIntersecting] = useIntersectionObserver({
    threshold: 0.05,
  });

  return (
    <MovingContainer
      $count={`${properties.iterationCount ?? 1}`}
      $delay={`${properties.delay ?? 0}ms`}
      $duration={`${properties.duration ?? 200}ms`}
      $fillMode={properties.fillMode ?? "backwards"}
      $isVisible={isIntersecting ?? false}
      $keyframes={keyframesByType(properties.type)}
      $timing={properties.timing ?? "ease-in"}
      className={properties.className}
      onAnimationEnd={properties.onAnimationEnd}
      ref={reference}
    >
      {properties.children}
    </MovingContainer>
  );
};

export default Animation;
