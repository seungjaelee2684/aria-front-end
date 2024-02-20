import React from 'react'
import styled from 'styled-components';

interface UpdateModalProps {
    updateRef: React.RefObject<HTMLDivElement>;
};

const UpdateModal : React.FC<UpdateModalProps> = ({ updateRef }) => {
    return (
        <UpdateModalWrapper ref={updateRef}>
            <UpdateButton>
                정보 수정하기
            </UpdateButton>
            <UpdateButton>
                삭제하기
            </UpdateButton>
        </UpdateModalWrapper>
    )
};

const UpdateModalWrapper = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    top: 9%;
    right: 0;
    z-index: 101;
    border: 1px solid #ADADAD;
    background-color: #FFFFFF;
    user-select: none;
    box-shadow: #2220209e 0px 0px 4px 1px;
`;

const UpdateButton = styled.div`
    width: 100%;
    height: 36px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    text-indent: 10px;
    border-bottom: 1px solid #e9e9e9;
    cursor: pointer;

    &:hover {
        background-color: #e9e9e9;
        font-weight: 600;
    };
`;

export default UpdateModal;