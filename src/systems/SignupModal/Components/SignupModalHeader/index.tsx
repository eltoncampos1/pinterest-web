import { Logo } from "../../../core";
import * as S from "./styles";

export const SignupModalHeader = () => {
  return (
    <S.Header>
      <Logo />
      <S.Title>Welcome to Pinterest</S.Title>
      <S.SubTitle>Find new ideas to try</S.SubTitle>
    </S.Header>
  );
};
