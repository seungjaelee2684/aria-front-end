import React, { useState } from 'react'
import styled from 'styled-components';
import { LayOutTitleContainer, TitleBarContainer, TitleColorText } from '../style/PageTitle';
import InformUpload from '../components/MentorUploadPage/InformUpload';
import SingleImageUpload from '../components/MentorUploadPage/SingleImageUpload';
import CurriculumUpload from '../components/MentorUploadPage/CurriculumUpload';
import PortfolioUpload from '../components/MentorUploadPage/PortfolioUpload';
import EtcUpload from '../components/MentorUploadPage/EtcUpload';
import { useRecoilState } from 'recoil';
import { mentorImageUpload, mentorInfoUpload, snsLinkUpload } from '../store/CreateOrUpload';
import { useParams } from 'react-router-dom';

const Update = () => {

    const { id } = useParams();

    const [mentorImage, setMentorImage] = useRecoilState(mentorInfoUpload);
    const [mentorInfo, setMentorInfo] = useRecoilState(mentorImageUpload);
    const [snsLink, setSnsLink] = useRecoilState(snsLinkUpload);

    return (
        <LayoutContainer>
            <LayOutTitleContainer>
                <TitleBarContainer />
                UP
                <TitleColorText color="#15b849">D</TitleColorText>
                ATE MENTOR {id}
            </LayOutTitleContainer>
            <ContentContainer>
                <LaneContainer>
                    <InformUpload
                        mentorInfo={mentorInfo}
                        setMentorInfo={setMentorInfo} />
                </LaneContainer>
                <LaneContainer>
                    <SingleImageUpload
                        mentorImage={mentorImage}
                        setMentorImage={setMentorImage} />
                </LaneContainer>
                <LaneContainer>
                    <CurriculumUpload
                        mentorImage={mentorImage}
                        setMentorImage={setMentorImage} />
                </LaneContainer>
                <LaneContainer>
                    <PortfolioUpload
                        mentorImage={mentorImage}
                        setMentorImage={setMentorImage} />
                </LaneContainer>
                <LaneContainer>
                    <EtcUpload
                        snsLink={snsLink}
                        setSnsLink={setSnsLink} />
                </LaneContainer>
            </ContentContainer>
        </LayoutContainer>
    )
};

const LayoutContainer = styled.div`
  width: 100%;
  padding: 120px 0px 100px 0px;

  @media screen and (max-width: 500px) {
    padding: 50px 0px 80px 0px;
  }
`;

const ContentContainer = styled.div`
    width: 1320px;
    margin: 40px auto 0px auto;
    border-top: 2px solid #222020;
    border-bottom: 2px solid #222020;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1320px) {
        width: 96%;
    }
`;

const LaneContainer = styled.div`
    width: 100%;
    padding: 10px 0px;
    border-bottom: 1px solid #222020;
`;

export default Update;