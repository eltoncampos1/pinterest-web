import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Main = styled.div`
  max-width: 268px;
  margin: 0px auto;
`;

export const CreateBussinesAccountLink = styled.a`
  display: flex;
  width: calc(100% + 4rem);
  min-height: 4rem;
  margin-bottom: -2rem;
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors.gray_100};
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.black_100};
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;

  -webkit-border-bottom-right-radius: 8px;
  -webkit-border-bottom-left-radius: 8px;
  -moz-border-radius-bottomright: 8px;
  -moz-border-radius-bottomleft: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;
