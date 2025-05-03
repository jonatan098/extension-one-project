import styled, { css } from "styled-components";

export const ProgressBarContainer = styled.div<{ isVertical: boolean }>`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  ${({ isVertical }) =>
    isVertical &&
    css`
      height: 100%;
      width: fit-content;
      flex-direction: column;
      align-items: flex-start;
    `}
`;

export const StepContainer = styled.div<{ isVertical: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  ${({ isVertical }) =>
    isVertical &&
    css`
      flex-direction: row;
    `}
`;

export const Circle = styled.div<{
  completed: boolean;
}>`
  width: 18px;
  height: 18px;
  display: block;
  background: transparent;
  color: #b9b9b9;

  ${({ completed }) => completed && `color: #70C347;`};
`;

export const Title = styled.p<{
  isVertical: boolean;
  completed: boolean;
}>`
  width: 66px;
  height: 30px;
  margin: 0;
  margin-top: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: #b9b9b9;

  ${({ completed }) => completed && `color: #F5A623`};

  ${({ isVertical }) =>
    isVertical &&
    `max-width: 127px;
    width: fit-content;
    height: auto;
    text-align: left;
    margin-top: 0;
    margin-left: 12px;`}
`;

export const ProgressLine = styled.div<{
  completionPercentage: number;
  isVertical: boolean;
}>`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 66px);
  background: #b9b9b9;

  ${({ isVertical }) =>
    isVertical &&
    css`
      top: 50%;
      left: 7%;
      height: calc(100% - 18px);
      width: fit-content;
    `}

  div {
    height: 3px;
    width: ${({ completionPercentage }) => completionPercentage}%;
    background: #70c347;

    ${({ isVertical, completionPercentage }) =>
      isVertical &&
      css`
        height: ${completionPercentage}%;
        width: 3px;
      `}
  }
`;
