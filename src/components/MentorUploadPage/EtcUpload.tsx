import React from 'react'
import styled from 'styled-components';
import { BoxContainer } from './InformUpload';

interface EtcUploadProps {
  snsLink: any;
  setSnsLink: React.Dispatch<React.SetStateAction<any>>;
};

const EtcUpload : React.FC<EtcUploadProps> = ({ snsLink, setSnsLink }) => {
  return (
    <BoxContainer>
      EtcUpload
    </BoxContainer>
  )
};

const LayoutContainer = styled.div`
  width: 96%;
  height: 98%;
`;

export default EtcUpload;