import styled from "styled-components";

export const Footer = styled.div`
  text-align: center;

  margin: 0 auto;

  word-break: break-word;
  span {
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 0.7rem;

    strong {
      color: ${({ theme }) => theme.colors.black_100};
    }
  }
`;

export const PrivacyPolicy = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.black_100};
  font-weight: 700;
  text-decoration: none;
  font-size: 0.7rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.black_100};
  font-weight: 700;
  text-decoration: none;
  font-size: 0.7rem;
  margin: 0.75rem 0;
`;

export const BussinesLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.black_100};
  font-weight: 700;
  text-decoration: none;
  font-size: 0.7rem;
  margin: 0.75rem 0;
`;
