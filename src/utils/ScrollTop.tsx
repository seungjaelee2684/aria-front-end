import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../store/NationFilter';
import { MainPageNumber } from '../store/MainPageNumber';

const ScrollTop = () => {

    const { pathname } = useLocation();
    
    const resetFilter = useResetRecoilState(nationKind);
    const resetFlag = useResetRecoilState(nationFlag);
    const resetPageNumber = useResetRecoilState(MainPageNumber);

    useEffect(() => {
        window.scrollTo(0, 0);
        resetFilter();
        resetFlag();
        resetPageNumber();
    }, [pathname]);

  return null
};

export default ScrollTop;