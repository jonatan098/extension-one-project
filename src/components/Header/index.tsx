import { useState } from "react";
import { useRouter } from "next/router";
import MenuButton from "@components/MenuButton";
import { ArrowRightIcon } from "@components/Icon/index";
import * as S from "./styled";

const menuLinksItems = [
  {
    link: "/",
    label: "Início",
  },
  {
    link: "/",
    label: "Busca",
  },
  {
    link: "/",
    label: "Meus-produtos",
  },
  {
    link: "/",
    label: "Carrinho",
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();

  const renderMenuModal = () => {
    if (!openMenu) return;

    return (
      <S.MenuWrapper>
        <S.MenuList>
          {menuLinksItems.map((i) => (
            <S.MenuItem
              key={i.label}
              onClick={() => {
                router.push(i.link);
                setOpenMenu(false);
              }}
            >
              <p>{i.label}</p>
              <ArrowRightIcon size={25} color="#70C347" />
            </S.MenuItem>
          ))}
        </S.MenuList>
      </S.MenuWrapper>
    );
  };

  return (
    <S.HeaderWrapper>
      <p>ReVende</p>
      <MenuButton
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
        isOpen={openMenu}
      />
      {renderMenuModal()}
    </S.HeaderWrapper>
  );
};

export default Header;
