import styled from "styled-components";

export const ProductPageWrapper = styled.div`
  max-width: 1004px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 30px 15px;
  }
`;

export const Content = styled.div`
  padding: 0 15px;
`;

export const ResponsiveView = styled.div<{ $display: number; $limit: string }>`
  width: 100%;
  height: 100%;
  display: none;

  @media (${({ $display, $limit }) => `${$limit}-width:  ${$display}`}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 14px;
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
  }

  @media (min-width: 768px) {
    min-width: 250px;
    border-radius: 10px 0 0 10px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 12px 0;
  font-size: 3rem;
  text-align: center;
  color: #f5a623;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Price = styled.p`
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: #70c2eb;

  @media (min-width: 768px) {
    margin: 0;
    font-size: 3rem;
    text-align: center;
  }
`;

export const MoreDetailsWrapper = styled.div`
  h2 {
    font-size: 1.6rem;
    font-weight: bold;
    color: #f5a623;
  }

  p {
    margin-top: 10px;
    font-size: 1.4rem;
    color: #313131;
  }

  @media (min-width: 768px) {
    h2 {
      margin-top: 10px;
    }
  }
`;

export const DesktopProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const FirstSection = styled.div`
  width: 100%;
  max-height: 300px;

  display: flex;
  gap: 10px;

  border-radius: 10px;

  box-shadow: 0px 3px 6px #00000029;
  background-color: #fff;
`;

export const InnerWrapper = styled.div`
  max-width: 335px;
  min-height: 280px;

  padding: 0 20px 0 0;

  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const SecondSection = styled.div`
  width: 300px;
  min-height: 280px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  background-color: #fff;
`;

export const CarrosselWrapper = styled.div`
  margin-top: 30px;
  padding-left: 15px;

  h2 {
    margin-bottom: 10px;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 2.4rem;
    color: #f5a623;
  }

  @media (min-width: 768px) {
    padding-left: 0;
  }
`;
