import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nationFlag, nationKind } from '../../store/NationFilter';
import FilterModal from './FilterModal';
import UpArrow from '../../assets/icons/upArrow.png';
import DownArrow from '../../assets/icons/downArrow.png'
import Koreaflag from '../../assets/logos/koreaflag.png';
import Japanflag from '../../assets/logos/japanflag.png';
import Americaflag from '../../assets/logos/americaflag.png'
import Chinaflag from '../../assets/logos/chinaflag.png'

const FilterButton = () => {

    type Nation = {
        nation: string,
        flag: string  
    };

    const nationkind = useRecoilValue(nationKind);
    const flag = useRecoilValue(nationFlag);
    const divRef = useRef<HTMLDivElement>(null);
    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
    const [, setNationkind] = useRecoilState(nationKind);
    const [, setFlag] = useRecoilState(nationFlag);

    const nationFilter : Nation[]  = [
        {nation: "All", flag: ""},
        {nation: "American", flag: Americaflag},
        {nation: "Chinese", flag: Chinaflag},
        {nation: "Japanese", flag: Japanflag},
        {nation: "Korean" , flag: Koreaflag}
    ]

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
    <FilterButtonContainer>
        <FilterButtonWrapper>
            <NationFilter>
                {(nationkind !== "All") && <NationFlag src={flag}/>}
                {nationkind}
            </NationFilter>
            <FilterBtn
                ref={divRef} 
                onClick={() => setIsOpenFilter(!isOpenFilter)}>
                <FilterBtnIcon src={isOpenFilter ? `${UpArrow}` : `${DownArrow}`}/>
            </FilterBtn>
            {isOpenFilter
                && <ModalWrapper>
                    <FilterModal
                        setIsOpenFilter={setIsOpenFilter}/>
                </ModalWrapper>}
        </FilterButtonWrapper>
        {nationFilter.map((item : Nation) => {
            return (
                <MobileFilterButton
                    key={item?.nation}
                    style={{
                        borderImage: `${(nationkind === item?.nation) ? "linear-gradient(to right, #2a9fff, #2e1388)" : ""}`,
                        borderImageSlice: `${(nationkind === item?.nation) ? "1" : ""}`,
                        color: `${(nationkind === item?.nation) ? "#3c3ad6" : ""}`,
                        fontWeight: `${(nationkind === item?.nation) ? "600" : ""}`
                    }}
                    onClick={() => {
                        setNationkind(item?.nation);
                        setFlag(item?.flag);
                        setIsOpenFilter(false);
                    }}>
                    {item?.nation}
                </MobileFilterButton>
            )
        })}
    </FilterButtonContainer>
  )
};

const FilterButtonContainer = styled.div`
    max-width: 1320px;
    margin: 40px auto;

    @media screen and (max-width: 1320px) {
        min-width: 96%;
        max-width: 96%;
    }

    @media screen and (max-width: 500px) {
        display: flex;
        gap: 8px;
    }
`;

const FilterButtonWrapper = styled.div`
    max-width: 500px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 50;

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const NationFilter = styled.div`
    width: 170px;
    height: 34px;
    border: 1px solid #e9e9e9;
    border-radius: 20px 0px 0px 20px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    color: #222020;
    background-color: #FFFFFF;
`;

const NationFlag = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

const FilterBtn = styled.div`
    width: 50px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e9e9e9;
    border-right: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    border-radius: 0px 20px 20px 0px;
    background-color: #FFFFFF;
    cursor: pointer;

    &:hover {
        background-color: #e9e9e9;
    }
`;

const FilterBtnIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`;

const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
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
        font-size: 14px;
        font-weight: 300;
        line-height: normal;
    }
`;

export default FilterButton;