import React, { useEffect, useState } from 'react'
import './MainImage/MainImage.css';
import '../../style/CommonStyle.css';
import '../../style/font/font.css';
import styled from 'styled-components';
import MainSlideShow from './MainSlideShow';
import { MainBannertData } from '../../data/MainBannerData';
import ScrollAniContainer from '../common/ScrollAniContainer/ScrollAniContainer';
import IllustContainer from '../common/ScrollAniContainer/IllustContainer';
import Charactor from '../../assets/curriculums/sanpati/portfolio/p04.webp';
import Logo from '../../assets/logos/logosimple.webp';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CopyAlert } from '../../store/CopyAlert';

interface MobileMainProps {
    mainPageTextChange: Function;
};

const MobileMain: React.FC<MobileMainProps> = ({ mainPageTextChange }) => {

    const navigate = useNavigate();
    const [, setCopyHandler] = useRecoilState(CopyAlert);

    const [mainSlideCurrent, setMainSlideCurrent] = useState<number>(1);
    const [isLoop, setIsLoop] = useState<boolean>(false);

    const handleCopyClipBoard = async (text: string) => {
        try {
          await navigator.clipboard.writeText(text);
          setCopyHandler(true);
        } catch (e) {
          alert('복사에 실패하였습니다');
        }
    };

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
    /* gap: 10px; */

    @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
`;

const MobileSlideShow = styled.div`
    width: 100%;
    height: 460px;
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
    margin-top: 100px;
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
    /* margin-top: 200px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
    position: relative;
`;

const InformContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const ContentText = styled.div`
    font-family: "ZingRustDemo";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #222020;
`;

const CharactorImage = styled.img`
    width: 100%;
    height: 700px;
    object-fit: cover;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Button = styled.div`
    width: 190px;
    font-family: "Pretendard";
    font-size: 10px;
    font-weight: 600;
    line-height: normal;
    color: #222020;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`;

export default MobileMain;