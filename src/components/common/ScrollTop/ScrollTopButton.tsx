import React, { useRef } from 'react'
import './ScrollTop.css';
import styled from 'styled-components';
import { LuArrowBigUpDash } from 'react-icons/lu';

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
        <LuArrowBigUpDash />
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
    font-weight: 700;
    line-height: 150%;
    color: #222020;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border: 2px solid #222020;
    border-radius: 3px;
    width: 60px;
    height: 50px;
    opacity: 0;
    cursor: pointer;
`;

export default ScrollTopButton;