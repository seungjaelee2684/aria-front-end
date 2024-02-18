import React, { useEffect } from 'react'
import styled from 'styled-components';
import { mentorListData } from '../../data/MentorData';
import MentorCard from './MentorCard';
import { useRecoilValue } from 'recoil';
import { nationKind } from '../../store/NationFilter';
import { translate } from '../../store/Translation';
import { mentorSearchInput } from '../../store/MentorSearchInput';
import NotSearch from '../common/NotSearch';
import { IoSearchOutline } from "react-icons/io5";

interface MentorListProps {
    data: any;
};

const MentorList : React.FC<MentorListProps> = ({ data }) => {

    const mentorList = data?.data.mentorListData;
    const nationkind = useRecoilValue(nationKind);
    const language = localStorage.getItem("language");
    const searchValue = useRecoilValue(mentorSearchInput);

    const filterData = mentorListData?.filter((data) => data.nation === nationkind?.englishpick);
    const ENFilterData = mentorListData?.filter((data) => data.englishname.includes(searchValue));
    const JPFilterData = mentorListData?.filter((data) => data.japanesename.includes(searchValue));
    const KRFilterData = mentorListData?.filter((data) => data.nickname.includes(searchValue));

    const mentorChangeList = () => {
        if (searchValue === "") {
            if (nationkind?.englishpick === "All Country") {
                return (
                    mentorListData?.map((item: any) => {
                        return (
                            <div key={item?.id}>
                                <MentorCard
                                    item={item}
                                    language={language}
                                />
                            </div>
                        )
                    })
                );
            } else {
                return (
                    (filterData.length === 0)
                        ? <NotSearch />
                        : filterData?.map((item: any) => {
                            return (
                                <div key={item?.id}>
                                    <MentorCard
                                        item={item}
                                        language={language}
                                    />
                                </div>
                            )
                        })
                );
            };
        } else {
            if (language === "japanese") {
                return (
                    JPFilterData?.map((item: any) => {
                        return (
                            <div key={item?.id}>
                                <MentorCard
                                    item={item}
                                    language={language}
                                />
                            </div>
                        )
                    })
                );
            } else if (language === "korean") {
                return (
                    KRFilterData?.map((item: any) => {
                        return (
                            <div key={item?.id}>
                                <MentorCard
                                    item={item}
                                    language={language}
                                />
                            </div>
                        )
                    })
                );
            } else {
                return (
                    ENFilterData?.map((item: any) => {
                        return (
                            <div key={item?.id}>
                                <MentorCard
                                    item={item}
                                    language={language}
                                />
                            </div>
                        )
                    })
                );
            };
        };
    };

    return (
        <LayoutContainer>
            <ListOutContainer>
                <ListContainer>
                    {mentorList?.map((item : any) => {
                        return (
                            <div key={item?.mentorsId}>
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