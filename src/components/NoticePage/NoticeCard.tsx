import React from 'react'
import styled from 'styled-components';
import Poster from '../../assets/images/poster.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';

const NoticeCard = () => {

    const japanese = useRecoilValue(translate);

  return (
    <CardContainer>
        <CardImage src={Poster}/>
        <Text>
            {japanese
                ? "タイトル: スローガンコンテスト"
                : "제목: 슬로건 공모전"}  
        </Text>
        <Text>
            {japanese
                ? "期間: "
                : "기간: "}
            2023.10.12 ~ 2023.12.25
        </Text>
    </CardContainer>
  )
};

const CardContainer = styled.div`
    width: 319px;
    height: 380px;
    display: grid;
    gap: 0px;
    border: 1px solid #e9e9e9;

    &:hover {
        opacity: 0.8;
    }
`;

const CardImage = styled.div<{ src : string }>`
    width: 319px;
    height: 319px;
    background-image: url(${(props) => props.src});
    background-size: 319px 319px;
    background-position: center center;
    background-repeat: no-repeat;
`;

const Text = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 0%;
    color: #222020;
    user-select: none;
    display: flex;
    padding: 0px 10px;
`;

export default NoticeCard;