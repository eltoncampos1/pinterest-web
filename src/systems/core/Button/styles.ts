import styled from "styled-components";

type ButtonProps = {
  color: string;
  buttonBg: string;
};

export const Container = styled.button<ButtonProps>`
  min-width: 3.75rem;
  min-height: 2.3rem;
  border: 0;
  display: block;
  background: ${(props) => props.buttonBg};

  margin: 8px;
  cursor: pointer;
  padding: 0.5rem 0.7rem;
  border-radius: 1rem;
  -webkit-appearance: button;
  transition: filter 0.3s ease-in-out;

  font-weight: 700;
  text-align: center;
  color: ${(props) => props.color};

  &:hover {
    filter: brightness(0.7);
  }
`;
