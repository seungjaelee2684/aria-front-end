import React from 'react'
import styled from 'styled-components';
import { PayPalButtons } from '@paypal/react-paypal-js';

interface PayPalComponentProps {
  paypalModal: boolean,
  setPaypalModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PayPalComponent : React.FC<PayPalComponentProps> = ({ paypalModal, setPaypalModal }) => {
  return (
    <PayPalContainer>
      <PayPalButtons />
    </PayPalContainer>
  )
};

const PayPalContainer = styled.div`
  width: 200px;
  padding: 20px 40px;
  background-color: #FFFFFF;
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 100;
  box-shadow: #22202080 0px 0px 4px 0px;
`;

export default PayPalComponent;