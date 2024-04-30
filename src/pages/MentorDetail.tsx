import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import { RxHamburgerMenu } from "react-icons/rx";
import PortfolioModal from '../components/MentorDetailPage/PortfolioModal/PortfolioModal';
import { etcTextTrans } from '../languages/ETCTrans';
import { useQuery } from 'react-query';
import { getMentorDetailApi } from '../api/mentors';
import { socialLinkData } from '../data/SocialLinkData';
import { TbArrowBigDownLineFilled } from 'react-icons/tb';
import { noticeData } from '../data/NoticeData';

const MentorDetail = () => {

    const { id } = useParams();

    const { isLoading, isError, error, data } = useQuery(["getMentorInfo", id], () => getMentorDetailApi(id), {
        refetchOnWindowFocus: false
    });
    console.log("강사 상세정보", data);

    const mentorInfo = data?.data.mentorDetailData;

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
                    <CurriculumImg src={mentorInfo?.mentorCurriculum.JPN[0]} alt=''/>
                    <CurriculumSNS>
                        {mentorInfo?.links.map((item : any, index : number) => {
                            return (
                                <SNSIcons
                                    key={index}
                                    style={{
                                        cursor: `${(item?.link === "") ? "default" : "pointer"}`
                                    }}
                                    src={(item?.link === "") ? socialLinkData[index]?.default : socialLinkData[index]?.active}
                                    alt=''
                                    onClick={() => {
                                        if (item?.link !== "") {
                                            window.open(item?.link)
                                        }
                                    }}/>
                            )
                        })}
                    </CurriculumSNS>
                    {mentorInfo?.mentorCurriculum.JPN.map((item : any, index : number) => {
                        return (
                            (index !== 0)
                                &&  <CurriculumImg
                                    key={item}
                                    src={item}
                                    alt=''/>  
                        )
                    })}
                    <PortfolioWrapper>
                        {mentorInfo?.mentorPortfolio.map((item : string, index : number) => {
                            return (
                                <PortfolioImage
                                    key={index}
                                    src={item}
                                    alt=''
                                    loading="lazy"
                                    decoding="async"
                                    onClick={() => window.open(item)}/>
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
                    <CurriculumImg src={mentorInfo?.mentorCurriculum.KOR[0]} alt=''/>
                    <CurriculumSNS>
                        {mentorInfo?.links.map((item : any, index : number) => {
                            return (
                                <SNSIcons
                                    key={index}
                                    style={{
                                        cursor: `${(item?.link === "") ? "default" : "pointer"}`
                                    }}
                                    src={(item?.link === "") ? socialLinkData[index]?.default : socialLinkData[index]?.active}
                                    alt=''
                                    onClick={() => {
                                        if (item?.link !== "") {
                                            window.open(item?.link)
                                        }
                                    }}/>
                            )
                        })}
                    </CurriculumSNS>
                    {mentorInfo?.mentorCurriculum.KOR.map((item : any, index : number) => {
                        return (
                            (index !== 0)
                                &&  <CurriculumImg
                                    key={item}
                                    src={item}
                                    alt=''/>  
                        )
                    })}
                    <PortfolioWrapper>
                        {mentorInfo?.mentorPortfolio.map((item : string, index : number) => {
                            return (
                                <PortfolioImage
                                    key={index}
                                    src={item}
                                    alt=''
                                    loading="lazy"
                                    decoding="async"
                                    onClick={() => window.open(item)}/>
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
                    <CurriculumImg src={mentorInfo?.mentorCurriculum.ENG[0]} alt=''/>
                    <CurriculumSNS>
                        {mentorInfo?.links.map((item : any, index : number) => {
                            return (
                                <SNSIcons
                                    key={index}
                                    style={{
                                        cursor: `${(item?.link === "") ? "default" : "pointer"}`
                                    }}
                                    src={(item?.link === "") ? socialLinkData[index]?.default : socialLinkData[index]?.active}
                                    alt=''
                                    onClick={() => {
                                        if (item?.link !== "") {
                                            window.open(item?.link)
                                        }
                                    }}/>
                            )
                        })}
                    </CurriculumSNS>
                    {mentorInfo?.mentorCurriculum.ENG.map((item : any, index : number) => {
                        return (
                            (index !== 0)
                                &&  <CurriculumImg
                                    key={item}
                                    src={item}
                                    alt=''/>  
                        )
                    })}
                    <PortfolioWrapper>
                        {mentorInfo?.mentorPortfolio.map((item : string, index : number) => {
                            return (
                                <PortfolioImage
                                    key={index}
                                    src={item}
                                    alt=''
                                    loading="lazy"
                                    decoding="async"
                                    onClick={() => window.open(item)}/>
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
    right: 265px;
    z-index: 100;

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
    width: 40px;
    height: 40px;
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

    @media screen and (max-width: 500px) {
        width: 30px;
        height: 30px;
        font-size: 6px;
    }
`;

export default MentorDetail;