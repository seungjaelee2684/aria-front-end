import React from 'react'
import Koreaflag from '../../../assets/logos/koreaflag.png';
import Japanflag from '../../../assets/logos/japanflag.png';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { nationFlag, nationKind } from '../../../store/NationFilter';
import './FilterModal.css';

type Nation = {
    nation: string,
    flag: string  
};

interface FilterModalProps {
    setIsOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterModal : React.FC<FilterModalProps> = ({ setIsOpenFilter }) => {

    const [, setNationkind] = useRecoilState(nationKind);
    const [, setFlag] = useRecoilState(nationFlag);
    const nationFilter : Nation[]  = [
        {nation: "All", flag: ""},
        {nation: "Japanese", flag: Japanflag},
        {nation: "Korean" , flag: Koreaflag}
    ]

  return (
    <FilterModalContainer>
        {nationFilter?.map((item : Nation) => {
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
    width: 170px;
    border: 1px solid #e9e9e9;
    background-color: #FFFFFF;
    border-radius: 20px 0px 20px 20px;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 0px 10px 0px;
    overflow: hidden;
`;

const FilterModalBtn = styled.div`
    width: 170px;
    height: 40px;
    color: #39373A;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    background-color: #FFFFFF;
    cursor: pointer;

    &:hover {
        background-color: #e9e9e9;
        font-size: 16px;
        font-weight: 600;
    }
`;

export default FilterModal;