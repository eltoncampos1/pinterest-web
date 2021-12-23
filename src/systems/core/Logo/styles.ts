import styled from "styled-components";

type LogoProps = {
  color?: string;
};

export const Container = styled.svg<LogoProps>`
  display: block;
  width: 32px;
  height: 32px;
  fill: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.red_primary};
`;
