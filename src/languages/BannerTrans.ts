import Banner1 from '../assets/images/mainimage2.jpg';
import Banner2 from '../assets/images/rapla2.png';
import Banner3 from '../assets/images/rapla1-2.png';

type InfoType = {
    image: string,
    englishtitle: string,
    chinesetitle: string,
    japanesetitle: string,
    title: string
  };

export const textInformation : InfoType[] = [
    {image: Banner1, englishtitle: "EVENT", chinesetitle: "事件", japanesetitle: "イベント", title: "이벤트"},
    {image: Banner2, englishtitle: "NOTICE", chinesetitle: "公告事项", japanesetitle: "お知らせ", title: "공지 사항"},
    {image: Banner1, englishtitle: "H.O.F", chinesetitle: "名人堂", japanesetitle: "名誉の殿堂", title: "명예의 전당"},
    {image: Banner3, englishtitle: "Operation Policy", chinesetitle: "Operation Policy", japanesetitle: "運営ポリシー", title: "운영 정책"},
    {image: Banner2, englishtitle: "COUNSELING", chinesetitle: "咨询指南", japanesetitle: "相談案内", title: "상담 안내"}
  ];