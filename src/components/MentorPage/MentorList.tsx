import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import MentorCard from './MentorCard';
import { useRecoilValue } from 'recoil';
import { nationKind } from '../../store/NationFilter';
import { translate } from '../../store/Translation';
import { mentorSearchInput } from '../../store/MentorSearchInput';
import NotSearch from '../common/NotSearch';
import { IoSearchOutline } from "react-icons/io5";
import UpdateModal from './UpdateModal';

interface MentorListProps {
    data: any;
    loginState: boolean;
};

const MentorList : React.FC<MentorListProps> = ({ data, loginState }) => {

    const mentorList = data?.data.mentorListData;
    const language = localStorage.getItem("language");
    const updateRef = useRef<HTMLDivElement>(null);
    const searchValue = useRecoilValue(mentorSearchInput);
    const [updateModalOpen, setUpdateModalOpen] = useState<{mentorsId: number | null}>({
        mentorsId: null
    });
    const { mentorsId } = updateModalOpen;

    return (
        <LayoutContainer>
            <ListOutContainer>
                <ListContainer>
                    {(mentorList?.length > 0)
                        ? mentorList?.map((item : any) => {
                            return (
                                <div key={item?.mentorsId} style={{position: "relative"}}>
                                    {(mentorsId === item?.mentorsId)
                                        && <UpdateModal
                                            updateRef={updateRef}
                                            updateModalOpen={updateModalOpen}
                                            setUpdateModalOpen={setUpdateModalOpen}/>}
                                    <MentorCard
                                        item={item}
                                        language={language}
                                        loginState={loginState}
                                        updateRef={updateRef}
                                        updateModalOpen={updateModalOpen}
                                        setUpdateModalOpen={setUpdateModalOpen}
                                    />
                                </div>
                            )
                        })
                        : <NotSearch />
                    }
                </ListContainer>
            </ListOutContainer>
        </LayoutContainer>
    )
};

const LayoutContainer = styled.section`
    width: 100%;
    margin: 40px 0px;

    @media screen and (max-width: 500px) {
        margin: 20px 0px;
    }
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
        gap: 16px;
        justify-content: center;
    }
`;

const NotSearchContainer = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 600;
    line-height: 140%;
   /* color: #222020; */
`;

const SearchIcon = styled.div`
    font-size: 24px;
`;

export default MentorList;