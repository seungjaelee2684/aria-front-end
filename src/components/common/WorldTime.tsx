import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import '../../style/font/font.css';

const WorldTime = () => {

    const options : any = {
        KST: {
            acronym: "KST",
            date: { timeZone: 'Asia/Seoul', dateStyle: 'full' as const },
            time: { timeZone: 'Asia/Seoul', timeStyle: 'short' as const }
        },
        JST: {
            acronym: "JST",
            date: { timeZone: 'Asia/Tokyo', dateStyle: 'full' as const },
            time: { timeZone: 'Asia/Tokyo', timeStyle: 'short' as const }
        },
        EST: {
            acronym: "EST",
            date: { timeZone: 'America/New_York', dateStyle: 'full' as const },
            time: { timeZone: 'America/New_York', timeStyle: 'short' as const }
        },
    };

    const now = new Date();
    const SeoulDate = new Intl.DateTimeFormat('en-US', options.KST.date).format(now);
    const SeoulTime = new Intl.DateTimeFormat('en-US', options.KST.time).format(now);
    const TokyoDate = new Intl.DateTimeFormat('en-US', options.JST.date).format(now);
    const TokyoTime = new Intl.DateTimeFormat('en-US', options.JST.time).format(now);
    const NewYorkDate = new Intl.DateTimeFormat('en-US', options.EST.date).format(now);
    const NewYorkTime = new Intl.DateTimeFormat('en-US', options.EST.time).format(now);

    const [worldTimes, setWorldTimes] = useState<any>({
        seoul: {
            date: SeoulDate,
            time: SeoulTime
        },
        tokyo: {
            date: TokyoDate,
            time: TokyoTime
        },
        newyork: {
            date: NewYorkDate,
            time: NewYorkTime
        }
    });
    const { seoul, tokyo, newyork } = worldTimes;

    useEffect(() => {
        const setTime = setInterval(() => {
            const now = new Date();
            const SeoulDate = new Intl.DateTimeFormat('en-US', options.KST.date).format(now);
            const SeoulTime = new Intl.DateTimeFormat('en-US', options.KST.time).format(now);
            const TokyoDate = new Intl.DateTimeFormat('en-US', options.JST.date).format(now);
            const TokyoTime = new Intl.DateTimeFormat('en-US', options.JST.time).format(now);
            const NewYorkDate = new Intl.DateTimeFormat('en-US', options.EST.date).format(now);
            const NewYorkTime = new Intl.DateTimeFormat('en-US', options.EST.time).format(now);
            setWorldTimes({
                ...worldTimes,
                seoul: {...seoul, date: SeoulDate, time: SeoulTime},
                tokyo: {...tokyo, date: TokyoDate, time: TokyoTime},
                newyork: {...newyork, date: NewYorkDate, time: NewYorkTime}
            });
        }, 60000);

        return () => clearInterval(setTime);
    }, [worldTimes]); 

    return (
        <TimeContainer>
            <SeoulTimeContent>
                {seoul.time} (KST)
            </SeoulTimeContent>
            <StandardTime style={{color: "#cecece"}}>
                {seoul.date}
            </StandardTime>
            <StandardTime style={{marginTop: "8px"}}>
                {tokyo.time} (JST)
            </StandardTime>
            <SubDateContent style={{color: "#c2c2c2"}}>
                {tokyo.date}
            </SubDateContent>
            <StandardTime style={{marginTop: "8px"}}>
                {newyork.time} (EST)
            </StandardTime>
            <SubDateContent style={{color: "#c2c2c2"}}>
                {newyork.date}
            </SubDateContent>
        </TimeContainer>
    )
};

const TimeContainer = styled.section`
    position: fixed;
    bottom: 4%;
    right: 4%;
    z-index: 101;
    font-family: "Pretendard";
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2px;
    background-color: #202124ba;
    padding: 8px;
    border-radius: 2px;
    color: #FFFFFF;

    @media screen and (max-width: 1920px) {
        right: 5%;
    }

    @media screen and (max-width: 1320px) {
        right: 9%;
    }

    @media screen and (max-width: 836px) {
        right: 11%;
    }

    @media screen and (max-width: 500px) {
        right: 56px;
        bottom: 60px;
    }
`;

const SeoulTimeContent = styled.div`
    font-size: 22px;
    font-weight: 600;
    line-height: 100%;
    
    @media screen and (max-width: 1920px) {
        font-size: 18px;
        font-weight: 500;
    }
`;

const StandardTime = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;

    @media screen and (max-width: 1920px) {
        font-size: 14px;
        font-weight: 300;
    }
`;

const SubDateContent = styled.div`
    font-size: 12px;
    font-weight: 300;
    line-height: 100%;

    @media screen and (max-width: 1920px) {
        font-size: 11px;
    }
`;

export default WorldTime;