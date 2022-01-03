import { ReactNode } from "react";
import * as S from "./styles";

export interface ButtonProps {
  color: string;
  buttonBg: string;
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ color, buttonBg, children, onClick }: ButtonProps) => {
  return (
    <S.Container
      aria-label={String(children)}
      onClick={onClick}
      buttonBg={buttonBg}
      color={color}
      type="button"
    >
      {children}
    </S.Container>
  );
};
