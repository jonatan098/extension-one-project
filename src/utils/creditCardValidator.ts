const ELO_REGEX =
  /^(4011(78|79)|43(1274|8935)|45(1416|7393|763[12])|50(4175|6699|67[0-7]\d|9000)|50(9\d\d\d)|627780|63(6297|6368)|650(03([^4])|04\d|05[01]|05([7-9])|06\d|07\d|08\d|4([0-3]\d|8[5-9]|9\d)|5(\d\d|3[0-8])|9([0-6]\d|7[0-8])|7([0-2]\d)|541|700|720|727|901)|65165([2-9])|6516([6-7]\d)|65500\d|6550([0-5]\d)|655021|65505([6-7])|6516([8-9]\d)|65170([0-4]))/;

const BIN_LIST = [
  { card: "Amex", regex: /^3[47]\\d{0,13}/ },
  { card: "Aura", regex: /^507860/ },
  {
    card: "Diners",
    regex: /(36[0-8]\d{3}|369[0-8]\d{2}|3699[0-8]\d|36999\d)/,
  },
  { card: "Discover", regex: /^6011|^622|^64|^65/ },
  {
    card: "Elo",
    regex: ELO_REGEX,
  },
  { card: "Hipercard", regex: /^606282|^637095|^637599|^637568/ },
  { card: "MasterCard", regex: /^[25]/ },
  { card: "Visa", regex: /^4\d{12,15}/ },
];

export const creditCardValidator = (cardNumber: string | number) => {
  const card = `${cardNumber}`.replaceAll(/\D/g, "");

  if (!card) {
    return { error: true, message: "preencha o número do cartão de crédito" };
  }

  let foundBrand = BIN_LIST.find((x) => x.regex.exec(card));

  if (!foundBrand) {
    return {
      error: false,
      brand: "Cartão",
    };
  }

  if (foundBrand.card === "Visa" && ELO_REGEX.exec(card)) {
    foundBrand = {
      card: "Elo",
      regex: ELO_REGEX,
    };
  }

  return { error: false, brand: foundBrand.card };
};
