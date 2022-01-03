import { ReactNode } from "react";
import { FADEIN, ROTATE } from "./animations";

import * as S from "./styles";

export type Animation = "fadeIn" | "rotate";

type AnimateContainerProps = {
  children: ReactNode;
  animation: Animation;
};

export const AnimateContainer = ({
  children,
  animation,
}: AnimateContainerProps) => {
  const changeAnimation = () => {
    const animations = {
      fadeIn: FADEIN,
      rotate: ROTATE,
    };

    return animations[animation] as any;
  };

  return <S.Container animation={changeAnimation()}>{children}</S.Container>;
};
