import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9995;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  top: 0;
  left: 0;
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9996;
  background: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div<{ maxWidth: string; padding?: string }>`
  width: 100vw;
  height: auto;
  background: #fff;
  border-radius: 8px 8px 0 0;
  padding: ${({ padding }) => padding ?? "25px 13px 13px 13px"};
  z-index: 9997;
  position: relative;
  @media (min-width: 768px) {
    max-width: ${({ maxWidth }) => maxWidth};
    border-radius: 8px;
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

export const Closed = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  box-shadow: 0;
  background: #f0f0f0;
  color: #999999;
  cursor: pointer;
`;
