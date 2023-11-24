type AlertType = {
    englishalert: string,
    chinesealert: string,
    japanesealert: string,
    alert: string
  };

export const alertInformation : AlertType[] = [
    {englishalert: "EVENT", chinesealert: "事件", japanesealert: "イベント", alert: "이벤트"},
    {englishalert: "ANNOUNCEMENTS", chinesealert: "公告事项", japanesealert: "お知らせ", alert: "공지 사항"},
    {englishalert: "H.O.F", chinesealert: "名人堂", japanesealert: "名誉の殿堂", alert: "명예의 전당"},
  ];