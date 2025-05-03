import { FC } from "react";
import * as S from "./styled";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  label,
  color,
  onClick,
  width,
  height,
  outline,
  margin,
  disabled,
  borderRadius,
  fontSize,
  type = "button",
}) => {
  return (
    <S.Button
      data-testid="Button"
      type={type}
      $color={color ?? "#70C347"}
      $width={width}
      $height={height}
      $outline={outline}
      $disabled={disabled}
      $borderRadius={borderRadius}
      $fontSize={fontSize}
      onClick={() => !disabled && onClick && onClick()}
      $margin={margin}
    >
      {label}
    </S.Button>
  );
};

export default Button;
