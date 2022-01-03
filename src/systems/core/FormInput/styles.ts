/* eslint-disable prettier/prettier */
import styled from "styled-components";

type Input = {
  isError?: boolean;
};

export const Container = styled.div<Input>`
  display: flex;
  flex-direction: column;

  input {
    min-height: 48px;
    padding: 0.5rem 1rem;
    outline: 0;
    border: 2px solid ${(props) =>
    props.isError
      ? props.theme.colors.red_primary
      : props.theme.colors.gray_200};
    border-radius: 1rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.black_primary};
    

    ::placeholder {
  color: ${({ theme }) => theme.colors.gray_300};
}
  }

  span {
  color: ${({ theme }) => theme.colors.red_primary};
  font - size: 0.8rem;
  font - weight: 400;
}
`;
