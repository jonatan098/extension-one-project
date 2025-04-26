import styled from "styled-components";

export const CartWrapper = styled.div`
  padding: 30px 15px;
`;

export const Title = styled.p`
  margin-bottom: 10px;
  font-size: 1.6rem;
  font-weight: bold;
  color: #313131;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const CartCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ResumeCard = styled.div`
  p {
    font-size: 1.4rem;
    font-weight: bold;
    color: #313131;
  }

  @media (min-width: 768px) {
    min-width: 300px;
    padding: 10px;
    border-radius: 14px;
    box-shadow: 0px 3px 6px #00000033;
    background: #efefef;
  }
`;

export const ResumeCardTextWrapper = styled.div`
  font-size: 1.4rem;
  color: #313131;

  :first-child {
    margin: 10px 0;
    font-weight: initial;
  }

  :last-child {
    font-size: 1.6rem;
    color: #70c2eb;
  }

  @media (min-width: 768px) {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    :first-child {
      margin: 0;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  max-width: 300px;
  margin: 20px auto 0;
`;
