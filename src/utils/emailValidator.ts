export const emailValidator = (email?: string) => {
  if (!email || email.toLowerCase() === "") {
    return { error: true, message: "O campo e-mail é obrigatório" };
  }

  if (
    email.includes("@") &&
    email.split("@")[0].length > 0 &&
    email.split("@")[1].length > 1 &&
    email.split("@")[1].includes(".") &&
    email.split(".")[1].length >= 1
  ) {
    return { error: false };
  }

  return { error: true, message: "Preencha com um e-mail válido" };
};
