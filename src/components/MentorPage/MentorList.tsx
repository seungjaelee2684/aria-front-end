import React from 'react'
import styled from 'styled-components';
import { mentorListData } from '../../data/MentorDate';
import MentorCard from './MentorCard';

interface MentorListProps {
    japanese: boolean;
}

const MentorList : React.FC<MentorListProps> = ({ japanese }) => {
  return (
    <LayoutContainer>
        <ListContainer>
            {mentorListData?.map((item : any) => {
                return (
                    <div key={item?.id}>
                        <MentorCard
                            item={item}
                            japanese={japanese}
                        />
                    </div> 
                )
            })}
        </ListContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    width: 100%;
    margin: 40px 0px;
`;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

export default MentorList;