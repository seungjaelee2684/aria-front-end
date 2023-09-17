import React, { useState, useRef, useEffect } from 'react'
import { styled } from 'styled-components'
import image from '../assets/images/mainimage.jpg'
import logoImage from '../assets/images/surveimage.jpg'

const Home = () => {

    const imageRef1 = useRef<HTMLDivElement>(null);
    const imageRef2 = useRef<HTMLDivElement>(null);
    const imageRef3 = useRef<HTMLDivElement>(null);
    const [imageClick, setImageClick] = useState(0);

    // useEffect(() => {
    //     if (imageRef.current) {
    //         imageRef.current.style.transition = "all 0.2s ease-in-out"
    //         imageRef.current.style.left = `${imageClick}%`
    //     };
    // }, [imageClick])

    const onClickImageHandler = (key : number) => {
        if (imageRef1.current && imageRef2.current && imageRef3.current) {
            if (imageClick !== key && key === 1) {
                imageRef1.current.style.transition = "all 0.5s ease-in-out"
                imageRef1.current.style.left = `0%`
                imageRef2.current.style.transition = "all 0.5s ease-in-out"
                imageRef2.current.style.left = `80%`
                imageRef3.current.style.transition = "all 0.5s ease-in-out"
                imageRef3.current.style.left = `85%`
                setImageClick(1);
            } else if (imageClick !== key && key === 2) {
                imageRef1.current.style.transition = "all 0.5s ease-in-out"
                imageRef1.current.style.left = `0%`
                imageRef2.current.style.transition = "all 0.5s ease-in-out"
                imageRef2.current.style.left = `5%`
                imageRef3.current.style.transition = "all 0.5s ease-in-out"
                imageRef3.current.style.left = `85%`
                setImageClick(2);
            } else if (imageClick !== key && key === 3) {
                imageRef1.current.style.transition = "all 0.5s ease-in-out"
                imageRef1.current.style.left = `0%`
                imageRef2.current.style.transition = "all 0.5s ease-in-out"
                imageRef2.current.style.left = `5%`
                imageRef3.current.style.transition = "all 0.5s ease-in-out"
                imageRef3.current.style.left = `10%`
                setImageClick(3);
            } else if (imageClick === key || imageClick === 0) {
                imageRef1.current.style.transition = "all 0.5s ease-in-out"
                imageRef1.current.style.left = `75%`
                imageRef2.current.style.transition = "all 0.5s ease-in-out"
                imageRef2.current.style.left = `80%`
                imageRef3.current.style.transition = "all 0.5s ease-in-out"
                imageRef3.current.style.left = `85%`
                setImageClick(0);
            };
        };
    };

  return (
    <MainLayout>
        <MainImage src={image} onClick={() => onClickImageHandler(0)}>
            {/* {imageSize.map((item : number) => {
                return (
                    <SurveImageContainer
                        ref={imageRef}
                        key={item}
                        src={logoImage}
                        onClick={() => onClickImageHandler(item)} >
                    </SurveImageContainer>
                )
            })} */}
            
        </MainImage>
        <SurveImageContainer
                ref={imageRef1}
                key={1}
                src={logoImage}
                left={75}
                onClick={() => onClickImageHandler(1)} >
            </SurveImageContainer>
            <SurveImageContainer
                ref={imageRef2}
                key={2}
                src={image}
                left={80}
                onClick={() => onClickImageHandler(2)} >
            </SurveImageContainer>
            <SurveImageContainer
                ref={imageRef3}
                key={3}
                src={logoImage}
                left={85}
                onClick={() => onClickImageHandler(3)} >
            </SurveImageContainer>
        Home
    </MainLayout>
  )
};

const MainLayout = styled.div`
    width: 100%;
    padding: 60px 0px;
    overflow: hidden;
    position: relative;
`;

const MainImage = styled.div<{ src : string }>`
    width: 100%;
    height: 100vh;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    
`;

const SurveImageContainer = styled.div<{ left : number, src : string }>`
    width: 1920px;
    height: 100%;
    position: absolute;
    top: 60px;
    left: ${(props) => `${props.left}%`};
    z-index: 50;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    clip-path: polygon(150px 0, 100% 0, 100% 100%, 0% 100%);
    cursor: pointer;
    filter: blur(3px);

    &:hover {
        transition: all 0.3s ease-in-out;
        left: ${(props) => `${(props.left - 0.5)}%`};
        filter: none;
    }
`;

export default Home;