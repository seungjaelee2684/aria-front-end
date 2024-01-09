import React from 'react'
import Koreaflag from '../../assets/logos/koreaflag.webp';
import Japanflag from '../../assets/logos/japanflag.webp';
import Americaflag from '../../assets/logos/americaflag.webp'
import Chinaflag from '../../assets/logos/chinaflag.webp'
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nationFlag, nationKind } from '../../store/NationFilter';
import { TiArrowSortedDown } from "react-icons/ti";
import { mentorSearchInput } from '../../store/MentorSearchInput';

type Nation = {
    englishnation: string,
    chinesenation: string,
    japanesenation: string,
    nation: string,
    flag: string  
};

interface FilterModalProps {
    setIsOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterModal : React.FC<FilterModalProps> = ({ setIsOpenFilter }) => {

    const language = localStorage.getItem("language");
    const darkmode = localStorage.getItem("darkmode");
    const [nationkinds, setNationkinds] = useRecoilState(nationKind);
    const [, setFlag] = useRecoilState(nationFlag);
    const [, setMentorSearchInput] = useRecoilState(mentorSearchInput);
    const flagValue = useRecoilValue(nationFlag);

    const nationFilter : Nation[]  = [
        {englishnation: "All Country", chinesenation: "所有国家", japanesenation: "すべての国", nation: "모든 국가", flag: ""},
        {englishnation: "U.S.A", chinesenation: "美国", japanesenation: "アメリカ", nation: "미국", flag: Americaflag},
        {englishnation: "China", chinesenation: "中国", japanesenation: "中国", nation: "중국", flag: Chinaflag},
        {englishnation: "Japan", chinesenation: "日本", japanesenation: "日本", nation: "일본", flag: Japanflag},
        {englishnation: "Korea" , chinesenation: "韩国", japanesenation: "韓国", nation: "대한민국", flag: Koreaflag}
    ];

    const filterTranslate = (item : any) => {
        if (item === null) {
            switch (language) {
                case "chinese" :
                    return nationkinds?.chinesepick;
                case "japanese" :
                    return nationkinds?.japanesepick;
                case "korean" :
                    return nationkinds?.pick;
                default :
                    return nationkinds?.englishpick;
            };
        } else {
            switch (language) {
                case "chinese" :
                    return item?.chinesenation;
                case "japanese" :
                    return item?.japanesenation;
                case "korean" :
                    return item?.nation;
                default :
                    return item?.englishnation;
            };
        };
        
        
    };

    const noneFilter = nationFilter.filter((item) => item.englishnation !== nationkinds.englishpick);
    console.log("필터", noneFilter);

  return (
    <FilterModalContainer>
        <DefaultBtn
            style={{backgroundColor: `${(darkmode === "dark") ? "#535353" : "#FFFFFF"}`}}>
            {flagValue && <NationFlag src={flagValue}/>}
            {filterTranslate(null)}
            <TiArrowSortedDown />
        </DefaultBtn>
        {noneFilter?.map((item : Nation) => {
            return (
                <FilterModalBtn
                    key={item?.nation}
                    style={{backgroundColor: `${(darkmode === "dark") ? "#535353" : "#FFFFFF"}`}}
                    onClick={() => {
                        setNationkinds({
                            ...nationkinds,
                            englishpick: item?.englishnation,
                            chinesepick: item?.chinesenation,
                            japanesepick: item?.japanesenation,
                            pick: item?.nation,

                        });
                        setFlag(item?.flag);
                        setIsOpenFilter(false);
                        setMentorSearchInput("");
                    }}
                >{filterTranslate(item)}</FilterModalBtn>
            )
        })}
    </FilterModalContainer>
  )
};

const FilterModalContainer = styled.div`
    width: 150px;
    border: 1px solid #e9e9e9;
    background-color: #FFFFFF;
    box-shadow: rgba(63, 71, 77, 0.2) 0px 3px 10px 0px;
    overflow: hidden;

    @media screen and (max-width: 1320px) {
        width: 140px;
    }

    @media screen and (max-width: 836px) {
        width: 120px;
    }

    /* @media screen and (max-width: 500px) {
        display: none;
    } */
`;

const FilterModalBtn = styled.div`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 400;
    line-height: 140%;
    background-color: #FFFFFF;
    cursor: pointer;

    &:hover {
        background-color: #e9e9e9;
        font-size: 13px;
        font-weight: 600;
    }

    @media screen and (max-width: 1320px) {
        width: 140px;
        font-size: 12px;
    }

    @media screen and (max-width: 836px) {
        width: 120px;
        font-size: 11px;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const DefaultBtn = styled.div`
    width: 150px;
    height: 38px;
    /* border-bottom: 1px solid #e9e9e9; */
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
   /* color: #222020; */
    background-color: #FFFFFF;

    @media screen and (max-width: 1320px) {
        width: 140px;
        font-size: 13px;
    }

    @media screen and (max-width: 836px) {
        width: 120px;
        font-size: 12px;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const NationFlag = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;

    @media screen and (max-width: 1320px) {
        width: 20px;
        height: 20px;
    }

    @media screen and (max-width: 836px) {
        width: 16px;
        height: 16px;
    }

    @media screen and (max-width: 500px) {
        width: 14px;
        height: 14px;
    }
`;

export default FilterModal;