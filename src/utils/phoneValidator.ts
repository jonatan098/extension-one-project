export const phoneValidator = (phone?: number | string) => {
  const phoneLength = String(phone)?.match(/\d/g)?.length;

  if (phoneLength !== 11 && phoneLength !== 10) {
    return {
      error: true,
      message: "Insira um telefone válido",
    };
  }

  return {
    error: false,
  };
};
