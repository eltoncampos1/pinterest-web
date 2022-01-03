import * as S from "./styles";

type FormInputProps = {
  isError?: boolean;
  errorMessage?: string;
  placeholder: string;
  type: string;
};

export const FormInput = ({
  errorMessage,
  isError,
  type,
  placeholder,
}: FormInputProps) => {
  return (
    <S.Container isError={isError}>
      <input type={type} placeholder={placeholder} />
      {isError && <span>{errorMessage}</span>}
    </S.Container>
  );
};
