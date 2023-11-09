import React from 'react'
import Koreaflag from '../../assets/logos/koreaflag.png';
import Japanflag from '../../assets/logos/japanflag.png';
import Americaflag from '../../assets/logos/americaflag.png'
import Chinaflag from '../../assets/logos/chinaflag.png'
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nationFlag, nationKind } from '../../store/NationFilter';

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
    const nationValue = useRecoilValue(nationKind);
    const flagValue = useRecoilValue(nationFlag);

    const nationFilter : Nation[]  = [
        {nation: "All", flag: ""},
        {nation: "American", flag: Americaflag},
        {nation: "Chinese", flag: Chinaflag},
        {nation: "Japanese", flag: Japanflag},
        {nation: "Korean" , flag: Koreaflag}
    ]

  return (
    <FilterModalContainer>
        <DefaultBtn>
            {flagValue && <NationFlag src={flagValue}/>}
            {nationValue}
        </DefaultBtn>
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
    box-shadow: rgba(63, 71, 77, 0.2) 0px 3px 10px 0px;
    overflow: hidden;
`;

const FilterModalBtn = styled.div`
    width: 170px;
    height: 34px;
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

const DefaultBtn = styled.div`
    width: 170px;
    height: 34px;
    border-bottom: 1px solid #e9e9e9;
    border-radius: 20px 20px 0px 0px;
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

export default FilterModal;