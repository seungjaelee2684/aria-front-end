import styled from "styled-components";
import '../style/font/font.css';

export const LayOutTitleContainer = styled.h2`
    font-family: 'CinzelBold';
    font-size: 32px;
    font-weight: 700;
    line-height: 160%;
    display: inline-flex;
    align-items: center;
    gap: 0px;
   /* color: #222020; */
    user-select: none;
    position: relative;

    @media screen and (max-width: 500px) {
        font-size: 24px;
        line-height: 160%;
    }
`;

export const TitleColorText = styled.div<{ color : string }>`
    color: ${(props) => props.color};
`;

export const TitleBarContainer = styled.div`
    width: 45%;
    height: 2px;
    background-color: #222020;
    position: absolute;
    top: 0;
    right: 27.5%;

    @media screen and (max-width: 500px) {
        width: 35%;
        height: 3px;
        right: 32.5%;
    }
`;