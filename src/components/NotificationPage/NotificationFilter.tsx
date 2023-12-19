import React from 'react'
import styled from 'styled-components'
import { NoticeTrans } from '../../languages/NoticeTrans';
import { NotificationData } from '../../data/NotificationData';

interface NotificationFilterProps {
    noticeFilter: string;
    setNoticeFilter: React.Dispatch<React.SetStateAction<string>>;
};

const NotificationFilter : React.FC<NotificationFilterProps> = ({ noticeFilter, setNoticeFilter }) => {
  
    const language = localStorage.getItem("language");

    const filterState : string[] = ["all", "notice", "event"];

    const filterTrans = (Num : number) => {
        switch (language) {
            case "chinese" :
                return NoticeTrans[Num]?.chinesetext;
            case "japanese" :
                return NoticeTrans[Num]?.japanesetext;
            case "korean" :
                return NoticeTrans[Num]?.text;
            default :
                return NoticeTrans[Num]?.englishtext;
        };
    };
  
    return (
        <FilterOutWrapper>
            {filterState?.map((item : string) => {
                return (
                    <FilterButtonWrapper
                        key={item}
                        style={{
                            color: (noticeFilter === item) ? "#222020" : "#ADADAD",
                            fontWeight: (noticeFilter === item) ? "700" : "400"
                        }}
                        onClick={() => setNoticeFilter(item)}>
                        <Point 
                            style={{
                                backgroundColor: (noticeFilter === item) ? "#222020" : "#ADADAD",
                            }}/>
                        <Text>
                            {filterTrans(filterState.indexOf(item))}
                        </Text>
                    </FilterButtonWrapper>
                )
            })}
        </FilterOutWrapper>
    )
};

const FilterOutWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    user-select: none;
`;

const FilterButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Point = styled.div`
    width: 5px;
    height: 5px;
    background-color: #222020;
    border-radius: 100%;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    line-height: normal;
`;

export default NotificationFilter;