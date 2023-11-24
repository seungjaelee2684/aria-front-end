import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { mentorListData } from '../data/MentorData';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';

const MentorDetail = () => {

    const { id } = useParams();
    console.log("id ->", id);
    const language = localStorage.getItem("language");
    const mentorInfo = mentorListData?.filter((item) => item.id === id);
    console.log("mentor ->", mentorInfo)

  return (
    <LayoutContainer>
        <InContainer>
            <CurriculumImg
                src={mentorInfo[0]?.content[0]}/>
            <CurriculumSNS>
                {mentorInfo[0]?.sns.map((item : {icon: string, link: string}) => {
                    return (
                        <SNSIcons
                            key={item?.icon}
                            src={item?.icon}
                            onClick={() => window.open(item?.link)}/>
                    )
                })}
            </CurriculumSNS>
            {mentorInfo[0]?.content.map((item : string) => {
                return (
                    (mentorInfo[0]?.content.indexOf(item) !== 0)
                        &&  <CurriculumImg
                            key={item}
                            src={item}/>  
                )
            })}
            {/* <TextWrapper>
                <KeyText>{language ? "ニックネーム :" : "닉네임 :"}</KeyText>
                <ValueText>{language ? mentorInfo[0]?.englishname : mentorInfo[0]?.nickname}</ValueText>
            </TextWrapper>
            <TextWrapper>
                <KeyText>{language ? "作品 ->" : "작품 ->"}</KeyText>
                <ImageBox src={mentorInfo[0]?.image} />
            </TextWrapper> */}
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
    gap: 300px;

    @media screen and (max-width: 1100px) {
        width: 100%;
        gap: 200px;
    }

    @media screen and (max-width: 500px) {
        gap: 120px;
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

    @media screen and (max-width: 1100px) {
        width: 100%;
        gap: 50px;
    }

    @media screen and (max-width: 500px) {
        gap: 30px;
    }
`;

const SNSIcons = styled.img`
    width: 90px;
    height: 90px;
    object-fit: contain;

    @media screen and (max-width: 1100px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (max-width: 500px) {
        width: 40px;
        height: 40px;
    }
`;

export default MentorDetail;