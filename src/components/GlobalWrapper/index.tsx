import { FC } from "react";
import * as S from "./styled";
import { GlobalWrapperProps } from "./types";

const GlobalWrapper: FC<GlobalWrapperProps> = ({ children }) => {
  return <S.GlobalWrapper>{children}</S.GlobalWrapper>;
};

export default GlobalWrapper;
