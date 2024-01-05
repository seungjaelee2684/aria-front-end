import React from 'react'
import './ScrollAniContainer.css';
import styled from 'styled-components';
import ScrollAnimation from '../../../utils/ScrollAnimation';

interface ScrollAniContainerProps {
    children: React.ReactNode;
};

const ScrollAniContainer: React.FC<ScrollAniContainerProps> = ({ children }) => {

    const { ref, isInViewport } = ScrollAnimation();

    return (
        <AnimationContainer ref={ref} className={isInViewport ? "start-animation" : ""}>
            {children}
        </AnimationContainer>
    )
};

export const AnimationContainer = styled.div`
    width: 100%;
    position: relative;
    opacity: 0;
`;

export default ScrollAniContainer;