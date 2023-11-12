import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Banner from '../components/common/Banner';

const Counseling = () => {

  const language = localStorage.getItem("language");
  const leverRef = useRef<HTMLDivElement>(null);
  const [isChoice, setIsChoice] = useState<boolean>(false);

  const leversHandler = () => {
    if (leverRef.current) {
      if (isChoice) {
        leverRef.current.style.transform = "translateX(0px)";
      } else {
        leverRef.current.style.transform = "translateX(-86px)";
      };
    };
  };

  return (
    <LayOutContainer>
      {/* <Banner page={4}/> */}
      <ContentContainer>
        <ButtonWrapper>
          <ButtonBackground
            onClick={() => {
              leversHandler()
              setIsChoice(!isChoice)
            }}>
              Counseling
            <LeversButton ref={leverRef}/>
          </ButtonBackground>
            {/* {isChoice
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
              </ButtonBox>} */}
        </ButtonWrapper>
      </ContentContainer>
    </LayOutContainer>
  )
};

const LayOutContainer = styled.div`
  width: 100%;
  margin: 80px auto;
`;

const ContentContainer = styled.div`
  width: 1320px;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid #f3f3f3;
  position: relative;
  user-select: none;
  display: flex;
  justify-content: end;
  align-items: center;
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

const ButtonBackground = styled.div`
  width: 140px;
  height: 18px;
  border-radius: 20px;
  background-color: #e9e9e9;
  position: relative;
  box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: start;
  align-items: center;
  color: #222020;
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  padding: 0px 10px;
`;

const LeversButton = styled.div`
  width: 80px;
  height: 22px;
  border-radius: 20px;
  background-color: #ADADAD;
  position: absolute;
  top: -2px;
  left: 82px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.596);
  transition: all 0.6s ease-in-out;
  cursor: pointer;
`;

export default Counseling;