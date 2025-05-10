import { FC } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Carousel from "@components/Carousel";
import ProductCard from "@components/ProductCard";
import { ProductModel } from "@models/ProductModel";
import * as S from "./styled";
import mock from "../mock.json";
import Button from "@components/Button";

// TODO: colocar os produtos no carrinho (usar session store)

interface ProductProps {
  product: ProductModel;
  products: ProductModel[];
}

const Product: FC<ProductProps> = ({ product, products }) => {
  const pageRouter = useRouter();

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

        <Button label="Comprar" margin="30px 0 0" />
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
          <Button label="Comprar" margin="30px 0 0" />
        </S.SecondSection>
      </S.DesktopProductWrapper>
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
