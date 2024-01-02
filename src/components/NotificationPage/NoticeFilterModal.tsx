import React from 'react'
import styled from 'styled-components';
import { NoticeTrans } from '../../languages/NoticeTrans';

interface NoticeFilterModalProps {
    noticeFilter: string;
    setNoticeFilter: React.Dispatch<React.SetStateAction<string>>;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NoticeFilterModal : React.FC<NoticeFilterModalProps> = ({ noticeFilter, setNoticeFilter, isModalOpen, setIsModalOpen }) => {

    const language = localStorage.getItem("language");

    type FilterType = {
        englishstate: string,
        chinesestate: string,
        japanesestate: string,
        koreanstate: string,
        state: string
    }
    const filterState : FilterType[] = [
        { englishstate: "All", chinesestate: "", japanesestate: "", koreanstate: "", state: "all" },
        { englishstate: "Notice", chinesestate: "", japanesestate: "", koreanstate: "", state: "notice" },
        { englishstate: "Event", chinesestate: "", japanesestate: "", koreanstate: "", state: "event" }
    ];

    const filterTrans = (Num: number) => {
        switch (language) {
            case "chinese":
                return NoticeTrans[Num]?.chinesetext;
            case "japanese":
                return NoticeTrans[Num]?.japanesetext;
            case "korean":
                return NoticeTrans[Num]?.text;
            default:
                return NoticeTrans[Num]?.englishtext;
        };
    };

    return (
        <FilterOutWrapper>
            {filterState?.map((item : FilterType, index : number) => {
                return (
                    <FilterButtonWrapper
                        key={index}
                        onClick={() => {
                            setNoticeFilter(item?.state);
                            setIsModalOpen(false)
                        }}>
                        {(NoticeTrans[0]?.englishtext === item?.englishstate)}
                    </FilterButtonWrapper>
                )
            })}
        </FilterOutWrapper>
    )
};

const FilterOutWrapper = styled.div`
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    color: #222020;
    border-left: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #FFFFFF;
`;

const FilterButtonWrapper = styled.div`
    width: 100%;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    cursor: pointer;

    &:hover {
        background-color: #ADADAD;
        font-weight: 600;
    }
`;

export default NoticeFilterModal;