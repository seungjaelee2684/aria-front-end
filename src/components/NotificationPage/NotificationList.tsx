import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import Notice from '../../assets/icons/notification.png';
import { IoIosArrowForward } from "react-icons/io";
import { NotificationData } from '../../data/NotificationData';
import { useNavigate } from 'react-router-dom';
import { AiOutlineNotification } from "react-icons/ai";

const NotificationList = () => {

    const language = useRecoilValue(translate);
    const navigate = useNavigate();

    const onClickNoticeHandler = ( item : any ) => {
        navigate(`/notice/notification/detail/${item?.id}`);
    };

    const textChange = ( Num : number ) => {
        if (Num === 0) {
          switch (language) {
            case "chinese" :
                return "公告";
            case "japanese" :
                return "お知らせ";
            case "korean" :
                return "공지";
            default :
                return "Notice";
          };
        } else {
            switch (language) {
                case "chinese" :
                    return " 件";
                case "japanese" :
                    return " 件";
                case "korean" :
                    return " 건";
                default :
                    return "cases";
            };
        };
    };

    const contentChange = ( item : any ) => {
        switch (language) {
            case "chinese" :
                return item?.chinesenotice.title;
            case "japanese" :
                return item?.japanesenotice.title;
            case "korean" :
                return item?.notice.title;
            default :
                return item?.englishnotice.title;
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
                    {textChange(1)}
                </TotalWrapper>
            </TitleContainer>
            <ListContainer>
                <LineContainer style={{height: "10px"}}>
                    <TopLaneLeftText>
                        분류
                    </TopLaneLeftText>
                    <TopLaneCenterText>
                        제목
                    </TopLaneCenterText>
                    <TopLaneRightText>
                        날짜
                    </TopLaneRightText>
                </LineContainer>
                {NotificationData?.map((item : any) => {
                    return (
                        (NotificationData.indexOf(item) === NotificationData.length - 1)
                            ? <LineContainer
                                key={item.id}
                                style={{borderBottom: "none"}}>
                                <ContentWrapper>
                                    <NoticeIcon>
                                        Notice
                                    </NoticeIcon>
                                    <Text onClick={() => onClickNoticeHandler(item)}>
                                        {contentChange(item)}
                                    </Text>  
                                </ContentWrapper>
                                <RightWrapper>
                                    <RightText>
                                        ARIA | {item?.date}
                                    </RightText>
                                </RightWrapper>
                            </LineContainer>
                            : <LineContainer
                                key={item.id}>
                                <ContentWrapper>
                                    <NoticeIcon>
                                        Notice
                                    </NoticeIcon>
                                    <Text onClick={() => onClickNoticeHandler(item)}>
                                        {contentChange(item)}
                                    </Text>  
                                </ContentWrapper>
                                <RightWrapper>
                                    <RightText>
                                        ARIA | {item?.date}
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
    color: red;

    @media screen and (max-width: 836px) {
        font-size: 20px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

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

    @media screen and (max-width: 836px) {
        font-size: 12px;
    }

    @media screen and (max-width: 500px) {
        font-size: 8px;
    }
`;

const ArrowIcon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    opacity: 0.8;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        width: 16px;
        height: 16px;
    }
`;

export const TopLaneLeftText = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #222020;

    @media screen and (max-width: 836px) {
        font-size: 16px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

const TopLaneCenterText = styled(TopLaneLeftText)`
    display: flex;
    justify-content: center;
`;

const TopLaneRightText = styled(TopLaneLeftText)`
    margin-right: 40px;

    @media screen and (max-width: 836px) {
        margin-right: 30px;
    }

    @media screen and (max-width: 500px) {
        margin-right: 20px;
    }
`;

export default NotificationList;