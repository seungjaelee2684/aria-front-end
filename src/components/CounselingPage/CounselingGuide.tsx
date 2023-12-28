import React from 'react'
import '../../style/font/font.css';
import styled from 'styled-components';
import { CounselingText, counselingGuide } from '../../languages/CounselingPageTrans';

const CounselingGuide = () => {

    const language = localStorage.getItem("language");

    type CounselingContentType =  {
        isred: boolean,
        content: string
    };
    
    type CounselingGuideType = {
        image: string,
        englishtext: CounselingContentType[],
        chinesetext: CounselingContentType[],
        japanesetext: CounselingContentType[],
        text: CounselingContentType[]
    };

    const counselingEmphasisTrans = (item : any) => {
        switch (language) {
            case "chinese" :
                return item?.chinesetext.isred;
            case "japanese" :
                return item?.japanesetext.isred;
            case "korean" :
                return item?.text.isred;
            default :
                return item?.englishtext.isred;
        };
    };

    const counselingContentTrans = (item : any) => {
        if (language === "chinese") {
            item?.chinesetext.map((text : CounselingContentType) => {
                // return (
                //     ()
                // )
            })
        };
        switch (language) {
            case "chinese" :
                return item?.chinesetext.content;
            case "japanese" :
                return item?.japanesetext.content;
            case "korean" :
                return item?.text.content;
            default :
                return item?.englishtext.content;
        };
    };

    const counselingTitleTrans = (Num : number) => {
        switch (language) {
            case "chinese" :
                return CounselingText[Num]?.chinesetext;
            case "japanese" :
                return CounselingText[Num]?.japanesetext;
            case "korean" :
                return CounselingText[Num]?.text;
            default :
                return CounselingText[Num]?.englishtext;
        };
    };

  return (
    <CounselingOutContainer>
        <GuideTitleContainer>
            {counselingTitleTrans(6)}
        </GuideTitleContainer>
        <CounselingContainer>
            {counselingGuide?.map((item : CounselingGuideType) => {
                return (
                    <GuideWrapper key={item.text[0].content}>
                        <GuideImage src={item?.image} alt=''/>
                        <GuideContentWrapper>
                            #
                            <GuideContent>
                                {counselingContentTrans(item)}
                            </GuideContent>
                        </GuideContentWrapper>
                    </GuideWrapper>
                );
            })}
        </CounselingContainer>
    </CounselingOutContainer>
  )
};

const CounselingOutContainer = styled.div`
    width: 900px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    @media screen and (max-width: 900px) {
        width: 96%;
    }
`;

const GuideTitleContainer = styled.div`
    font-size: 24px;
    font-family: "UniSansThin";
    font-weight: 600;
    line-height: 150%;
    color: #222020;
`;

const CounselingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
    color: #222020;

    @media screen and (max-width: 900px) {
        width: 96%;
    }

    @media screen and (max-width: 500px) {
        gap: 50px;
        font-size: 14px;
    }
`;

const GuideWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;

    @media screen and (max-width: 500px) {
        gap: 16px;
    }
`;

const GuideImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 0px auto;
`;

const GuideContentWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
`;

const GuideContent = styled.div`
    width: 100%;
    text-align: left;
    white-space: pre-line;
`;

const ColorGuideContent = styled.div`
    text-align: left;
    white-space: pre-line;
    color: #ff3ea3;
    font-weight: 600;
`;

export default CounselingGuide;