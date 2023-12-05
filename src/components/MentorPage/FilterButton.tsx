import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nationFlag, nationKind } from '../../store/NationFilter';
import FilterModal from './FilterModal';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Koreaflag from '../../assets/logos/koreaflag.webp';
import Japanflag from '../../assets/logos/japanflag.webp';
import Americaflag from '../../assets/logos/americaflag.webp'
import Chinaflag from '../../assets/logos/chinaflag.webp'

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
        {nation: "All Country", flag: ""},
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
        <LayOutTitleContainer>
            Artist
        </LayOutTitleContainer>
        <FilterButtonWrapper>
            <NationFilter>
                {(nationkind !== "All Country") && <NationFlag src={flag} alt=''/>}
                {nationkind}
            </NationFilter>
            <FilterBtn
                ref={divRef}
                onClick={() => setIsOpenFilter(!isOpenFilter)}>
                {(isOpenFilter)
                    ? <IoIosArrowUp />
                    : <IoIosArrowDown />}
            </FilterBtn>
            {isOpenFilter
                && <ModalWrapper>
                    <FilterModal
                        setIsOpenFilter={setIsOpenFilter}/>
                </ModalWrapper>}
        </FilterButtonWrapper>
        <MobileFilterButtonWrapper>
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
        </MobileFilterButtonWrapper>
    </FilterButtonContainer>
  )
};

const FilterButtonContainer = styled.div`
    max-width: 1320px;
    margin: 60px auto 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1320px) {
        min-width: 96%;
        max-width: 96%;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        margin: 30px auto 0px auto;
    }
`;

const LayOutTitleContainer = styled.div`
    /* font-family: "Pretendard"; */
    font-family: "Lemon/Milk", sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
`;

const FilterButtonWrapper = styled.div`
    max-width: 500px;
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;
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
    font-size: 20px;
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

const MobileFilterButtonWrapper = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
    }
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
        font-size: 12px;
        font-weight: 300;
        line-height: normal;
    }
`;

export default FilterButton;