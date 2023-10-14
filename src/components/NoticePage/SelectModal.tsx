import React from 'react'
import styled from 'styled-components';

interface SelectModalProps {
    japanese: boolean;
    selectOpen: {
        pick: string,
        isOpen: boolean
    };
    setSelectOpen: React.Dispatch<React.SetStateAction<{
        pick: string,
        isOpen: boolean
    }>>;
}

const SelectModal : React.FC<SelectModalProps> = (props) => {

    const { japanese, selectOpen, setSelectOpen } = props;

  return (
    <div>SelectModal</div>
  )
};

export default SelectModal;