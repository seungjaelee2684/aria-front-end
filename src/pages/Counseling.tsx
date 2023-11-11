import React, { useState } from 'react'
import styled from 'styled-components';
import Banner from '../components/common/Banner';

const Counseling = () => {

  const language = localStorage.getItem("language");
  const [isChoice, setIsChoice] = useState<boolean>(false);

  return (
    <LayOutContainer>
      {/* <Banner page={4}/> */}
      <ContentContainer>
        <ButtonWrapper>
            {isChoice
              ? <ButtonBox>
                <Button onClick={() => setIsChoice(false)}>
                  Counseling
                </Button>
                <ClickButton>
                  Counseling
                </ClickButton>
              </ButtonBox>
              : <ButtonBox>
                <ClickButton>
                  Counseling
                </ClickButton>
                <Button onClick={() => setIsChoice(true)}>
                  Counseling
                </Button>
              </ButtonBox>}
        </ButtonWrapper>
      </ContentContainer>
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div`
  width: 100%;
  margin: 180px auto;
`;

const ContentContainer = styled.div`
  width: 1320px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid #f3f3f3;
  position: relative;
  user-select: none;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -3px;
  left: 0;
`;

const Button = styled.div`
  width: 180px;
  height: 54px;
  border-radius: 20px 20px 0px 0px;
  /* border-right: 2px solid #c4f6ff;
  border-left: 2px solid #c4f6ff; */
  color: #222020;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to top, #e1fbff, transparent);
    height: 50px;
    border-bottom: 4px solid #c4f6ff;
  }
`;

const ClickButton = styled.div`
  width: 180px;
  height: 50px;
  border-bottom: 4px solid #c4f6ff;
  border-radius: 20px 20px 0px 0px;
  /* border-right: 2px solid #c4f6ff;
  border-left: 2px solid #c4f6ff; */
  color: #222020;
  font-family: "Pretendard";
  font-size: 22px;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Counseling;