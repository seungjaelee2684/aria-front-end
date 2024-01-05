import React from 'react'
import './ScrollAniContainer.css';
import ScrollAnimation from '../../../utils/ScrollAnimation';
import styled from 'styled-components';

interface IllustContainerProps {
    children: React.ReactNode;
};

const IllustContainer : React.FC<IllustContainerProps> = ({ children }) => {
    const { ref, isInViewport } = ScrollAnimation();

    return (
        <IllustImageContainer ref={ref} className={isInViewport ? "Illust-InView" : ""}>
            {children}
        </IllustImageContainer>
    )
};

const IllustImageContainer = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    opacity: 0;
`;

export default IllustContainer;