import React, { useState } from 'react'
import styled from 'styled-components';
import LogoImage from '../assets/logos/logosimple.png';
import TranslateIcon from '../assets/icons/translateicon.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import { GiEarthAmerica } from 'react-icons/gi';
import TranslateModal from '../components/common/TranslateModal';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const Check = () => {

    const language = useRecoilValue(translate);
    const [languageTrans, setLanguageTrans] = useRecoilState(translate);
    const [languageModal, setLanguageModal] = useState<boolean>(false);

    const checkText = ( Num : number ) => {
        if (Num === 0) {
            switch (language) {
                case "english" : 
                    return "Site Inspection Guide";
                case "japanese" : 
                    return "サイトチェックガイド";
                default : 
                    return "사이트 점검 안내";
            };
        } else if (Num === 1) {
            switch (language) {
                case "english" : 
                    return "ENG";
                case "japanese" : 
                    return "日本語";
                default : 
                    return "한국어";
            };
        } else if (Num === 2) {
            switch (language) {
                case "english" : 
                    return "Checking the system...";
                case "japanese" : 
                    return "システムチェック中...";
                default : 
                    return "시스템 점검중...";
            };
        } else if (Num === 3) {
            switch (language) {
                case "english" : 
                    return "We are checking the site for better service.";
                case "japanese" : 
                    return "より良いサービスを提供するためにサイトをチェックしています。";
                default : 
                    return "보다 나은 서비스를 제공하기 위해 사이트를 점검중입니다.";
            };
        } else if (Num === 4) {
            switch (language) {
                case "english" : 
                    return "We apologize for the inconvenience caused to use.";
                case "japanese" : 
                    return "ご利用にご不便をおかけして申し訳ございません。";
                default : 
                    return "이용에 불편을 끼쳐드려 죄송합니다.";
            };
        } else {
            switch (language) {
                case "english" : 
                    return "Inspection Time :";
                case "japanese" : 
                    return "点検時間 :";
                default : 
                    return "점검시간 :";
            };
        };
    };

  return (
    <LayoutContainer>
        <ItemContainer>
            <ItemWrapper>
                <TopLineContainer>
                    <LogoContainer>
                        <Logo src={LogoImage}/>
                        <LogoText>
                            {checkText(0)}
                        </LogoText>
                    </LogoContainer>
                    <div style={{position: "relative"}}>
                        <RightContainer onClick={() => setLanguageModal(!languageModal)}>
                            <GiEarthAmerica />
                            <TranslateButton>
                                {checkText(1)}
                            </TranslateButton>
                            {languageModal ? <MdArrowDropUp /> : <MdArrowDropDown />}
                        </RightContainer>
                        {languageModal
                                && <TranslateModal
                                    setLanguageModal={setLanguageModal}
                                    setLanguageTrans={setLanguageTrans}/>}
                    </div>
                </TopLineContainer>
                <ContentWrapper>
                    <TitleContainer>
                        {checkText(2)}
                    </TitleContainer>
                    <ContentContainer>
                        <Text>
                            {checkText(3)}
                        </Text>
                        <Text>
                            {checkText(4)}
                        </Text>
                    </ContentContainer>
                    <UnderContentContainer>
                        <UnderTextLine>
                            <UnderTitle>{checkText(5)}</UnderTitle>
                            2023/10/23 12:40 ~ 18:00
                        </UnderTextLine>
                        <UnderTextLine>
                            <UnderTitle>{checkText(5)}</UnderTitle>
                            2023/10/23 12:40 ~ 18:00
                        </UnderTextLine>
                        <UnderTextLine>
                            <UnderTitle>{checkText(5)}</UnderTitle>
                            2023/10/23 12:40 ~ 18:00
                        </UnderTextLine>
                    </UnderContentContainer>
                </ContentWrapper>
            </ItemWrapper>
        </ItemContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFF;
    position: relative;
    z-index: 101;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: end;
    gap: 24px;
    margin-bottom: 20px;
`;

const Logo = styled.img`
    width: 160px;
    height: 80px;
    object-fit: contain;
`;

const LogoText = styled.div`
    font-family: "Pretendard";
    font-size: 40px;
    font-weight: 600;
    line-height: normal;
    color: #222020;
`;

const ItemContainer = styled.div`
    width: 50%;
    height: 100%;
    margin: 0px auto;
    /* background-color: #e9e9e9; */
    color: #222020;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`;

const TopLineContainer = styled.div`
    width: 100%;
    border-bottom: 4px solid #222020;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 5px;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const ButtonIcon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

const TranslateButton = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
`;

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleContainer = styled.div`
    font-family: "Pretendard";
    font-size: 40px;
    font-weight: 800;
    line-height: 150%; 
    margin-top: 60px;
`;

const ContentContainer = styled.div`
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
`;

const Text = styled.div`
    color: #7e7e7e;
`;

const UnderContentContainer = styled.div`
    width: 80%;
    margin: 50px auto 50px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top: 2px dotted #ADADAD;
    border-bottom: 2px dotted #ADADAD;
    padding: 40px 0px;
`;

const UnderTextLine = styled.div`
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 300;
    line-height: 140%;
    color: #ADADAD;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

const UnderTitle = styled.div`
    color: red;
    font-weight: 600;
`;

export default Check;