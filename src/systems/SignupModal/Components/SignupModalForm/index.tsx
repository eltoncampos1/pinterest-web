import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import theme from "../../../../styles/theme";
import { FormInput, Button } from "../../../core";
import * as S from "./styles";

const inputs = [
  {
    type: "text",
    placeholder: "Email",
    errorMessage: "Hmm...that doesn't look like an email address",
  },
  {
    type: "password",
    placeholder: "Create a password",
  },
  {
    type: "number",
    placeholder: "Age",
    errorMessage: "Ops...looks like you're not old enough yet",
  },
];

export const SignupModalForm = () => {
  return (
    <S.Form>
      {inputs.map((input) => (
        <FormInput
          placeholder={input.placeholder}
          type={input.type}
          errorMessage={input.errorMessage}
        />
      ))}

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
  );
};
