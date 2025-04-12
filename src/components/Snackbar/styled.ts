import styled from "styled-components";

export const SnackbarContainer = styled.div`
  width: 90vw;
  height: 50px;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  display: flex;
  align-items: center;
  padding: 0 20px 0 15px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: auto;
    top: 90px;
  }
`;

export const Message = styled.span`
  font-size: 14px;
  color: #fff;
  padding: 0;
  margin: 0;
  top: 1px;
  font-weight: 700;
  position: relative;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const Icon = styled.div`
  margin-right: 7px;

  div {
    width: 24px;
    height: 24px;
  }
`;

export const Close = styled.button`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0;
  position: absolute;
  right: 7px;
  top: 7px;
  padding: 0;
  cursor: pointer;
`;
