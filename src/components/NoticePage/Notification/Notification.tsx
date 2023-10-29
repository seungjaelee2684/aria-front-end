import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Notice from '../../../assets/icons/notification.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../../../store/Translation';
import './Notification.css';
import { NotificationData } from '../../../data/NotificationData';
import { useNavigate } from 'react-router-dom';

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
            case "japanese" :
                return "お知らせ";
            default :
                return "공지 사항";
          };
        } else {
          switch (language) {
            case "english" :
                return "More";
            case "japanese" :
                return "もっと見る";
            default :
                return "더보기";
          };
        }; 
    };

    const noticeText = ( item : any ) => {
        switch (language) {
            case "english" :
                return item?.englishnotice;
            case "japanese" :
                return item?.japanesenotice;
            default :
                return item?.notice;
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
            <NoticeIcon src={Notice}/>
            <Title>{onTitleHandler(0)}</Title>
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

const NoticeIcon = styled.img`
    width: 28px;
    height: 28px;
    object-fit: contain;
`;

const Title = styled.div`
    min-width: 120px;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    color: #222020;
`;

const BarContainer = styled.div`
    min-width: 4px;
    height: 30px;
    background-color: red;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
`;

const TextWrapper = styled.div`
    display: flex;
    width: 100%;
    padding-left: 20px;
    height: 30px;
    position: relative;
`;

const Text = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    min-height: 30px;
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
`;

const SeeMoreButton = styled.button`
    width: 130px;
    height: 40px;
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
`;

export default Notification;