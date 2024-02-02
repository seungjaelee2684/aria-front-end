import React, { useState } from 'react'
import styled from 'styled-components';

interface InformUploadProps {
    
};

const InformUpload: React.FC<InformUploadProps> = () => {

    const [mentorInfo, setMentorInfo] = useState<any>({
        englishname: null,
        chinesename: null,
        japanesename: null,
        nickname: null,
        nation: null,
        open: null
    });

    return (
        <BoxContainer>
            InformUpload
        </BoxContainer>
    )
};

export const BoxContainer = styled.div`
    min-width: 100%;
    height: 100%;
    background-color: #FCFCFC;
`;

export default InformUpload;