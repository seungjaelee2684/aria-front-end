import React from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { pageNumber } from '../../store/Pages';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const PageButton = ({ data } : any) => {

    const totalCount = data?.data.totalNumber;
    const totalPage = Math.ceil(totalCount / 16)

    const [pageData, setPageData] = useRecoilState(pageNumber);

    let pages : number[] = Array.from({ length: totalPage }, (_, i) => i + 1);
    
    const onClickPageMoveHandler = (isLeft : boolean) => {
        if (isLeft) {
            setPageData(1);
        } else {
            setPageData(pages.length);
        };
    };

  return (
    <PageButtonContainer>
        <PageButtonWrapper>
            {(pageData === 1)
                ? <NotButton />
                : <PageMoveButton
                    onClick={() => onClickPageMoveHandler(true)}>
                    <MdKeyboardDoubleArrowLeft />
                </PageMoveButton>}
            {pages?.map((item : number, index : number) => {
                return (
                    (pageData === index + 1)
                        ? <SelectPageButton key={index}>
                            {item}
                        </SelectPageButton>
                        : <DefaultPageButton
                            key={index}
                            onClick={() => setPageData(item)}>
                            {item}
                        </DefaultPageButton>
                )
            })}
            {(pageData === pages.length)
                ? <NotButton />
                : <PageMoveButton
                    onClick={() => onClickPageMoveHandler(false)}>
                    <MdOutlineKeyboardDoubleArrowRight />
                </PageMoveButton>}
        </PageButtonWrapper>
    </PageButtonContainer>
  )
};

const PageButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PageButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const DefaultPageButton = styled.div`
    width: 38px;
    height: 38px;
    border: 1px solid #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222020;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 400;
    line-height: 100%;
    background-color: #f9f9f9;
    cursor: pointer;

    &:hover {
        border: 1px solid #5C9DFF;
        background-color: #5C9DFF;
        color: #FFFFFF;
        font-weight: 600;
    }
`;

const SelectPageButton = styled(DefaultPageButton)`
    border: 1px solid #5C9DFF;
    background-color: #5C9DFF;
    color: #FFFFFF;
    font-weight: 600;
    cursor: default;
`;

const PageMoveButton = styled.div`
    width: 38px;
    height: 38px;
    border: 1px solid #ADADAD;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #919191;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 400;
    line-height: 100%;
    background-color: #f4f4f4;
    cursor: pointer;

    &:hover {
        border: 1px solid #5C9DFF;
        background-color: #5C9DFF;
        color: #FFFFFF;
        font-weight: 600;
    }
`;

const NotButton = styled.div`
    width: 38px;
    height: 38px;
`;

export default PageButton;