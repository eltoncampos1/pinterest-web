import { useDisclosure } from "../../hooks";
import theme from "../../styles/theme";
import { Logo, Button } from "../core";
import { Modal } from "../core/Modal";
import * as S from "./styles";

const links = [
  {
    name: "About",
  },
  {
    name: "Business",
  },
  {
    name: "Blog",
  },
];

export const Header = () => {
  const { toggleSignupModal, toggleLoginModal } = useDisclosure();

  return (
    <S.Container>
      <S.LogoContainer>
        <Logo />
        <S.PinName> Pinterest</S.PinName>
      </S.LogoContainer>

      <S.NavContainer>
        <S.NavLinks>
          {links.map((link) => (
            <S.Link key={link.name} aria-label={`go to page ${link.name}`}>
              {link.name}
            </S.Link>
          ))}
        </S.NavLinks>

        <S.NavButtons>
          <Button
            onClick={toggleLoginModal}
            color={theme.colors.white_primary}
            buttonBg={theme.colors.red_primary}
          >
            Log in
          </Button>
          <Button
            onClick={() => toggleSignupModal()}
            color={theme.colors.black_100}
            buttonBg={theme.colors.gray_100}
          >
            Sign up
          </Button>
        </S.NavButtons>
      </S.NavContainer>
    </S.Container>
  );
};
