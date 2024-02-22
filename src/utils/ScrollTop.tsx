import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../store/NationFilter';
import { MainPageNumber } from '../store/MainPageNumber';
import { mentorSearchInput } from '../store/MentorSearchInput';
import { pageNumber } from '../store/Pages';
import { mentorImageUpload, mentorInfoUpload, snsLinkUpload } from '../store/CreateOrUpload';

const ScrollTop = () => {

    const { pathname } = useLocation();
    
    const resetFilter = useResetRecoilState(nationKind);
    const resetFlag = useResetRecoilState(nationFlag);
    const resetPageNumber = useResetRecoilState(MainPageNumber);
    const resetMentorSearch = useResetRecoilState(mentorSearchInput);
    const resetPage = useResetRecoilState(pageNumber);
    const resetInfoUpload = useResetRecoilState(mentorInfoUpload);
    const resetImageUpload = useResetRecoilState(mentorImageUpload);
    const resetLinkUpload = useResetRecoilState(snsLinkUpload);

    useEffect(() => {
        window.scrollTo({
          top: 0
        });
        resetFilter();
        resetFlag();
        resetPageNumber();
        resetMentorSearch();
        resetPage();
        resetInfoUpload();
        resetImageUpload();
        resetLinkUpload();
    }, [pathname]);

  return null
};

export default ScrollTop;