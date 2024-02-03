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

    const onChangeInputHanlder = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMentorInfo({
            ...mentorInfo,
            [name]: value
        });
    };

    return (
        <BoxContainer>
            InformUpload
        </BoxContainer>
    )
};

export const BoxContainer = styled.div`
    min-width: 100%;
    height: 100%;
    background-color: #f3f3f3;
`;

export default InformUpload;