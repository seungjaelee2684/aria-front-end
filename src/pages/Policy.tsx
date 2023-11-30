import React from 'react'
import styled from 'styled-components';
import { englishPolicyData } from '../data/PolicyData/ENGPolicyData';
import { chinesePolicyData } from '../data/PolicyData/CNPolicyData';
import { japanesePolicyData } from '../data/PolicyData/JPPolicyData';
import { policyData } from '../data/PolicyData/KRPolicyData';

const Policy = () => {

  const language = localStorage.getItem("language");

  const policyTranslate = () => {
    if (language === "chinese") {
      return (
        <PolicyInContainer>
          <PolicyHeader>
            운영정책
          </PolicyHeader>
          {chinesePolicyData?.map((item) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTitle>
                  {item?.title}
                </PolicyTitle>
                {item?.content.map((text) => {
                  return (
                    ((chinesePolicyData.indexOf(item) + 1) === 1)
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
        </PolicyInContainer>
      );
    } else if (language === "japanese") {
      return (
        <PolicyInContainer>
          <PolicyHeader>
            운영정책
          </PolicyHeader>
          {japanesePolicyData?.map((item) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTitle>
                  {item?.title}
                </PolicyTitle>
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
          })}
        </PolicyInContainer>
      );
    } else if (language === "korean") {
      return (
        <PolicyInContainer>
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
        </PolicyInContainer>
      );
    } else {
      return (
        <PolicyInContainer>
          <PolicyHeader>
            운영정책
          </PolicyHeader>
          {englishPolicyData?.map((item) => {
            return (
              <ContentWrapper key={item.id}>
                <PolicyTitle>
                  {item?.title}
                </PolicyTitle>
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
          })}
        </PolicyInContainer>
      );
    };
  };

  return (
    <LayOutContainer>
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
`;

const PolicyOutContainer = styled.div`
  width: 1320px;
  min-height: 400px;
  margin: 20px auto;
  background-color: #e9e9e9;
  border: 1px solid #ADADAD;
  border-radius: 10px;
  display: flex;
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
`;

const PolicyInContainer = styled.div`
  width: 94%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #e9e9e9;
  display: flex;
  flex-direction: column;
  gap: 100px;
  background-color: #FFFFFF;
  padding: 20px;

  @media screen and (max-width: 1320px) {
    width: 90%;
  }
`;

const PolicyHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PolicyTitle = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  justify-content: start;
  margin-bottom: 30px;
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
`;

const PolicyOtherContent = styled(PolicyFirstContent)`
  text-indent: 5px;
`;

export default Policy;