import styled, { css } from "styled-components";

type Props = {
  animateBefore?: boolean;
  animateAfter?: boolean;
};

export const Container = styled.div<Props>`
  position: absolute;
  bottom: -7.5rem;
  transform: translateY(-50%);
  pointer-events: none;
  transition-duration: 1s;

  ${(props) =>
    props.animateBefore &&
    css`
      transform: translateY(40px);
      opacity: 0;
      pointer-events: none;
    `}

  ${(props) =>
    props.animateAfter &&
    css`
      transform: translateY(-40px);
      opacity: 0;
      pointer-events: none;
    `}
`;

export const DynamicHeading = styled.h1`
  margin: 2px;
  font-size: 3.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green_secondary};
  white-space: nowrap;
`;
