import styled from "styled-components";
import { InputProps } from "./types";

export const InputWrapper = styled.div<{ $margin: string }>`
  position: relative;
  margin: ${({ $margin }) => $margin};
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Label = styled.label<InputProps>`
  width: fit-content;
  position: absolute;
  font-size: 1.6rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #f2f2f2;
  color: #505050;
  margin: 0 11px;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
  padding: 0 0.25rem;
  ${({ $isNotEmpty }) =>
    $isNotEmpty && "transform: translateY(-36px); font-size: 1.4rem;"}
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 56px;
  font-size: 1.6rem;
  outline: none;
  border-radius: 5px;
  padding-left: ${({ $leftIcon }) => ($leftIcon ? "32px" : "11px")};
  padding-right: ${({ $rightIcon }) => ($rightIcon ? "40px" : "11px")};
  padding-top: 16px;
  padding-bottom: 16px;
  ${({ $hasIcon }) => ($hasIcon ? "padding-right: 40px;" : null)}
  color: #000000B3;
  transition: 0.1s ease-out;
  width: ${({ $width }) => /* c8 ignore next */ $width ?? "auto"};
  background: #f2f2f2;
  border: 1px solid ${({ $hasError }) => ($hasError ? "#D2373C" : "#2E3238")};
  position: relative;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  }

  :disabled {
    background: transparent;
    color: #cecece;
    border: 1px solid #cecece;
    + label {
      color: #cecece;
    }
  }

  &:focus + ${Label} {
    transform: ${({ $isNotEmpty }) =>
      !$isNotEmpty && "translateY(-36px); font-size: 1.4rem;"};
  }

  &:focus ~ ${Label} {
    transform: translateY(-36px);
    font-size: 1.4rem;
  }
`;

export const LeftIcon = styled.div`
  height: auto;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: inline-block;

  svg {
    width: auto;
    height: auto;
    display: block;
  }

  &:empty {
    display: none;
  }
`;
export const RightIcon = styled.div`
  height: auto;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: inline-block;

  svg {
    width: auto;
    height: auto;
    display: block;
  }

  &:empty {
    display: none;
  }
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  right: 12px;
  top: 17px;

  border: 0;
  background: transparent;
  cursor: pointer;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 15px;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  padding: 0;
  margin: 3px 0 0 0;
  color: #d2373c;

  ::first-letter {
    text-transform: uppercase;
  }

  &:empty {
    display: none;
  }
`;
