import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Notice from '../../../assets/icons/notification.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../../../store/Translation';
import './Notification.css';
import { NotificationData } from '../../../data/NotificationData';
import { useNavigate } from 'react-router-dom';

const Notification = () => {

    const japanese = useRecoilValue(translate);
    const navigate = useNavigate();

    const textRef = useRef<HTMLDivElement>(null);
    const [textCurrent, setTextCurrent] = useState<number>(0);
    const [startPoint, setStartPoint] = useState<boolean>(false);
    const currentHeight : number = textCurrent * 30;

    useEffect(() => {
        if (textRef.current) {
            if (textCurrent === 0 && startPoint === true) {
                textRef.current.style.transition = "none";
                textRef.current.style.transform = `translateY(-${currentHeight}px)`;
            } else {
                textRef.current.style.transition = "all 2s ease";
                textRef.current.style.transform = `translateY(-${currentHeight}px)`;
            }; 
        };

        setStartPoint(true);

        const interVal = setInterval(() => {
            if (textCurrent === 5) {
                setTextCurrent(0);
            } else {
                setTextCurrent(textCurrent + 1);
            };
        }, (textCurrent === 0 && startPoint === true) ? 1 : 5000);

        return () => {
            clearInterval(interVal);
        };
    }, [textCurrent]);

    // console.log("공지사항 번호", textCurrent, startPoint);

  return (
    <LineContainer>
        <ContentWrapper>
            <NoticeIcon src={Notice}/>
            <Title>{japanese ? "お知らせ" : "공지 사항"}</Title>
            <BarContainer />
            <TextWrapper>
                <TextBox ref={textRef}>
                    {NotificationData?.map((item : any) => {
                        return (
                            <Text
                                key={item?.id}
                                onClick={() => navigate(`/notice/notification/detail/${item?.id}`)}>
                                {japanese
                                    ? item?.japanesenotice
                                    : item?.notice}
                            </Text>
                        )
                    })
                    }
                    <Text>
                        {japanese
                            ? NotificationData[0]?.japanesenotice
                            : NotificationData[0]?.notice}
                    </Text>
                </TextBox>
            </TextWrapper>
        </ContentWrapper>
        <SeeMoreButton
            className='SeeMoreButton'
            onClick={() => navigate("/notice/notification")}>
            <span className='SpanContainer'>
                {japanese ? "もっと見る" : "더보기"}
            </span>
        </SeeMoreButton>
    </LineContainer>
  )
};

const LineContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Pretendard";
    margin: 20px 0px;
    user-select: none;
`;

const NoticeIcon = styled.img`
    width: 28px;
    height: 28px;
    object-fit: contain;
`;

const Title = styled.div`
    width: 74px;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    color: #222020;
`;

const BarContainer = styled.div`
    width: 4px;
    height: 30px;
    background-color: red;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const TextWrapper = styled.div`
    display: flex;
    padding-left: 20px;
    height: 30px;
    overflow-y: hidden;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Text = styled.div`
    display: flex;
    align-items: center;
    min-height: 30px;
    /* text-overflow: ellipsis;
    word-break: break-word;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical; */
    cursor: pointer;

    &:hover {
        color: #8f8f8f;
    }
`;

const SeeMoreButton = styled.button`
    width: 120px;
    height: 40px;
    border: none;
    color: #222020;
    background-color: #FFF;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
`;

export default Notification;