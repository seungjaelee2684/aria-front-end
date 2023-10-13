import React from 'react'
import styled from 'styled-components';
import Poster from '../../assets/images/poster.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';

interface NoticeCardProps {
    end: boolean;
}

const NoticeCard : React.FC<NoticeCardProps> = ({ end }) => {

    const japanese = useRecoilValue(translate);

  return (
    <CardContainer style={{opacity: `${end ? "0.7" : ""}`}}>
        <CardImage src={Poster}/>
        <LineContainer>
            <TextWrapper>
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
            </TextWrapper>
            {end && <StampContainer>
                    <StampInContainer>
                        <StampBox>
                            <StampInBox>
                                {japanese ? "締め切り" : "마감"}
                            </StampInBox>
                        </StampBox>
                    </StampInContainer>
                </StampContainer>} 
        </LineContainer>
    </CardContainer>
  )
};

const CardContainer = styled.div`
    width: 319px;
    height: 380px;
    display: grid;
    gap: 0px;
    border: 1px solid #e9e9e9;
    position: relative;

    &:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: 1340px) {
        width: 250px;
        height: 300px;  
    }
`;

const CardImage = styled.div<{ src : string }>`
    width: 319px;
    height: 319px;
    background-image: url(${(props) => props.src});
    background-size: 319px 319px;
    background-position: center center;
    background-repeat: no-repeat;

    @media screen and (max-width: 1340px) {
        width: 250px;
        height: 250px;
        background-size: 250px 250px;
    }
`;

const LineContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 5px;
`;

const TextWrapper = styled.div`
`;

const Text = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    color: #222020;
    user-select: none;
    display: flex;
    padding: 0px 10px;
`;

const StampContainer = styled.div`
    min-width: 50px;
    height: 50px;
    border: 1px dotted #7c7c7c;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #7c7c7c;

    @media screen and (max-width: 1340px) {
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
`;

const StampInContainer = styled.div`
    width: 44px;
    height: 44px;
    border: 1px solid;
    position: relative;
    border-radius: 100%;
`;

const StampBox = styled.div`
    width: 56px;
    height: 20px;
    border: 1px solid;
    background-color: #FFF;
    position: absolute;
    top: 10px;
    left: -8px;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(20deg);
`;

const StampInBox = styled.div`
    width: 52px;
    height: 16px;
    border: 0.5px solid;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default NoticeCard;