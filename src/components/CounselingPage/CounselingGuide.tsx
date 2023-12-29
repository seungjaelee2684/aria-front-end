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
            return item?.chinesetext.map((text : CounselingContentType) => {
                return (
                    (text?.isred)
                        ? <ColorGuideContent key={text?.content}>
                            {text?.content}
                        </ColorGuideContent>
                        : <GuideContent key={text?.content}>
                            {text?.content}
                        </GuideContent>
                )
            })
        } else if (language === "japanese") {
            return item?.japanesetext.map((text : CounselingContentType) => {
                return (
                    (text?.isred)
                        ? <ColorGuideContent key={text?.content}>
                            {text?.content}
                        </ColorGuideContent>
                        : <GuideContent key={text?.content}>
                            {text?.content}
                        </GuideContent>
                )
            })
        } else if (language === "korean") {
            return item?.text.map((text : CounselingContentType) => {
                return (
                    (text?.isred)
                        ? <ColorGuideContent key={text?.content}>
                            {text?.content}
                        </ColorGuideContent>
                        : <GuideContent key={text?.content}>
                            {text?.content}
                        </GuideContent>
                )
            })
        } else {
            return item?.englishtext.map((text : CounselingContentType) => {
                return (
                    (text?.isred)
                        ? <ColorGuideContent key={text?.content}>
                            {text?.content}
                        </ColorGuideContent>
                        : <GuideContent key={text?.content}>
                            {text?.content}
                        </GuideContent>
                )
            })
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
                            <ContentInWrapper>
                                {counselingContentTrans(item)}
                            </ContentInWrapper>
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
        width: 650px;
    }

    @media screen and (max-width: 650px) {
        width: 96%;
    }
`;

const GuideTitleContainer = styled.div`
    font-size: 24px;
    font-family: "Pretendard";
    font-weight: 600;
    line-height: 150%;
    color: #222020;

    @media screen and (max-width: 900px) {
        font-size: 18px;
    }

    @media screen and (max-width: 650px) {
        font-size: 14px;
    }
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
        width: 650px;
        font-size: 18px;
    }

    @media screen and (max-width: 650px) {
        font-size: 12px;
        width: 96%;
        gap: 50px;
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
    gap: 8px;
`;

const ContentInWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 8px;

    @media screen and (max-width: 650px) {
        gap: 2px;
    }
`;

const GuideContent = styled.div`
    color: #222020;
`;

const ColorGuideContent = styled.div`
    color: #ff3ea3;
    font-weight: 800;
    font-size: 21px;
    /* text-decoration: underline; */

    @media screen and (max-width: 900px) {
        font-size: 19px;
    }

    @media screen and (max-width: 650px) {
        font-size: 13px;
        font-weight: 700;
    }
`;

export default CounselingGuide;