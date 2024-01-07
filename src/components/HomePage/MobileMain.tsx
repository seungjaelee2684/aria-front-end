import React, { useEffect, useState } from 'react'
import './MainImage/MainImage.css';
import '../../style/font/font.css';
import styled from 'styled-components';
import MainSlideShow from './MainSlideShow';
import { MainBannertData } from '../../data/MainBannerData';
import ScrollAniContainer from '../common/ScrollAniContainer/ScrollAniContainer';
import IllustContainer from '../common/ScrollAniContainer/IllustContainer';
import Charactor from '../../assets/images/rapla2.png';
import Logo from '../../assets/logos/logosimple.webp';

interface MobileMainProps {
    mainPageTextChange: Function;
};

const MobileMain: React.FC<MobileMainProps> = ({ mainPageTextChange }) => {

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
                    {MainBannertData?.map((item: any, index: number) => {
                        return (
                            (mainSlideCurrent === (index + 1))
                                ? <SlideNumber
                                    key={item?.id}
                                    height='7px'
                                    color='#ffffffc0' />
                                : <SlideNumber
                                    key={item?.id}
                                    height='5px'
                                    color='#8080806f' />
                        )
                    })}
                </SlideNumberWrapper>
            </MobileSlideShow>
            <InformContentContainer>
                <IllustContainer>
                    <CharactorImage src={Charactor} alt='' />
                </IllustContainer>
                <ScrollAniContainer>
                    <InformLogoContainer src={Logo} alt='' />
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
                    <Button>
                        <Icon>
                        CLICK TO COPY EMAIL
                        </Icon>
                    </Button>
                    <Button>
                        <Icon>
                        GO TO STUDENT COUNSELING PAGE
                        </Icon>
                    </Button>
                </ButtonWrapper>
            </InformContentContainer>
        </MobileMainLayout>
    )
};

const MobileMainLayout = styled.div`
    width: 100%;
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
    justify-content: center;
    align-items: end;
    position: absolute;
    bottom: 10px;
    left: 0;
    gap: 2px;
`;

const SlideNumber = styled.div<{ color: string, height: string }>`
    width: 50px;
    box-shadow: #5b5b5b78 0px 2px 4px 0px;
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

const InformLogoContainer = styled.img`
    width: 150px;
    height: 70px;
    object-fit: cover;
`;

const InformTitle = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 8px;
    color: #0a65cc;
`;

const InformContentContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;
    position: relative;
`;

const InformContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const ContentText = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #222020;
`;

const CharactorImage = styled.img`
    width: 300px;
    height: auto;
    object-fit: cover;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const Icon = styled.span`
    &:after {
        content: "\00bb";
        opacity: 0;
        position: absolute;
        top: 0;
        right: -10px;
    }
`;

const Button = styled.div`
    width: 200px;
    cursor: pointer;
    position: relative;
    font-family: "Pretendard";
    font-size: 9px;
    font-weight: 600;
    line-height: normal;
    color: #222020;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: 0.5s;

    &:hover {
        padding-right: 10px;
    }

    &:hover ${Icon}:after {
        opacity: 1;
        right: 0;
    }
`;

export default MobileMain;