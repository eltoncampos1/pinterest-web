import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 2rem;
`;

export const PinName = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.red_primary};
  margin-left: 0.5rem;
`;

export const NavContainer = styled.div`
  max-width: 29rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const NavLinks = styled.nav`
  margin-right: 2rem;
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  display: block;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black_primary};
  word-wrap: break-word;
  /* transition: transform 85ms ease-out; */
  font-size: 1rem;
  cursor: pointer;

  & + & {
    margin-left: 1.5rem;
  }
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 500px) {
    & + & {
      margin-left: 2rem;
    }
  }
`;

export const NavButtons = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    display: none;
  }
`;
