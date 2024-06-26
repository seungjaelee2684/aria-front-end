import React from 'react'
import styled from 'styled-components';
import { IoCheckmark } from "react-icons/io5";

interface SelectModalProps {
    language: string | null;
    selectOption: {
        pick: string,
        japanesepick: string,
        englishpick: string,
    };
    setSelectOption: React.Dispatch<React.SetStateAction<{
        pick: string,
        japanesepick: string,
        englishpick: string,
    }>>;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectModal : React.FC<SelectModalProps> = (props) => {

    const { language, selectOption, setSelectOption, setContent, setInputValue } = props;

    type OptionType = {
      japaneseoption: string,
      option: string,
      englishoption: string,
    }

    const modalOption : OptionType[] = [
      {japaneseoption: "全体", option: "전체", englishoption: "All"},
      {japaneseoption: "進行中", option: "진행중", englishoption: "Proceeding"},
      {japaneseoption: "締め切り", option: "마감", englishoption: "Deadline"},
      {japaneseoption: "開始予定", option: "시작예정", englishoption: "Upcoming"},
    ];

    const filterOptions = ( item : OptionType ) => {
      switch (language) {
        case "japanese" :
          return item.japaneseoption;
        case "korean" :
          return item.option;
        default :
          return item.englishoption;
      };
    };

  return (
    <ModalContainer>
      {modalOption.map((item : OptionType) => {
        return (
          <ModalLineContainer
            key={item?.englishoption}
            onClick={() => {
                setSelectOption({
                  ...selectOption,
                  pick: item?.option,
                  japanesepick: item?.japaneseoption,
                  englishpick: item?.englishoption,
                })
                setContent("");
                setInputValue("");
              }
            }>
            {filterOptions(item)}
            {(selectOption?.pick === item?.option)
              && <IoCheckmark />}
          </ModalLineContainer>
        )
      })}
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  min-width: 120px;
  border-bottom: 0.5px solid #ADADAD;
  border-left: 1px solid #ADADAD;
  border-right: 1px solid #ADADAD;
  background-color: #FFF;
  border-radius: 0px 0px 5px 5px;
 /* color: #222020; */

  @media screen and (max-width: 836px) {
    min-width: 100px;
  }

  @media screen and (max-width: 500px) {
    min-width: 80px;
    font-size: 12px;
  }
`;

const ModalLineContainer = styled.div`
  width: 120px;
  height: 34px;
  border-bottom: 0.5px solid #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 16px;

  &:hover {
    color: #FCFCFC;
    background-color: #1e4eeb;
  }

  @media screen and (max-width: 836px) {
    width: 100px;
    height: 30px;
  }

  @media screen and (max-width: 500px) {
    width: 80px;
    height: 26px;
    padding: 0px 10px;
  }
`;

export default SelectModal;