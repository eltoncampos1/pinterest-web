import { ReactNode } from "react";
import * as S from "./styles";

type DynamicHeadingProps = {
  children: ReactNode;
  animateAfter?: boolean;
  animateBefore?: boolean;
};

export const DynamicHeading = ({
  children,
  animateAfter,
  animateBefore = true,
}: DynamicHeadingProps) => {
  return (
    <S.Container animateAfter={animateAfter} animateBefore={animateBefore}>
      <S.DynamicHeading>{children}</S.DynamicHeading>
    </S.Container>
  );
};
