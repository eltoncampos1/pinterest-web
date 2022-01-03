import styled from "styled-components";

export type Animation = "fadeIn" | "rotate";

type AnimationProps = {
  animation: Animation;
};

export const Container = styled.div<AnimationProps>`
  transition: ease-in-out;
  animation: ${(props) => props.animation} 0.6s;
`;
