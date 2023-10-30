import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { translate } from '../../store/Translation';
import Notice from '../../assets/icons/notification.png';
import RightArrow from '../../assets/icons/rightcolorarrow.png';
import { NotificationData } from '../../data/NotificationData';
import { useNavigate } from 'react-router-dom';

const NotificationList = () => {

    const language = useRecoilValue(translate);
    const navigate = useNavigate();

    const onClickNoticeHandler = ( item : any ) => {
        navigate(`/notice/notification/detail/${item?.id}`);
    };

    const textChange = ( Num : number ) => {
        if (Num === 0) {
          switch (language) {
            case "english" :
                return "Notice";
            case "japanese" :
                return "お知らせ";
            default :
                return "공지";
          };
        } else {
            switch (language) {
                case "english" :
                    return "cases";
                case "japanese" :
                    return " 件";
                default :
                    return " 건";
            };
        };
    };

    const contentChange = ( item : any ) => {
        switch (language) {
            case "english" :
                return item?.englishnotice;
            case "japanese" :
                return item?.japanesenotice;
            default :
                return item?.notice;
        };
    };

  return (
    <ListLayoutContainer>
        <OutWrapper>
            <TitleContainer>
                {textChange(0)}
                <TotalWrapper>
                    Total
                    <Total>
                        {NotificationData.length}
                    </Total>
                    {textChange(1)}
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
                                        {contentChange(item)}
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
                                        {contentChange(item)}
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
    width: 1320px;
    margin: 60px auto;

    @media screen and (max-width: 1320px) {
        width: 96%;
    }
`;

const OutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
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