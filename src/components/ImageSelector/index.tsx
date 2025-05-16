import { ChangeEvent, FC, useRef, useState } from "react";
import { PlusSingIcon } from "@components/Icon";
import * as S from "./styled";
import { ImageSelectorProps } from "./types";

export const ImageSelector: FC<ImageSelectorProps> = ({
  onChange,
  label,
  width,
  height,
  image,
  permittedFileExtensions,
  error,
}) => {
  const [thumb, setThumb] = useState<string | null>(null);
  const [errorState, setErrorState] = useState<string | null>(null);

  const thumbRef = useRef<any>(null);

  const handleImageChange = ({
    event,
  }: {
    event: ChangeEvent<HTMLInputElement>;
  }) => {
    const selectedImage = event.target.files?.[0];

    if (selectedImage) {
      if (
        permittedFileExtensions.includes(
          selectedImage.type.replaceAll("image/", "")
        )
      ) {
        setErrorState(null);
        const reader = new FileReader();

        reader.onload = () => {
          const { result } = reader;
          if (result) {
            if (typeof result === "string") {
              setThumb(result);
              onChange(selectedImage);
            }
          }
        };

        reader.readAsDataURL(selectedImage);
      } else {
        setErrorState("Formato de arquivo inválido");
      }
    }
  };

  return (
    <>
      <S.SubTitle>{label}</S.SubTitle>
      <S.ImageContainer
        width={width}
        height={height}
        onClick={() => {
          thumbRef.current.value = "";
          thumbRef.current.click();
        }}
      >
        {image || thumb ? (
          <S.ImageWrapper>
            <p>Alterar imagem</p>

            <img src={image || thumb || undefined} alt="thumb" />
          </S.ImageWrapper>
        ) : (
          <S.EmptyContent>
            <PlusSingIcon size={36} color="#363636" />
            <p>{`Adicionar imagem de ${width} x ${height}`}</p>
          </S.EmptyContent>
        )}

        <S.Input
          ref={thumbRef}
          id="thumb"
          onChange={(e) => handleImageChange({ event: e })}
          accept={permittedFileExtensions.join(",")}
          capture="environment"
          type="file"
        />
      </S.ImageContainer>
      <S.InstructionsContainer width={width}>
        {(errorState || error) && (
          <S.ErrorText>{error ?? errorState}</S.ErrorText>
        )}
        <S.Label>{`Extensões Permitidas: ${permittedFileExtensions
          .join(", ")
          .toString()
          .replaceAll("image/", "")}`}</S.Label>
        <S.Label>{`Tamanho: ${width} x ${height}`}</S.Label>
      </S.InstructionsContainer>
    </>
  );
};

export default ImageSelector;
