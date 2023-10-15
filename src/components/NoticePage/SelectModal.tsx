import React from 'react'
import styled from 'styled-components';

interface SelectModalProps {
    japanese: boolean;
    selectOpen: {
        pick: string,
        isOpen: boolean,
        japanesepick: string
    };
    setSelectOpen: React.Dispatch<React.SetStateAction<{
        pick: string,
        isOpen: boolean,
        japanesepick: string
    }>>;
}

const SelectModal : React.FC<SelectModalProps> = (props) => {

    const { japanese, selectOpen, setSelectOpen } = props;

    const divElement = document.getElementById("filterId");
    const divContent = divElement?.innerHTML;

    type OptionType = {
      japaneseoption: string,
      option: string,
      englishoption: string
    }

    const modalOption : OptionType[] = [
      {japaneseoption: "", option: "전체", englishoption: "All"},
      {japaneseoption: "", option: "진행중", englishoption: "PROCEEDING"},
      {japaneseoption: "", option: "마감", englishoption: "DEADLINE"},
      {japaneseoption: "", option: "시작예정", englishoption: "EXPECTED"},
    ];

    const onClickFilterHandler = ( item : any ) => {
      setSelectOpen({...selectOpen, pick: item?.option});
      console.log("테스트", item?.option, typeof item?.option, selectOpen.pick);
    };

  return (
    <ModalContainer>
      {modalOption.map((item : any) => {
        return (
          <ModalLineContainer
            key={item?.englishoption}
            id="filterId"
            onClick={() => onClickFilterHandler(item)}>
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