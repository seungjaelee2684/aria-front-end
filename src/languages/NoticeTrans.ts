type NoticeType = {
    englishtext: string,
    japanesetext: string,
    text: string
};

type FilterType = {
    englishstate: string,
    japanesestate: string,
    state: string
};

export const NoticeTrans : NoticeType[] = [
    {
        englishtext: "All",
        japanesetext: "全体",
        text: "전체"
    },
    {
        englishtext: "Notice",
        japanesetext: "お知らせ",
        text: "공지"
    },
    {
        englishtext: "Event",
        japanesetext: "イベント",
        text: "이벤트"
    },
    {
        englishtext: "cases",
        japanesetext: " 件",
        text: " 건"
    },
    {
        englishtext: "Class",
        japanesetext: "分類",
        text: "분류"
    },
    {
        englishtext: "Title",
        japanesetext: "題目",
        text: "제목"
    },
    {
        englishtext: "Date",
        japanesetext: "登録日",
        text: "등록일"
    },
];

export const filterState : FilterType[] = [
    {
        englishstate: "All",
        japanesestate: "全体",
        state: "전체"
    },
    {
        englishstate: "Notice",
        japanesestate: "お知らせ",
        state: "공지"
    },
    {
        englishstate: "Event",
        japanesestate: "イベント",
        state: "이벤트"
    }
];