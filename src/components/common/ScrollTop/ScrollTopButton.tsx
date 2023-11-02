import React, { useRef } from 'react'
import './ScrollTop.css';
import styled from 'styled-components';
import { LuArrowBigUpDash } from 'react-icons/lu';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollTopButton = () => {

    const scrollBtn = useRef<HTMLDivElement>(null);

    window.addEventListener("scroll", () => {
        let scrollValue = window.scrollY;
        // console.log("스크롤", scrollValue);
        if (scrollBtn.current) {
            if (scrollValue > 300) {  
                scrollBtn.current.style.animation = "scroll_btn_open 0.6s ease-out forwards";
            } else {
                if (scrollValue === 0) {
                    scrollBtn.current.style.opacity = "0";
                } else {
                    scrollBtn.current.style.animation = "scroll_btn_close 0.6s ease-out forwards";
                };   
            };
        };
    });

    const onClickMoveTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

  return (
    <ScrollTopButtonWrapper
        className='ScrollTopButtonWrapper'
        ref={scrollBtn}
        onClick={onClickMoveTopHandler}>
        <AiOutlineArrowUp />
    </ScrollTopButtonWrapper>
  )
};

const ScrollTopButtonWrapper = styled.div`
    position: fixed;
    z-index: 96;
    bottom: 4%;
    right: 4%;
    font-family: "Pretendard";
    font-size: 36px;
    font-weight: 400;
    line-height: 150%;
    color: #3d3d3d;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.788);
    border: 2px solid #535151;
    width: 50px;
    height: 50px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        width: 40px;
        height: 40px;
        font-size: 24px;
        bottom: 10%;
        right: 0;
    }
`;

export default ScrollTopButton;