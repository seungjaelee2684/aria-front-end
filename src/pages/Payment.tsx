import React from 'react'
import styled from 'styled-components';

const Payment = () => {
  return (
    <PaymentLayout>
        Payment
    </PaymentLayout>
  )
};

const PaymentLayout = styled.div`
    width: 100%;
    padding: 80px 0px 100px 0px;

    @media screen and (max-width: 500px) {
        padding: 50px 0px 60px 0px;
    }
`;

export default Payment;