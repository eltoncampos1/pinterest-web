/* eslint-disable react/no-unescaped-entities */

import { Modal } from "../core";
import {
  SignupModalHeader,
  SignupModalForm,
  SignupModalFooter,
} from "./Components";
import * as S from "./styles";

type SignupModalProps = {
  isSignupModalOpen: boolean;
  onSignupModalClose: () => void;
};

export const SignupModal = ({
  isSignupModalOpen,
  onSignupModalClose,
}: SignupModalProps) => {
  return (
    <Modal
      onOverlayClick={onSignupModalClose}
      isOpen={isSignupModalOpen}
      onClose={onSignupModalClose}
      size="sm"
      aria-label="Signup Modal Open"
    >
      <S.Container>
        <SignupModalHeader />
        <S.Main>
          <SignupModalForm />

          <SignupModalFooter />
        </S.Main>
        <S.CreateBussinesAccountLink
          target="_blank"
          rel="noreferrer"
          href="https://br.pinterest.com/business/create/"
        >
          Create a free business account
        </S.CreateBussinesAccountLink>
      </S.Container>
    </Modal>
  );
};
