import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 65px;
  position: relative;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 2px 3px #00000029;

  p {
    font-size: 1.8rem;
    font-weight: bold;
    color: #f5a623;
  }
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 60px;
  background: #fff;

  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
    left: unset;
    right: 0;
  }
`;

export const MenuList = styled.div``;

export const MenuItem = styled.div`
  height: 45px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #70c347;
  cursor: pointer;

  p {
    font-size: 1.4rem;
  }
`;
