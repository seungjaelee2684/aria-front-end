import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nationFlag, nationKind } from '../../store/NationFilter';
import FilterModal from './FilterModal/FilterModal';
import UpArrow from '../../assets/icons/upArrow.png';
import DownArrow from '../../assets/icons/downArrow.png'

const FilterButton = () => {

    type Nation = {
        nation: string,
        flag: string  
    };

    const nationkind = useRecoilValue(nationKind);
    const flag = useRecoilValue(nationFlag);
    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  return (
    <FilterButtonContainer>
        <FilterButtonWrapper>
            <NationFilter>
                {(nationkind !== "All") && <NationFlag src={flag}/>}
                {nationkind}
            </NationFilter>
            <FilterBtn onClick={() => setIsOpenFilter(!isOpenFilter)}>
                <FilterBtnIcon src={isOpenFilter ? `${UpArrow}` : `${DownArrow}`}/>
            </FilterBtn>
            {isOpenFilter
                && <ModalWrapper>
                    <FilterModal
                        setIsOpenFilter={setIsOpenFilter}/>
                </ModalWrapper>}
        </FilterButtonWrapper>
    </FilterButtonContainer>
  )
};

const FilterButtonContainer = styled.div`
    max-width: 500px;
    margin: 40px 15% 0px 15%;
`;

const FilterButtonWrapper = styled.div`
    max-width: 500px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 50;
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

export default FilterButton;