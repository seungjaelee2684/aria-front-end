import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { mentorListData } from '../data/MentorData';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import PortfolioModal from '../components/MentorDetailPage/PortfolioModal/PortfolioModal';

const MentorDetail = () => {

    const { id } = useParams();
    const language = useRecoilValue(translate);

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

  return (
    <LayoutContainer>
        <InContainer>
            <CurriculumImg src={mentorInfo[0]?.content[0]} alt=''/>
            <CurriculumSNS>
                {mentorInfo[0]?.sns.map((item : {icon: string, link: string}) => {
                    return (
                        <SNSIcons
                            key={item?.icon}
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
            {mentorInfo[0]?.content.map((item : string) => {
                return (
                    (mentorInfo[0]?.content.indexOf(item) !== 0)
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
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    width: 100%;
    padding: 80px 0px 0px 0px;

    @media screen and (max-width: 650px) {
        padding: 50px 0px 0px 0px;
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
        width: 100%;
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
        width: 100%;
        gap: 50px;
    }

    @media screen and (max-width: 500px) {
        gap: 30px;
    }
`;

const SNSIcons = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    cursor: pointer;

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

export default MentorDetail;