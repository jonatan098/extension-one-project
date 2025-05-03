import styled from "styled-components";

export const StepTitle = styled.p`
  margin: 20px 0 13px;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme?.colors?.titleColor};
`;

export const ButtonsWrapper = styled.div`
  max-width: 500px;
  margin: 20px auto 27px;
`;

export const AddressWrapper = styled.div`
  margin-bottom: 18px;
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme?.colors?.titleColor};

  h4 {
    margin-bottom: 8px;
  }
`;

export const AddressInnerWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const DeliveryOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 20px 0 40px;
`;

export const DeliveryTitle = styled.div`
  font-size: 1.6rem;
  line-height: 1.9rem;
  font-weight: bold;
  color: #282828;
`;

export const DeliveryBox = styled.div`
  padding: 14px 12px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const DeliveryContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

export const DeliveryInnerContent = styled.div`
  display: flex;
  gap: 5px;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  padding: 0;
  margin: 3px 0 0 0;
  color: #ff0000;
`;
