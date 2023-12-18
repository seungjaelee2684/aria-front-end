import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import Notice from '../../assets/icons/notification.png';
import { IoIosArrowForward } from "react-icons/io";
import { NotificationData } from '../../data/NotificationData';
import { useNavigate } from 'react-router-dom';
import { AiOutlineNotification } from "react-icons/ai";
import { NoticeTrans } from '../../languages/NoticeTrans';

const NotificationList = () => {

    const language = localStorage.getItem("language");
    const navigate = useNavigate();
    const reverseNotice = NotificationData?.reverse();
    console.log("reverseData", reverseNotice);

    const onClickNoticeHandler = ( item : any ) => {
        navigate(`/notice/notification/detail/${item?.id}`);
    };

    const textChange = ( Num : number ) => {
        switch (language) {
            case "chinese" :
                return NoticeTrans[Num]?.chinesetext;
            case "japanese" :
                return NoticeTrans[Num]?.japanesetext;
            case "korean" :
                return NoticeTrans[Num]?.text;
            default :
                return NoticeTrans[Num]?.englishtext;
        };
    };

    const contentChange = ( item : any ) => {
        switch (language) {
            case "chinese" :
                return item?.contents.chinesetitle;
            case "japanese" :
                return item?.contents.japanesetitle;
            case "korean" :
                return item?.contents.title;
            default :
                return item?.contents.englishtitle;
        };
    };

  return (
    <ListLayoutContainer>
        <OutWrapper>
            <TitleContainer>
                {textChange(0)}
                <TotalWrapper>
                    Total
                    <Total>
                        {NotificationData.length}
                    </Total>
                    {textChange(2)}
                </TotalWrapper>
            </TitleContainer>
            <ListContainer>
                <LineContainer style={{height: "10px"}}>
                    <TopLaneLeftText>
                        {textChange(3)}
                    </TopLaneLeftText>
                    <TopLaneCenterText>
                        {textChange(4)}
                    </TopLaneCenterText>
                    <TopLaneRightText>
                        {textChange(5)}
                    </TopLaneRightText>
                </LineContainer>
                {NotificationData?.map((item : any) => {
                    return (
                        <LineContainer
                            key={item.id}
                            style={{
                                borderBottom: (NotificationData?.indexOf(item) === NotificationData.length - 1) ? "none" : "1px solid #e9e9e9"
                            }}>
                            <ContentWrapper>
                                <NoticeIcon
                                    style={{
                                        color: (item?.status === "notice") ? "#db0e0e" : "#3c3ad6"
                                    }}>
                                    {(item?.status === "notice")
                                        ? textChange(0)
                                        : textChange(1)}
                                </NoticeIcon>
                                <Text onClick={() => onClickNoticeHandler(item)}>
                                    {contentChange(item)}
                                </Text>  
                            </ContentWrapper>   
                            <RightWrapper>
                                {(item?.contents.image) && <LaneImage src={item?.contents.image} alt=''/>}
                                <RightText>
                                    ARIA | {item?.contents.date}
                                </RightText>
                            </RightWrapper>
                        </LineContainer>
                    )
                })}
            </ListContainer>
        </OutWrapper>
    </ListLayoutContainer>
  )
};

const ListLayoutContainer = styled.div`
    width: 1320px;
    margin: 60px auto;

    @media screen and (max-width: 1320px) {
        width: 96%;
    }
`;

const OutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    @media screen and (max-width: 500px) {
        gap: 8px;
    }
`;

const TitleContainer = styled.div`
    font-family: "Pretendard";
    font-size: 24px;
    font-weight: 600;
    line-height: 140%;
    width: 100%;
    display: flex;
    align-items: end;
    color: #222020;
    gap: 16px;

    @media screen and (max-width: 500px) {
        font-size: 18px;
        gap: 8px;
    }
`;

const TotalWrapper = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    color: #222020;
    display: flex;
    align-items: end;
    gap: 8px;

    @media screen and (max-width: 500px) {
        font-size: 12px;
        gap: 5px;
    }
`;

const Total = styled.div`
    color: #0c1fc9;
    font-size: 20px;
    font-weight: 600;

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

const ListContainer = styled.div`
    border-top: 2px solid #222020;
    border-bottom: 2px solid #222020;
`;

const LineContainer = styled.div`
    font-family: "Pretendard";
    line-height: normal;
    height: 30px;
    padding: 30px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;

    @media screen and (max-width: 500px) {
        height: 20px;
        padding: 14px 10px;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    @media screen and (max-width: 500px) {
        gap: 8px;
    }
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    color: #39373A;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 500px) {
        font-size: 10px;
    }
`;

const NoticeIcon = styled.div`
    font-family: "Pretendard";
    font-weight: 700;
    line-height: normal;
    font-size: 16px;
    color: #db0e0e;
    display: flex;
    align-items: center;
    min-width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 836px) {
        font-size: 14px;
        min-width: 50px;
    }

    @media screen and (max-width: 500px) {
        font-size: 10px;
        min-width: 30px;
    }
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    height: 100%;

    @media screen and (max-width: 500px) {
        font-size: 12px;
        gap: 8px;
    }
`;

const RightText = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #222020;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;

    @media screen and (max-width: 836px) {
        font-size: 12px;
        width: 100px;
    }

    @media screen and (max-width: 500px) {
        font-size: 8px;
        width: 80px;
    }
`;

const LaneImage = styled.img`
    min-width: 44px;
    height: 44px;
    object-fit: cover;

    @media screen and (max-width: 836px) {
        min-width: 38px;
        height: 38px;
    }

    @media screen and (max-width: 500px) {
        min-width: 26px;
        height: 26px;
    }
`;

export const TopLaneLeftText = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #222020;
    min-width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 836px) {
        font-size: 16px;
        min-width: 50px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
        min-width: 30px;
    }
`;

const TopLaneCenterText = styled(TopLaneLeftText)`
    display: flex;
    justify-content: center;
`;

const TopLaneRightText = styled(TopLaneLeftText)`
    width: 120px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 836px) {
        width: 100px;
    }

    @media screen and (max-width: 500px) {
        width: 80px;
    }
`;

export default NotificationList;