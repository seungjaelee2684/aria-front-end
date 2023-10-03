import React from 'react'
import styled from 'styled-components';
import { mentorListData } from '../../data/MentorData';
import MentorCard from './MentorCard';
import { useRecoilValue } from 'recoil';
import { nationKind } from '../../store/NationFilter';

interface MentorListProps {
    japanese: boolean;
}

const MentorList : React.FC<MentorListProps> = ({ japanese }) => {

    const nationkind = useRecoilValue(nationKind);

    const filterData = mentorListData?.filter((data) => data.nation === nationkind);

  return (
    <LayoutContainer>
        <ListContainer>
            {(nationkind === "All")
                ? mentorListData?.map((item : any) => {
                    return (
                        <div key={item?.id}>
                            <MentorCard
                                item={item}
                                japanese={japanese}
                            />
                        </div> 
                    )
                })
                : filterData?.map((item : any) => {    
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