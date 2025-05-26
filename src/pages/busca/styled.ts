import styled, { css } from "styled-components";

export const SearchWrapper = styled.div`
  max-width: 1026px;
  margin: 0 auto;
  padding: 30px 15px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #202020;
`;

export const InputsWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StateWrapper = styled.div``;

export const StateCardWrapper = styled.div<{
  $isOpen: boolean;
  $isSelected: boolean;
}>`
  padding: 0 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #696969;
  cursor: pointer;

  :first-letter {
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: #696969;
  }

  svg {
    transition: transform 0.3s ease-in-out;
    ${({ $isOpen }) =>
      $isOpen ? "transform: rotate(90deg)" : "transform: rotate(270deg)"};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border: 1px solid #f5a623;

      p {
        color: #f5a623;
      }
    `}
`;

export const StateDropdownContent = styled.div<{ showContent: boolean }>`
  max-height: ${({ showContent }) => (showContent ? "1000px" : "0")};
  width: 100%;
  border-radius: 0 0 4px 4px;
  opacity: ${({ showContent }) => (showContent ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.3s ease 0.1s;
  box-shadow: 0px 3px 6px #00000029;
  background: #fff;

  :last-child {
    border: none;
  }
`;

export const Label = styled.div`
  padding-left: 10px;
  height: 40px;
  align-content: center;
  border-bottom: 1px solid #70c347;
  color: #f5a623;
  cursor: pointer;
`;

export const ProductsList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 10px;
  row-gap: 16px;
`;
