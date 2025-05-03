import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 16px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 0 16px;
`;

export const Title = styled.p`
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 2.7rem;
  color: #202020;
`;

export const ProductPrice = styled.div`
  text-align: right;
  font-size: 1.4rem;
  color: ${({ theme }) => theme?.colors?.titleColor};

  p:nth-child(2) {
    font-size: 1rem !important;
    color: #878787;
    margin-top: 5px;
  }
`;

export const Bottom = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme?.colors?.titleColor};

  > p:nth-child(1) {
    font-size: 1.2rem;
  }

  > p:nth-child(2) {
    font-size: 1.4rem;
  }
`;

export const CompletedModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h1 {
    font-size: 2rem;
  }
`;
