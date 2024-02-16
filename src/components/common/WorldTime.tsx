import React from 'react'
import styled from 'styled-components';

const WorldTime = () => {

    const now = new Date();
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
    const SeoulDate = new Intl.DateTimeFormat('en-US', options.KST.options).format(now);
    const TokyoDate = new Intl.DateTimeFormat('en-US', options.JST.options).format(now);
    const NewYorkDate = new Intl.DateTimeFormat('en-US', options.EST.options).format(now);

    return (
        <TimeContainer>{SeoulDate + TokyoDate + NewYorkDate}</TimeContainer>
    )
};

const TimeContainer = styled.div`
    position: fixed;
    bottom: 10%;
    right: 2%;
    font-family: "Pretendard";
    user-select: none;
`;

export default WorldTime;