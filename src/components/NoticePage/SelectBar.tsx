import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import SelectModal from './SelectModal';
import DownArrow from '../../assets/icons/downArrow.png';
import UpArrow from '../../assets/icons/upArrow.png';
import { TiArrowUnsorted } from "react-icons/ti";

interface SelectBarProps {
    language: string | null;
    selectOption: {
        pick: string,
        japanesepick: string,
        englishpick: string,
        chinesepick: string
    };
    setSelectOption: React.Dispatch<React.SetStateAction<{
        pick: string,
        japanesepick: string,
        englishpick: string,
        chinesepick: string
    }>>;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectBar : React.FC<SelectBarProps> = ({ language, selectOption, setSelectOption, setContent, setInputValue }) => {

    const { pick, japanesepick, englishpick, chinesepick } = selectOption;

    const divRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const filterOption = () => {
      switch (language) {
        case "english" :
          return englishpick;
        case "chinese" :
          return chinesepick;
        case "japanese" :
          return japanesepick;
        case "korean" :
          return pick;
        default :
          return englishpick;
      };
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (divRef.current && !divRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // console.log("필터 옵션", pick, japanesepick);

  return (
    <SelectBarContainer ref={divRef} onClick={() => setIsOpen(!isOpen)}>
        {filterOption()}
        <SelectIcon>
          <TiArrowUnsorted />
        </SelectIcon>
        {isOpen
            && <SelectModalWrapper>
                <SelectModal
                    language={language}
                    selectOption={selectOption}
                    setSelectOption={setSelectOption}
                    setContent={setContent}
                    setInputValue={setInputValue}/>
            </SelectModalWrapper>}
    </SelectBarContainer>
  )
};

const SelectBarContainer = styled.div`
  min-width: 120px;
  height: 34px;
  padding: 0px 10px 0px 16px;
  font-family: "Pretendard";
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
  position: relative;
  border: 1px solid #ADADAD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  position: relative;
  user-select: none;

  @media screen and (max-width: 836px) {
    min-width: 100px;
    height: 30px;
  }

  @media screen and (max-width: 500px) {
    min-width: 80px;
    height: 26px;
    font-size: 12px;
    padding: 0px 10px;
  }
`;

const UpDownIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;

  @media screen and (max-width: 500px) {
    width: 14px;
    height: 14px;
  }
`;

const SelectModalWrapper = styled.div`
  position: absolute;
  top: 35px;
  left: -1px;
  z-index: 20;

  @media screen and (max-width: 836px) {
    top: 31px;
  }

  @media screen and (max-width: 500px) {
    top: 27px;
  }
`;

const SelectIcon = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222020;
`;

export default SelectBar;