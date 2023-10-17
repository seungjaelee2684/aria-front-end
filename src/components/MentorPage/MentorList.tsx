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
        <ListOutContainer>
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
        </ListOutContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    width: 100%;
    margin: 40px 0px;
`;

const ListOutContainer = styled.div`
    margin: 0px auto;
    min-width: 70%;
    max-width: 70%;

    @media screen and (max-width: 1272px) {
        margin: 0px auto;
        min-width: 588px;
        max-width: 588px;
    }
    @media screen and (max-width: 588px) {
        margin: 0px auto;
        min-width: 336px;
        max-width: 336px;
    }
`;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 43px;
`;

export default MentorList;