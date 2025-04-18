import styled, { css } from "styled-components";
import zIndex from "@utils/zIndex";

export const MenuButtonWrapper = styled.button<{ $isOpen: boolean }>`
  width: 38px;
  height: 28px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  justify-content: space-between;
  cursor: pointer;
  z-index: ${zIndex.low};

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      span:nth-child(1) {
        position: absolute;
        top: 10px;
        transform: rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        position: absolute;
        top: 10px;
        transform: rotate(-45deg);
      }
    `}
`;

export const Items = styled.span`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background: #70c347;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  position: relative;
`;
