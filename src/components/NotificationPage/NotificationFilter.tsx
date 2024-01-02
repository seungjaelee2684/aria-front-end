import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { NoticeTrans, filterState } from '../../languages/NoticeTrans';
import { NotificationData } from '../../data/NotificationData';
import NoticeFilterModal from './NoticeFilterModal';
import { TiArrowSortedDown } from "react-icons/ti";

interface NotificationFilterProps {
    noticeFilter: string;
    setNoticeFilter: React.Dispatch<React.SetStateAction<string>>;
};

type FilterType = {
    englishstate: string,
    chinesestate: string,
    japanesestate: string,
    state: string
};

const NotificationFilter : React.FC<NotificationFilterProps> = ({ noticeFilter, setNoticeFilter }) => {
  
    const language = localStorage.getItem("language");
    const filterRef = useRef<HTMLDivElement>(null);
    const filterStateData = filterState.filter((item : FilterType) => item?.englishstate === noticeFilter);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const filterTrans = () => {
        switch (language) {
            case "chinese" :
                return filterStateData[0]?.chinesestate;
            case "japanese" :
                return filterStateData[0]?.japanesestate;
            case "korean" :
                return filterStateData[0]?.state;
            default :
                return filterStateData[0]?.englishstate;
        };
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (filterRef.current && !filterRef.current.contains(event.target)) {
            setIsModalOpen(false);
          }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
    }, []);
  
    return (
        <FilterOutWrapper
            ref={filterRef}
            onClick={() => setIsModalOpen(!isModalOpen)}>
            {filterTrans()}
            <TiArrowSortedDown />
            {(isModalOpen)
                && <NoticeFilterModal
                    noticeFilter={noticeFilter}
                    setNoticeFilter={setNoticeFilter}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}/>}
        </FilterOutWrapper>
    )
};

const FilterOutWrapper = styled.div`
    width: 110px;
    height: 34px;
    padding: 0px 10px;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #e9e9e9;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    gap: 38px;
    user-select: none;
    position: relative;
    cursor: pointer;
`;

export default NotificationFilter;