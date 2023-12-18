import React from 'react'
import styled from 'styled-components';
import { counselingGuide } from '../../languages/CounselingPageTrans';

const CounselingGuide = () => {

    const language = localStorage.getItem("language");

    type CounselingGuideType = {
        image: string,
        englishtext: string,
        chinesetext: string,
        japanesetext: string,
        text: string
    };

    const counselingContentTrans = (item : any) => {
        switch (language) {
            case "chinese" :
                return item?.chinesetext;
            case "japanese" :
                return item?.japanesetext;
            case "korean" :
                return item?.text;
            default :
                return item?.englishtext;
        };
    };

  return (
    <CounselingContainer>
        {counselingGuide?.map((item : CounselingGuideType) => {
            return (
                <GuideWrapper key={item.text}>
                    <GuideImage src={item?.image} alt=''/>
                    <GuideContent>
                        {counselingContentTrans(item)}
                    </GuideContent>
                </GuideWrapper>
            );
        })}
    </CounselingContainer>
  )
};

const CounselingContainer = styled.div`
    width: 900px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    color: #222020;

    @media screen and (max-width: 900px) {
        width: 96%;
    }
`;

const GuideWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

const GuideImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 0px auto;
`;

const GuideContent = styled.div`
    width: 100%;
    text-align: left;
`;

export default CounselingGuide;