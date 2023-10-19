import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import Notice from '../../assets/icons/notification.png';
import RightArrow from '../../assets/icons/rightcolorarrow.png';
import { NotificationData } from '../../data/NotificationData';
import { useNavigate } from 'react-router-dom';

const NotificationList = () => {

    const japanese = useRecoilValue(translate);
    const navigate = useNavigate();

    const onClickNoticeHandler = ( item : any ) => {
        navigate(`/notice/notification/detail/${item?.id}`);
    };

  return (
    <ListLayoutContainer>
        <OutWrapper>
            <TitleContainer>
                {japanese ? "お知らせ" : "공지"}
                <TotalWrapper>
                    Total
                    <Total>
                        {NotificationData.length}
                    </Total>
                    {japanese ? " 件" : " 건"}
                </TotalWrapper>
            </TitleContainer>
            <ListContainer>
                {NotificationData?.map((item : any) => {
                    return (
                        (NotificationData.indexOf(item) === NotificationData.length - 1)
                            ? <LineContainer
                                key={item.id}
                                style={{borderBottom: "none"}}>
                                <ContentWrapper>
                                    <NoticeIcon src={Notice}/>
                                    <Text onClick={() => onClickNoticeHandler(item)}>
                                        {japanese ? item?.japanesenotice : item?.notice}
                                    </Text>  
                                </ContentWrapper>
                                <ArrowIcon
                                    src={RightArrow}
                                    onClick={() => onClickNoticeHandler(item)}/>
                            </LineContainer>
                            : <LineContainer
                                key={item.id}>
                                <ContentWrapper>
                                    <NoticeIcon src={Notice}/>
                                    <Text onClick={() => onClickNoticeHandler(item)}>
                                        {japanese ? item?.japanesenotice : item?.notice}
                                    </Text>  
                                </ContentWrapper>
                                <ArrowIcon
                                    src={RightArrow}
                                    onClick={() => onClickNoticeHandler(item)}/>
                            </LineContainer>
                    )
                })}
            </ListContainer>
        </OutWrapper>
    </ListLayoutContainer>
  )
};

const ListLayoutContainer = styled.div`
    width: 100%;
    margin: 60px 0px;
`;

const OutWrapper = styled.div`
    margin: 20px 15% 20px 15%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const TitleContainer = styled.div`
    font-family: "Pretendard";
    font-size: 24px;
    font-weight: 600;
    line-height: 140%;
    width: 100%;
    display: flex;
    align-items: end;
    color: #222020;
    gap: 16px;
`;

const TotalWrapper = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    color: #222020;
    display: flex;
    align-items: end;
    gap: 8px;
`;

const Total = styled.div`
    color: #0c1fc9;
    font-size: 20px;
    font-weight: 600;
`;

const ListContainer = styled.div`
    border-top: 2px solid #222020;
    border-bottom: 2px solid #222020;
`;

const LineContainer = styled.div`
    height: 30px;
    padding: 30px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    color: #39373A;
    cursor: pointer;

    &:hover {
        color: #8f8f8f;
    }
`;

const NoticeIcon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

const ArrowIcon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    opacity: 0.8;
    cursor: pointer;
`;

export default NotificationList;