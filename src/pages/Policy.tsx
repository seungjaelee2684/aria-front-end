import React from 'react'
import styled from 'styled-components';
import { englishPolicyData } from '../data/PolicyData/ENGPolicyData';
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

  const subtitleTrans = (item: PolicyDataType) => {
    switch (language) {
      case "japanese":
        return `第${item?.id}条`;
      case "korean":
        return `제 ${item?.id}조`;
      default:
        return `Article ${item?.id}`;
    };
  };

  const policyTranslate = () => {
    if (language === "japanese") {
      return (
        japanesePolicyData?.map((item: PolicyDataType) => {
          return (
            <ContentWrapper key={item.id}>
              <PolicyTopContainer>
                {item?.title}
              </PolicyTopContainer>
              <PolicyContentContainer>
                {item?.content.map((text: any, index: number) => {
                  return (
                    <PolicyWrapper key={index}>
                      <PolicySubTitleContainer>
                        ({index + 1})
                      </PolicySubTitleContainer>
                      <PolicyContentWrapper>
                        <PolicyContentText>
                          {text}
                        </PolicyContentText>
                      </PolicyContentWrapper>
                    </PolicyWrapper>
                  )
                })}
              </PolicyContentContainer>
            </ContentWrapper>
          )
        })
      );
    } else if (language === "korean") {
      return (
        policyData?.map((item: PolicyDataType) => {
          return (
            <ContentWrapper key={item.id}>
              <PolicyTopContainer>
                {item?.title}
              </PolicyTopContainer>
              <PolicyContentContainer>
                {item?.content.map((text: any, index: number) => {
                  return (
                    <PolicyWrapper key={index}>
                      <PolicySubTitleContainer>
                        ({index + 1})
                      </PolicySubTitleContainer>
                      <PolicyContentWrapper>
                        <PolicyContentText>
                          {text}
                        </PolicyContentText>
                      </PolicyContentWrapper>
                    </PolicyWrapper>
                  )
                })}
              </PolicyContentContainer>
            </ContentWrapper>
          )
        })
      );
    } else {
      return (
        englishPolicyData?.map((item: PolicyDataType) => {
          return (
            <ContentWrapper key={item.id}>
              <PolicyTopContainer>
                {item?.title}
              </PolicyTopContainer>
              <PolicyContentContainer>
                {item?.content.map((text: any, index: number) => {
                  return (
                    <PolicyWrapper key={index}>
                      <PolicySubTitleContainer>
                        ({index + 1})
                      </PolicySubTitleContainer>
                      <PolicyContentWrapper>
                        <PolicyContentText>
                          {text}
                        </PolicyContentText>
                      </PolicyContentWrapper>
                    </PolicyWrapper>
                  )
                })}
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
  padding: 120px 0px 120px 0px;
  margin: 0px auto;

  @media screen and (max-width: 500px) {
    padding: 60px 0px 80px 0px;
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

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 500px) {
    gap: 16px;
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

const PolicyTopContainer = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  background-color: #cacaca;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  text-indent: 20px;
 /* color: #222020; */

  @media screen and (max-width: 1320px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
    height: 18px;
    text-indent: 10px;
  }
`;

const PolicyContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: "Pretendard";
  line-height: 150%;

  @media screen and (max-width: 500px) {
    line-height: 120%;
  }
`;

const PolicyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const PolicySubTitleContainer = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #ADADAD;
  text-indent: 40px;

  @media screen and (max-width: 500px) {
    font-size: 10px;
    text-indent: 20px;
  }
`;

const PolicyContentWrapper = styled.div`
  width: 92%;
  font-size: 18px;
  font-weight: 400;
 /* color: #222020; */
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 500px) {
    font-size: 10px;
    gap: 10px;
  }
`;

const PolicyContentText = styled.span`
  text-align: left;
  white-space: pre-wrap;
`;

export default Policy;