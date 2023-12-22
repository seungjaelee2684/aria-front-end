import React, { useRef } from 'react'
import './ScrollTop.css';
import styled from 'styled-components';
import { LuArrowBigUpDash } from 'react-icons/lu';
import { BiArrowToTop } from 'react-icons/bi';

const ScrollTopButton = () => {

    const scrollBtn = useRef<HTMLDivElement>(null);

    window.addEventListener("scroll", () => {
        let scrollValue = window.scrollY;
        // console.log("스크롤", scrollValue);
        if (scrollBtn.current) {
            if (scrollValue > 300) {  
                scrollBtn.current.style.animation = "scroll_btn_open 0.2s ease-out forwards";
            } else {
                if (scrollValue === 0) {
                    scrollBtn.current.style.opacity = "0";
                } else {
                    scrollBtn.current.style.animation = "scroll_btn_close 0.2s ease-out forwards";
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
        <BiArrowToTop />
    </ScrollTopButtonWrapper>
  )
};

const ScrollTopButtonWrapper = styled.div`
    position: fixed;
    z-index: 99;
    bottom: 4%;
    right: 4%;
    font-family: "Pretendard";
    font-size: 24px;
    font-weight: 400;
    line-height: 150%;
    color: #FCFCFC;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(255, 255, 255, 0.788); */
    background-color: #56a0e0;
    border-radius: 100%;
    /* border: 2px solid #535151; */
    width: 50px;
    height: 50px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        bottom: 60px;
        right: 10px;
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
`;

export default ScrollTopButton;