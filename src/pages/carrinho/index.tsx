import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CartCard from "@components/CartCard";
import Button from "@components/Button";
import { ProductModel } from "@models/ProductModel";
import * as S from "./styled";

interface CartProps {
  products: ProductModel[];
  totalPrice: number;
}

const Cart = () => {
  const router = useRouter();

  const [products, setProducts] = useState<ProductModel[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const onDelete = (productId: number) => {
    const existingCart = sessionStorage.getItem("cart");
    if (!existingCart) return;

    const cart = JSON.parse(existingCart);

    const updatedCart = cart.filter(
      (item: { id: number }) => item.id !== productId
    );

    sessionStorage.setItem("cart", JSON.stringify(updatedCart));

    router.reload();
  };

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
            onDelete={() => onDelete(p.id)}
          />
        ))}
      </S.CartCardList>
    );
  };

  useEffect(() => {
    const products = sessionStorage.getItem("cart");
    if (products) {
      const totalPrice = JSON.parse(products).reduce(
        (sum: number, item: ProductModel) => sum + item.price,
        0
      );

      setProducts(JSON.parse(products));
      setTotalPrice(totalPrice);
    }
  }, []);

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

export default Cart;
