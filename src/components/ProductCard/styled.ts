import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #d1d1d166;
  box-shadow: 0px 2px 3px #0000001f;

  &:hover {
    box-shadow: 0px 3px 6px #00000033;
  }
`;

export const ImageWrapper = styled.div`
  height: 176px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  position: relative;
`;

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StoreName = styled.p`
  background: #fff;
  position: absolute;
  bottom: 0;

  margin: 0;
  padding: 3px 10px 0 10px;

  border-radius: 0 4px 0 0;

  font-size: 1.2rem;
  font-weight: bold;
`;

export const Title = styled.p`
  height: 20px;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #313131;
`;

export const Price = styled.p`
  font-weight: bold;

  color: #70c2eb;
`;

export const description = styled.p`
  font-size: 1.2rem;
  color: #313131;
  height: 45px;
  line-height: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

export const button = styled.button`
  width: 100%;
  height: 34px;

  border: 0;
  border-radius: 18px;

  font-size: 1.4rem;
  font-weight: bold;

  color: #fff;
  background-color: #70c347;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 25px;
  min-height: 30px;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #d1d1d166;
  box-shadow: 0px 2px 3px #0000001f;
  border-radius: 50%;
  border: 0;
  background: #fff;
  cursor: pointer;
`;
