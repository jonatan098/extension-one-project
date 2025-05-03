import { FC, useState } from "react";
import Button from "@components/Button";
import Input from "@components/Input";
import { creditCardValidator } from "@utils/creditCardValidator";
import * as S from "./styled";
import { PaymentMethodInfoModel } from "../../types";

interface PaymentMethodProps {
  position: number;
  setPosition: (position: number) => void;
  paymentInfo?: PaymentMethodInfoModel;
  setPaymentMethod: (payment: PaymentMethodInfoModel) => void;
  renderProductSummary: () => void;
}

const PaymentMethod: FC<PaymentMethodProps> = ({
  position,
  setPosition,
  paymentInfo,
  setPaymentMethod,
  renderProductSummary,
}) => {
  const [cardNumber, setCardNumber] = useState(paymentInfo?.cardNumber ?? "");
  const [cardName, setCardName] = useState(paymentInfo?.cardName ?? "");
  const [cpf, setCpf] = useState(paymentInfo?.cpf ?? "");
  const [expirationDate, setExpirationDate] = useState(
    paymentInfo?.expirationDate ?? ""
  );
  const [cvv, setCvv] = useState(paymentInfo?.cvv ?? "");

  const [cardNumberError, setCardNumberError] = useState("");
  const [cardNameError, setCardNameError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [expirationDateError, setExpirationDateError] = useState("");
  const [cvvError, setCvvError] = useState("");

  const isAllCreditCardFieldsFilled = () => {
    return !!cardNumber && !!cardName && !!cpf && !!expirationDate && !!cvv;
  };

  const isAllFieldsValid = () => {
    let hasError = false;

    if (!cardNumber || creditCardValidator(cardNumber).error) {
      setCardNumberError(
        creditCardValidator(cardNumber).message ?? "Campo obrigatório"
      );
      hasError = true;
    }

    if (!cardName) {
      setCardNameError("Campo obrigatório");
      hasError = true;
    }

    if (!expirationDate) {
      setExpirationDateError("Campo obrigatório");
      hasError = true;
    }

    if (!cvv) {
      setCvvError("Campo obrigatório");
      hasError = true;
    }

    return hasError;
  };

  const onSubmit = async () => {
    if (isAllFieldsValid()) return;

    setPaymentMethod({
      cardNumber,
      cardName,
      cpf,
      cvv,
      expirationDate,
    });

    setPosition(position + 1);
  };

  const renderFinishPaymentButtons = () => {
    return (
      <S.ButtonsWrapper>
        <Button
          label="REVISAR DADOS"
          width="100%"
          margin="0 0 13px"
          onClick={() => onSubmit()}
          disabled={!isAllCreditCardFieldsFilled()}
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

  return (
    <>
      <S.StepTitle>Pagamento</S.StepTitle>
      {renderProductSummary()}
      <S.StepTitle>Cartão de crédito</S.StepTitle>
      <Input
        label="Número do cartão"
        inputMode="numeric"
        mask="#### #### #### ####"
        value={cardNumber}
        error={cardNumberError}
        onChange={(value) => {
          setCardNumber(value ?? "");
          setCardNumberError("");
        }}
        margin="0 0 15px"
      />
      <Input
        label="Nome impresso no cartão"
        inputMode="text"
        value={cardName}
        error={cardNameError}
        onChange={(value) => {
          setCardName(value ?? "");
          setCardNameError("");
        }}
        margin="0 0 15px"
      />
      <Input
        label="CPF do titular"
        inputMode="numeric"
        mask="###.###.###-##"
        value={cpf}
        error={cpfError}
        onChange={(value) => {
          setCpf(value ?? "");
          setCpfError("");
        }}
        margin="0 0 15px"
      />
      <Input
        label="Validade"
        inputMode="numeric"
        mask="##/##"
        value={expirationDate}
        error={expirationDateError}
        onChange={(value) => {
          setExpirationDate(value ?? "");
          setExpirationDateError("");
        }}
        margin="0 0 15px"
      />
      <Input
        label="Código de segurança"
        inputMode="numeric"
        mask="###"
        value={cvv}
        error={cvvError}
        onChange={(value) => {
          setCvv(value ?? "");
          setCvvError("");
        }}
        margin="0 0 15px"
      />
      {renderFinishPaymentButtons()}
    </>
  );
};

export default PaymentMethod;
