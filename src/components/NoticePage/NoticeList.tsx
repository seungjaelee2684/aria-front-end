import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import Notice from '../../assets/icons/notification.png';
import { IoIosArrowForward } from "react-icons/io";
import { noticeData } from '../../data/NoticeData';
import { useNavigate } from 'react-router-dom';
import { AiOutlineNotification } from "react-icons/ai";
import { NoticeTrans } from '../../languages/NoticeTrans';
import NotSearch from '../common/NotSearch';

interface NoticeListProps {
    data: any;
    noticeFilter: string;
};

const NoticeList : React.FC<NoticeListProps> = ({ data, noticeFilter }) => {

    const language = localStorage.getItem("language");
    const navigate = useNavigate();
    const noticeData = data?.data.noticeListData;

    const onClickNoticeHandler = ( item : any ) => {
        navigate(`/notice/detail/${item?.noticeId}`);
    };

    const textChange = ( Num : number ) => {
        switch (language) {
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
            case "japanese" :
                return item?.japanesetitle;
            case "korean" :
                return item?.title;
            default :
                return item?.englishtitle;
        };
    };

  return (
    <ListContainer>
        <TopLineContainer>
            <TopLaneLeftText>
                {textChange(4)}
            </TopLaneLeftText>
            <TopLaneCenterText>
                {textChange(5)}
            </TopLaneCenterText>
            <TopLaneRightText>
                {textChange(6)}
            </TopLaneRightText>
        </TopLineContainer>
        {(noticeData?.length !== 0)
            ? noticeData?.map((item : any, index : number) => {
                    return (
                        <LineContainer
                            key={item.noticeId}
                            style={{
                                borderBottom: (index === noticeData.length - 1) ? "none" : "1px solid #e9e9e9"
                            }}>
                            <ContentWrapper>
                                <NoticeIcon
                                    style={{
                                        color: (item?.state === "Notice") ? "#db0e0e" : "#3c3ad6"
                                    }}>
                                    {(item?.state === "Notice")
                                        ? textChange(1)
                                        : textChange(2)}
                                </NoticeIcon>
                                <Text onClick={() => onClickNoticeHandler(item)}>
                                    {contentChange(item)}
                                </Text>
                            </ContentWrapper>   
                            <RightWrapper>
                                {/* {(item?.contents.content.image.content[0]) && <LaneImage src={item?.contents.content.image.content[0]} alt=''/>} */}
                                <RightText>
                                    {item?.writer} | {item?.createdAt}
                                </RightText>
                            </RightWrapper>
                        </LineContainer>
                    )
                })
            : <NotSearch />
        }
    </ListContainer>
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

const ListContainer = styled.div`
    border-top: 2px solid #222020;
    border-bottom: 2px solid #222020;
`;

export const LineContainer = styled.div`
    font-family: "Pretendard";
    line-height: normal;
    height: 80px;
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;

    @media screen and (max-width: 500px) {
        height: 20px;
        padding: 14px 10px;
    }
`;

const TopLineContainer = styled(LineContainer)`
    height: 60px;

    @media screen and (max-width: 500px) {
        height: 20px;
        padding: 14px 10px;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
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
    /* color: #39373A; */
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
   /* color: #222020; */
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
    width: 48px;
    height: 48px;
    object-fit: cover;
    margin-left: 60px;

    @media screen and (max-width: 836px) {
        width: 38px;
        height: 38px;
        margin-left: 30px;
    }

    @media screen and (max-width: 500px) {
        width: 26px;
        height: 26px;
        margin-left: 0px;
    }
`;

export const TopLaneLeftText = styled.div`
    font-size: 18px;
    font-weight: 600;
   /* color: #222020; */
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

export default NoticeList;