import React, { useEffect, useRef, useState } from 'react'
import '../../style/font/font.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nationFlag, nationKind } from '../../store/NationFilter';
import FilterModal from './FilterModal';
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosArrowUp } from "react-icons/io";
import Koreaflag from '../../assets/logos/koreaflag.webp';
import Japanflag from '../../assets/logos/japanflag.webp';
import Americaflag from '../../assets/logos/americaflag.webp'
import Chinaflag from '../../assets/logos/chinaflag.webp'
// import { LayOutTitleContainer, TitleColorText, TitleBarContainer } from '../../style/PageTitle';

const FilterButton = () => {

    const language = localStorage.getItem("language");
    const nationkind = useRecoilValue(nationKind);
    const flag = useRecoilValue(nationFlag);
    const divRef = useRef<HTMLDivElement>(null);
    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

    const filterTranslate = () => {
        switch (language) {
            case "japanese" :
                return nationkind?.japanesepick;
            case "korean" :
                return nationkind?.pick;
            default :
                return nationkind?.englishpick;
        };
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (divRef.current && !divRef.current.contains(event.target)) {
            setIsOpenFilter(false);
          }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
    }, []);

  return (
    // // <FilterButtonContainer>
    //     {/* <LayOutTitleContainer>
    //         A
    //         <TitleBarContainer />
    //         <TitleColorText color="#7769D0">R</TitleColorText>
    //         TIST
    //     </LayOutTitleContainer> */}
        <FilterButtonWrapper
            ref={divRef}
            onClick={() => setIsOpenFilter(!isOpenFilter)}>
            <NationFilter>
                {(nationkind.englishpick !== "All") && <NationFlag src={flag} alt=''/>}
                {filterTranslate()}
                <TiArrowSortedDown />
            </NationFilter>           
            {isOpenFilter
                && <ModalWrapper>
                    <FilterModal
                        setIsOpenFilter={setIsOpenFilter}/>
                </ModalWrapper>}
        </FilterButtonWrapper>
    //     {/* <MobileFilterButtonWrapper>
    //         {nationFilter.map((item : Nation) => {
    //             return (
    //                 <MobileFilterButton
    //                     key={item?.nation}
    //                     style={{
    //                         boxShadow: `${(nationkind === item?.nation) ? "rgba(63, 71, 77, 0.2) 0px 0px 10px 0px" : ""}`,
    //                         borderImage: `${(nationkind === item?.nation) ? "linear-gradient(to right, #2a9fff, #2e1388)" : ""}`,
    //                         borderImageSlice: `${(nationkind === item?.nation) ? "1" : ""}`,
    //                         color: `${(nationkind === item?.nation) ? "#3c3ad6" : ""}`,
    //                         fontWeight: `${(nationkind === item?.nation) ? "600" : ""}`
    //                     }}
    //                     onClick={() => {
    //                         setNationkind(item?.nation);
    //                         setFlag(item?.flag);
    //                         setIsOpenFilter(false);
    //                     }}>
    //                     {item?.nation}
    //                 </MobileFilterButton>
    //             )
    //         })}
    //     </MobileFilterButtonWrapper> */}
    // // </FilterButtonContainer>
  )
};

const FilterButtonContainer = styled.div`

`;

const FilterButtonWrapper = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
    z-index: 50;

    @media screen and (max-width: 1320px) {
        width: 140px;
    }

    @media screen and (max-width: 836px) {
        width: 120px;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const NationFilter = styled.div`
    width: 100%;
    height: 40px;
    border: 1px solid #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
   /* color: #222020; */
    /* background-color: #FFFFFF; */
    cursor: pointer;

    @media screen and (max-width: 1320px) {
        font-size: 13px;
    }

    @media screen and (max-width: 836px) {
        font-size: 12px;
    }
`;

const NationFlag = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;

    @media screen and (max-width: 1320px) {
        width: 20px;
        height: 20px;
    }

    @media screen and (max-width: 836px) {
        width: 16px;
        height: 16px;
    }

    @media screen and (max-width: 500px) {
        width: 14px;
        height: 14px;
    }
`;

const MobileFilterButtonWrapper = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        display: flex;
        align-items: center;
        gap: 3px;
        width: 100%;
    }
`;

const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`;

const MobileFilterButton = styled.div`
    display: none;
    
    @media screen and (max-width: 500px) {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ADADAD;
        /* border-image: linear-gradient(to right, #2a9fff, #2e1388); */
        border-image-slice: 1;
        color: #ADADAD;
        font-family: "Pretendard";
        font-size: 13px;
        font-weight: 300;
        line-height: normal;
    }
`;

export default FilterButton;