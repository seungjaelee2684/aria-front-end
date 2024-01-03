import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { mentorListData } from '../data/MentorData';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import { RxHamburgerMenu } from "react-icons/rx";
import PortfolioModal from '../components/MentorDetailPage/PortfolioModal/PortfolioModal';

const MentorDetail = () => {

    const { id } = useParams();
    const language = localStorage.getItem("language");
    const navigate = useNavigate();

    const prevId = Number(id) - 1
    const nextId = Number(id) + 1

    const [isOpenPortfolio, setIsOpenPortfolio] = useState<{
        isopen: boolean,
        image: string
    }>({
        isopen: false,
        image: ""
    });
    const { isopen } = isOpenPortfolio;
    const mentorInfo = mentorListData?.filter((item) => item.id === id);
    console.log("mentor ->", mentorInfo)

    const curriculumTranslate = () => {
        if (language === "chinese") {
            return (
                <InContainer>
                    <CurriculumImg src={mentorInfo[0]?.content.chinesecontent[0]} alt=''/>
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
                    {mentorInfo[0]?.content.chinesecontent.map((item : string) => {
                        return (
                            (mentorInfo[0]?.content.chinesecontent.indexOf(item) !== 0)
                                &&  <CurriculumImg
                                    key={item}
                                    src={item}
                                    alt=''/>  
                        )
                    })}
                    <PortfolioWrapper>
                        {mentorInfo[0]?.portfolio.map((item : string) => {
                            return (
                                <PortfolioImage
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
        } else if (language === "japanese") {
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
                        {mentorInfo[0]?.portfolio.map((item : string) => {
                            return (
                                <PortfolioImage
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
                        {mentorInfo[0]?.portfolio.map((item : string) => {
                            return (
                                <PortfolioImage
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
                        {mentorInfo[0]?.portfolio.map((item : string) => {
                            return (
                                <PortfolioImage
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
                목록
            </ListBackMoveButton>
        </ListBackMoveBtnContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    width: 100%;
    padding: 80px 0px 0px 0px;

    @media screen and (max-width: 650px) {
        padding: 60px 0px 0px 0px;
    }
`;

const InContainer = styled.div`
    width: 1100px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;

    @media screen and (max-width: 1100px) {
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
    gap: 90px;
    padding: 100px 0px;

    @media screen and (max-width: 1100px) {
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
    width: 80px;
    height: 80px;
    object-fit: contain;
    /* cursor: pointer; */

    @media screen and (max-width: 1100px) {
        width: 60px;
        height: 60px;
    }

    @media screen and (max-width: 500px) {
        width: 30px;
        height: 30px;
    }
`;

const PortfolioWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const PortfolioImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: pointer;
`;

const ListBackMoveBtnContainer = styled.div`
    width: 1100px;
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 0px auto;
    padding: 40px 0px 0px 0px;
    gap: 10px;

    @media screen and (max-width: 1100px) {
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

export default MentorDetail;