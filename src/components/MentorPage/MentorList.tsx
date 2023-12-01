import React from 'react'
import styled from 'styled-components';
import { mentorListData } from '../../data/MentorData';
import MentorCard from './MentorCard';
import { useRecoilValue } from 'recoil';
import { nationKind } from '../../store/NationFilter';
import { translate } from '../../store/Translation';

const MentorList = () => {

    const nationkind = useRecoilValue(nationKind);
    const language = localStorage.getItem("language");

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
                                language={language}
                            />
                        </div> 
                    )
                })
                : filterData?.map((item : any) => {    
                    return (
                        <div key={item?.id}>
                            <MentorCard
                                item={item}
                                language={language}
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
    min-width: 1320px;
    max-width: 1320px;

    @media screen and (max-width: 1320px) {
        margin: 0px auto;
        min-width: 96%;
        max-width: 96%;
    }
`;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 836px) {
        /* justify-content: center; */
        gap: 16px;
    }
`;

export default MentorList;