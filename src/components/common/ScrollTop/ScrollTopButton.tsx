import React, { useEffect, useRef } from 'react'
import './ScrollTop.css';
import styled from 'styled-components';
import { LuArrowBigUpDash } from 'react-icons/lu';
import { BiArrowToTop } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

const ScrollTopButton = () => {

    const location = useLocation();

    const scrollBtn = useRef<HTMLDivElement>(null);
    const mainScrollBtn = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollTopEvent = (e : any) => {
            let scrollValue = window.scrollY;
            // ("스크롤", scrollValue);
            if (scrollBtn.current) {
                if (location.pathname === "/") {
                    scrollBtn.current.style.animation = "scroll_btn_close 0.2s ease-out forwards";
                } else {
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
            };
        };

        window.addEventListener("scroll", scrollTopEvent);

        return () => {
            window.removeEventListener("scroll", scrollTopEvent);
        };
    }, [location.pathname]);

    

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
    bottom: 30px;
    right: 10px;
    font-family: "Pretendard";
    font-size: 24px;
    font-weight: 400;
    line-height: 150%;
   /* color: #222020; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(255, 255, 255, 0.788); */
    background-color: #ffffffd8;
    border: 1px solid #d0d0d0;
    box-shadow: #50505080 0px 3px 8px 0px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    opacity: 0;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 1320px) {
        bottom: 10px;
    }

    @media screen and (max-width: 500px) {
        bottom: 60px;
        right: 10px;
        width: 30px;
        height: 30px;
        font-size: 20px;
    }
`;

export default ScrollTopButton;