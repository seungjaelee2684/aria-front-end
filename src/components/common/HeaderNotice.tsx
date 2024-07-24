import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import '../../style/HeaderNotice.css';
import { noticeData } from '../../data/NoticeData';
import { newNoticeData } from '../../data/NewNoticeData';
import { AiFillNotification } from "react-icons/ai";
import { filterState } from '../../languages/NoticeTrans';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderNotice = () => {

    const language = localStorage.getItem("language");
    const location = useLocation();
    const navigate = useNavigate();

    const [nextContent, setNextContent] = useState<number>(0);
    const [prevContent, setPrevContent] = useState<number | undefined>();

    const path = newNoticeData[0] ? `/notice/detail/${newNoticeData[nextContent]?.id}` : "error";

    const titleTrans = (Num: number) => {
        switch (language) {
            case "japanese":
                return filterState[Num]?.japanesestate;
            case "korean":
                return filterState[Num]?.state;
            default:
                return filterState[Num]?.englishstate;
        };
    };

    const noticeText = (item: any) => {
        switch (language) {
            case "japanese":
                return item?.contents.japanesetitle;
            case "korean":
                return item?.contents.title;
            default:
                return item?.contents.englishtitle;
        };
    };

    useEffect(() => {
        const interVal = setInterval(() => {
            setNextContent((prevSlideCurrent) => (prevSlideCurrent + 1) % (noticeData.length));
            setPrevContent(nextContent);
        }, 5000);

        return () => {
            clearInterval(interVal);
        };
    }, [nextContent, prevContent]);

    return (
        <NoticeHeader style={{display: (location.pathname === "/") ? "none" : "block"}}>
            <NoticeWrapper>
                <NoticeIcon>
                    <AiFillNotification />
                </NoticeIcon>
                <NoticeRightWrapper href={(newNoticeData[0]) ? path : ''}>
                    {newNoticeData?.map((item: any) => {
                        return (
                            <NoticeLane
                                className={
                                    (nextContent === noticeData.indexOf(item))
                                        ? "HeaderText"
                                        : (prevContent === noticeData.indexOf(item))
                                            ? "HeaderPrevText"
                                            : ""
                                }
                                key={item?.id}>
                                <NoticeTitle color={(item?.status === "Notice") ? "#db0e0e" : "#3c3ad6"}>
                                    {(item?.status === "Notice")
                                        ? titleTrans(1)
                                        : titleTrans(2)}
                                </NoticeTitle>
                                <Text>
                                    <InText>
                                        {noticeText(item)}
                                    </InText>
                                </Text>
                            </NoticeLane>
                        )
                    })
                    }
                </NoticeRightWrapper>
            </NoticeWrapper>
        </NoticeHeader>
    )
};

const NoticeHeader = styled.div`
    width: 100%;
    height: 40px;
`;

const NoticeWrapper = styled.div`
    width: 1320px;
    height: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    user-select: none;
    font-family: "Pretendard";

    @media screen and (max-width: 1320px) {
        width: 96%;
    }
`;

const NoticeIcon = styled.div`
    font-size: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    color: #f0ec17;

    @media screen and (max-width: 836px) {
        font-size: 16px;
    }
`;

const NoticeTitle = styled.div<{ color : string }>`
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    width: 90px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.color};

    @media screen and (max-width: 836px) {
        font-size: 13px;
        font-weight: 400;
        width: 70px;
    }

    @media screen and (max-width: 500px) {
        font-size: 11px;
        font-weight: 400;
        width: 50px;
    }
`;

const NoticeRightWrapper = styled.a`
    width: 836px;
    height: 100%;
    position: relative;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: 836px) {
        width: 100%;
    }
`;

const NoticeLane = styled.div`
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
`;

const Text = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    min-height: 30px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;

    @media screen and (max-width: 836px) {
        font-size: 12px;
        font-weight: 400;
    }

    @media screen and (max-width: 500px) {
        font-size: 10px;
        font-weight: 400;
        min-height: 20px;
    }
`;

const InText = styled.div`
    width: 100%;
    height: 20px;
    text-overflow: ellipsis;
    word-break: break-word;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

export default HeaderNotice;