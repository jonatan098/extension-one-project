import styled from "styled-components";
import * as T from "./types";

export const SpinnerWrapper = styled.div<T.SpinnerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #70c347;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
