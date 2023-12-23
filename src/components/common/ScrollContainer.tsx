import React from 'react'
import '../HomePage/MainImage/MainImage.css';
import { MainImage } from '../../pages/Home';
import { ScrollAnimation } from '../../utils/ScrollAnimation';
import { useRecoilValue } from 'recoil';
import { MainPageNumber } from '../../store/MainPageNumber';

type ScrollContainerProps = {
  children: React.ReactNode;
};

export const ScrollContainer : React.FC<ScrollContainerProps> = ({ children }) => {
  
  const { scrollDivRef, isInObject } = ScrollAnimation();
  const scrollIndex = useRecoilValue(MainPageNumber);
  
  return (
    <MainImage
      ref={scrollDivRef}
      className={
        isInObject
          ? (scrollIndex === 1)
            ? "frame-in"
            : "second-content"
          : ""
      }>
      {children}
    </MainImage>
  )
};