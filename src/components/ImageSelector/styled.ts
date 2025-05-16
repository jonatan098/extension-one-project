import styled from "styled-components";

export const SubTitle = styled.h2`
  font-size: 1.6rem;
  line-height: 21px;
  color: #363636;
`;

export const ImageContainer = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0 0;
  border-radius: 13px;
  overflow: hidden;
  background: #cecece;
  cursor: pointer;
`;

export const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: #363636;
    text-align: center;
    padding: 5px 10px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  p {
    position: absolute;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-decoration: underline;
    display: none;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    filter: brightness(100%);
    transition: filter 0.3s ease-in-out;
  }

  &:hover {
    p {
      display: block;
    }

    img {
      filter: brightness(69%);
      z-index: 0;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Button = styled.button`
  width: 300px;
  height: 45px;
  margin-top: 20px;
  border: 0;
  border-radius: 25px;
  background: #2680eb;
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  font-size: 1.2rem;
  color: #e60000;
  padding: 3px 0;
`;

export const Label = styled.p`
  font-size: 1.2rem;
  color: #363636;
`;

export const InstructionsContainer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  width: 100%;
  height: auto;
  padding: 10px 0 0 0;
`;
