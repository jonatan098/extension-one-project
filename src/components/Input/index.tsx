import { FC, useState } from "react";
import * as S from "./styled";
import * as T from "./types";
import { VisibilityOffIcon, VisibilityOnIcon } from "@components/Icon/index";

const Input: FC<T.Input> = ({
  innerRef,
  id,
  label,
  mask,
  width = "100%",
  inputMode = "text",
  onChange,
  value = "",
  margin = "0",
  error = "",
  onBlur,
  onFocus,
  disabled = false,
  autoComplete,
  type,
  leftIcon,
  rightIcon,
  onKeyDown,
}) => {
  const [currentValue, setCurrentValue] = useState<string | undefined>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const clearValueByInputMode = (value: string) => {
    switch (inputMode) {
      case "numeric":
      case "tel":
        return value.replaceAll(/\D/g, "");

      case "alphabet":
        return value.replaceAll(/[^a-zA-Z ]/g, "");

      case "text":
      default:
        return value;
    }
  };

  const applyMaskToValue = (value: string) => {
    let i = 0;
    // eslint-disable-next-line no-plusplus
    const maskedValue = mask?.replace(/#/g, () => value[i++] || "#");

    return maskedValue?.split("#")[0];
  };

  const onInputValueChange = (value: string) => {
    let changedValue: string | undefined = clearValueByInputMode(value);

    if (mask) {
      changedValue = applyMaskToValue(changedValue);
    }

    /* c8 ignore next 3 */
    if (value.length <= (currentValue?.length ?? 0)) {
      changedValue = value;
    }

    setCurrentValue(changedValue);
    onChange?.(changedValue);
  };

  const showPasswordBTN = () => {
    if (inputMode !== "password" || disabled) return null;

    const Icon = showPassword ? VisibilityOffIcon : VisibilityOnIcon;

    return (
      <S.ShowPasswordButton
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        <Icon size={18} color="#282828" />
      </S.ShowPasswordButton>
    );
  };

  const checkType = () => {
    if (inputMode === "password") {
      return !showPassword ? "password" : "text";
    }

    return type ?? inputMode;
  };

  return (
    <S.InputWrapper ref={innerRef} id={id} $margin={margin} data-testid="input">
      <S.InputContainer>
        <S.LeftIcon>{leftIcon}</S.LeftIcon>
        <S.Input
          /* c8 ignore next 6 */
          $isNotEmpty={value !== ""}
          onChange={(e) => onInputValueChange(e.currentTarget.value)}
          value={value}
          $width={width}
          $hasError={!!error}
          type={checkType()}
          onBlur={/* c8 ignore next */ () => onBlur?.()}
          onFocus={/* c8 ignore next */ () => onFocus?.()}
          disabled={disabled}
          $hasIcon={inputMode === "password"}
          $leftIcon={!!leftIcon}
          $rightIcon={!!rightIcon}
          autoComplete={autoComplete ?? "one-time-code"}
          onKeyDown={onKeyDown}
        />
        <S.RightIcon>{rightIcon}</S.RightIcon>
        <S.Label $isNotEmpty={value !== ""}>{label}</S.Label>
        {showPasswordBTN()}
      </S.InputContainer>
      <S.ErrorMessage>{error}</S.ErrorMessage>
    </S.InputWrapper>
  );
};

export default Input;
