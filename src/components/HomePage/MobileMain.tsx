import React, { useEffect, useState } from 'react'
import './MainImage/MainImage.css';
import '../../style/font/font.css';
import styled from 'styled-components';
import MainSlideShow from './MainSlideShow';
import { MainBannertData } from '../../data/MainBannerData';
import ScrollAniContainer from '../common/ScrollAniContainer/ScrollAniContainer';

interface MobileMainProps {
    mainPageTextChange: Function;
};

const MobileMain : React.FC<MobileMainProps> = ({ mainPageTextChange }) => {

    const [mainSlideCurrent, setMainSlideCurrent] = useState<number>(1);
    const [isLoop, setIsLoop] = useState<boolean>(false);

    useEffect(() => {
        const slideShowInterval = setInterval(() => {
            if (mainSlideCurrent === MainBannertData.length) {
                setIsLoop(true);
                setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
            } else {
                setIsLoop(false);
                setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
            };
        }, 5000);

        return () => {
            clearInterval(slideShowInterval);
        };
    }, [mainSlideCurrent]);

    const onClickMainPrevHandler = () => {
        if (mainSlideCurrent === 0) {
            setIsLoop(false);
            setMainSlideCurrent(MainBannertData?.length - 1);
        } else {
            if (mainSlideCurrent === 1) {
                setIsLoop(true);
            } else {
                setIsLoop(false);
            };
            setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent - 1) % (MainBannertData.length));
        };
    };

    const onClickMainNextHandler = () => {
        if (mainSlideCurrent === MainBannertData.length) {
            setIsLoop(true);
            setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
        } else {
            setIsLoop(false);
            setMainSlideCurrent((mainSlideCurrent) => (mainSlideCurrent + 1) % (MainBannertData.length + 2));
        };
    };

    return (
        <MobileMainLayout>
            <MobileSlideShow>
                <MainSlideShow
                    mainSlideCurrent={mainSlideCurrent}
                    setMainSlideCurrent={setMainSlideCurrent}
                    isLoop={isLoop}
                    setIsLoop={setIsLoop} />
                <SlideNumberWrapper>
                    {MainBannertData?.map((item : any, index : number) => {
                        return (
                            (mainSlideCurrent === (index + 1))
                                ? <SlideNumber
                                    key={item?.id}
                                    height='6px'
                                    color='#FFFFFF' />
                                : <SlideNumber
                                    key={item?.id}
                                    height='4px'
                                    color='#ADADAD' />
                        )
                    })}
                </SlideNumberWrapper>
            </MobileSlideShow>          
            <InformContentContainer>
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
            </InformContentContainer>
        </MobileMainLayout>
    )
};

const MobileMainLayout = styled.div`
    width: 100%;
    height: 1000px;
    padding: 50px auto 0px auto;
    /* background-color: #222020; */
    display: none;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
`;

const MobileSlideShow = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
`;

const SlideNumberWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: end;
    position: absolute;
    bottom: 0;
    left: 0;
    gap: 2px;
`;

const SlideNumber = styled.div<{ color : string, height : string }>`
    width: 100%;
    box-shadow: #5b5b5b78 0px -2px 4px 0px;
    height: ${(props) => props.height};
    background-color: ${(props) => props.color};
    transition: all 0.6s;
`;

const InformTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const InformTitle = styled.div`
    font-family: "Pretendard";
    font-size: 15px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 8px;
    color: #4787d1;
`;

const InformContentContainer = styled.div`
    margin-top: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
`;

const InformContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const ContentText = styled.div`
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    color: #222020;
`;

export default MobileMain;