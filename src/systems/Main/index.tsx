import * as S from "./styles";

export const Main = () => {
  return (
    <S.Main>
      <S.HeadingContainer>
        <S.StaticHeading>Get your next</S.StaticHeading>
        <S.DynamicHeading>Get your next</S.DynamicHeading>

        <ul>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
        </ul>
      </S.HeadingContainer>

      <S.GridContainer>
        <S.Grid>
          <S.Column>
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
          </S.Column>
          <S.Column>
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
          </S.Column>
          <S.Column>
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
          </S.Column>
          <S.Column>
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
          </S.Column>
          <S.Column>
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
          </S.Column>
          <S.Column>
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
          </S.Column>
          <S.Column>
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
            <S.Item />
          </S.Column>
        </S.Grid>
      </S.GridContainer>
    </S.Main>
  );
};
