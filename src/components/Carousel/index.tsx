import React, { FC, useEffect, useState, useRef, Children } from "react";
import * as S from "./styled";
import * as T from "./types";
import { ArrowLeftIcon, ArrowRightIcon } from "@components/Icon/index";

const Carousel: FC<T.Carousel> = ({
  name,
  children,
  itemsPerView = 4,
  itemsPerViewAutoMobile = false,
  clickSendToFirst,
  gapMobile = "20px",
  gapDesktop = "10px",
  uncut,
}) => {
  const [position, setPosition] = useState(0);
  const [totalSlide, setTotalSlide] = useState(0);
  const [slide, setSlide] = useState(1);
  const [sizeCarousel, setSizeCarousel] = useState(0);
  const carouselContentRef = useRef<HTMLInputElement>(null);
  const contentContainerRef = useRef<HTMLInputElement>(null);
  const count = Children?.count(children);

  /* c8 ignore next 7 */
  const nextSlide = () => {
    if (slide === totalSlide) {
      return;
    }

    setSlide(slide + 1);
    setPosition(position - sizeCarousel);
  };

  /* c8 ignore next 6 */
  const prevSlide = () => {
    if (position !== 0) {
      setSlide(slide - 1);
      setPosition(position + sizeCarousel);
    }
  };

  /* c8 ignore next 16 */
  const renderArrowLeft = () => {
    if (position === 0 || Children.count(children) <= itemsPerView) {
      return undefined;
    }

    return (
      <S.ArrowLeft data-testid="arrow-left" onClick={() => prevSlide()}>
        <ArrowLeftIcon size={24} color="currentColor" />
      </S.ArrowLeft>
    );
  };

  /* c8 ignore next 16 */
  const renderArrowRight = () => {
    if (slide === totalSlide || Children.count(children) <= itemsPerView) {
      return undefined;
    }

    return (
      <S.ArrowRight data-testid="arrow-right" onClick={() => nextSlide()}>
        <ArrowRightIcon size={24} color="currentColor" />
      </S.ArrowRight>
    );
  };

  /* c8 ignore next 10 */
  const onItemClick = (index: number) => {
    if (clickSendToFirst && contentContainerRef?.current) {
      contentContainerRef.current.scrollLeft = 0;
    }
  };

  const renderItems = () => {
    return Children.map(children, (child, index) => (
      <S.Item
        $countItems={count ?? undefined}
        $gapMobile={gapMobile}
        $gapDesktop={gapDesktop}
        $uncut={uncut}
        onClick={() => onItemClick(index)}
        $itemsPerViewAutoMobile={itemsPerViewAutoMobile}
        key={`${name}-${btoa(`${index}`)}`}
        $widthProp={100 / itemsPerView}
      >
        {child}
      </S.Item>
    ));
  };

  useEffect(() => {
    setSlide(1);
    setPosition(0);
    setSizeCarousel(carouselContentRef?.current?.offsetWidth ?? 0);
    setTotalSlide(Math.ceil(Children.count(children) / itemsPerView));
  }, [carouselContentRef?.current?.offsetWidth, children]);

  return (
    <S.CarouselWrapper data-testid="Carousel">
      <S.ContentContainer ref={contentContainerRef}>
        <S.Content ref={carouselContentRef} $position={position} $uncut={uncut}>
          {renderItems()}
        </S.Content>
      </S.ContentContainer>
      {renderArrowLeft()}
      {renderArrowRight()}
    </S.CarouselWrapper>
  );
};

export default Carousel;
