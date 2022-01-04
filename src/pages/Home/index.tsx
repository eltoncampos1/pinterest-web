import { Main } from "../../systems/Main";
import { useDisclosure } from "../../hooks";
import { LoginModal } from "../../systems/LoginModal";
import { SignupModal } from "../../systems/SignupModal";

import { Header } from "../../systems/Header";
import * as S from "./styles";

export const Home = () => {
  const {
    isSignupModalOpen,
    toggleSignupModal,
    isLoginModalOpen,
    toggleLoginModal,
  } = useDisclosure();

  return (
    <S.Container>
      <Header />
      <Main />
      <SignupModal
        isSignupModalOpen={isSignupModalOpen}
        onSignupModalClose={toggleSignupModal}
      />

      <LoginModal
        isLoginModalOpen={isLoginModalOpen}
        onLoginModalClose={toggleLoginModal}
      />
    </S.Container>
  );
};
