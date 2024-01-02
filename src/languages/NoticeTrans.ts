type NoticeType = {
    englishtext: string,
    chinesetext: string,
    japanesetext: string,
    text: string
};

type FilterType = {
    englishstate: string,
    chinesestate: string,
    japanesestate: string,
    state: string
};

export const NoticeTrans : NoticeType[] = [
    {
        englishtext: "All",
        chinesetext: "整个",
        japanesetext: "全体",
        text: "전체"
    },
    {
        englishtext: "Notice",
        chinesetext: "公告",
        japanesetext: "お知らせ",
        text: "공지"
    },
    {
        englishtext: "Event",
        chinesetext: "活动",
        japanesetext: "イベント",
        text: "이벤트"
    },
    {
        englishtext: "cases",
        chinesetext: " 件",
        japanesetext: " 件",
        text: " 건"
    },
    {
        englishtext: "Class",
        chinesetext: "分类",
        japanesetext: "分類",
        text: "분류"
    },
    {
        englishtext: "Title",
        chinesetext: "题目",
        japanesetext: "題目",
        text: "제목"
    },
    {
        englishtext: "Date",
        chinesetext: "注册日",
        japanesetext: "登録日",
        text: "등록일"
    },
];

export const filterState : FilterType[] = [
    {
        englishstate: "All",
        chinesestate: "整个",
        japanesestate: "全体",
        state: "전체"
    },
    {
        englishstate: "Notice",
        chinesestate: "公告",
        japanesestate: "お知らせ",
        state: "공지"
    },
    {
        englishstate: "Event",
        chinesestate: "活动",
        japanesestate: "イベント",
        state: "이벤트"
    }
];