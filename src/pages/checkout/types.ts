export interface PersonalDataInfoModel {
  name?: string;
  email?: string;
  phone?: string;
}

export interface DeliveryOption {
  shipments: {
    type: string;
    price: string;
    deliveryTime: string;
  }[];
}

export interface DeliveryAddressInfoModel {
  street?: string;
  city?: string;
  state?: string;
  shortState?: string;
  zipCode?: string;
  neighborhood?: string;
  number?: string;
  complement?: string;
  delivery?: {
    type: string;
    price: string;
    deliveryTime: string;
  };
}

export interface PaymentMethodInfoModel {
  cardNumber: string;
  cardName: string;
  cpf: string;
  cvv: string;
  expirationDate: string;
}
