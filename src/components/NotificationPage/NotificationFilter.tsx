import React from 'react'
import styled from 'styled-components'

interface NotificationFilterProps {
    setNoticeFilter: React.Dispatch<React.SetStateAction<string>>;
};

const NotificationFilter : React.FC<NotificationFilterProps> = ({ setNoticeFilter }) => {
  return (
    <FilterOutWrapper>
        <FilterButtonWrapper>
            <Point />
            <Text>
                All
            </Text>
        </FilterButtonWrapper>
        <FilterButtonWrapper>
            <Point />
            <Text>
                Notice
            </Text>
        </FilterButtonWrapper>
        <FilterButtonWrapper>
            <Point />
            <Text>
                Event
            </Text>
        </FilterButtonWrapper>
    </FilterOutWrapper>
  )
};

const FilterOutWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    color: #222020;
    user-select: none;
`;

const FilterButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;

const Point = styled.div`
    width: 4px;
    height: 4px;
    background-color: #222020;
    border-radius: 100%;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
`;

export default NotificationFilter;