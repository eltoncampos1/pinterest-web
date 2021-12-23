import { ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  color: string;
  buttonBg: string;
  children: ReactNode;
};

export const Button = ({ color, buttonBg, children }: ButtonProps) => {
  return (
    <S.Container
      aria-label={String(children)}
      buttonBg={buttonBg}
      color={color}
      type="button"
    >
      {children}
    </S.Container>
  );
};
