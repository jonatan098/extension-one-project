import { FC } from "react";
import { TrashCanIcon, DisclaimerIcon } from "@components/Icon/index";
import * as S from "./styled";
import * as T from "./types";

const ProductCard: FC<T.ProductCardProps> = ({
  imgUrl,
  title,
  storeName,
  price,
  description,
  onClick,
  editMode = false,
  onDelete,
  onEdit,
}) => {
  const renderButton = () => {
    if (!editMode) {
      return <S.button onClick={onClick}>Comprar</S.button>;
    }

    return (
      <S.Buttons>
        <S.Button
          onClick={(e) => {
            onEdit?.();
            e.stopPropagation();
          }}
        >
          <DisclaimerIcon size={18} color="#70C347" />
        </S.Button>
        <S.Button
          onClick={(e) => {
            onDelete?.();
            e.stopPropagation();
          }}
        >
          <TrashCanIcon size={14} color="red" />
        </S.Button>
      </S.Buttons>
    );
  };

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

        {renderButton()}
      </S.Wrapper>
    </S.CardWrapper>
  );
};

export default ProductCard;
