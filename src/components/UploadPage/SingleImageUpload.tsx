import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components';
import { BoxContainer } from './InformUpload';

interface SingleImageUploadProps {
  mentorImage: any;
  setMentorImage: React.Dispatch<React.SetStateAction<any>>;
};

const SingleImageUpload : React.FC<SingleImageUploadProps> = ({ mentorImage, setMentorImage }) => {
  
  const { banner_image, nickname_image, thumbnail_image } = mentorImage;
  
  

  return (
    <BoxContainer>
      
    </BoxContainer>
  )
};



export default SingleImageUpload;