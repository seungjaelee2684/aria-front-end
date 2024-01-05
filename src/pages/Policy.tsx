import React from 'react'
import styled from 'styled-components';
import { englishPolicyData } from '../data/PolicyData/ENGPolicyData';
import { chinesePolicyData } from '../data/PolicyData/CNPolicyData';
import { japanesePolicyData } from '../data/PolicyData/JPPolicyData';
import { policyData } from '../data/PolicyData/KRPolicyData';
import Banner from '../components/common/Banner';
import { useRecoilValue } from 'recoil';
import { translate } from '../store/Translation';
import { LayOutTitleContainer, TitleColorText, TitleBarContainer } from '../style/PageTitle';

const Policy = () => {

  const language = localStorage.getItem("language");

  type PolicyDataType = {
    id: string,
    title: string,
    content: string[]
  };

  const subtitleTrans = (item : PolicyDataType) => {
    switch (language) {
      case "chinese" :
        return `第${item?.id}条`;
      case "japanese" :
        return `第${item?.id}条`;
      case "korean" :
        return `제 ${item?.id}조`;
      default :
        return `Article ${item?.id}`;
    };
  };

  const policyTranslate = () => {
    if (language === "chinese") {
      return (
          englishPolicyData?.map((item : PolicyDataType) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTopContainer>
                  {item?.title}
                </PolicyTopContainer>
                <PolicyContentContainer>
                  <PolicySubTitleContainer>
                    {subtitleTrans(item)}
                  </PolicySubTitleContainer>
                  <PolicyContentWrapper>
                    {item?.content.map((text) => {
                      return (
                        <PolicyContentText>
                          {text}
                        </PolicyContentText>
                      )
                    })}
                  </PolicyContentWrapper>
                </PolicyContentContainer>
              </ContentWrapper>
            )
          })
      );
    } else if (language === "japanese") {
      return (
          japanesePolicyData?.map((item : PolicyDataType) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTopContainer>
                  {item?.title}
                </PolicyTopContainer>
                <PolicyContentContainer>
                  <PolicySubTitleContainer>
                    {subtitleTrans(item)}
                  </PolicySubTitleContainer>
                  <PolicyContentWrapper>
                    {item?.content.map((text) => {
                      return (
                        <PolicyContentText>
                          {text}
                        </PolicyContentText>
                      )
                    })}
                  </PolicyContentWrapper>
                </PolicyContentContainer>
              </ContentWrapper>
            )
          })
      );
    } else if (language === "korean") {
      return (
          policyData?.map((item : PolicyDataType) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTopContainer>
                  {item?.title}
                </PolicyTopContainer>
                <PolicyContentContainer>
                  <PolicySubTitleContainer>
                    {subtitleTrans(item)}
                  </PolicySubTitleContainer>
                  <PolicyContentWrapper>
                    {item?.content.map((text) => {
                      return (
                        <PolicyContentText>
                          {text}
                        </PolicyContentText>
                      )
                    })}
                  </PolicyContentWrapper>
                </PolicyContentContainer>
              </ContentWrapper>
            )
          })
      );
    } else {
      return (
          englishPolicyData?.map((item : PolicyDataType) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTopContainer>
                  {item?.title}
                </PolicyTopContainer>
                <PolicyContentContainer>
                  <PolicySubTitleContainer>
                    {subtitleTrans(item)}
                  </PolicySubTitleContainer>
                  <PolicyContentWrapper>
                    {item?.content.map((text) => {
                      return (
                        <PolicyContentText>
                          {text}
                        </PolicyContentText>
                      )
                    })}
                  </PolicyContentWrapper>
                </PolicyContentContainer>
              </ContentWrapper>
            )
          })
      );
    };
  };

  return (
    <LayOutContainer>
      <LayOutTitleContainer>
        <TitleBarContainer />
        O
        <TitleColorText color="#3C3AD6">P</TitleColorText>
        ERATION POLICY
      </LayOutTitleContainer>
      <PolicyOutContainer>
        {policyTranslate()}
      </PolicyOutContainer>
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div`
  width: 100%;
  margin: 80px auto 0px auto;
  padding: 80px 0px 0px 0px;

  @media screen and (max-width: 500px) {
    margin: 100px auto 0px auto;
    padding: 0px;
  }
`;

const PolicyHeader = styled.div`
  width: 1320px;
  display: flex;
  justify-content: start;
  margin: 120px auto 20px auto;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }

  @media screen and (max-width: 500px) {
    margin: 70px auto 20px auto;
  }
`;

const PolicyOutContainer = styled.div`
  width: 1000px;
  min-height: 400px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  gap: 60px;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  transition: all 0.3s linear;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin: 16px auto;
    padding: 0px;
    gap: 40px;
  }
`;

const PolicyInContainer = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #e9e9e9;
  display: flex;
  flex-direction: column;
  gap: 70px;
  background-color: #FFFFFF;
  padding: 20px;

  @media screen and (max-width: 1320px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    width: 86%;
    gap: 30px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 500px) {
    gap: 16px;
  }
`;

const PolicyTitle = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const PolicyFirstContent = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  display: flex;
  text-align: left;
  white-space: pre-line;
  text-indent: 80px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const PolicyOtherContent = styled(PolicyFirstContent)`
  text-indent: 0px;
`;

const PolicyTopContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: #cacaca;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  text-indent: 20px;
  color: #222020;

  @media screen and (max-width: 1320px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
    height: 20px;
    text-indent: 10px;
  }
`;

const PolicyContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Pretendard";
  line-height: 150%;

  @media screen and (max-width: 500px) {
    line-height: 120%;
  }
`;

const PolicySubTitleContainer = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #ADADAD;
  text-indent: 20px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    text-indent: 10px;
  }
`;

const PolicyContentWrapper = styled.div`
  width: 80%;
  font-size: 18px;
  font-weight: 500;
  color: #222020;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 500px) {
    font-size: 10px;
    gap: 10px;
  }
`;

const PolicyContentText = styled.div`
  text-align: left;
  white-space: pre-line;
`;

export default Policy;