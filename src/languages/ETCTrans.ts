type ETCTextTransType = {
    englishtext: string,
    chinesetext: string,
    japanesetext: string,
    text: string
}

export const etcTextTrans : ETCTextTransType[] = [
    {
        englishtext: "cases",
        chinesetext: " 件",
        japanesetext: " 件",
        text: " 건"
    },
    {
        englishtext: "Please enter here",
        chinesetext: "请输入搜索词。",
        japanesetext: "検索ワードを入力してください。",
        text: "검색어를 입력해주세요."
    },
    {
        englishtext: "name",
        chinesetext: "名字",
        japanesetext: "名前",
        text: "이름"
    },
    {
        englishtext: "No search results",
        chinesetext: "无搜索结果",
        japanesetext: "検索結果なし",
        text: "검색결과 없음"
    },
    {
        englishtext: "Please enter the correct search term\nor set up a filter and try again.",
        chinesetext: "请输入正确的搜索词或设置过滤器后再次尝试。",
        japanesetext: "正しい検索ワードを入力するか、\nフィルターを設定してから再試行してください。",
        text: "올바른 검색어를 입력하거나\n필터를 설정한 후 다시 시도해주세요."
    },
];

export const mobileHeaderTrans : ETCTextTransType[] = [
    {
        englishtext: "Home",
        chinesetext: " 件",
        japanesetext: " 件",
        text: "홈으로"
    },
    {
        englishtext: "Mentor",
        chinesetext: "请输入搜索词。",
        japanesetext: "検索ワードを入力してください。",
        text: "강사보기"
    },
    {
        englishtext: "Notice",
        chinesetext: "名字",
        japanesetext: "名前",
        text: "공지사항"
    },
    {
        englishtext: "Counseling",
        chinesetext: "无搜索结果",
        japanesetext: "検索結果なし",
        text: "상담안내"
    },
    {
        englishtext: "Social",
        chinesetext: "请输入正确的搜索词或设置过滤器后再次尝试。",
        japanesetext: "正しい検索ワードを入力するか、\nフィルターを設定してから再試行してください。",
        text: "소셜계정"
    },
];