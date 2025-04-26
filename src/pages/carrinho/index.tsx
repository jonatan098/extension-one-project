import { FC } from "react";
import { useRouter } from "next/router";
import CartCard from "@components/CartCard";
import Button from "@components/Button";
import { ProductModel } from "@models/ProductModel";
import * as S from "./styled";
import mock from "../mock.json";

interface CartProps {
  products: ProductModel[];
  totalPrice: number;
}

const Cart: FC<CartProps> = ({ products, totalPrice }) => {
  const router = useRouter();

  const renderCartCard = () => {
    return (
      <S.CartCardList>
        {products.map((p) => (
          <CartCard
            key={p.id}
            image={p.image}
            title={p.title}
            description={p.description}
            subtotal={p.price}
            onDelete={() => {}}
          />
        ))}
      </S.CartCardList>
    );
  };

  return (
    <S.CartWrapper>
      <S.Title>Meu carrinho</S.Title>
      <S.Content>
        {renderCartCard()}

        <div>
          <S.ResumeCard>
            <p>Resumo do pedido</p>
            <S.ResumeCardTextWrapper>
              <p>{products.length} produto(s)</p>
              <p>R$ {totalPrice.toFixed(2)}</p>
            </S.ResumeCardTextWrapper>
          </S.ResumeCard>

          <S.ButtonsWrapper>
            <Button
              label="Fechar pedido"
              onClick={() => router.push("/checkout")}
            />
            <Button
              label="Adicionar mais produtos"
              outline
              margin="10px 0 0"
              onClick={() => router.push("/")}
            />
          </S.ButtonsWrapper>
        </div>
      </S.Content>
    </S.CartWrapper>
  );
};

export const getStaticProps = async () => {
  const products = mock.slice(0, 2);

  const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

  return {
    props: {
      products,
      totalPrice,
    },
    revalidate: 60 * 15,
  };
};

export default Cart;
