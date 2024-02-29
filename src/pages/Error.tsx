import React from 'react'
import styled from 'styled-components';
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    return (
        <ErrorContainer>
            <ErrorTitle>
                404
            </ErrorTitle>
            <TextWrapper>
                <Subtitle>
                    죄송합니다. 해당 페이지를 찾을 수 없습니다.
                </Subtitle>
                <Subtitle>
                    ( 404 Not Found )
                </Subtitle>
            </TextWrapper>
            <TextWrapper>
                <Content>
                    페이지의 주소가 잘못 입력되었거나, 주소가 변경 혹은 삭제되었을 수 있습니다.
                </Content>
                <Content>
                    혹은 현재 사이트의 상태가 불안정한 상태일 수 있습니다.
                </Content>
            </TextWrapper>
            <ButtonWrapper>
                <ButtonContainer onClick={() => navigate("/")}>
                    <Button />
                    <ButtonText>
                        메인으로 가기
                        <Icon>
                            <IoMdArrowRoundForward />
                        </Icon>
                    </ButtonText>
                </ButtonContainer>
                <ButtonContainer onClick={() => window.open("https://discord.gg/N7SEvBds4F")}>
                    <Button style={{backgroundColor: "#d2abe8"}}/>
                    <ButtonText>
                        문의하기
                        <Icon>
                            <IoMdArrowRoundForward />
                        </Icon>
                    </ButtonText>
                </ButtonContainer>
            </ButtonWrapper>
        </ErrorContainer>
    )
};

const ErrorContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    user-select: none;
    padding: 150px 0px;

    @media screen and (max-width: 500px) {
        padding: 100px 0px;
        gap: 20px;
    }
`;

const ErrorTitle = styled.div`
    font-family: 'NanumJangMiCe';
    font-size: 160px;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 16px;
    color: #3c3ad6;

    @media screen and (max-width: 500px) {
        font-size: 100px;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Subtitle = styled.div`
    font-family: "Pretendard";
    font-size: 22px;
    font-weight: 500;
    line-height: 100%;

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

const Content = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    color: #ADADAD;

    @media screen and (max-width: 500px) {
        font-size: 10px;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media screen and (max-width: 500px) {
        gap: 30px;
    }
`;

const Button = styled.div`
    width: 50px;
    height: 40px;
    border-radius: 40px;
    background-color: #b4d8ee;
    transition: all 0.3s;

    @media screen and (max-width: 500px) {
        width: 40px;
        height: 30px;
    }
`;

const ButtonText = styled.div`
    width: 100%;
    height: 100%;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 600;
    line-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: all 0.3s;

    @media screen and (max-width: 500px) {
        font-size: 10px;
    }
`;

const ButtonContainer = styled.div`
    width: 140px;
    height: 40px;
    border-radius: 40px;
    background-color: #f5f5f5;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &:hover {
        ${Button} {
            width: 140px;
        }
        
        ${ButtonText} {
            gap: 16px;
        }
    }

    @media screen and (max-width: 500px) {
        width: 100px;
        height: 30px;
    }
`;

const Icon = styled.div`
    font-size: 16px;
    color: #222020;

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

export default Error;