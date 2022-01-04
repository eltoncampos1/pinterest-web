import styled from "styled-components";

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  input {
    margin-bottom: 0.3rem;
  }

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
