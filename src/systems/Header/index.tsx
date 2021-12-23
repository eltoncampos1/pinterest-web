import theme from "../../styles/theme";
import { Logo, Button } from "../core";
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
  return (
    <S.Container>
      <S.LogoContainer>
        <Logo />
        <S.PinName> Pinterest</S.PinName>
      </S.LogoContainer>

      <S.NavContainer>
        <S.NavLinks>
          {links.map((link) => (
            <S.Link aria-label={`go to page ${link.name}`}>{link.name}</S.Link>
          ))}
        </S.NavLinks>

        <S.NavButtons>
          <Button
            color={theme.colors.white_primary}
            buttonBg={theme.colors.red_primary}
          >
            Log in
          </Button>
          <Button
            color={theme.colors.black_primary}
            buttonBg={theme.colors.gray_primary}
          >
            Sign up
          </Button>
        </S.NavButtons>
      </S.NavContainer>
    </S.Container>
  );
};
