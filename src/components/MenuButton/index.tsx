/* c8 ignore start */
import * as S from "./styled";
import * as T from "./types";

const MenuButton: React.FC<T.MenuButtonProps> = ({ onClick, isOpen }) => {
  return (
    <S.MenuButtonWrapper onClick={() => onClick()} $isOpen={isOpen}>
      <S.Items />
      <S.Items />
      <S.Items />
    </S.MenuButtonWrapper>
  );
};

export default MenuButton;
