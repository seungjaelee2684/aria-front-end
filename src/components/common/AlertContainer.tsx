import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { AlertModalOpen } from '../../store/AlertModalOpen';
import AlertModal from './AlertModal/AlertModal';

const AlertContainer = () => {

    const alertModal = useRecoilValue(AlertModalOpen);
    const { isOpen, whatAlert } = alertModal;

  return (
    <AlertLayout>
        {isOpen && <AlertModal />}
    </AlertLayout>
  )
};

const AlertLayout = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 102;

    @media screen and (max-width: 500px) {
        right: 40%;
    }
`;

export default AlertContainer;