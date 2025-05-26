import { FC, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Carousel from "@components/Carousel";
import ProductCard from "@components/ProductCard";
import { ProductModel } from "@models/ProductModel";
import * as S from "./styled";
import mock from "../mock.json";
import Button from "@components/Button";
import Modal from "@components/Modal";

interface ProductProps {
  product: ProductModel;
  products: ProductModel[];
}

const Product: FC<ProductProps> = ({ product, products }) => {
  const pageRouter = useRouter();

  const [showModal, setShowModal] = useState(false);

  const onBuy = () => {
    const existingCart = sessionStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];

    const isAlreadyInCart = cart.some(
      (item: ProductModel) => item.id === product.id
    );
    if (!isAlreadyInCart) {
      cart.push(product);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }

    setShowModal(true);
  };

  const renderCarousel = (products: ProductModel[]) => {
    return (
      <S.CarrosselWrapper>
        <h2>Produtos especiais para você</h2>
        <Carousel
          name="Produtos especiais para você"
          itemsPerView={3}
          itemsPerViewAutoMobile
        >
          {products.map((p) => (
            <div key={p.id} style={{ maxWidth: "300px" }}>
              <ProductCard
                description={p.description}
                imgUrl={p.image}
                price={p.price}
                title={p.title}
                storeName={p?.brand}
                onClick={() => pageRouter.push(`/produto/${p.id}`)}
              />
            </div>
          ))}
        </Carousel>
      </S.CarrosselWrapper>
    );
  };

  const renderMobileView = () => {
    return (
      <S.Content>
        <S.ImageWrapper>
          <S.Title>{product.title}</S.Title>
          <img src={product.image} alt={`foto-${product.title}`} />
        </S.ImageWrapper>

        <S.Price>R$ {product.price.toFixed(2)}</S.Price>

        <S.MoreDetailsWrapper>
          <h2>{product.title}</h2>

          <p>{product.description}</p>
        </S.MoreDetailsWrapper>

        <Button label="Comprar" margin="30px 0 0" onClick={onBuy} />
      </S.Content>
    );
  };

  const renderDesktopView = () => {
    return (
      <S.DesktopProductWrapper>
        <S.FirstSection>
          <S.ImageWrapper>
            <img src={product.image} alt={`foto-${product.title}`} />
          </S.ImageWrapper>

          <S.InnerWrapper>
            <S.MoreDetailsWrapper>
              <h2>{product.title}</h2>

              <p>{product.description}</p>
            </S.MoreDetailsWrapper>
          </S.InnerWrapper>
        </S.FirstSection>

        <S.SecondSection>
          <S.Title>{product.title}</S.Title>
          <S.Price>R$ {product.price.toFixed(2)}</S.Price>
          <Button label="Comprar" margin="30px 0 0" onClick={onBuy} />
        </S.SecondSection>
      </S.DesktopProductWrapper>
    );
  };

  const renderModal = () => {
    if (!showModal) return;

    return (
      <Modal onClose={() => setShowModal(false)}>
        <S.ModalWrapper>
          <h1>Produto adicionado ao carrinho</h1>

          <Button
            label="continuar comprando"
            margin="0 0 10px 0"
            width="300px"
            onClick={() => pageRouter.push("/")}
          />
          <Button
            label="finalizar pedido"
            outline
            width="300px"
            onClick={() => pageRouter.push("/carrinho")}
          />
        </S.ModalWrapper>
      </Modal>
    );
  };

  return (
    <S.ProductPageWrapper>
      <S.ResponsiveView $display={768} $limit="max">
        {renderMobileView()}
      </S.ResponsiveView>

      <S.ResponsiveView $display={769} $limit="min">
        {renderDesktopView()}
      </S.ResponsiveView>

      {renderCarousel(products)}
      {renderModal()}
    </S.ProductPageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { productId } = query;
  const products = mock;

  const product = products.find((p) => p.id === Number(productId));

  return {
    props: {
      product,
      products,
    },
  };
};

export default Product;
