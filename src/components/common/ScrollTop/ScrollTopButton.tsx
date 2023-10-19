import React, { useRef } from 'react'
import './ScrollTop.css';
import styled from 'styled-components';

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
        TOP
    </ScrollTopButtonWrapper>
  )
};

const ScrollTopButtonWrapper = styled.div`
    position: fixed;
    z-index: 97;
    bottom: 5%;
    right: 3%;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    color: #FCFCFC;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222020;
    border-radius: 5px;
    width: 80px;
    height: 50px;
    opacity: 0;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

export default ScrollTopButton;