import { FormEvent, useEffect, useState } from "react";
import { useLoader } from "@hooks/useLoader";
import { useRouter } from "next/router";
import { ProductModel } from "@models/ProductModel";
import { PlusSingIcon } from "@components/Icon/index";
import ProductCard from "@components/ProductCard";
import Modal from "@components/Modal";
import Button from "@components/Button";
import * as S from "./styled";
import mock from "../mock.json";
import ImageSelector from "@components/ImageSelector";
import Input from "@components/Input";

const MyProducts = () => {
  const showLoader = useLoader();
  const router = useRouter();

  const [products, setProducts] = useState<ProductModel[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductModel>();

  const [title, setTitle] = useState({ value: "", error: "" });
  const [price, setPrice] = useState({ value: "", error: "" });
  const [brand, setBrand] = useState({ value: "", error: "" });
  const [condition, setCondition] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });
  const [image, setImage] = useState({ value: "", error: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const loadProductList = () => {
    const list = mock;

    setProducts(list as ProductModel[]);
  };

  const onDelete = () => {
    showLoader(true);

    setTimeout(() => {
      showLoader(false);
      router.reload();
    }, 2000);
  };

  const haveEmptyInputs = () => {
    let hasError = false;

    // Título
    if (!title?.value?.trim()) {
      setTitle((prev) => ({
        value: prev?.value ?? "",
        error: "Campo obrigatório",
      }));
      hasError = true;
    }

    // Preço
    if (!price?.value?.trim()) {
      setPrice((prev) => ({
        value: prev?.value ?? "",
        error: "Campo obrigatório",
      }));
      hasError = true;
    }

    // Marca
    if (!brand?.value?.trim()) {
      setBrand((prev) => ({
        value: prev?.value ?? "",
        error: "Campo obrigatório",
      }));
      hasError = true;
    }

    // Condição
    if (!condition?.value?.trim()) {
      setCondition((prev) => ({
        value: prev?.value ?? "",
        error: "Campo obrigatório",
      }));
      hasError = true;
    }

    // Descrição
    if (!description?.value?.trim()) {
      setDescription((prev) => ({
        value: prev?.value ?? "",
        error: "Campo obrigatório",
      }));
      hasError = true;
    }

    if (!image?.value && !imageFile) {
      setImage((prev) => ({
        value: prev?.value ?? "",
        error: "Campo obrigatório",
      }));
      hasError = true;
    }

    return hasError;
  };

  const clearAllFields = () => {
    setTitle({ value: "", error: "" });
    setPrice({ value: "", error: "" });
    setBrand({ value: "", error: "" });
    setCondition({ value: "", error: "" });
    setDescription({ value: "", error: "" });
    setImage({ value: "", error: "" });
    setImageFile(null);
  };

  const onEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (haveEmptyInputs()) return;

    console.log("title", title);
    console.log("description", description);
    console.log("price", price);
    console.log("brand", brand);
    console.log("condition", condition);
    console.log("image", image);
    console.log("imageFile", imageFile);
  };

  const onAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (haveEmptyInputs()) return;

    console.log("title", title);
    console.log("description", description);
    console.log("price", price);
    console.log("brand", brand);
    console.log("condition", condition);
    console.log("image", image);
    console.log("imageFile", imageFile);
  };

  const renderDeleteModal = () => {
    if (!showDeleteModal) return;

    return (
      <Modal maxWidth="500px" onClose={() => setShowDeleteModal(false)}>
        <S.DeleteModalWrapper>
          <h1>Aviso</h1>
          <p>Esta é uma ação permanente, tem certeza ?</p>
          <S.ButtonsWrapper>
            <Button
              label="Deletar"
              margin="20px 0"
              color="red"
              onClick={() => {
                setShowDeleteModal(false);
                onDelete();
              }}
            />
            <Button
              label="Voltar"
              outline
              onClick={() => setShowDeleteModal(false)}
            />
          </S.ButtonsWrapper>
        </S.DeleteModalWrapper>
      </Modal>
    );
  };

  const renderEditModal = () => {
    if (!showEditModal) return;

    return (
      <Modal
        maxWidth="500px"
        onClose={() => {
          setShowEditModal(false);
          clearAllFields();
        }}
      >
        <S.EditModalWrapper>
          <h1>Edite os dados do produto</h1>
          <form onSubmit={onEdit}>
            <Input
              label="Titulo"
              onChange={(value) => {
                setTitle({ value: value ?? "", error: "" });
              }}
              value={title?.value}
              error={title?.error}
              margin="15px 0"
            />
            <Input
              label="Preço"
              inputMode="numeric"
              onChange={(value) => {
                setPrice({ value: value ?? "", error: "" });
              }}
              value={price?.value}
              error={price?.error}
              margin="15px 0"
            />
            <Input
              label="Marca"
              onChange={(value) => {
                setBrand({ value: value ?? "", error: "" });
              }}
              value={brand?.value}
              error={brand?.error}
              margin="15px 0"
            />
            <Input
              label="Condição"
              onChange={(value) => {
                setCondition({ value: value ?? "", error: "" });
              }}
              value={condition?.value}
              error={condition?.error}
              margin="15px 0"
            />
            <S.TextAreaWrapper>
              <S.TextAreaContainer>
                <S.TextArea
                  spellCheck={false}
                  placeholder=" "
                  value={description?.value}
                  onChange={(e) => {
                    setDescription({ value: e.target.value ?? "", error: "" });
                  }}
                  onBlur={() =>
                    setDescription((prev) => ({
                      value: prev?.value ?? "",
                      error: "",
                    }))
                  }
                />
                <S.Label>Descrição</S.Label>
              </S.TextAreaContainer>
              {description?.error && (
                <S.ErrorMessage>{description.error}</S.ErrorMessage>
              )}
            </S.TextAreaWrapper>
            <ImageSelector
              label="Imagem"
              onChange={(image) => {
                setImageFile(image);
                setImage({ error: "", value: "" });
              }}
              width="300px"
              height="300px"
              image={image?.value ?? undefined}
              error={image?.error}
              permittedFileExtensions={["jpeg", "png", "jpg", "webp"]}
            />
            <S.ButtonsWrapper>
              <Button label="Editar" type="submit" margin="20px 0" />
              <Button
                label="Voltar"
                outline
                onClick={() => {
                  setShowEditModal(false);
                  clearAllFields();
                }}
              />
            </S.ButtonsWrapper>
          </form>
        </S.EditModalWrapper>
      </Modal>
    );
  };

  const renderAddModal = () => {
    if (!showAddModal) return;

    return (
      <Modal
        maxWidth="500px"
        onClose={() => {
          setShowAddModal(false);
          clearAllFields();
        }}
      >
        <S.EditModalWrapper>
          <h1>Adicione um novo produto</h1>
          <form onSubmit={onAdd}>
            <Input
              label="Titulo"
              onChange={(value) => {
                setTitle({ value: value ?? "", error: "" });
              }}
              value={title?.value}
              error={title?.error}
              margin="15px 0"
            />
            <Input
              label="Preço"
              inputMode="numeric"
              onChange={(value) => {
                setPrice({ value: value ?? "", error: "" });
              }}
              value={price?.value}
              error={price?.error}
              margin="15px 0"
            />
            <Input
              label="Marca"
              onChange={(value) => {
                setBrand({ value: value ?? "", error: "" });
              }}
              value={brand?.value}
              error={brand?.error}
              margin="15px 0"
            />
            <Input
              label="Condição"
              onChange={(value) => {
                setCondition({ value: value ?? "", error: "" });
              }}
              value={condition?.value}
              error={condition?.error}
              margin="15px 0"
            />
            <S.TextAreaWrapper>
              <S.TextAreaContainer>
                <S.TextArea
                  spellCheck={false}
                  placeholder=" "
                  value={description?.value}
                  onChange={(e) => {
                    setDescription({ value: e.target.value ?? "", error: "" });
                  }}
                  onBlur={() =>
                    setDescription((prev) => ({
                      value: prev?.value ?? "",
                      error: "",
                    }))
                  }
                />
                <S.Label>Descrição</S.Label>
              </S.TextAreaContainer>
              {description?.error && (
                <S.ErrorMessage>{description.error}</S.ErrorMessage>
              )}
            </S.TextAreaWrapper>
            <ImageSelector
              label="Imagem"
              onChange={(image) => {
                setImageFile(image);
                setImage({ error: "", value: "" });
              }}
              width="300px"
              height="300px"
              image={image?.value ?? undefined}
              error={image?.error}
              permittedFileExtensions={["jpeg", "png", "jpg", "webp"]}
            />
            <S.ButtonsWrapper>
              <Button label="Adicionar" type="submit" margin="20px 0" />
              <Button
                label="Voltar"
                outline
                onClick={() => {
                  setShowAddModal(false);
                  clearAllFields();
                }}
              />
            </S.ButtonsWrapper>
          </form>
        </S.EditModalWrapper>
      </Modal>
    );
  };

  useEffect(() => {
    loadProductList();
  }, []);

  useEffect(() => {
    if (showEditModal && selectedProduct) {
      setTitle({ value: selectedProduct.title, error: "" });
      setPrice({ value: selectedProduct.price.toString(), error: "" });
      setBrand({ value: selectedProduct.brand, error: "" });
      setCondition({ value: selectedProduct.condition, error: "" });
      setDescription({ value: selectedProduct.description, error: "" });
      setImage({ value: selectedProduct.image, error: "" });
      setImageFile(null);
    }
  }, [showEditModal, selectedProduct]);

  return (
    <S.MyProductsWrapper>
      <S.Title>Meus Produtos</S.Title>

      <S.ProductsList>
        <S.AddCardWrapper onClick={() => setShowAddModal(true)}>
          <PlusSingIcon size={100} color="#cccc" />
        </S.AddCardWrapper>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            description={p.description}
            imgUrl={p.image}
            price={p.price}
            title={p.title}
            storeName={p?.brand}
            editMode
            onEdit={() => {
              setSelectedProduct(p);
              setShowEditModal(true);
            }}
            onDelete={() => setShowDeleteModal(true)}
          />
        ))}
      </S.ProductsList>
      {renderDeleteModal()}
      {renderEditModal()}
      {renderAddModal()}
    </S.MyProductsWrapper>
  );
};

export default MyProducts;
