import styled from "styled-components";

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

  ul {
    display: flex;
    gap: 0.7rem;

    li {
      display: block;
      list-style: none;
      width: 10px;
      height: 10px;
      background: ${({ theme }) => theme.colors.gray_200};
      border-radius: 50%;
    }
  }
`;
export const StaticHeading = styled.h1`
    margin: 2px;
    font-size: 3.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black_200}
}
`;
export const DynamicHeading = styled.h1`
  margin: 2px;
  font-size: 3.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.green_secondary};
`;

export const GridContainer = styled.section`
  width: 100%;
  height: calc(100vh - 20vh);
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

  &:nth-child(1) {
    margin-top: 0px;
  }
  &:nth-child(2) {
    margin-top: 10rem;
  }
  &:nth-child(3) {
    margin-top: 20rem;
  }
  &:nth-child(4) {
    margin-top: 30rem;
  }
  &:nth-child(5) {
    margin-top: 20rem;
  }
  &:nth-child(6) {
    margin-top: 10rem;
  }
  &:nth-child(7) {
    margin-top: 0px;
  }
`;
export const Item = styled.section`
  width: 100%;
  background: gray;
  height: 300px;
  border-radius: 1rem;

  :not(first-child) {
    margin-top: 1rem;
  }
`;
