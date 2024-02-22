import Banner from '../assets/images/notice_banner.webp';

type InfoType = {
    image: string,
    englishtitle: string,
    japanesetitle: string,
    title: string
  };

export const textInformation : InfoType[] = [
    {image: Banner, englishtitle: "EVENT", japanesetitle: "イベント", title: "이벤트"},
    {image: Banner, englishtitle: "NOTICE", japanesetitle: "お知らせ", title: "공지 사항"},
    {image: Banner, englishtitle: "H.O.F", japanesetitle: "名誉の殿堂", title: "명예의 전당"},
    {image: Banner, englishtitle: "Operation Policy", japanesetitle: "運営ポリシー", title: "운영 정책"},
    {image: Banner, englishtitle: "COUNSELING", japanesetitle: "相談案内", title: "상담 안내"}
  ];