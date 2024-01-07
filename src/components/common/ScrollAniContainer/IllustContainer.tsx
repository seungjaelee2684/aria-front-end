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
    opacity: 0;
    position: absolute;
    top: 100px;
    left: 0;
`;

export default IllustContainer;