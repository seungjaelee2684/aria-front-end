import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../store/NationFilter';
import { MainPageNumber } from '../store/MainPageNumber';
import { mentorSearchInput } from '../store/MentorSearchInput';

const ScrollTop = () => {

    const { pathname } = useLocation();
    const language = localStorage.getItem("language");
    
    const resetFilter = useResetRecoilState(nationKind);
    const resetFlag = useResetRecoilState(nationFlag);
    const resetPageNumber = useResetRecoilState(MainPageNumber);
    const resetMentorSearch = useResetRecoilState(mentorSearchInput);

    useEffect(() => {
        window.scrollTo(0, 0);
        resetFilter();
        resetFlag();
        resetPageNumber();
        resetMentorSearch();
    }, [pathname, language]);

  return null
};

export default ScrollTop;