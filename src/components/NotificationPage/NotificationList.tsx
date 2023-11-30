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

    const language = localStorage.getItem("language");
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
                return item?.chinesenotice;
            case "japanese" :
                return item?.japanesenotice;
            case "korean" :
                return item?.notice;
            default :
                return item?.englishnotice;
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
                {NotificationData?.map((item : any) => {
                    return (
                        (NotificationData.indexOf(item) === NotificationData.length - 1)
                            ? <LineContainer
                                key={item.id}
                                style={{borderBottom: "none"}}>
                                <ContentWrapper>
                                    <NoticeIcon>
                                        <AiOutlineNotification />
                                    </NoticeIcon>
                                    <Text onClick={() => onClickNoticeHandler(item)}>
                                        {contentChange(item)}
                                    </Text>  
                                </ContentWrapper>
                                <IoIosArrowForward />
                            </LineContainer>
                            : <LineContainer
                                key={item.id}>
                                <ContentWrapper>
                                    <NoticeIcon>
                                        <AiOutlineNotification />
                                    </NoticeIcon>
                                    <Text onClick={() => onClickNoticeHandler(item)}>
                                        {contentChange(item)}
                                    </Text>  
                                </ContentWrapper>
                                <IoIosArrowForward />
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
    height: 30px;
    padding: 30px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;

    @media screen and (max-width: 500px) {
        height: 20px;
        padding: 20px 10px;
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
        color: #8f8f8f;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }
`;

const NoticeIcon = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    color: red;

    @media screen and (max-width: 836px) {
        font-size: 20px;
    }

    @media screen and (max-width: 500px) {
        font-size: 16px;
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

export default NotificationList;