import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SocialLogin = styled.div`
  button {
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
      font-size: 1.5rem;
    }

    :nth-child(2) {
      font-weight: 500;
      border: 1px solid ${({ theme }) => theme.colors.gray_200};
      font-family: "Google Sans", arial, sans-serif;
      letter-spacing: 0.25px;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.gray_400};
      margin-top: 0.8rem;
    }
  }
`;

export const Main = styled.div`
  max-width: 268px;
  margin: 0px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    margin: 1rem 0;
    font-size: 0.9rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black_300};
    text-transform: uppercase;
  }

  > button {
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

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

export const CreateBussinesAccountLink = styled.a`
  display: flex;
  width: calc(100% + 4rem);
  min-height: 4rem;
  margin-bottom: -2rem;
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
