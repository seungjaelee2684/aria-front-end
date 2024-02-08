import React, { useState } from 'react'
import styled from 'styled-components';

interface InformUploadProps {
    mentorInfo: any;
    setMentorInfo: React.Dispatch<React.SetStateAction<any>>;
};

const InformUpload: React.FC<InformUploadProps> = ({ mentorInfo, setMentorInfo }) => {

    const { englishname, chinesename, japanesename, nickname, nation, opendate } = mentorInfo;

    type nationKindType = {
        name: string,
        status: string
    };
    const nationKind : nationKindType[] = [
        {name: "미국", status: "America"},
        {name: "중국", status: "China"},
        {name: "일본", status: "Japan"},
        {name: "대한민국", status: "Korea"},
    ];

    const onChangeInputHanlder = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMentorInfo({
            ...mentorInfo,
            [name]: value
        });
        console.log("멘토 정보 입력값", mentorInfo);
    };

    return (
        <BoxContainer>
            <ContentOutContainer>
                <RequireLaneContainer>
                    <RequireTitle>
                        ◈ 강사 이름
                    </RequireTitle>
                    <InputLaneContainer>
                        <InputTag
                            style={{
                                width: "240px"
                            }}
                            placeholder='ex) 산파치'
                            autoComplete='off'
                            type='text'
                            name='nickname'
                            value={nickname}
                            onChange={(e) => onChangeInputHanlder(e)}/>
                        <LanguageSortText>
                            : 한국어
                        </LanguageSortText>
                    </InputLaneContainer>
                    <InputLaneContainer>
                        <InputTag
                            placeholder='ex) Sanpati'
                            autoComplete='off'
                            type='text'
                            name='englishname'
                            value={englishname}
                            onChange={(e) => onChangeInputHanlder(e)}/>
                        <LanguageSortText>
                            : 영어
                        </LanguageSortText>
                        <InputTag
                            placeholder='ex) 圣帕蒂'
                            autoComplete='off'
                            type='text'
                            name='chinesename'
                            value={chinesename}
                            onChange={(e) => onChangeInputHanlder(e)}/>
                        <LanguageSortText>
                            : 중국어
                        </LanguageSortText>
                        <InputTag
                            placeholder='ex) さんぱち'
                            autoComplete='off'
                            type='text'
                            name='japanesename'
                            value={japanesename}
                            onChange={(e) => onChangeInputHanlder(e)}/>
                        <LanguageSortText>
                            : 일본어
                        </LanguageSortText>
                    </InputLaneContainer>
                    <ExplanationContainer>
                        <ExplanationContent style={{color: "#de0000", fontWeight: "500"}}>
                            * 필수 항목입니다.
                        </ExplanationContent>
                        <ExplanationContent>
                            * 강사의 이름을 언어에 알맞게 모두 입력해주세요.
                        </ExplanationContent>
                    </ExplanationContainer>
                </RequireLaneContainer>
                <RequireLaneContainer>
                    <RequireTitle>
                        ◈ 클래스 오픈 예정일
                    </RequireTitle>
                    <InputLaneContainer>
                        <InputTag
                            style={{width: "300px"}}
                            placeholder='ex) 2024-01-21'
                            autoComplete='off'
                            type='text'
                            name='opendate'
                            value={opendate}
                            onChange={(e) => onChangeInputHanlder(e)}/>
                    </InputLaneContainer>
                    <ExplanationContainer>
                        <ExplanationContent style={{color: "#de0000", fontWeight: "500"}}>
                            * 필수 항목입니다.
                        </ExplanationContent>
                        <ExplanationContent>
                            * 수업 시작일을 예시의 형식에 맞게 정확히 입력해주세요. ('-' 포함)
                        </ExplanationContent>
                    </ExplanationContainer>
                </RequireLaneContainer>
                <RequireLaneContainer style={{borderBottom: "none"}}>
                    <RequireTitle>
                        ◈ 국적
                    </RequireTitle>
                    <SelectNationContainer>
                        {nationKind?.map((item : nationKindType) => {
                            return (
                                <SelectNation
                                    key={item?.status}
                                    onClick={() => setMentorInfo({...mentorInfo, nation: item?.status})}>
                                    {(item?.status === nation)
                                        ? <DefaultSelect style={{border: "1px solid #5C9DFF"}}>
                                            <SelectBox />
                                        </DefaultSelect>
                                        : <DefaultSelect />}
                                    {item?.name}
                                </SelectNation>
                            )
                        })}
                    </SelectNationContainer>
                    <ExplanationContainer>
                        <ExplanationContent style={{color: "#de0000", fontWeight: "500"}}>
                            * 필수 항목입니다.
                        </ExplanationContent>
                        <ExplanationContent>
                            * 강사의 국적을 선택해주세요.
                        </ExplanationContent>
                    </ExplanationContainer>
                </RequireLaneContainer>
            </ContentOutContainer>
        </BoxContainer>
    )
};

export const BoxContainer = styled.div`
    min-width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentOutContainer = styled.div`
    width: 100%;
    height: 98%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #222020;
`;

const RequireLaneContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 30px 20px;
    font-family: "Pretendard";
    border-bottom: 1px dotted #ADADAD;
    font-size: 18px;
    font-weight: 700;
`;

const RequireTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    margin-bottom: 14px;
`;

const InputLaneContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const InputTag = styled.input`
    width: 100%;
    height: 30px;
    padding: 0px 16px;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: #222020;
    outline: none;
    background-color: #FCFCFC;
    border: 1px solid #ADADAD;
    border-radius: 3px;

    &::placeholder {
        color: #ADADAD;
    }

    &:focus {
        border: 1px solid #5C9DFF;
    }
`;

const LanguageSortText = styled.div`
    font-size: 13px;
    font-weight: 400;
    line-height: 100%;
    color: #8d8d8d;
    min-width: 45px;
`;

const ExplanationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
`;

const ExplanationContent = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    color: #ADADAD;
`;

const SelectNationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 30px;
`;

const SelectNation = styled.div`
    width: 100px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    user-select: none;
    cursor: pointer;
`;

const DefaultSelect = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 100%;
    border: 1px solid #ADADAD;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SelectBox = styled.div`
    min-width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #5C9DFF;
`;

export default InformUpload;