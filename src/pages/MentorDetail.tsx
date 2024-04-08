import React, { useState } from 'react'
import '../style/font/font.css';
import '../style/PassTicket.css';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { mentorListData } from '../data/MentorData';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import { RxHamburgerMenu } from "react-icons/rx";
import PortfolioModal from '../components/MentorDetailPage/PortfolioModal/PortfolioModal';
import { etcTextTrans } from '../languages/ETCTrans';
import { noticeData } from '../data/NoticeData';
import { TbArrowBigDownLineFilled } from "react-icons/tb";

const MentorDetail = () => {

    const { id } = useParams();
    const language = localStorage.getItem("language");
    const navigate = useNavigate();

    const seasonPassList = noticeData?.filter((item: any) => item?.contents.status === "season pass");
    const seasonPass = seasonPassList[0] ? seasonPassList[0] : undefined;

    const [isOpenPortfolio, setIsOpenPortfolio] = useState<{
        isopen: boolean,
        image: string
    }>({
        isopen: false,
        image: ""
    });
    const { isopen } = isOpenPortfolio;
    const mentorInfo = mentorListData?.filter((item) => item.id === id);

    const ListTranslate = (Num : number) => {
        switch (language) {
            case "japanese" :
                return etcTextTrans[Num]?.japanesetext;
            case "korean" :
                return etcTextTrans[Num]?.text;
            default :
                return etcTextTrans[Num]?.englishtext;
        };
    };

    const curriculumTranslate = () => {
        if (language === "japanese") {
            return (
                <InContainer>
                    <CurriculumImg src={mentorInfo[0]?.content.japanesecontent[0]} alt=''/>
                    <CurriculumSNS>
                        {mentorInfo[0]?.sns.map((item : {icon: string, link: string}) => {
                            return (
                                <SNSIcons
                                    key={item?.icon}
                                    style={{
                                        cursor: `${(item?.link === "") ? "default" : "pointer"}`
                                    }}
                                    src={item?.icon}
                                    alt=''
                                    onClick={() => {
                                        if (item?.link !== "") {
                                            window.open(item?.link)
                                        }
                                    }}/>
                            )
                        })}
                    </CurriculumSNS>
                    {mentorInfo[0]?.content.japanesecontent.map((item : string) => {
                        return (
                            (mentorInfo[0]?.content.japanesecontent.indexOf(item) !== 0)
                                &&  <CurriculumImg
                                    key={item}
                                    src={item}
                                    alt=''/>  
                        )
                    })}
                    <PortfolioWrapper>
                        {mentorInfo[0]?.portfolio.map((item : string, index : number) => {
                            return (
                                <PortfolioImage
                                    key={index}
                                    src={item}
                                    alt=''
                                    loading="lazy"
                                    decoding="async"
                                    onClick={() => setIsOpenPortfolio({...isOpenPortfolio, isopen: true, image: item})}/>
                            )
                        })}
                        {isopen
                            && <PortfolioModal 
                                isOpenPortfolio={isOpenPortfolio}
                                setIsOpenPortfolio={setIsOpenPortfolio}/>}
                    </PortfolioWrapper>
                </InContainer>
            );
        } else if (language === "korean") {
            return (
                <InContainer>
                    <CurriculumImg src={mentorInfo[0]?.content.koreancontent[0]} alt=''/>
                    <CurriculumSNS>
                        {mentorInfo[0]?.sns.map((item : {icon: string, link: string}) => {
                            return (
                                <SNSIcons
                                    key={item?.icon}
                                    style={{
                                        cursor: `${(item?.link === "") ? "default" : "pointer"}`
                                    }}
                                    src={item?.icon}
                                    alt=''
                                    onClick={() => {
                                        if (item?.link !== "") {
                                            window.open(item?.link)
                                        }
                                    }}/>
                            )
                        })}
                    </CurriculumSNS>
                    {mentorInfo[0]?.content.koreancontent.map((item : string) => {
                        return (
                            (mentorInfo[0]?.content.koreancontent.indexOf(item) !== 0)
                                &&  <CurriculumImg
                                    key={item}
                                    src={item}
                                    alt=''/>  
                        )
                    })}
                    <PortfolioWrapper>
                        {mentorInfo[0]?.portfolio.map((item : string, index : number) => {
                            return (
                                <PortfolioImage
                                    key={index}
                                    src={item}
                                    alt=''
                                    loading="lazy"
                                    decoding="async"
                                    onClick={() => setIsOpenPortfolio({...isOpenPortfolio, isopen: true, image: item})}/>
                            )
                        })}
                        {isopen
                            && <PortfolioModal 
                                isOpenPortfolio={isOpenPortfolio}
                                setIsOpenPortfolio={setIsOpenPortfolio}/>}
                    </PortfolioWrapper>
                </InContainer>
            );
        } else {
            return (
                <InContainer>
                    <CurriculumImg src={mentorInfo[0]?.content.englishcontent[0]} alt=''/>
                    <CurriculumSNS>
                        {mentorInfo[0]?.sns.map((item : {icon: string, link: string}) => {
                            return (
                                <SNSIcons
                                    key={item?.icon}
                                    style={{
                                        cursor: `${(item?.link === "") ? "default" : "pointer"}`
                                    }}
                                    src={item?.icon}
                                    alt=''
                                    onClick={() => {
                                        if (item?.link !== "") {
                                            window.open(item?.link)
                                        }
                                    }}/>
                            )
                        })}
                    </CurriculumSNS>
                    {mentorInfo[0]?.content.englishcontent.map((item : string) => {
                        return (
                            (mentorInfo[0]?.content.englishcontent.indexOf(item) !== 0)
                                &&  <CurriculumImg
                                    key={item}
                                    src={item}
                                    alt=''/>  
                        )
                    })}
                    <PortfolioWrapper>
                        {mentorInfo[0]?.portfolio.map((item : string, index : number) => {
                            return (
                                <PortfolioImage
                                    key={index}
                                    src={item}
                                    alt=''
                                    loading="lazy"
                                    decoding="async"
                                    onClick={() => setIsOpenPortfolio({...isOpenPortfolio, isopen: true, image: item})}/>
                            )
                        })}
                        {isopen
                            && <PortfolioModal 
                                isOpenPortfolio={isOpenPortfolio}
                                setIsOpenPortfolio={setIsOpenPortfolio}/>}
                    </PortfolioWrapper>
                </InContainer>
            );
        };
    };

  return (
    <LayoutContainer>
        <ClickNaviArrowWrapper>
            <ClickNaviArrow className="ClickArrow">
                <TbArrowBigDownLineFilled />
            </ClickNaviArrow>
            <PassTicketButton
                className="PassTicketBtn"
                onClick={() => navigate(`/notice/detail/${seasonPass?.id}`)}>
                SEASON PASS
            </PassTicketButton>
        </ClickNaviArrowWrapper>
        {curriculumTranslate()}
        <ListBackMoveBtnContainer>
            {/* <ListBackMoveButton onClick={() => navigate(`/mentor/detail/${prevId.toString()}`)}>
                UP
            </ListBackMoveButton>
            <ListBackMoveButton onClick={() => navigate(`/mentor/detail/${nextId.toString()}`)}>
                DOWN
            </ListBackMoveButton> */}
            <ListBackMoveButton onClick={() => navigate("/mentor")}>
                <RxHamburgerMenu />
                {ListTranslate(7)}
            </ListBackMoveButton>
        </ListBackMoveBtnContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    width: 100%;
    padding: 80px 0px 120px 0px;

    @media screen and (max-width: 500px) {
        padding: 40px 0px 80px 0px;
    }
`;

const InContainer = styled.div`
    width: 700px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;

    @media screen and (max-width: 700px) {
        width: 96%;
        gap: 60px;
    }

    @media screen and (max-width: 500px) {
        gap: 30px;
    }
`;

const CurriculumImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    user-select: none;
`;

const CurriculumSNS = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 70px;
    padding: 100px 0px;

    @media screen and (max-width: 700px) {
        width: 96%;
        gap: 50px;
        padding: 80px 0px;
    }

    @media screen and (max-width: 500px) {
        gap: 30px;
        padding: 50px 0px;
    }
`;

const SNSIcons = styled.img`
    width: 70px;
    height: 70px;
    object-fit: contain;

    @media screen and (max-width: 700px) {
        width: 60px;
        height: 60px;
    }

    @media screen and (max-width: 500px) {
        width: 30px;
        height: 30px;
    }
`;

const PortfolioWrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const PortfolioImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: zoom-in;
`;

const ListBackMoveBtnContainer = styled.div`
    width: 700px;
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 0px auto;
    padding: 40px 0px 0px 0px;
    gap: 10px;

    @media screen and (max-width: 700px) {
        width: 96%;
        padding: 20px 0px 0px 0px;
    }
`;

const ListBackMoveButton = styled.div`
    width: 80px;
    height: 46px;
    background-color: #5C9DFF;
    color: #FCFCFC;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    gap: 5px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        width: 50px;
        height: 30px;
        font-size: 12px;
    }
`;

const ClickNaviArrowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;
    position: fixed;
    bottom: 30px;
    right: 310px;
    z-index: 100;

    @media screen and (max-width: 1920px) {
        right: 265px;
    }

    @media screen and (max-width: 1320px) {
        bottom: 10px;
        right: 250px;
    }

    @media screen and (max-width: 500px) {
        bottom: 60px;
        right: 50px;
        font-size: 20px;
    }
`;

const ClickNaviArrow = styled.div`
    font-size: 30px;
    color: #222020;

    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`;

const PassTicketButton = styled.div`
    width: 42px;
    height: 42px;
    font-family: "Pretendard";
    font-size: 9px;
    font-weight: 400;
    line-height: 100%;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #274cf1;
    box-shadow: #222020a9 0px 2px 3px 1px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        font-size: 8px;
        background-color: #5570e9;
    }

    @media screen and (max-width: 1920px) {
        width: 40px;
        height: 40px;
    }

    @media screen and (max-width: 500px) {
        width: 30px;
        height: 30px;
        font-size: 6px;
    }
`;

export default MentorDetail;