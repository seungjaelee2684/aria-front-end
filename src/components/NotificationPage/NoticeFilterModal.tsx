import React from 'react'
import styled from 'styled-components';
import { NoticeTrans, filterState } from '../../languages/NoticeTrans';

interface NoticeFilterModalProps {
    noticeFilter: string;
    setNoticeFilter: React.Dispatch<React.SetStateAction<string>>;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type FilterType = {
    englishstate: string,
    chinesestate: string,
    japanesestate: string,
    state: string
};

const NoticeFilterModal : React.FC<NoticeFilterModalProps> = ({ noticeFilter, setNoticeFilter, isModalOpen, setIsModalOpen }) => {

    const language = localStorage.getItem("language");

    const filterModalTrans = (Num: number) => {
        switch (language) {
            case "chinese":
                return filterState[Num]?.chinesestate;
            case "japanese":
                return filterState[Num]?.japanesestate;
            case "korean":
                return filterState[Num]?.state;
            default:
                return filterState[Num]?.englishstate;
        };
    };

    return (
        <FilterOutWrapper>
            {filterState?.map((item : FilterType, index : number) => {
                return (
                    (index === 1)
                        ? <SelectFilterButton
                            key={index}
                            onClick={() => {
                                setNoticeFilter(item?.englishstate);
                                setIsModalOpen(false)
                            }}>
                            {filterModalTrans(index)}
                        </SelectFilterButton>
                        : <FilterButtonWrapper
                            key={index}
                            onClick={() => {
                                setNoticeFilter(item?.englishstate);
                                setIsModalOpen(false)
                            }}>
                            {filterModalTrans(index)}
                        </FilterButtonWrapper>
                )
            })}
        </FilterOutWrapper>
    )
};

const FilterOutWrapper = styled.div`
    width: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    color: #222020;
    border: 1px solid #e9e9e9;
    position: absolute;
    top: 35px;
    left: -1px;
    z-index: 100;
    background-color: #FFFFFF;
    overflow: hidden;
    border-radius: 8px;

    @media screen and (max-width: 836px) {
        width: 110px;
        top: 31px;
        font-size: 11px;
        border-radius: 6px;
    }

    @media screen and (max-width: 836px) {
        width: 90px;
        top: 27px;
        font-size: 9px;
        border-radius: 5px;
    }
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
        background-color: #e9e9e9;
        font-weight: 600;
    }

    @media screen and (max-width: 836px) {
        height: 30px;
    }

    @media screen and (max-width: 500px) {
        height: 26px;
    }
`;

const SelectFilterButton = styled(FilterButtonWrapper)`
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
`;

export default NoticeFilterModal;