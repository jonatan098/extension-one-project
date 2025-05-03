import { FC } from "react";
import Button from "@components/Button";
import * as S from "./styled";
import {
  DeliveryAddressInfoModel,
  PaymentMethodInfoModel,
  PersonalDataInfoModel,
} from "../../types";

interface ReviewOrderProps {
  setPosition: React.Dispatch<React.SetStateAction<number>>;
  renderProductSummary: () => void;
  submit: () => void;
  personalData?: PersonalDataInfoModel;
  paymentMethod?: PaymentMethodInfoModel;
  deliveryInfo?: DeliveryAddressInfoModel;
}

const ReviewOrder: FC<ReviewOrderProps> = ({
  setPosition,
  renderProductSummary,
  submit,
  personalData,
  paymentMethod,
  deliveryInfo,
}) => {
  return (
    <>
      <S.StepTitle>
        Revise os dados e o pedido para finalizar a compra
      </S.StepTitle>

      <S.Header>
        <p>Dados pessoais</p>
        <Button
          label="Editar"
          width="59px"
          height="20px"
          fontSize="1.2rem"
          borderRadius="4px"
          outline
          onClick={() => setPosition(1)}
        />
      </S.Header>
      <S.TextBox>
        <p>{personalData?.name}</p>
        <p>{personalData?.email}</p>
        <p>{personalData?.phone}</p>
      </S.TextBox>
      <S.Line />

      <S.Header>
        <p>Endereço de entrega</p>
        <Button
          label="Editar"
          width="59px"
          height="20px"
          fontSize="1.2rem"
          borderRadius="4px"
          outline
          onClick={() => setPosition(2)}
        />
      </S.Header>
      <S.TextBox>
        <p>
          {deliveryInfo?.street}, {deliveryInfo?.number}
        </p>
        <p>{deliveryInfo?.neighborhood}</p>
        <p>
          {deliveryInfo?.city}/{deliveryInfo?.state}
        </p>
      </S.TextBox>
      <S.Line />

      <S.Header>
        <p>Pagamento</p>
        <Button
          label="Editar"
          width="59px"
          height="20px"
          fontSize="1.2rem"
          borderRadius="4px"
          outline
          onClick={() => setPosition(3)}
        />
      </S.Header>
      <S.TextBox>
        <p>Cartão final: {paymentMethod?.cardNumber.slice(-3)}</p>
        <p>Frete: Grátis</p>
      </S.TextBox>
      <S.Line />

      <S.ReviewOrderSubTitle>Resumo do pedido</S.ReviewOrderSubTitle>

      {renderProductSummary()}

      <S.ButtonsWrapper>
        <Button
          label="FINALIZAR COMPRA"
          width="100%"
          margin="0 0 13px"
          onClick={() => {
            submit();
          }}
        />
      </S.ButtonsWrapper>
    </>
  );
};

export default ReviewOrder;
