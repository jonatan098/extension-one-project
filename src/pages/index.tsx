import { FC } from "react";
import ProductCard from "@components/ProductCard";
import Carousel from "@components/Carousel";
import { useRouter } from "next/router";
import { ProductModel } from "@models/ProductModel";
import * as S from "./styled";
import mock from "./mock.json";

interface HomeProps {
  carousel1: ProductModel[];
  carousel2: ProductModel[];
}

const Home: FC<HomeProps> = ({ carousel1, carousel2 }) => {
  const router = useRouter();

  const renderCarousel = (products: ProductModel[], title: string) => {
    return (
      <S.CarrosselWrapper>
        <h2>{title}</h2>
        <Carousel name={title} itemsPerView={3} itemsPerViewAutoMobile>
          {products.map((p) => (
            <div key={p.id} style={{ maxWidth: "300px" }}>
              <ProductCard
                description={p.description}
                imgUrl={p.image}
                price={p.price}
                title={p.title}
                storeName={p?.brand}
                onClick={() => router.push(`/produto/${p.id}`)}
              />
            </div>
          ))}
        </Carousel>
      </S.CarrosselWrapper>
    );
  };

  return (
    <S.HomeWrapper>
      <S.Banner>
        <picture>
          <source media="(min-width: 769px)" srcSet="/homeBanner.png" />
          <source media="(max-width: 768px)" srcSet="/homeBanner.png" />
          <img src="/homeBanner.png" alt="" aria-hidden="true" />
        </picture>
      </S.Banner>

      {renderCarousel(carousel1, "Melhores Produtos")}
      {renderCarousel(carousel2, "Veja Também")}
    </S.HomeWrapper>
  );
};

export const getStaticProps = async () => {
  const products = mock;

  const carousel1 = products.slice(0, 10);
  const carousel2 = products.slice(10, 20);

  return {
    props: {
      carousel1,
      carousel2,
    },
    revalidate: 60 * 15,
  };
};

export default Home;
