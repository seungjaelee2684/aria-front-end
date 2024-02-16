import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const WorldTime = () => {

    const options : any = {
        KST: {
            acronym: "KST",
            options: { timeZone: 'Asia/Seoul', timeStyle: 'short' as const }
        },
        JST: {
            acronym: "JST",
            options: { timeZone: 'Asia/Tokyo', timeStyle: 'short' as const }
        },
        EST: {
            acronym: "EST",
            options: { timeZone: 'America/New_York', timeStyle: 'short' as const }
        },
    };

    const now = new Date();
    const SeoulDate = new Intl.DateTimeFormat('en-US', options.KST.options).format(now);
    const TokyoDate = new Intl.DateTimeFormat('en-US', options.JST.options).format(now);
    const NewYorkDate = new Intl.DateTimeFormat('en-US', options.EST.options).format(now);

    const [worldTimes, setWorldTimes] = useState<any>({
        seoul: SeoulDate,
        tokyo: TokyoDate,
        newyork: NewYorkDate
    });
    const { seoul, tokyo, newyork } = worldTimes;

    useEffect(() => {
        const setTime = setInterval(() => {
            const now = new Date();
            const SeoulDate = new Intl.DateTimeFormat('en-US', options.KST.options).format(now);
            const TokyoDate = new Intl.DateTimeFormat('en-US', options.JST.options).format(now);
            const NewYorkDate = new Intl.DateTimeFormat('en-US', options.EST.options).format(now);
            setWorldTimes({...worldTimes, seoul: SeoulDate, tokyo: TokyoDate, newyork: NewYorkDate});
        }, 60000);

        return () => clearInterval(setTime);
    }, [worldTimes]); 

    return (
        <TimeContainer>
            <SeoulTime>
                {seoul} (KST)
            </SeoulTime>
            <StandardTime>
                {tokyo} (JST)
            </StandardTime>
            <StandardTime>
                {newyork} (EST)
            </StandardTime>
        </TimeContainer>
    )
};

const TimeContainer = styled.section`
    position: fixed;
    bottom: 4%;
    right: 9%;
    z-index: 101;
    font-family: "Pretendard";
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #202124;
    padding: 10px;
    border-radius: 4px;
`;

const SeoulTime = styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 100%;
    color: #FFFFFF;
`;

const StandardTime = styled.div`
    font-size: 14px;
    font-weight: 300;
    line-height: 100%;
    color: #FFFFFF;
    /* text-shadow: 0px 0px 3px #000000; */
`;

export default WorldTime;