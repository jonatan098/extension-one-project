import React, { FC } from "react";
import { CheckIcon } from "@components/Icon/index";
import * as S from "./styled";
import * as T from "./types";

const Step: FC<T.StepProps> = ({ steps, isVertical = false }) => {
  const completedSteps = steps.filter(
    (step) => step.status === "completed"
  ).length;
  const completionPercentage = (completedSteps / steps.length) * 100;

  const renderSteps = () => {
    return steps.map((step) => (
      <S.StepContainer key={step.title} isVertical={isVertical}>
        <S.Circle completed={step.status === "completed"}>
          <CheckIcon size={18} color="currentColor" />
        </S.Circle>
        <S.Title
          completed={step.status === "completed"}
          isVertical={isVertical}
        >
          {step.title}
        </S.Title>
      </S.StepContainer>
    ));
  };

  return (
    <S.ProgressBarContainer isVertical={isVertical}>
      <S.ProgressLine
        completionPercentage={completionPercentage}
        isVertical={isVertical}
      >
        <div />
      </S.ProgressLine>
      {renderSteps()}
    </S.ProgressBarContainer>
  );
};

export default Step;
