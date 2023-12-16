import React from 'react'
import Koreaflag from '../../assets/logos/koreaflag.webp';
import Japanflag from '../../assets/logos/japanflag.webp';
import Americaflag from '../../assets/logos/americaflag.webp'
import Chinaflag from '../../assets/logos/chinaflag.webp'
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nationFlag, nationKind } from '../../store/NationFilter';
import { IoIosArrowDown } from "react-icons/io";

type Nation = {
    nation: string,
    flag: string  
};

interface FilterModalProps {
    setIsOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterModal : React.FC<FilterModalProps> = ({ setIsOpenFilter }) => {

    
    const [nationkind, setNationkind] = useRecoilState(nationKind);
    const [, setFlag] = useRecoilState(nationFlag);
    const nationValue = useRecoilValue(nationKind);
    const flagValue = useRecoilValue(nationFlag);

    const nationFilter : Nation[]  = [
        {nation: "All Country", flag: ""},
        {nation: "American", flag: Americaflag},
        {nation: "Chinese", flag: Chinaflag},
        {nation: "Japanese", flag: Japanflag},
        {nation: "Korean" , flag: Koreaflag}
    ]

    const noneFilter = nationFilter.filter((item) => item.nation !== nationkind);
    console.log("필터", noneFilter);

  return (
    <FilterModalContainer>
        <DefaultBtn>
            {flagValue && <NationFlag src={flagValue}/>}
            {nationValue}
            <IoIosArrowDown />
        </DefaultBtn>
        {noneFilter?.map((item : Nation) => {
            return (
                <FilterModalBtn
                    key={item?.nation}
                    onClick={() => {
                        setNationkind(item?.nation);
                        setFlag(item?.flag);
                        setIsOpenFilter(false);
                    }}
                >{item?.nation}</FilterModalBtn>
            )
        })}
    </FilterModalContainer>
  )
};

const FilterModalContainer = styled.div`
    width: 150px;
    border: 1px solid #e9e9e9;
    background-color: #FFFFFF;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 3px 10px 0px;
    overflow: hidden;

    @media screen and (max-width: 1320px) {
        width: 140px;
    }

    @media screen and (max-width: 836px) {
        width: 120px;
    }

    /* @media screen and (max-width: 500px) {
        display: none;
    } */
`;

const FilterModalBtn = styled.div`
    width: 150px;
    height: 38px;
    color: #39373A;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 400;
    line-height: 140%;
    background-color: #FFFFFF;
    cursor: pointer;

    &:hover {
        background-color: #e9e9e9;
        font-size: 13px;
        font-weight: 600;
    }

    @media screen and (max-width: 1320px) {
        width: 140px;
        font-size: 11px;
    }

    @media screen and (max-width: 836px) {
        width: 120px;
        font-size: 10px;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const DefaultBtn = styled.div`
    width: 150px;
    height: 38px;
    /* border-bottom: 1px solid #e9e9e9; */
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
    color: #222020;
    background-color: #FFFFFF;

    @media screen and (max-width: 1320px) {
        width: 140px;
        font-size: 13px;
    }

    @media screen and (max-width: 836px) {
        width: 120px;
        font-size: 12px;
    }

    @media screen and (max-width: 500px) {
        display: none;
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

export default FilterModal;