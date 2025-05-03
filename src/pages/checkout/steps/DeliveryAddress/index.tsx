import { FC, useEffect, useState } from "react";
import Button from "@components/Button";
import Input from "@components/Input";
import * as S from "./styled";
import { DeliveryAddressInfoModel, DeliveryOption } from "../../types";

interface DeliveryAddressProps {
  position: number;
  setPosition: (num: number) => void;
  deliveryAddress?: DeliveryAddressInfoModel;
  setDeliveryAddress: (data: DeliveryAddressInfoModel) => void;
}

const DeliveryAddress: FC<DeliveryAddressProps> = ({
  position,
  setPosition,
  deliveryAddress,
  setDeliveryAddress,
}) => {
  const [address, setAddress] = useState<DeliveryAddressInfoModel | undefined>(
    deliveryAddress
  );
  const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption>();
  const [selectedOption, setSelectedOption] = useState<{
    type: string;
    price: string;
    deliveryTime: string;
  }>();

  const [inputErrors, setInputErrors] = useState({
    zipCode: "",
    number: "",
    state: "",
    city: "",
    neighborhood: "",
    street: "",
    shortState: "",
    complement: "",
  });

  const [selectedOptionError, setSelectedOptionError] = useState("");

  const isAllFieldsValid = () => {
    return (
      address?.street &&
      address?.number &&
      address?.city &&
      address?.neighborhood &&
      address?.shortState &&
      selectedOption
    );
  };

  const onSubmit = async () => {
    if (!address?.street) {
      setInputErrors((err) => ({
        ...err,
        street: "Campo obrigatório",
      }));
      return;
    }

    if (!address?.number) {
      setInputErrors((err) => ({
        ...err,
        number: "Campo obrigatório",
      }));
      return;
    }

    if (!address?.city) {
      setInputErrors((err) => ({
        ...err,
        city: "Campo obrigatório",
      }));
      return;
    }

    if (!address?.neighborhood) {
      setInputErrors((err) => ({
        ...err,
        neighborhood: "Campo obrigatório",
      }));
      return;
    }

    if (!address?.shortState) {
      setInputErrors((err) => ({
        ...err,
        shortState: "Campo obrigatório",
      }));
      return;
    }

    if (!selectedOption) {
      setSelectedOptionError("Campo obrigatório");
      return;
    }

    setDeliveryAddress({
      street: address.street,
      city: address.city,
      state: address.shortState,
      neighborhood: address.neighborhood,
      number: address.number,
      complement: address.complement,
      delivery: selectedOption,
    });

    setPosition(position + 1);
  };

  const renderDeliveryListItem = (x: any) => (
    <S.DeliveryContent key={x.type}>
      <S.DeliveryInnerContent>
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="radio"
            name={x.type}
            value={x.type}
            checked={selectedOption?.type === x.type}
            onChange={() => {
              setSelectedOption(x);
            }}
            style={{ width: 18, height: 18 }}
          />
          <div>
            <p>
              <b>{x.type}</b>
            </p>
            <p>{x.deliveryTime}</p>
          </div>
        </label>
      </S.DeliveryInnerContent>
      <p>
        <b>{x.price}</b>
      </p>
    </S.DeliveryContent>
  );

  const renderErrorMsg = () => {
    if (!selectedOptionError) return;

    return <S.ErrorMessage>{selectedOptionError}</S.ErrorMessage>;
  };

  const renderOption = (option: DeliveryOption["shipments"]) => {
    return (
      <S.DeliveryBox>
        {option.map((x) => renderDeliveryListItem(x))}
      </S.DeliveryBox>
    );
  };

  const renderDeliveryOptions = () => {
    if (deliveryOptions?.shipments.length === 0) {
      return undefined;
    }

    return (
      <S.DeliveryOptionsWrapper>
        <S.DeliveryTitle>Entrega</S.DeliveryTitle>
        {renderOption(deliveryOptions?.shipments ?? [])}
        {renderErrorMsg()}
      </S.DeliveryOptionsWrapper>
    );
  };

  const renderAddressInputFields = () => {
    return (
      <>
        <Input
          label="Endereço"
          value={address?.street}
          error={inputErrors.street}
          onChange={(value) => {
            setAddress((x) => ({ ...x, street: value ?? "" }));
            setInputErrors((err) => ({
              ...err,
              street: "",
            }));
          }}
          margin="18px 0 10px"
        />
        <Input
          label="Número"
          inputMode="numeric"
          value={address?.number}
          error={inputErrors.number}
          onChange={(value) => {
            setAddress((x) => ({ ...x, number: value ?? "" }));
            setInputErrors((err) => ({
              ...err,
              number: "",
            }));
          }}
          margin="0 0 15px"
        />
        <Input
          label="Complemento (Opcional)"
          inputMode="text"
          value={address?.complement}
          onChange={(value) => {
            setAddress((x) => ({ ...x, complement: value ?? "" }));
            setInputErrors((err) => ({
              ...err,
              complement: "",
            }));
          }}
          margin="0 0 20px"
        />
        <Input
          label="Cidade"
          value={address?.city}
          error={inputErrors.city}
          onChange={(value) => {
            setAddress((x) => ({ ...x, city: value ?? "" }));
            setInputErrors((err) => ({
              ...err,
              city: "",
            }));
          }}
          margin="18px 0 10px"
        />
        <Input
          label="Bairro"
          value={address?.neighborhood}
          error={inputErrors?.neighborhood}
          onChange={(value) => {
            setAddress((x) => ({ ...x, neighborhood: value ?? "" }));
            setInputErrors((err) => ({
              ...err,
              neighborhood: "",
            }));
          }}
          margin="18px 0 10px"
        />
        <Input
          label="Estado"
          inputMode="alphabet"
          mask="##"
          value={address?.shortState}
          error={inputErrors?.shortState}
          onChange={(value) => {
            setAddress((x) => ({ ...x, shortState: value ?? "" }));
            setInputErrors((err) => ({
              ...err,
              shortState: "",
            }));
          }}
          margin="18px 0 10px"
        />
      </>
    );
  };

  const renderButtons = () => {
    return (
      <S.ButtonsWrapper>
        <Button
          label="PRÓXIMO"
          width="100%"
          margin="0 0 13px"
          onClick={() => onSubmit()}
          disabled={!isAllFieldsValid()}
        />
        <Button
          label="VOLTAR"
          width="100%"
          outline
          onClick={() => setPosition(position - 1)}
        />
      </S.ButtonsWrapper>
    );
  };

  useEffect(() => {
    if (selectedOption) {
      setSelectedOptionError("");
    }
  }, [selectedOption]);

  useEffect(() => {
    const options = {
      shipments: [
        {
          type: "Normal",
          price: "Grátis",
          deliveryTime: "dois dias",
        },

        {
          type: "Express",
          price: "Grátis",
          deliveryTime: "Amanhã",
        },
      ],
    };
    setDeliveryOptions(options);
  }, []);

  return (
    <form>
      <S.StepTitle>Endereço de entrega</S.StepTitle>
      {renderAddressInputFields()}
      {renderDeliveryOptions()}
      {renderButtons()}
    </form>
  );
};

export default DeliveryAddress;
