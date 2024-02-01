import React, { useEffect, useState } from 'react'
import './MainImage/MainImage.css';
import '../../style/CommonStyle.css';
import '../../style/font/font.css';
import styled from 'styled-components';
import MainSlideShow from './MainSlideShow';
import ScrollAniContainer from '../common/ScrollAniContainer/ScrollAniContainer';
import IllustContainer from '../common/ScrollAniContainer/IllustContainer';
import Charactor from '../../assets/curriculums/sanpati/portfolio/p04.webp';
import Logo from '../../assets/logos/logosimple.webp';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CopyAlert } from '../../store/CopyAlert';
import MentorEscape from '../../assets/curriculums/escape/portfolio/p04.webp';
import { mentorListData } from '../../data/MentorData';
import { MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { etcTextTrans } from '../../languages/ETCTrans';
import { FaUserTie } from "react-icons/fa6";

interface MobileMainProps {
    mainPageTextChange: Function;
};

const MobileMain: React.FC<MobileMainProps> = ({ mainPageTextChange }) => {

    const navigate = useNavigate();
    const language = localStorage.getItem("language");
    const [, setCopyHandler] = useRecoilState(CopyAlert);

    const newSlideDataList = mentorListData?.filter((data) => data?.isready);
    const [mainSlideCurrent, setMainSlideCurrent] = useState<number>(1);
    const [isLoop, setIsLoop] = useState<boolean>(false);

    const mobileTextTrans = (Num : number) => {
        switch (language) {
            case "chinese" :
                return etcTextTrans[Num]?.chinesetext;
            case "japanese" :
                return etcTextTrans[Num]?.japanesetext;
            case "korean" :
                return etcTextTrans[Num]?.text;
            default :
                return etcTextTrans[Num]?.englishtext;
        };
    };

    useEffect(() => {
        const slideShowInterval = setInterval(() => {
            if (mainSlideCurrent === newSlideDataList.length) {
                setIsLoop(true);
                setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (newSlideDataList.length + 2));
            } else {
                setIsLoop(false);
                setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (newSlideDataList.length + 2));
            };
        }, 5000);

        return () => {
            clearInterval(slideShowInterval);
        };
    }, [mainSlideCurrent]);

    // const onClickMainPrevHandler = () => {
    //     if (mainSlideCurrent === 0) {
    //         setIsLoop(false);
    //         setMainSlideCurrent(MainBannertData?.length - 1);
    //     } else {
    //         if (mainSlideCurrent === 1) {
    //             setIsLoop(true);
    //         } else {
    //             setIsLoop(false);
    //         };
    //         setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent - 1) % (MainBannertData.length));
    //     };
    // };

    // const onClickMainNextHandler = () => {
    //     if (mainSlideCurrent === MainBannertData.length) {
    //         setIsLoop(true);
    //         setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
    //     } else {
    //         setIsLoop(false);
    //         setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
    //     };
    // };

    return (
        <MobileMainLayout>
            <MobileSlideShow>
                <MainSlideShow
                    mainSlideCurrent={mainSlideCurrent}
                    setMainSlideCurrent={setMainSlideCurrent}
                    isLoop={isLoop}
                    setIsLoop={setIsLoop} />
                <SlideNumberWrapper>
                    {newSlideDataList?.map((item: any, index: number) => {
                        return (
                            (mainSlideCurrent === (index + 1))
                                ? <SlideNumber
                                    key={item?.id}
                                    height='7px'
                                    color='#ffffffc0' />
                                : <SlideNumber
                                    key={item?.id}
                                    height='5px'
                                    color='#808080ae' />
                        )
                    })}
                </SlideNumberWrapper>
            </MobileSlideShow>
            <InformContentContainer>
                {/* <WrapperContainer /> */}
                <InformTitleContainer>
                    <InformTitle>
                        <MentorIcon>
                            <FaUserTie />
                        </MentorIcon>
                        {mobileTextTrans(5)}
                    </InformTitle>
                    <MoreButton onClick={() => navigate("/mentor")}>
                        {mobileTextTrans(6)}
                        <MdKeyboardArrowRight />
                    </MoreButton>
                </InformTitleContainer>
                <CardListContainer>
                    {mentorListData?.map((item : any, index : number) => {
                        return (
                            <Card
                                key={item?.id}
                                onClick={() => navigate(`/mentor/detail/${item?.id}`)}>
                                <MentorImage src={item?.portfolio[3]} alt=''/>
                                <HoverContainer />
                                <ButtonText>
                                    {item?.englishname}
                                    <ArrowContainer>
                                        <MdKeyboardDoubleArrowRight />
                                    </ArrowContainer>
                                </ButtonText>
                            </Card>
                        )
                    })}
                </CardListContainer>
                    {/* <IllustContainer>
                        <CharactorImage src={Charactor} alt='' />
                    </IllustContainer>
                    <ScrollAniContainer>
                        <InformLogoContainer>
                            Aria
                        </InformLogoContainer>
                    </ScrollAniContainer>
                    <ScrollAniContainer>
                        <InformTitleContainer>
                            <InformTitle>
                                GLOBAL ART
                            </InformTitle>
                            <InformTitle>
                                ACADEMY
                            </InformTitle>
                        </InformTitleContainer>
                    </ScrollAniContainer>
                    <ScrollAniContainer>
                        <InformContentWrapper>
                            <ContentText>
                                {mainPageTextChange(8)}
                            </ContentText>
                            <ContentText>
                                {mainPageTextChange(9)}
                            </ContentText>
                            <ContentText>
                                {mainPageTextChange(10)}
                            </ContentText>
                        </InformContentWrapper>
                    </ScrollAniContainer>
                    <ScrollAniContainer>
                        <InformContentWrapper>
                            <ContentText>
                                {mainPageTextChange(11)}
                            </ContentText>
                            <ContentText>
                                {mainPageTextChange(12)}
                            </ContentText>
                            <ContentText>
                                {mainPageTextChange(13)}
                            </ContentText>
                        </InformContentWrapper>
                    </ScrollAniContainer>
                    <ButtonWrapper>
                        <ScrollAniContainer>
                            <Button
                                onClick={() => handleCopyClipBoard("aria.artacademy@gmail.com")}
                                className='SeeMoreButton'>
                                <span>
                                    CLICK TO COPY EMAIL
                                </span>
                            </Button>
                        </ScrollAniContainer>
                        <ScrollAniContainer>
                            <Button
                                onClick={() => navigate("/support/counseling")}
                                className='SeeMoreButton'>
                                <span>
                                    GO TO STUDENT COUNSELING PAGE
                                </span>
                            </Button>
                        </ScrollAniContainer>
                    </ButtonWrapper> */}
                <GrayContainer />
            </InformContentContainer>
        </MobileMainLayout>
    )
};

const MobileMainLayout = styled.div`
    /* background-color: #222020; */
    display: none;
    /* justify-content: center; */
    /* gap: 10px; */

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 40px 0px 0px 0px;
    }
`;

const MobileSlideShow = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
`;

const SlideNumberWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    position: absolute;
    bottom: 70px;
    left: 40px;
    gap: 4px;
`;

const SlideNumber = styled.div<{ color: string, height: string }>`
    width: 20px;
    box-shadow: #5b5b5b8d 0px 1px 5px 0px;
    height: ${(props) => props.height};
    background-color: ${(props) => props.color};
    transition: all 0.6s;
`;

const InformTitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: end;
    gap: 8px;
`;

const MentorIcon = styled.div`
    width: 14px;
    height: 14px;
    border: 1px solid #706efa;
    border-radius: 100%;
    font-size: 10px;
    font-weight: 700;
    color: #706efa;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WrapperContainer = styled.div`
    width: 100%;
    height: 30px;
    position: fixed;
    top: 10px;
    left: 0;
    z-index: 100;
    background-color: #FFFFFF;
`;

const InformTitle = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    color: #222020;
    /* text-indent: 20px; */
    display: flex;
    align-items: center;
    gap: 3px;
    padding-left: 20px;
`;

const MoreButton = styled.div`
    color: #ADADAD;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
`;

const InformContentContainer = styled.div`
    width: 100%;
    min-height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: absolute;
    top: 300px;
    left: 0;
    z-index: 100;
    background-color: #FFFFFF;
    border-radius: 16px 16px 0px 0px;
    box-shadow: #8a8a8a57 0 -2px 5px 0;
    padding-top: 30px;
`;

const GrayContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eaf4ff;
    position: absolute;
    top: 130px;
    left: 0;
    z-index: 80;
`;

const CardListContainer = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const HoverContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background: linear-gradient(to right, #222020c0, #FFFFFFc0);
    transition: all 0.3s;
    opacity: 0;
`;

const ButtonText = styled.div`
    width: 80%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 100;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    color: #FFFFFF;
    font-family: "Pretendard";
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    transition: all 0.2s;
`;

const ArrowContainer = styled.div`
    font-size: 32px;
    color: #FFFFFF;
    display: flex;
    opacity: 0;
    transition: all 0.2s;
`;

const Card = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    /* border: 1px solid #e9e9e9; */
    box-shadow: #b8b8b834 1px 1px 20px 0;
    position: relative;
    z-index: 97;
    cursor: pointer;

    &:hover ${HoverContainer} {
        opacity: 1;
    }

    &:hover ${ButtonText} {
        gap: 20px;
    }

    &:hover ${ArrowContainer} {
        opacity: 1;
    }
`;

const MentorImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 20%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 98;
`;

// const InformContentWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 8px;
// `;

// const ContentText = styled.div`
//     font-family: "ZingRustDemo";
//     font-size: 14px;
//     font-weight: 400;
//     line-height: normal;
//    /* color: #222020; */
// `;

// const CharactorImage = styled.img`
//     width: 100%;
//     height: 700px;
//     object-fit: cover;
// `;

// const ButtonWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 10px;
// `;

// const Button = styled.div`
//     width: 190px;
//     font-family: "Pretendard";
//     font-size: 10px;
//     font-weight: 600;
//     line-height: normal;
//    /* color: #222020; */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     user-select: none;
// `;

export default MobileMain;