import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Notice from '../../../assets/icons/notification.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../../../store/Translation';
import './Notification.css';
import { NotificationData } from '../../../data/NotificationData';
import { useNavigate } from 'react-router-dom';
import { AiOutlineNotification } from "react-icons/ai";

const Notification = () => {

    const language = useRecoilValue(translate);
    const navigate = useNavigate();

    const [textCurrent, setTextCurrent] = useState<number>(0);
    const [prevCuttent, setPrevCuttent] = useState<number | undefined>();

    const onTitleHandler = ( Num : number ) => {
        if (Num === 0) {
          switch (language) {
            case "english" :
                return "Announcements";
            case "chinese" :
                return "公告事项";
            case "japanese" :
                return "お知らせ";
            case "korean" :
                return "공지 사항";
            default :
                return "Announcements";
          };
        } else {
          switch (language) {
            case "english" :
                return "More";
            case "chinese" :
                return "查看更多";
            case "japanese" :
                return "もっと見る";
            case "korean" :
                return "더보기";
            default :
                return "More";
          };
        }; 
    };

    const noticeText = ( item : any ) => {
        switch (language) {
            case "english" :
                return item?.englishnotice;
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

    useEffect(() => {
        const interVal = setInterval(() => {
            setTextCurrent((prevSlideCurrent) => (prevSlideCurrent + 1) % (NotificationData.length));
            setPrevCuttent(textCurrent);
        }, 6000);

        return () => {
            clearInterval(interVal);
        };
    }, [textCurrent, prevCuttent]);

    // console.log("공지사항 번호", textCurrent, startPoint);

  return (
    <LineContainer>
        <ContentWrapper>
            <NoticeIcon>
                <AiOutlineNotification />
            </NoticeIcon>
            <Title
                textwidth={
                    (language === "english" || language === null)
                        ? 130
                        : 90
                }>{onTitleHandler(0)}</Title>
            <BarContainer />
            <TextWrapper>
                {NotificationData?.map((item : any) => {
                    return (
                        <Text
                            className={
                                (textCurrent === NotificationData.indexOf(item))
                                    ? "Text"
                                    : (prevCuttent === NotificationData.indexOf(item))
                                        ? "PrevText"
                                        : ""
                            }
                            key={item?.id}>
                            {noticeText(item)}
                        </Text>
                    )
                })
                }
            </TextWrapper>
        </ContentWrapper>
        <SeeMoreButton
            className='SeeMoreButton'
            onClick={() => navigate("/notice/notification")}>
            <span className='SpanContainer'>
                {onTitleHandler(1)}
            </span>
        </SeeMoreButton>
    </LineContainer>
  )
};

const LineContainer = styled.div`
    width: 1320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Pretendard";
    margin: 20px auto;
    user-select: none;

    @media screen and (max-width: 1320px) {
        width: 100%;
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

const Title = styled.div<{ textwidth : number }>`
    min-width: ${(props) => `${props.textwidth}px`};
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    color: #222020;

    @media screen and (max-width: 836px) {
        min-width: ${(props) => `${props.textwidth - 10}px`};
        font-size: 13px;
    }

    @media screen and (max-width: 500px) {
        min-width: ${(props) => `${props.textwidth - 38}px`};
        font-size: 11px;
    }
`;

const BarContainer = styled.div`
    min-width: 4px;
    height: 30px;
    background-color: red;

    @media screen and (max-width: 500px) {
        min-width: 2px;
        height: 20px;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;

    @media screen and (max-width: 1320px) {
        gap: 4px;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    width: 100%;
    padding-left: 20px;
    height: 30px;
    position: relative;

    @media screen and (max-width: 500px) {
        height: 20px;
    }
`;

const Text = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    min-height: 30px;
    font-size: 16px;
    font-weight: 400;
    /* text-overflow: ellipsis;
    word-break: break-word;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical; */
    opacity: 0;
    position: absolute;
    top: 0;
    left: 10px;

    @media screen and (max-width: 836px) {
        font-size: 13px;
        font-weight: 400;
    }

    @media screen and (max-width: 500px) {
        font-size: 11px;
        font-weight: 400;
        min-height: 20px;
    }
`;

const SeeMoreButton = styled.button`
    width: 130px;
    height: 30px;
    border: none;
    color: #222020;
    background-color: #FFF;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    border-radius: 5px;
    text-align: end;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        width: 100px;
        font-size: 12px;
        height: 20px;
    }
`;

export default Notification;