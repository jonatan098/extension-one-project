import { CloseIcon } from "@components/Icon/index";
import * as S from "./styled";
import * as T from "./types";

const Modal: React.FC<T.ModalProps> = ({
  children,
  padding,
  maxWidth = "414px",
  onClose,
}) => {
  const renderCloseIcon = () => {
    if (!onClose) {
      return undefined;
    }

    return (
      <S.Closed data-testid="close" type="button" onClick={() => onClose?.()}>
        <CloseIcon color="currentColor" size={14} />
      </S.Closed>
    );
  };

  return (
    <S.ModalWrapper data-testid="Modal">
      <S.Container maxWidth={maxWidth} padding={padding}>
        {renderCloseIcon()}
        <S.ModalContent>{children}</S.ModalContent>
      </S.Container>
      <S.Overlay data-testid="overlay" onClick={() => onClose?.()} />
    </S.ModalWrapper>
  );
};

export default Modal;
