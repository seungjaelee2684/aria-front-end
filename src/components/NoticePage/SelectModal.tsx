import React from 'react'
import styled from 'styled-components';

interface SelectModalProps {
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

const SelectModal : React.FC<SelectModalProps> = (props) => {

    const { japanese, selectOption, setSelectOption } = props;

    type OptionType = {
      japaneseoption: string,
      option: string,
      englishoption: string
    }

    const modalOption : OptionType[] = [
      {japaneseoption: "全体", option: "전체", englishoption: "ALL"},
      {japaneseoption: "進行中", option: "진행중", englishoption: "PROCEEDING"},
      {japaneseoption: "締め切り", option: "마감", englishoption: "DEADLINE"},
      {japaneseoption: "開始予定", option: "시작예정", englishoption: "EXPECTED"},
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
                  japanesepick: item?.japaneseoption,
                  englishpick: item?.englishoption})
              }
            }>
            {japanese ? item.japaneseoption : item.option}
          </ModalLineContainer>
        )
      })}
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  min-width: 235px;
  border-top: 0.5 solid #e9e9e9;
  border-bottom: 0.5 solid #e9e9e9;
  border-left: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  background-color: #FCFCFC;
  border-radius: 0px 0px 5px 5px;
  color: #222020;
`;

const ModalLineContainer = styled.div`
  width: 210px;
  height: 34px;
  border-top: 0.5 solid #e9e9e9;
  border-bottom: 0.5 solid #e9e9e9;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 16px;

  &:hover {
    color: #FCFCFC;
    background-color: #1e4eeb;
  }
`;

export default SelectModal;