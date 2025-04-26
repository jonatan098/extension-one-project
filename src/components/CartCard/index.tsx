import { FC } from "react";
import { DeleteIcon } from "@components/Icon/index";
import * as S from "./styled";
import * as T from "./types";

const CartCard: FC<T.CartCardProps> = ({
  image,
  title,
  description,
  subtotal,
  onDelete,
}) => {
  return (
    <S.CartCardWrapper>
      <S.Top>
        <S.ImageWrapper>
          <S.Image>
            <img src={image} alt={title} />
          </S.Image>
        </S.ImageWrapper>
        <S.InformationWrapper>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Actions>
            <S.DeleteButton onClick={onDelete}>
              <DeleteIcon color="#00000080" size={15} />
            </S.DeleteButton>
          </S.Actions>
        </S.InformationWrapper>
      </S.Top>
      <S.Bottom>
        <p>
          <span>Subtotal</span> R$ {subtotal}
        </p>
      </S.Bottom>
    </S.CartCardWrapper>
  );
};

export default CartCard;
