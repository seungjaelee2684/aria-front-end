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

  const language = useRecoilValue(translate);

  const policyTranslate = () => {
    if (language === "chinese") {
      return (
          englishPolicyData?.map((item) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTopContainer>
                  {item?.title}
                </PolicyTopContainer>
                {item?.content.map((text) => {
                  return (
                    ((englishPolicyData.indexOf(item) + 1) === 1)
                      ? ((item?.content.indexOf(text) + 1) === 1)
                        ? <PolicyFirstContent key={text}>
                          {text}
                        </PolicyFirstContent>
                        : <PolicyOtherContent key={text}>
                          {text}
                        </PolicyOtherContent>
                      : <PolicyOtherContent key={text}>
                        {text}
                      </PolicyOtherContent>
                  )
                })}
              </ContentWrapper>
            )
          })
      );
    } else if (language === "japanese") {
      return (
          japanesePolicyData?.map((item) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTopContainer>
                  {item?.title}
                </PolicyTopContainer>
                {item?.content.map((text) => {
                  return (
                    ((japanesePolicyData.indexOf(item) + 1) === 1)
                      ? ((item?.content.indexOf(text) + 1) === 1)
                        ? <PolicyFirstContent key={text}>
                          {text}
                        </PolicyFirstContent>
                        : <PolicyOtherContent key={text}>
                          {text}
                        </PolicyOtherContent>
                      : <PolicyOtherContent key={text}>
                        {text}
                      </PolicyOtherContent>
                  )
                })}
              </ContentWrapper>
            )
          })
      );
    } else if (language === "korean") {
      return (
          policyData?.map((item) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTopContainer>
                  {item?.title}
                </PolicyTopContainer>
                {item?.content.map((text) => {
                  return (
                    ((policyData.indexOf(item) + 1) === 1)
                      ? ((item?.content.indexOf(text) + 1) === 1)
                        ? <PolicyFirstContent key={text}>
                          {text}
                        </PolicyFirstContent>
                        : <PolicyOtherContent key={text}>
                          {text}
                        </PolicyOtherContent>
                      : <PolicyOtherContent key={text}>
                        {text}
                      </PolicyOtherContent>
                  )
                })}
              </ContentWrapper>
            )
          })
      );
    } else {
      return (
          englishPolicyData?.map((item) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTopContainer>
                  {item?.title}
                </PolicyTopContainer>
                {item?.content.map((text) => {
                  return (
                    ((englishPolicyData.indexOf(item) + 1) === 1)
                      ? ((item?.content.indexOf(text) + 1) === 1)
                        ? <PolicyFirstContent key={text}>
                          {text}
                        </PolicyFirstContent>
                        : <PolicyOtherContent key={text}>
                          {text}
                        </PolicyOtherContent>
                      : <PolicyOtherContent key={text}>
                        {text}
                      </PolicyOtherContent>
                  )
                })}
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
        {/* <PolicyInContainer>
          <PolicyHeader>
            운영정책
          </PolicyHeader>
          {policyData?.map((item) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTitle>
                  {item?.title}
                </PolicyTitle>
                {item?.content.map((text) => {
                  return (
                    ((policyData.indexOf(item) + 1) === 1)
                      ? ((item?.content.indexOf(text) + 1) === 1)
                        ? <PolicyFirstContent key={text}>
                          {text}
                        </PolicyFirstContent>
                        : <PolicyOtherContent key={text}>
                          {text}
                        </PolicyOtherContent>
                      : <PolicyOtherContent key={text}>
                        {text}
                      </PolicyOtherContent>
                  )
                })}
              </ContentWrapper>
            )
          })}
        </PolicyInContainer> */}
      </PolicyOutContainer>
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div`
  width: 100%;
  margin: 80px auto 0px auto;

  @media screen and (max-width: 500px) {
    margin: 50px auto 0px auto;
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
  width: 1320px;
  min-height: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
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
    gap: 40px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 500px) {
    gap: 10px;
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
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #cacaca;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  text-indent: 20px;
  color: #222020;

  @media screen and (max-width: 1320px) {
    font-size: 18px;
  }
`;

const PolicyContentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 120px;
  font-family: "Pretendard";
  line-height: 150%;
`;

const PolicySubTitleContainer = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #ADADAD;
`;

export default Policy;