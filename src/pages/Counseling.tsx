import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Banner from '../components/common/Banner';
import { PiDotsSixBold } from 'react-icons/pi';
import ApplyClasses from '../components/CounselingPage/ApplyClasses';
import AddFriends from '../components/CounselingPage/AddFriends';

const Counseling = () => {

  const language = localStorage.getItem("language");
  const leverRef = useRef<HTMLDivElement>(null);
  const [isChoice, setIsChoice] = useState<boolean>(false);

  const leversHandler = () => {
    if (leverRef.current) {
      if (isChoice) {
        leverRef.current.style.transform = "translateX(0px)";
      } else {
        leverRef.current.style.transform = "translateX(-64px)";
      };
    };
  };

  return (
    <LayOutContainer>
      {/* <Banner page={4}/> */}
      <ContentContainer>
        {/* <ButtonWrapper>
          <ButtonBackground
            onClick={() => {
              leversHandler()
              setIsChoice(!isChoice)
            }}>
              <LeversText>
                상담신청
              </LeversText>
              <LeversText>
                수강신청
              </LeversText>
            <LeversButton ref={leverRef}>
              <PiDotsSixBold />
            </LeversButton>
          </ButtonBackground>
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
        {isChoice
            ? <ApplyClasses />
            : <AddFriends />} */}
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
  margin: 180px auto;
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

const LeftTitleContainer = styled.div`

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
  width: 120px;
  height: 24px;
  border-radius: 20px;
  background: linear-gradient(to right, #2a9fff 50%, #411cbd 50%);
  position: relative;
  box-shadow: inset 1px 1px 2px 1px rgba(0, 0, 0, 0.623);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;

const LeversText = styled.div`
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
  color: #FCFCFC;
`;

const LeversButton = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 20px;
  background-color: #ADADAD;
  position: absolute;
  top: -3px;
  left: 62px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.596);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: #FCFCFC;
  transition: all 0.5s ease-out;
  cursor: pointer;
`;

export default Counseling;