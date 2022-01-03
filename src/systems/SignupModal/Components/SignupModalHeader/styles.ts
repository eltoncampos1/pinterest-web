import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 500px;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.black_300};
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const SubTitle = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black_100};
  font-weight: 400;
  margin-bottom: 2rem;
`;
