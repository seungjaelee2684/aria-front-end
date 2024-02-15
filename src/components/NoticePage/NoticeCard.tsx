import React from 'react'
import styled from 'styled-components';
import Poster from '../../assets/images/poster.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';
import { useNavigate } from 'react-router-dom';

interface NoticeCardProps {
    item: any;
}

const NoticeCard : React.FC<NoticeCardProps> = ({ item }) => {

    const navigate = useNavigate();
    const language = localStorage.getItem("language");

    const onTextHandler = ( Num : number ) => {
        if (Num === 0) {
          switch (language) {
            case "japanese" :
                return `タイトル : ${item?.japanesetitle}`;
            case "korean" :
                return `제목 : ${item?.title}`;
            default :
                return `Title : ${item?.englishtitle}`;
          };
        } else if (Num === 1) {
            switch (language) {
                case "japanese" :
                    return "期間 : ";
                case "korean" :
                    return "기간 : ";
                default :
                    return "Period : ";
            };
        } else {
          switch (language) {
            case "japanese" :
                return "締め切り";
            case "korean" :
                return "마감";
            default :
                return "Deadline";
          };
        }; 
      };

  return (
    <CardContainer
        onClick={() => navigate(`/notice/detail/${item?.id}`)}
        style={{
            opacity: `${(item?.status === "Proceeding") ? "" : "0.7"}`
        }}>
        <CardImage src={item?.image}/>
        <LineContainer>
            <TextWrapper
                style={{
                    fontSize: `${(language !== "Korean") ? "14px" : ""}`
                }}>
                <Text>
                    {onTextHandler(0)}  
                </Text>
                <Text>
                    {onTextHandler(1)}
                    {item?.period}
                </Text>
            </TextWrapper>
            {item?.status === "Deadline" && <StampContainer>
                    <StampInContainer>
                        <StampBox>
                            <StampInBox>
                                {onTextHandler(2)}
                            </StampInBox>
                        </StampBox>
                    </StampInContainer>
                </StampContainer>} 
        </LineContainer>
    </CardContainer>
  )
};

const CardContainer = styled.div`
    width: 320px;
    height: 380px;
    display: grid;
    gap: 0px;
    border: 1px solid #e9e9e9;
    position: relative;

    &:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: 836px) {
        width: 250px;
        height: 300px;  
    }

    @media screen and (max-width: 500px) {
        width: 180px;
        height: 220px;  
    }
`;

const CardImage = styled.div<{ src : string }>`
    width: 320px;
    height: 320px;
    background-image: url(${(props) => props.src});
    background-size: 320px 320px;
    background-position: center center;
    background-repeat: no-repeat;

    @media screen and (max-width: 836px) {
        width: 250px;
        height: 250px;
        background-size: 250px 250px;
    }

    @media screen and (max-width: 500px) {
        width: 180px;
        height: 180px;
        background-size: 180px 180px;
    }
`;

const LineContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    width: 100%;
`;

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 5px 10px;
`;

const Text = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-weight: 400;
    line-height: 140%;
   /* color: #222020; */
    justify-content: start;
    user-select: none;
    text-align: start;
    text-overflow: ellipsis;
    word-break: break-word;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    @media screen and (max-width: 500px) {
        font-size: 10px;
    }
`;

const StampContainer = styled.div`
    min-width: 50px;
    height: 50px;
    border: 1px dotted red;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    position: absolute;
    bottom: 5px;
    right: 5px;
`;

const StampInContainer = styled.div`
    width: 44px;
    height: 44px;
    border: 1px solid;
    position: relative;
    border-radius: 100%;
`;

const StampBox = styled.div`
    width: 56px;
    height: 20px;
    border: 1px solid;
    /* background-color: #FFF; */
    position: absolute;
    top: 10px;
    left: -7px;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(20deg);
`;

const StampInBox = styled.div`
    width: 52px;
    height: 16px;
    border: 0.5px solid;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default NoticeCard;