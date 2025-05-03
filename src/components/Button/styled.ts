import styled from "styled-components";

const getBackgroundColor = (
  color: string,
  disabled: boolean,
  outline?: boolean
) => {
  if (outline) {
    return "transparent";
  }

  if (disabled) {
    return "#ccc";
  }

  return color;
};

const getFontColor = (color: string, disabled: boolean, outline?: boolean) => {
  if (outline && disabled) {
    return "#a3a3a3";
  }

  if (disabled && !outline) {
    return "#505050";
  }

  if (outline) {
    return color;
  }

  return "#fff";
};

export const Button = styled.button<{
  $width?: string;
  $height?: string;
  $outline?: boolean;
  $color: string;
  $margin?: string;
  $disabled?: boolean;
  $borderRadius?: string;
  $fontSize?: string;
}>`
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "45px"};
  border: 1px solid ${({ $color, $disabled }) => ($disabled ? "#ccc" : $color)};
  box-shadow: 0px 3px 6px #00000029;
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "18px"};
  background: ${({ $color, $disabled, $outline }) =>
    getBackgroundColor($color, !!$disabled, $outline)};

  cursor: pointer;
  color: ${({ $outline, $color, $disabled }) =>
    getFontColor($color, !!$disabled, $outline)};
  font-size: ${({ $fontSize }) => $fontSize ?? "1.6rem"};
  font-weight: 700;
  text-align: center;
  margin: ${({ $margin }) => $margin ?? "0"};
`;
