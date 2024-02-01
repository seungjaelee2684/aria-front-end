type AlertType = {
  englishalert: string,
  chinesealert: string,
  japanesealert: string,
  alert: string
};

export const alertInformation: AlertType[] = [
  {
    englishalert: "Coming soon",
    chinesealert: "正在准备。",
    japanesealert: "準備中です。",
    alert: "준비중이에요!"
  },
  {
    englishalert: "We are currently preparing the content, so please wait a little bit.",
    chinesealert: "现在正在准备内容，请稍等。",
    japanesealert: "現在コンテンツを準備中ですので、少々お待ちください。",
    alert: "현재 컨텐츠를 준비중이오니 조금만 기다려주십시오."
  },
  {
    englishalert: "It's scheduled to open in March!",
    chinesealert: "预计3月份开业！",
    japanesealert: "3月オープン予定！",
    alert: "3월 오픈 예정!"
  },
  {
    englishalert: "Would you like to visit your instructor's Twitter account, where the class will begin soon?",
    chinesealert: "您确定要访问即将开始上课的讲师的推特账户吗？",
    japanesealert: "まもなく授業が始まる講師のツイッターアカウントを訪問しますか？",
    alert: "곧 수업이 시작되는 강사님의 트위터 계정을 방문하시겠습니까?"
  },
];