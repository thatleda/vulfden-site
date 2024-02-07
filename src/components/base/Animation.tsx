import React, { type PropsWithChildren } from "react";
import styled, { css, keyframes } from "styled-components";
import { useIntersectionObserver } from "usehooks-ts";

type AnimationTiming = "linear" | "ease-in" | "ease-out" | "ease-in-out";
type AnimationFillMode = "forwards" | "backwards" | "both" | "none";
type AnimationType =
  | "fadeIn"
  | "fadeOut"
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "scaleIn"
  | "reduceHeight"
  | "wiggle";

interface AnimationProps {
  type?: AnimationType;
  timing?: AnimationTiming;
  fillMode?: AnimationFillMode;
  delay?: number;
  duration?: number;
  iterationCount?: number;
  className?: string;
  onAnimationEnd?: () => void;
}

type Keyframes = ReturnType<typeof keyframes>;

interface AnimationConfig {
  $isVisible: boolean;
  $keyframes: Keyframes;
  $timing: AnimationTiming;
  $duration: string;
  $delay: string;
  $count: string;
  $fillMode: AnimationFillMode;
  $style?: React.CSSProperties;
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
    case "fadeIn":
      return fadeIn;
    case "fadeOut":
      return fadeOut;
    case "fadeUp":
      return fadeUp;
    case "fadeDown":
      return fadeDown;
    case "fadeLeft":
      return fadeLeft;
    case "scaleIn":
      return scaleIn;
    case "reduceHeight":
      return reduceHeight;
    case "wiggle":
      return wiggle;
    default:
      return fadeIn;
  }
};

const MovingContainer = styled.div<AnimationConfig>(
  ({
    $isVisible,
    $count,
    $keyframes,
    $timing,
    $duration,
    $delay,
    $fillMode,
  }) => {
    if ($isVisible) {
      return css`
        animation-name: ${$keyframes};
        animation-timing-function: ${$timing};
        animation-duration: ${$duration};
        animation-delay: ${$delay};
        animation-iteration-count: ${$count};
        animation-fill-mode: ${$fillMode};
      `;
    } else {
      return css`
        opacity: 0;
      `;
    }
  }
);

const Animation: React.FC<PropsWithChildren<AnimationProps>> = (props) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.05,
  });

  return (
    <MovingContainer
      className={props.className}
      ref={ref}
      onAnimationEnd={props.onAnimationEnd}
      $isVisible={isIntersecting ?? false}
      $keyframes={keyframesByType(props.type)}
      $timing={props.timing ?? "ease-in"}
      $duration={`${props.duration ?? 200}ms`}
      $delay={`${props.delay ?? 0}ms`}
      $count={`${props.iterationCount ?? 1}`}
      $fillMode={props.fillMode ?? "backwards"}
    >
      {props.children}
    </MovingContainer>
  );
};

export default Animation;
