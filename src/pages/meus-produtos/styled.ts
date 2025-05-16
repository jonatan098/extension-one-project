import styled from "styled-components";
import { CardWrapper } from "@components/ProductCard/styled";

export const MyProductsWrapper = styled.div`
  max-width: 1032px;
  margin: 40px auto;
  padding: 0 15px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #202020;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 10px;
  row-gap: 16px;

  ${CardWrapper} {
    cursor: pointer;
  }
`;

export const AddCardWrapper = styled.div`
  width: 100%;
  height: 359px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #d1d1d166;
  box-shadow: 0px 2px 3px #0000001f;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 6px #00000033;
  }
`;

export const ButtonsWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const DeleteModalWrapper = styled.div`
  h1 {
    font-size: 4rem;
    text-align: center;
  }

  p {
    margin: 30px 0;
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const EditModalWrapper = styled.div`
  h1 {
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const AddModalWrapper = styled.div``;

export const TextAreaWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background: #f2f2f2;
`;

export const TextAreaContainer = styled.div`
  position: relative;
  border: 1px solid #2e3238;

  padding: 15px 1rem;
  border-radius: 4px;

  &:focus-within label {
    top: 5px;
    font-size: 1.2rem;
    transform: translateY(-12px) scale(0.9);
    width: auto;
  }

  textarea:not(:placeholder-shown) + label {
    top: 5px;
    width: auto;
    font-size: 1.2rem;
    transform: translateY(-12px) scale(0.9);
  }
`;

export const Label = styled.label`
  width: 80%;
  position: absolute;
  font-size: 1.6rem;
  left: 0;
  top: 28px;
  transform: translateY(-50%);
  background-color: #f2f2f2;
  color: #000000b3;
  padding: 0 4px;
  margin-left: 8px;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  resize: none;
  padding: 0 8px;
  border: none;
  background: transparent;
  font-size: 1.6rem;
  font-family: inherit;
  color: #000000b3;

  &:focus-within {
    outline: none;
    border-color: transparent;
  }

  :focus + label {
    width: auto;
    top: 0;
    font-size: 1.2rem;
    transform: translateY(-12px) scale(0.9);
  }

  :not(:placeholder-shown) + label {
    top: 0;
    width: auto;
    transform: translateY(-12px) scale(0.9);
  }

  @media (min-width: 769px) {
    & {
      scrollbar-width: thin;
      scrollbar-color: #b9b9b9 #ddd;
    }
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ddd;
      border-radius: 20px;
      border: 7px solid #b9b9b9;
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  padding: 0;
  margin: 3px 0 0 0;
  color: #ff0000;

  ::first-letter {
    text-transform: uppercase;
  }
`;
