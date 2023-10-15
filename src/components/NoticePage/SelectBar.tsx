import React, { useState } from 'react'
import styled from 'styled-components';
import SelectModal from './SelectModal';
import DownArrow from '../../assets/icons/downArrow.png';
import UpArrow from '../../assets/icons/upArrow.png';

interface SelectBarProps {
    japanese: boolean;
}

const SelectBar : React.FC<SelectBarProps> = ({ japanese }) => {

    const [selectOpen, setSelectOpen] = useState<{
        pick: string,
        isOpen: boolean
    }>({
        pick: "전체",
        isOpen: false
    });
    const { pick, isOpen } = selectOpen;

    console.log("필터 옵션", pick, isOpen);

  return (
    <SelectBarContainer onClick={() => setSelectOpen({...selectOpen, isOpen: !isOpen})}>
        {pick}
        {isOpen
            ? <UpDownIcon src={UpArrow}/>
            : <UpDownIcon src={DownArrow}/>}
        {isOpen
            && <SelectModalWrapper>
                <SelectModal
                    japanese={japanese}
                    selectOpen={selectOpen}
                    setSelectOpen={setSelectOpen}/>
            </SelectModalWrapper>}
    </SelectBarContainer>
  )
};

const SelectBarContainer = styled.div`
  min-width: 210px;
  height: 34px;
  padding: 0px 10px 0px 16px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  position: relative;
  border: 1px solid #222020;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  position: relative;
`;

const UpDownIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`;

const SelectModalWrapper = styled.div`
    position: absolute;
    top: 35px;
    left: 0;
    z-index: 20;
`;

export default SelectBar;