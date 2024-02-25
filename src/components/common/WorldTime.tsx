import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import '../../style/font/font.css';
import { RiMapPinTimeFill } from "react-icons/ri";

const WorldTime = () => {

    const language = localStorage.getItem("language");

    const options: any = {
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

    const [timeOpen, setTimeOpen] = useState<boolean>(false);
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
                seoul: { ...seoul, date: SeoulDate, time: SeoulTime },
                tokyo: { ...tokyo, date: TokyoDate, time: TokyoTime },
                newyork: { ...newyork, date: NewYorkDate, time: NewYorkTime }
            });
        }, 60000);

        return () => clearInterval(setTime);
    }, [worldTimes]);

    const worldTimeChange = () => {
        if (language === "japanese") {
            return (
                <TimeWrapper>
                    <MyTimeWrapper style={{ color: `${(timeOpen) ? "#200e00" : "#FFFFFF"}` }}>
                        <SeoulTimeContent style={{ fontWeight: `${(timeOpen) ? "800" : "600"}` }}>
                            {tokyo.time} (JST)
                        </SeoulTimeContent>
                        <StandardTime>
                            {tokyo.date}
                        </StandardTime>
                    </MyTimeWrapper>
                    <MyTimeWrapper>
                        <SeoulTimeContent>
                            {newyork.time} (EST)
                        </SeoulTimeContent>
                        <StandardTime style={{ color: "#f0f0f0" }}>
                            {newyork.date}
                        </StandardTime>
                    </MyTimeWrapper>
                    <MyTimeWrapper>
                        <SeoulTimeContent>
                            {seoul.time} (KST)
                        </SeoulTimeContent>
                        <StandardTime style={{ color: "#f0f0f0" }}>
                            {seoul.date}
                        </StandardTime>
                    </MyTimeWrapper>
                </TimeWrapper>
            )
        } else if (language === "korean") {
            return (
                <TimeWrapper>
                    <MyTimeWrapper style={{ color: `${(timeOpen) ? "#200e00" : "#FFFFFF"}` }}>
                        <SeoulTimeContent style={{ fontWeight: `${(timeOpen) ? "800" : "600"}` }}>
                            {seoul.time} (KST)
                        </SeoulTimeContent>
                        <StandardTime>
                            {seoul.date}
                        </StandardTime>
                    </MyTimeWrapper>
                    <MyTimeWrapper>
                        <SeoulTimeContent>
                            {tokyo.time} (JST)
                        </SeoulTimeContent>
                        <StandardTime style={{ color: "#f0f0f0" }}>
                            {tokyo.date}
                        </StandardTime>
                    </MyTimeWrapper>
                    <MyTimeWrapper>
                        <SeoulTimeContent>
                            {newyork.time} (EST)
                        </SeoulTimeContent>
                        <StandardTime style={{ color: "#f0f0f0" }}>
                            {newyork.date}
                        </StandardTime>
                    </MyTimeWrapper>
                </TimeWrapper>
            )
        } else {
            return (
                <TimeWrapper>
                    <MyTimeWrapper style={{ color: `${(timeOpen) ? "#200e00" : "#FFFFFF"}` }}>
                        <SeoulTimeContent style={{ fontWeight: `${(timeOpen) ? "800" : "600"}` }}>
                            {newyork.time} (EST)
                        </SeoulTimeContent>
                        <StandardTime>
                            {newyork.date}
                        </StandardTime>
                    </MyTimeWrapper>
                    <MyTimeWrapper>
                        <SeoulTimeContent>
                            {seoul.time} (KST)
                        </SeoulTimeContent>
                        <StandardTime style={{ color: "#f0f0f0" }}>
                            {seoul.date}
                        </StandardTime>
                    </MyTimeWrapper>
                    <MyTimeWrapper>
                        <SeoulTimeContent>
                            {tokyo.time} (JST)
                        </SeoulTimeContent>
                        <StandardTime style={{ color: "#f0f0f0" }}>
                            {tokyo.date}
                        </StandardTime>
                    </MyTimeWrapper>
                </TimeWrapper>
            )
        };
    };

    return (
        <TimeContainer
            onClick={() => setTimeOpen(!timeOpen)}
            style={(timeOpen)
                ? { height: "126px", borderRadius: "10px" }
                : { height: "42px", borderRadius: "50px" }}>
            <Icon>
                <RiMapPinTimeFill />
            </Icon>
            {worldTimeChange()}
        </TimeContainer>
    )
};

const TimeContainer = styled.section`
    position: fixed;
    bottom: 30px;
    right: 60px;
    z-index: 99;
    font-family: "Pretendard";
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 10px;
    background-color: #5c9dff;
    padding: 0px 16px;
    color: #FFFFFF;
    overflow: hidden;
    transition: all 0.3s ease-in;
    box-shadow: #50505090 0px 3px 3px 0px;
    cursor: pointer;

    &:hover {
        background-color: #5c9dffdc;
    }

    @media screen and (max-width: 1320px) {
        bottom: 10px;
        right: 60px;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const TimeWrapper = styled.div`
    width: 100%;
    height: 126px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    font-size: 24px;
`;

const MyTimeWrapper = styled.div`
    height: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 2px;
`;

const SeoulTimeContent = styled.div`
    font-size: 22px;
    font-weight: 600;
    line-height: 100%;

    @media screen and (max-width: 1920px) {
        font-size: 18px;
    }

    @media screen and (max-width: 1320px) {
        font-size: 16px;
    }

    @media screen and (max-width: 836px) {
        font-size: 14px;
    }
`;

const StandardTime = styled.div`
    font-size: 16px;
    font-weight: 300;
    line-height: 100%;

    @media screen and (max-width: 1920px) {
        font-size: 12px;
    }

    @media screen and (max-width: 1320px) {
        font-size: 10px;
    }

    @media screen and (max-width: 836px) {
        font-size: 9px;
    }
`;

export default WorldTime;