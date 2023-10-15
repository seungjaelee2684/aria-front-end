import React from 'react'
import styled from 'styled-components';
import Poster from '../../assets/images/poster.png';
import { useRecoilValue } from 'recoil';
import { translate } from '../../store/Translation';
import { useNavigate } from 'react-router-dom';

interface NoticeCardProps {
    item: any;
}

const NoticeCard : React.FC<NoticeCardProps> = ({ item }) => {

    const navigate = useNavigate();
    const japanese = useRecoilValue(translate);

  return (
    <CardContainer
        onClick={() => navigate(`/notice/detail/${item?.id}`)}
        style={{
            opacity: `${(item?.status === "PROCEEDING") ? "" : "0.7"}`
        }}>
        <CardImage src={item?.image}/>
        <LineContainer>
            <TextWrapper
                style={{
                    fontSize: `${japanese ? "14px" : ""}`
                }}>
                <Text>
                    {japanese
                        ? `タイトル: ${item?.japanesetitle}`
                        : `제목: ${item?.title}`}  
                </Text>
                <Text>
                    {japanese
                        ? "期間: "
                        : "기간: "}
                    {item?.period}
                </Text>
            </TextWrapper>
            {item?.status === "DEADLINE" && <StampContainer>
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
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 5px;
`;

const TextWrapper = styled.div`
    font-size: 16px;
`;

const Text = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-weight: 400;
    line-height: 140%;
    color: #222020;
    user-select: none;
    display: flex;
    padding: 0px 5px;
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
    position: absolute;
    bottom: 5px;
    right: 5px;
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