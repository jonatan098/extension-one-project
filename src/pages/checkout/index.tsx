import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useLoader } from "@hooks/useLoader";
import Step from "@components/Step";
import PersonalData from "./steps/PersonalData";
import DeliveryAddress from "./steps/DeliveryAddress";
import PaymentMethod from "./steps/PaymentMethod";
import ReviewOrder from "./steps/ReviewOrder";
import * as S from "./styled";
import {
  DeliveryAddressInfoModel,
  PaymentMethodInfoModel,
  PersonalDataInfoModel,
} from "./types";
import Modal from "@components/Modal";
import { CheckIcon } from "@components/Icon";
import Button from "@components/Button";

type Step = { title: string; status: "pending" | "completed" };

const STEP_TITLES = [
  "Dados pessoais",
  "Entrega",
  "Pagamento",
  "Revisar compra",
];

const Checkout = ({ subTotal }: { subTotal: number }) => {
  const showLoader = useLoader();
  const router = useRouter();

  const [position, setPosition] = useState(4);
  const [step, setStep] = useState<Step[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalDataInfoModel>();
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryAddressInfoModel>();
  const [paymentInfo, setPaymentInfo] = useState<PaymentMethodInfoModel>();
  const [showCompletedModal, setShowCompletedModal] = useState(false);

  console.log("personalInfo", personalInfo);
  console.log("deliveryInfo", deliveryInfo);
  console.log("paymentInfo", paymentInfo);

  const renderProductSummary = () => {
    return (
      <S.Bottom>
        <S.Section>
          <p>Subtotal</p>
          <p>R$ {subTotal}</p>
        </S.Section>
        <S.Section>
          <p>Entrega</p>
          <p>Grátis</p>
        </S.Section>
        <S.Section>
          <p>
            <b>Total</b>
          </p>
          <S.ProductPrice>
            <p>
              <b>R$ {subTotal}</b>
            </p>
          </S.ProductPrice>
        </S.Section>
      </S.Bottom>
    );
  };

  const onSubmit = () => {
    showLoader(true);

    setTimeout(() => {
      setShowCompletedModal(true);
      showLoader(false);
    }, 2000);
  };

  const renderStep = () => {
    switch (position) {
      case 1:
        return (
          <PersonalData
            position={position}
            setPosition={setPosition}
            personalData={personalInfo}
            setPersonalData={setPersonalInfo}
          />
        );
      case 2:
        return (
          <DeliveryAddress
            position={position}
            setPosition={setPosition}
            deliveryAddress={deliveryInfo}
            setDeliveryAddress={setDeliveryInfo}
          />
        );
      case 3:
        return (
          <PaymentMethod
            position={position}
            setPosition={setPosition}
            paymentInfo={paymentInfo}
            setPaymentMethod={setPaymentInfo}
            renderProductSummary={renderProductSummary}
          />
        );
      case 4:
        return (
          <ReviewOrder
            setPosition={setPosition}
            renderProductSummary={renderProductSummary}
            personalData={personalInfo}
            paymentMethod={paymentInfo}
            deliveryInfo={deliveryInfo}
            submit={onSubmit}
          />
        );
      default:
        return null;
    }
  };

  const renderCompletedModal = () => {
    if (!showCompletedModal) return;

    return (
      <Modal
        onClose={() => {
          setShowCompletedModal(true);
          router.push("/");
        }}
      >
        <S.CompletedModal>
          <CheckIcon size={100} color="#70C347" />
          <h1>Pedido realizado</h1>

          <Button
            label="Continuar"
            width="300px"
            margin="30px 0 0 0"
            onClick={() => {
              setShowCompletedModal(true);
              router.push("/");
            }}
          />
        </S.CompletedModal>
      </Modal>
    );
  };

  useEffect(() => {
    setStep(
      Array.from({ length: STEP_TITLES.length }, (_, index) => {
        return {
          title: STEP_TITLES[index],
          status: index + 1 <= position ? "completed" : "pending",
        };
      })
    );

    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, [position]);

  return (
    <S.CheckoutWrapper>
      <S.HeaderWrapper>
        <S.Title>Finalizar compra</S.Title>
        <div>
          <Step steps={step} />
        </div>
      </S.HeaderWrapper>

      {renderStep()}
      {renderCompletedModal()}
    </S.CheckoutWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      subTotal: 1000,
    },
  };
};

export default Checkout;
