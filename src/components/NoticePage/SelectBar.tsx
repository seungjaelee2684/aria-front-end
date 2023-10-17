import React, { useState } from 'react'
import styled from 'styled-components';
import SelectModal from './SelectModal';
import DownArrow from '../../assets/icons/downArrow.png';
import UpArrow from '../../assets/icons/upArrow.png';

interface SelectBarProps {
    japanese: boolean;
    selectOption: {
        pick: string,
        japanesepick: string,
        englishpick: string
    };
    setSelectOption: React.Dispatch<React.SetStateAction<{
        pick: string,
        japanesepick: string,
        englishpick: string
    }>>;
}

const SelectBar : React.FC<SelectBarProps> = ({ japanese, selectOption, setSelectOption }) => {

    const { pick, japanesepick, englishpick } = selectOption;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    // console.log("필터 옵션", pick, japanesepick);

  return (
    <SelectBarContainer onClick={() => setIsOpen(!isOpen)}>
        {japanese ? japanesepick : pick}
        {isOpen
            ? <UpDownIcon src={UpArrow}/>
            : <UpDownIcon src={DownArrow}/>}
        {isOpen
            && <SelectModalWrapper>
                <SelectModal
                    japanese={japanese}
                    selectOption={selectOption}
                    setSelectOption={setSelectOption}/>
            </SelectModalWrapper>}
    </SelectBarContainer>
  )
};

const SelectBarContainer = styled.div`
  min-width: 120px;
  height: 34px;
  padding: 0px 10px 0px 16px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  position: relative;
  border: 1px solid #ADADAD;
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
    left: -1px;
    z-index: 20;
`;

export default SelectBar;