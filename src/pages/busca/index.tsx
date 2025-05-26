import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductCard from "@components/ProductCard";
import Input from "@components/Input";
import { ProductModel } from "@models/ProductModel";
import * as S from "./styled";
import mock from "../mock.json";
import { ArrowLeftIcon } from "@components/Icon";

const STATE_LIST: { value: string; label: string }[] = [
  {
    value: "novo",
    label: "Novo",
  },
  {
    value: "seminovo",
    label: "Seminovo",
  },
  {
    value: "usado",
    label: "Usado",
  },
  {
    value: "",
    label: "Remover",
  },
];
interface SearchProps {
  products: ProductModel[];
}

const Search: FC<SearchProps> = ({ products }) => {
  const pageRouter = useRouter();

  const [productsList, setProductsList] = useState(products);
  const [query, setQuery] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    filterProducts();
  }, [query, min, max, selectedState, products]);

  const filterProducts = () => {
    let filtered = products;

    // Filter by search query (title or description)
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      filtered = filtered.filter((p) => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      });
    }

    // Filter by minimum price
    if (min.trim()) {
      const minPrice = parseFloat(min);
      if (!isNaN(minPrice)) {
        filtered = filtered.filter((p) => p.price >= minPrice);
      }
    }

    // Filter by maximum price
    if (max.trim()) {
      const maxPrice = parseFloat(max);
      if (!isNaN(maxPrice)) {
        filtered = filtered.filter((p) => p.price <= maxPrice);
      }
    }

    // Filter by condition/state
    if (selectedState) {
      filtered = filtered.filter((p) => p.condition === selectedState);
    }

    setProductsList(filtered);
  };

  const renderStateCard = () => {
    return (
      <S.StateWrapper>
        <S.StateCardWrapper
          $isOpen={showDropdown}
          $isSelected={selectedState !== ""}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <p>{selectedState !== "" ? selectedState : "Estado"}</p>
          <ArrowLeftIcon size={35} color="#70C347" />
        </S.StateCardWrapper>
        <S.StateDropdownContent showContent={showDropdown}>
          {STATE_LIST.map((l) => (
            <S.Label
              key={l.label}
              onClick={() => {
                setSelectedState(l.value);
                setShowDropdown(false);
              }}
            >
              {l.label}
            </S.Label>
          ))}
        </S.StateDropdownContent>
      </S.StateWrapper>
    );
  };

  return (
    <S.SearchWrapper>
      <S.Title>Busca</S.Title>
      <S.InputsWrapper>
        <Input
          label="Buscar produtos"
          value={query}
          onChange={(value) => {
            setQuery(value ?? "");
          }}
        />
        <Input
          label="Valor mínimo"
          inputMode="numeric"
          value={min}
          onChange={(value) => {
            setMin(value ?? "");
          }}
        />
        <Input
          label="Valor máximo"
          inputMode="numeric"
          value={max}
          onChange={(value) => {
            setMax(value ?? "");
          }}
        />
      </S.InputsWrapper>

      {renderStateCard()}

      <S.ProductsList>
        {productsList.map((p) => (
          <ProductCard
            key={p.id}
            description={p.description}
            imgUrl={p.image}
            price={p.price}
            title={p.title}
            storeName={p?.brand}
            onClick={() => pageRouter.push(`/produto/${p.id}`)}
          />
        ))}
      </S.ProductsList>
    </S.SearchWrapper>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      products: mock,
    },
    revalidate: 60 * 15,
  };
};

export default Search;
