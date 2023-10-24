import React from 'react'
import styled from 'styled-components';

interface SelectModalProps {
    language: string;
    selectOption: {
        pick: string,
        languagepick: string,
        englishpick: string
    };
    setSelectOption: React.Dispatch<React.SetStateAction<{
        pick: string,
        languagepick: string,
        englishpick: string
    }>>;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SelectModal : React.FC<SelectModalProps> = (props) => {

    const { language, selectOption, setSelectOption, setContent, setInputValue } = props;

    type OptionType = {
      languageoption: string,
      option: string,
      englishoption: string
    }

    const modalOption : OptionType[] = [
      {languageoption: "全体", option: "전체", englishoption: "ALL"},
      {languageoption: "進行中", option: "진행중", englishoption: "PROCEEDING"},
      {languageoption: "締め切り", option: "마감", englishoption: "DEADLINE"},
      {languageoption: "開始予定", option: "시작예정", englishoption: "EXPECTED"},
    ];

    console.log("test", selectOption?.englishpick);

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
                  languagepick: item?.languageoption,
                  englishpick: item?.englishoption})
                setContent("");
                setInputValue("");
              }
            }>
            {language ? item.languageoption : item.option}
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
  color: #222020;
`;

const ModalLineContainer = styled.div`
  width: 120px;
  height: 34px;
  border-bottom: 0.5px solid #f8f8f8;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 16px;

  &:hover {
    color: #FCFCFC;
    background-color: #1e4eeb;
  }
`;

export default SelectModal;