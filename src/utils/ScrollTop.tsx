import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../store/NationFilter';
import { MainPageNumber } from '../store/MainPageNumber';
import { mentorSearchInput } from '../store/MentorSearchInput';
import { pageNumber } from '../store/Pages';

const ScrollTop = () => {

    const { pathname } = useLocation();
    
    const resetFilter = useResetRecoilState(nationKind);
    const resetFlag = useResetRecoilState(nationFlag);
    const resetPageNumber = useResetRecoilState(MainPageNumber);
    const resetMentorSearch = useResetRecoilState(mentorSearchInput);
    const resetPage = useResetRecoilState(pageNumber);

    useEffect(() => {
        window.scrollTo({
          top: 0
        });
        resetFilter();
        resetFlag();
        resetPageNumber();
        resetMentorSearch();
        resetPage();
    }, [pathname]);

  return null
};

export default ScrollTop;