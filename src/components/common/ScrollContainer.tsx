import React from 'react'
import { MainImage } from '../../pages/Home';
import { ScrollAnimation } from '../../utils/ScrollAnimation';

type ScrollContainerProps = {
    children: React.ReactNode;
};

export const ScrollContainer : React.FC<ScrollContainerProps> = ({ children }) => {
  
  const { scrollDivRef, isInObject } = ScrollAnimation();
  
    return (
    <MainImage
      ref={scrollDivRef}
      className={isInObject ? "frame-in" : ""}>
      {children}
    </MainImage>
  )
};