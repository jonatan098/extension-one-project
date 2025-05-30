import { FormEvent, useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import { emailValidator } from "@utils/emailValidator";
import { useLoader } from "@hooks/useLoader";
import { useSnackbar } from "@hooks/useSnackbar";
import { useRouter } from "next/router";
import * as S from "./styled";
import Link from "next/link";

const Register = () => {
  const showSnackbar = useSnackbar();
  const showLoader = useLoader();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>();

  const [emailError, setEmailError] = useState<string>();
  const [nameError, setNameError] = useState<string>("");
  const [passError, setPassError] = useState<string>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      setNameError("Informe seu nome");
      return;
    }

    const validateEmail = emailValidator(email);

    if (validateEmail.error) {
      setEmailError(validateEmail.message);
      return;
    }

    if (!pass) {
      setPassError("Informe sua senha");
      return;
    }

    showLoader(true);

    try {
      console.log("email: ", email);
      console.log("pass: ", pass);
      console.log("entrando....");
      setTimeout(() => {
        showLoader(false);
        router.push("/");
      }, 1000);
    } catch {
      setEmailError("Verifique seu email e/ou senha e tente novamente");

      showLoader(false);
      showSnackbar({
        type: "error",
        message: "Tivemos um por favor tente novamente",
      });
    }
  };

  return (
    <S.LoginWrapper>
      <S.Title>Cadastro</S.Title>

      <S.FormWrapper onSubmit={onSubmit}>
        <Input
          label="Nome"
          onChange={(value) => {
            setName(value ?? "");
            setNameError("");
          }}
          value={name}
          error={nameError}
          margin="15px 0"
        />
        <Input
          label="E-mail"
          inputMode="email"
          onChange={(value) => {
            setEmail(value ?? "");
            setEmailError("");
          }}
          value={email}
          error={emailError}
          margin="15px 0"
        />
        <Input
          label="Senha"
          inputMode="password"
          onChange={(value) => {
            setPass(value);
            setPassError("");
          }}
          value={pass}
          error={passError}
          margin="15px 0 30px 0"
        />

        <Button label="Começar" type="submit" />
      </S.FormWrapper>

      <S.Action>
        Já tem uma conta? <Link href="/login">Entrar</Link>
      </S.Action>
    </S.LoginWrapper>
  );
};

export default Register;
