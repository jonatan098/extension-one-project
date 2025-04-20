import { FC } from "react";
import * as S from "./styled";
import * as T from "./types";

const ProductCard: FC<T.ProductCardProps> = ({
  imgUrl,
  title,
  storeName,
  price,
  description,
  onClick,
}) => {
  return (
    <S.CardWrapper>
      <S.ImageWrapper>
        <img src={imgUrl} alt={`foto-${title}`} width="100%" height="100%" />
        {storeName && <S.StoreName>{storeName}</S.StoreName>}
      </S.ImageWrapper>

      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.description>{description}</S.description>
        <S.Price>R$ {price}</S.Price>

        <S.button onClick={onClick}>Comprar</S.button>
      </S.Wrapper>
    </S.CardWrapper>
  );
};

export default ProductCard;
