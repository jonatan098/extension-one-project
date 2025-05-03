import { FC, useState } from "react";
import { useRouter } from "next/router";
import Button from "@components/Button";
import Input from "@components/Input";
import { phoneValidator } from "@utils/phoneValidator";
import { emailValidator } from "@utils/emailValidator";
import * as S from "./styled";
import { PersonalDataInfoModel } from "../../types";

interface PersonalDataProps {
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
  personalData?: PersonalDataInfoModel;
  setPersonalData: (data: PersonalDataInfoModel) => void;
}

const PersonalData: FC<PersonalDataProps> = ({
  position,
  setPosition,
  personalData,
  setPersonalData,
}) => {
  const router = useRouter();

  const [name, setName] = useState(personalData?.name);
  const [email, setEmail] = useState(personalData?.email);
  const [phone, setPhone] = useState(personalData?.phone);

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const isAllFieldsValid = () => {
    return !emailValidator(email).error && !phoneValidator(phone).error;
  };

  const submit = () => {
    if (!name) {
      setNameError("Campo obrigatório");
      return;
    }

    if (!email || emailValidator(email).error) {
      setEmailError(emailValidator(email).message ?? "Campo obrigatório");
      return;
    }

    if (!phone || phoneValidator(phone).error) {
      setPhoneError(phoneValidator(phone).message ?? "Campo obrigatório");
      return;
    }

    setPersonalData({
      name,
      email,
      phone,
    });

    setPosition(position + 1);
  };

  return (
    <form>
      <S.StepTitle>Preencha seus dados pessoais:</S.StepTitle>
      <Input
        label="Nome completo"
        inputMode="text"
        value={name}
        error={nameError}
        onChange={(value) => {
          setName(value ?? "");
          setNameError("");
        }}
        margin="0 0 25px"
      />

      <Input
        label="E-mail"
        inputMode="email"
        value={email}
        error={emailError}
        onChange={(value) => {
          setEmail(value ?? "");
          setEmailError("");
        }}
        margin="0 0 25px"
      />

      <Input
        label="Telefone"
        inputMode="numeric"
        mask="(##) #####-####"
        value={phone}
        error={phoneError}
        onChange={(value) => {
          setPhone(value ?? "");
          setPhoneError("");
        }}
      />

      <S.ButtonsWrapper>
        <Button
          label="PRÓXIMO"
          width="100%"
          margin="0 0 13px"
          onClick={() => submit()}
          disabled={!isAllFieldsValid()}
        />
        <Button
          label="VOLTAR"
          width="100%"
          outline
          onClick={() => router.push("/carrinho")}
        />
      </S.ButtonsWrapper>
    </form>
  );
};

export default PersonalData;
