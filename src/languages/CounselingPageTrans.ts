import CounselingGuideImg1 from '../assets/images/discordcounseling_01.webp';
import CounselingGuideImg2 from '../assets/images/discordcounseling_02.webp';
import CounselingGuideImg3 from '../assets/images/discordcounseling_03.webp';

type CounselingTextType = {
    englishtext: string,
    chinesetext: string,
    japanesetext: string,
    text: string
};

type CounselingGuideType = {
    image: string,
    englishtext: string,
    chinesetext: string,
    japanesetext: string,
    text: string
};

export const CounselingText : CounselingTextType[] = [
    {
        englishtext: "Discord",
        chinesetext: "Discord",
        japanesetext: "Discord",
        text: "디스코드"
    },
    {
        englishtext: "Counseling Guidance",
        chinesetext: "咨询指南",
        japanesetext: "相談案内",
        text: "상담안내"
    },
    {
        englishtext: "Feel free to ask any questions regarding enrollment,class consultations, \nor any other inquiries after adding our academy account as a friend on Discord.\nWe'll be happy to provide you with helpful and friendly responses.",
        chinesetext: "在将我们的学院帐户添加为好友并提出选课咨询、\n课程咨询或其他问题后，我们将很乐意为您提供详细回答。",
        japanesetext: "Discordで学校のアカウントを友達追加した後、受講に関するお問い合わせ、\nクラス相談、その他のご質問がありましたらお知らせください。丁寧にお答えいたします。",
        text: "디스코드에서 학원 계정을 친구 추가 후 수강문의,\n클래스 상담 그 외 문의사항을 말씀해 주시면 친절히 답변드리겠습니다."
    },
    {
        englishtext: "Counseling Hours: 9 AM to 11 PM",
        chinesetext: "咨询时间：上午9点~下午11点",
        japanesetext: "相談時間: 午前9時 ～ 午後11時",
        text: "상담시간 : 오전 9시 ~ 오후 11시"
    },
    {
        englishtext: "Add account friend",
        chinesetext: "添加账户好友",
        japanesetext: "アカウント 友達追加",
        text: "계정 친구추가"
    },
    {
        englishtext: "Go to ARIA discord server",
        chinesetext: "移动到ARIA Discord服务器",
        japanesetext: "ARIAディスコードサーバーに移動",
        text: "ARIA 디스코드 서버로 이동"
    },
];

export const counselingGuide : CounselingGuideType[] = [
    {
        image: CounselingGuideImg1,
        englishtext: "Going to register for a course",
        chinesetext: "去听课申请",
        japanesetext: "受講申請に行く",
        text: "수강 신청하러 가기"
    },
    {
        image: CounselingGuideImg2,
        englishtext: "Going to register for a course",
        chinesetext: "去听课申请",
        japanesetext: "受講申請に行く",
        text: "수강 신청하러 가기"
    },
    {
        image: CounselingGuideImg3,
        englishtext: "Going to register for a course",
        chinesetext: "去听课申请",
        japanesetext: "受講申請に行く",
        text: "수강 신청하러 가기"
    },
];