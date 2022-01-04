/* eslint-disable react/no-unescaped-entities */
import * as S from "./styles";

export const SignupModalFooter = () => {
  return (
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
  );
};
