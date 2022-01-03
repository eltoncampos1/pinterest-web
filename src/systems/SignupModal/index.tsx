/* eslint-disable react/no-unescaped-entities */
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import theme from "../../styles/theme";
import { Button, FormInput, Logo, Modal } from "../core";
import { SignupModalHeader } from "./Components";
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
          <S.Form>
            <FormInput
              placeholder="Email"
              type="text"
              errorMessage="Hmm...that doesn't look like an email address"
            />
            <FormInput placeholder="Create a password" type="password" />

            <FormInput placeholder="Age" type="number" />
            <Button
              buttonBg={theme.colors.red_primary}
              color="white"
              onClick={() => console.log("clicou")}
            >
              Continue
            </Button>

            <span>or</span>
            <S.SocialLogin>
              <Button
                buttonBg={theme.colors.blue_facebook}
                color="white"
                onClick={() => console.log("clicou")}
              >
                <FaFacebook />
                Continue with facebook
              </Button>
              <Button
                buttonBg={theme.colors.white_primary}
                color={theme.colors.gray_300}
                onClick={() => console.log("clicou")}
              >
                <FcGoogle />
                Continue with Google
              </Button>
            </S.SocialLogin>
          </S.Form>

          <S.Footer>
            <span>By continuing, you agree to Pinterest's </span>
            <span>
              <strong>Terms of Service </strong> and acknowledge you've read our
            </span>

            <S.PrivacyPolicy
              href="https://policy.pinterest.com/en/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </S.PrivacyPolicy>

            <S.LoginLink
              target="_blank"
              rel="noreferrer"
              href="https://br.pinterest.com/business/create/"
            >
              Already a member? Log in
            </S.LoginLink>
            <S.BussinesLink
              target="_blank"
              rel="noreferrer"
              href="https://br.pinterest.com/business/create/"
            >
              Are you a business? Get started here!
            </S.BussinesLink>
          </S.Footer>
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
