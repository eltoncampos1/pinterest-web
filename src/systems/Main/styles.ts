import styled, { keyframes } from "styled-components";

type LabelProps = {
  isActive: boolean;
};

const fadeIn = keyframes`
 0% {
    transform: translateY(40px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 5rem;
  position: relative;

  ul {
    display: flex;
    gap: 0.7rem;
    position: relative;
    bottom: -7rem;
  }
`;

export const Label = styled.li<LabelProps>`
  display: block;
  list-style: none;
  width: 10px;
  height: 10px;
  background: ${(props) =>
    props.isActive
      ? props.theme.colors.green_secondary
      : props.theme.colors.gray_200};
  border-radius: 50%;

  cursor: pointer;
`;
export const StaticHeading = styled.h1`
    margin: 2px;
    font-size: 3.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black_200}
}
`;

export const GridContainer = styled.section`
  width: 100%;
  height: calc(100vh - 10vh);
  display: flex;
  flex-direction: column;
  justify-items: center;
  overflow: hidden;
  margin-top: -8rem;
`;
export const Grid = styled.section`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(7, 236px);
  width: 100%;
  place-content: center;
`;
export const Column = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s ease-in-out;

  &:nth-child(1) {
    margin-top: 0px;
    animation: ${fadeIn} 2000ms;
  }
  &:nth-child(2) {
    margin-top: 10rem;
    animation: ${fadeIn} 2200ms;
  }
  &:nth-child(3) {
    margin-top: 20rem;
    animation: ${fadeIn} 2400ms;
  }
  &:nth-child(4) {
    margin-top: 30rem;
    animation: ${fadeIn} 2600ms;
  }
  &:nth-child(5) {
    margin-top: 20rem;
    animation: ${fadeIn} 2800ms;
  }
  &:nth-child(6) {
    margin-top: 10rem;
    animation: ${fadeIn} 3000ms;
  }
  &:nth-child(7) {
    margin-top: 0px;
    animation: ${fadeIn} 3200ms;
  }
`;
export const Item = styled.img`
  width: 100%;
  background: gray;
  height: 300px;
  border-radius: 1rem;
  object-fit: cover;

  :not(first-child) {
    margin-top: 1rem;
  }
`;
