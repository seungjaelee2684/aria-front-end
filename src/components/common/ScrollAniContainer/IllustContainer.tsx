import React from 'react'
import './ScrollAniContainer.css';
import ScrollAnimation from '../../../utils/ScrollAnimation';
import styled from 'styled-components';
import { AnimationContainer } from './ScrollAniContainer';

interface IllustContainerProps {
    children: React.ReactNode;
};

const IllustContainer : React.FC<IllustContainerProps> = ({ children }) => {
    const { ref, isInViewport } = ScrollAnimation();

    return (
        <AnimationContainer ref={ref} className={isInViewport ? "Illust-InView" : ""}>
            {children}
        </AnimationContainer>
    )
};

export default IllustContainer