import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Notice from '../../../assets/icons/notification.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../../../store/Translation';
import './Notification.css';
import { NotificationData } from '../../../data/NotificationData';

const Notification = () => {

    const japanese = useRecoilValue(translate);

    const textRef = useRef<HTMLDivElement>(null);
    const [textCurrent, setTextCurrent] = useState<number>(0);
    const currentHeight : number = textCurrent * 30;

    useEffect(() => {
        if (textRef.current) {
            textRef.current.style.transform = `translateY(-${currentHeight}px)`;
        };
    }, [textCurrent]);

  return (
    <LineContainer>
        <ContentWrapper>
            <NoticeIcon src={Notice}/>
            <Title>{japanese ? "お知らせ" : "공지"}</Title>
            <BarContainer />
            <TextWrapper>
                <TextBox ref={textRef}>
                    {NotificationData?.map((item : any) => {
                        return (
                            <Text>
                                {japanese
                                    ? item?.japanesenotice
                                    : item?.notice}
                            </Text>
                        )
                    })
                    }
                </TextBox>
            </TextWrapper>
        </ContentWrapper>
        <SeeMoreButton onClick={() => setTextCurrent(textCurrent + 1)} className='SeeMoreButton'>
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
    width: 32px;
    height: 32px;
    object-fit: contain;
`;

const Title = styled.div`
    font-size: 18px;
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
    gap: 10px;
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
    transition: all 1s ease;
`;

const Text = styled.div`
    display: flex;
    align-items: center;
    min-height: 30px;
`;

const SeeMoreButton = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    color: #FCFCFC;
    background-color: #4947f7;
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 600;
    line-height: 140%;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
`;

export default Notification;