import styled from "styled-components";

export const HomeWrapper = styled.div`
  max-width: 1004px;
  margin: 0 auto;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    padding: 30px 15px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CarrosselWrapper = styled.div`
  margin-top: 30px;
  padding-left: 16px;

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
