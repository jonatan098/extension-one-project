import styled, { css } from "styled-components";

const desktopSize = "768px";

export const CarouselWrapper = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
  @media (min-width: ${desktopSize}) {
    overflow: hidden;
    width: calc(100% + 50px);
    left: -25px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  position: relative;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
  @media (min-width: ${desktopSize}) {
    overflow: hidden;
    width: calc(100% - 50px);
    margin-left: 25px;
  }
`;

type ContentProps = {
  $position: number;
  $uncut?: boolean;
};

export const Content = styled.div<ContentProps>`
  width: 100%;
  height: auto;
  display: inline-flex;
  box-sizing: border-box;
  transition-property: transform;
  position: relative;
  transform: ${(props) => `translateX(${props.$position.toString()}px)`};
  z-index: 2;
  margin-left: ${({ $uncut }) => ($uncut ? "16px" : "0px")};
  @media (min-width: ${desktopSize}) {
    margin-left: 0;
  }
`;

const itemsMobile = (
  countItems: number | undefined,
  itemsPerViewAutoMobile: boolean
) => {
  if (itemsPerViewAutoMobile) {
    return "auto";
  }
  if (countItems && countItems > 1) {
    return "90%";
  }
  if (countItems === 1) {
    return "100%";
  }
  return "90%";
};

export const Item = styled.div<{
  $widthProp: number;
  $itemsPerViewAutoMobile: boolean;
  $gapMobile: string;
  $gapDesktop: string;
  $uncut?: boolean;
  $countItems?: number;
}>`
  width: ${({ $itemsPerViewAutoMobile, $countItems }) =>
    itemsMobile($countItems, $itemsPerViewAutoMobile)};
  min-height: 2px;
  height: auto;
  display: block;
  position: relative;
  flex: none;
  padding: 3px
    ${({ $gapMobile, $countItems }) =>
      $countItems === 1 ? "0" : $gapMobile ?? "3px"}
    3px 3px;
  scroll-snap-align: ${({ $uncut }) => ($uncut ? "center" : "start")};
  position: relative;
  @media (min-width: 768px) {
    scroll-snap-align: start;
    padding: 7px ${({ $gapDesktop }) => $gapDesktop} 7px 4px;
    width: ${({ $widthProp }) => `${$widthProp}%`};
  }
`;

const ButtonBase = css`
  width: 39px;
  height: 39px;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 55%;
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: none;
  cursor: pointer;
  border: 0;
  transition: background ease-in-out 0.3s;
  @media (min-width: ${desktopSize}) {
    display: flex;
  }
`;

export const ArrowLeft = styled.button`
  ${ButtonBase}

  left: 10px;
  background: #f5a623;

  color: #fff;
`;

export const ArrowRight = styled.button`
  ${ButtonBase}

  right: 10px;
  background: #f5a623;

  color: #fff;
`;
