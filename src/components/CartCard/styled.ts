import styled from "styled-components";

export const CartCardWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0px 3px 6px #00000033;
`;

export const Top = styled.div`
  display: flex;
  background: #fff;
`;

export const ImageWrapper = styled.div`
  width: 160px;
  position: relative;
`;

export const Image = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    max-height: 100%;
  }
`;

export const InformationWrapper = styled.div`
  padding: 10px 5px;
`;

export const Title = styled.p`
  font-size: 1.6rem;
  height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #f5a623;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 1.4rem;
  height: 46px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #313131;
`;

export const Actions = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Bottom = styled.div`
  height: 43px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;

  p {
    font-size: 1.6rem;
    font-weight: bold;
    color: #2e3238;

    span {
      margin-right: 10px;
      font-size: 1.2rem;
      color: #313131;
    }
  }
`;
