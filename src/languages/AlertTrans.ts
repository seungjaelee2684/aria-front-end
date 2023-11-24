type AlertType = {
    englishalert: string,
    chinesealert: string,
    japanesealert: string,
    alert: string
  };

export const alertInformation : AlertType[] = [
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
  ];