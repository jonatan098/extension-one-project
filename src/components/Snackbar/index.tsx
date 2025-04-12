import { ErrorIcon, SuccessIcon, CloseIcon } from "@components/Icon";
import * as S from "./styled";
import * as T from "./types";

const Snackbar = ({
  message,
  type,
  onClick,
  ShowIcon = true,
}: T.SnackbarProps & T.SnackbarComponentProps) => {
  const renderIcon = () => {
    if (type === "error") {
      return (
        <div data-testid="error-icon">
          <ErrorIcon color="#fff" size={24} />
        </div>
      );
    }
    return (
      <div data-testid="success-icon">
        <SuccessIcon color="#fff" size={24} />
      </div>
    );
  };
  return (
    <S.SnackbarContainer data-testid="Snackbar" onClick={() => onClick()}>
      {ShowIcon && <S.Icon>{renderIcon()}</S.Icon>}
      <S.Message>{message}</S.Message>
      <S.Close>
        <CloseIcon color="#fff" size={10} />
      </S.Close>
    </S.SnackbarContainer>
  );
};

export default Snackbar;
