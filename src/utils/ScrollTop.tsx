import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../store/NationFilter';

const ScrollTop = () => {

    const { pathname } = useLocation();
    
    const resetFilter = useResetRecoilState(nationKind);
    const resetFlag = useResetRecoilState(nationFlag);

    useEffect(() => {
        window.scrollTo(0, 0);
        resetFilter();
        resetFlag();
    }, [pathname]);

  return null
};

export default ScrollTop;