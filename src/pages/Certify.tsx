import React, { FormEvent, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { postAuthorizationApi } from '../api/users';
import axios from 'axios';

const Certify = () => {
  
    const queryClient = useQueryClient;
    const navigate = useNavigate();

    const [certifyKey, setCertifyKey] = useState<{ operateId: string, password: string }>({
        operateId: "",
        password: ""
    });

    const onChangePasswordHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCertifyKey({
            ...certifyKey,
            [name]: value
        });
    };
    console.log("키 인증", certifyKey);

    // const mutation = useMutation(() => 
    // postAuthorizationApi(certifyKey), {
    //     onSuccess: (res) => {
    //         console.log("res", res);
    //         let jwtToken = res.headers.authorization;
    //         if (jwtToken) {
    //             console.log(jwtToken);
    //             localStorage.setItem("Authorization", jwtToken);
    //         }
    //         setCertifyKey({...certifyKey, operateId: "", password: ""});
    //         navigate("/mentor");
    //     }
    // }
    // );
    
    const onSubmitCertifyHandler = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // mutation.mutate();
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/certification`, certifyKey)
        .then(response => {
            const jwtToken = response.headers.authorization;
            if (jwtToken) {
                console.log(jwtToken);
                localStorage.setItem("Authorization", jwtToken);
            };
        })
        .catch(error => {
            console.error("error", error);
        })
    };
  
    return (
    <BackgroundContainer>
        <ModalContainer>
            <TopLaneContainer>
                운영자 KEY 인증
            </TopLaneContainer>
            <ContentContainer onSubmit={onSubmitCertifyHandler}>
                <InputBar
                    type='text'
                    autoComplete="off"
                    name='operateId'
                    value={certifyKey.operateId}
                    placeholder='Type your ID'
                    onChange={onChangePasswordHandler}/>
                <InputBar
                    type='password'
                    autoComplete="off"
                    name='password'
                    value={certifyKey.password}
                    placeholder='Type operator KEY ( ex: DE25QL4D8V29... )'
                    onChange={onChangePasswordHandler}/>
                <InformationContent>
                    * 운영자 모드로 돌입하려면 정확한 운영자 Key를 입력해주십시오.
                </InformationContent>
                <ButtonWrapper>
                    <Button
                        type='submit'
                        color='#61a0ff'
                        onClick={() => axios.post(`${process.env.REACT_APP_SERVER_URL}/api/certification`, certifyKey)
                        .then(response => {
                            const jwtToken = response.headers;
                            if (jwtToken) {
                                console.log(jwtToken);
                                // localStorage.setItem("Authorization", jwtToken);
                            };
                        })
                        .catch(error => {
                            console.error("error", error);
                        })}>
                        ENTER
                    </Button>
                    <Button color='#f5adad'>
                        CLOSE
                    </Button>
                </ButtonWrapper>
            </ContentContainer>
        </ModalContainer>
    </BackgroundContainer>
  )
};

const BackgroundContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #00000080;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    width: 500px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #FFFFFF;
    overflow: hidden;
    position: relative;
    font-family: "Pretendard";
    line-height: normal;
    color: #FFFFFF;
`;

const TopLaneContainer = styled.div`
    width: 100%;
    min-height: 60px;
    background-color: #5C9DFF;
    display: flex;
    align-items: center;
    text-indent: 30px;
    font-size: 20px;
    font-weight: 600;
    user-select: none;
`;

const ContentContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const InputBar = styled.input`
    width: 408px;
    height: 36px;
    background-color: #FCFCFC;
    border: 1px solid #ADADAD;
    padding: 0px 16px;
    border-radius: 3px;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 500;
    outline: none;

    &::placeholder {
        color: #ADADAD;
    }

    &:focus {
        border: 1px solid #5C9DFF;
    }
`;

const InformationContent = styled.div`
    width: 440px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    color: #ADADAD;
    text-align: start;
    user-select: none;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

const Button = styled.button<{ color : string }>`
    width: 130px;
    height: 36px;
    border: none;
    background-color: ${(props) => props.color};
    color: #FFFFFF;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 500px;
    line-height: normal;
    border-radius: 3px;
    cursor: pointer;
`;

export default Certify;