import CounselingGuideImg1 from '../assets/images/discordcounseling_01.webp';
import CounselingGuideImg2 from '../assets/images/discordcounseling_02.webp';
import CounselingGuideImg3 from '../assets/images/discordcounseling_03.webp';

type CounselingTextType = {
    englishtext: string,
    chinesetext: string,
    japanesetext: string,
    text: string
};

type CounselingContentType =  {
    isred: boolean,
    content: string
};

type CounselingGuideType = {
    image: string,
    englishtext: CounselingContentType[],
    chinesetext: CounselingContentType[],
    japanesetext: CounselingContentType[],
    text: CounselingContentType[]
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
        englishtext: "Feel free to ask any questions regarding enrollment,class\nconsultations, or any other inquiries after joining our Discord server. We'll be happy to provide you with helpful and friendly responses.",
        chinesetext: "在Discord中添加ARIA服务器后,请告知听课咨询\n授课相关问题等咨询事项,我们会亲切地回答。",
        japanesetext: "DiscordでARIAのサーバーを追加し、受講に関するお問い合わせ\nクラスに関するご相談など、お問い合わせいただければ親切にお答えします。",
        text: "디스코드에서 ARIA서버를 추가 후 수강문의, 클래스 상담 등\n문의사항을 말씀해 주시면 친절히 답변드리겠습니다."
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
    {
        englishtext: "※ Please add our Discord server by pressing Go to ARIA discord server.",
        chinesetext: "※ 请在Discord中添加ARIA服务器。",
        japanesetext: "※ ARIAサーバーをディスコードから追加してください。",
        text: "※ ARIA 서버를 디스코드에서 추가해주세요."
    },
];

export const counselingGuide : CounselingGuideType[] = [
    {
        image: CounselingGuideImg1,
        englishtext: [
            {
                isred: false,
                content: "Create a ticket by clicking ",
            },
            {
                isred: true,
                content: "“Create ticket” ",
            },
            {
                isred: false,
                content: "at ",
            },
            {
                isred: true,
                content: "#Support. ",
            },
            {
                isred: false,
                content: "The ticket will be created after a few second.",
            },
        ],
        chinesetext: [
            {
                isred: false,
                content: "去听课申请",
            },
            {
                isred: false,
                content: "去听课申请",
            },
            {
                isred: false,
                content: "去听课申请",
            },
            {
                isred: false,
                content: "去听课申请",
            },
        ],
        japanesetext: [
            {
                isred: true,
                content: "Suport",
            },
            {
                isred: false,
                content: "で",
            },
            {
                isred: true,
                content: "Create ticket",
            },
            {
                isred: false,
                content: "をクリックしてチケットを作成します。 まもなくチケットが作成されます。",
            },
        ],
        text: [
            {
                isred: true,
                content: "Support",
            },
            {
                isred: false,
                content: "에서 ",
            },
            {
                isred: true,
                content: "“Create ticket”",
            },
            {
                isred: false,
                content: "을 눌러 티켓을 생성합니다. 잠시 후 티켓이 생성 됩니다.",
            },
        ]
    },
    {
        image: CounselingGuideImg2,
        englishtext: [
            {
                isred: false,
                content: "The ticket will be created at the left side. If you leave any questions, we will answer your questions during business hours.",
            },
            {
                isred: false,
                content: "The ticket will be created at the left side. If you leave any questions, we will answer your questions during business hours.",
            },
            {
                isred: false,
                content: "The ticket will be created at the left side. If you leave any questions, we will answer your questions during business hours.",
            },
            {
                isred: false,
                content: "The ticket will be created at the left side. If you leave any questions, we will answer your questions during business hours.",
            },
        ],
        chinesetext: [
            {
                isred: false,
                content: "去听课申请",
            },
            {
                isred: false,
                content: "去听课申请",
            },
            {
                isred: false,
                content: "去听课申请",
            },
            {
                isred: false,
                content: "去听课申请",
            },
        ],
        japanesetext: [
            {
                isred: false,
                content: "チケットは左側に作成されますご不明な点を残していただければ、営業時間に担当者と相談できます。",
            },
            {
                isred: false,
                content: "チケットは左側に作成されますご不明な点を残していただければ、営業時間に担当者と相談できます。",
            },
            {
                isred: false,
                content: "チケットは左側に作成されますご不明な点を残していただければ、営業時間に担当者と相談できます。",
            },
            {
                isred: false,
                content: "チケットは左側に作成されますご不明な点を残していただければ、営業時間に担当者と相談できます。",
            },
        ],
        text: [
            {
                isred: false,
                content: "티켓은 좌측에 생성됩니다. 문의 사항을 남겨 주시면 "
            },
            {
                isred: true,
                content: "영업시간에 담당자와 상담이 가능"
            },
            {
                isred: false,
                content: "합니다."
            },
        ]
    },
    {
        image: CounselingGuideImg3,
        englishtext: [
            {
                isred: false,
                content: "Please check your account information at the ticket beforehand. Course registration will be conducted according to the guidance after consultation.",
            },
            {
                isred: false,
                content: "Please check your account information at the ticket beforehand. Course registration will be conducted according to the guidance after consultation.",
            },
            {
                isred: false,
                content: "Please check your account information at the ticket beforehand. Course registration will be conducted according to the guidance after consultation.",
            },
            {
                isred: false,
                content: "Please check your account information at the ticket beforehand. Course registration will be conducted according to the guidance after consultation.",
            },
        ],
        chinesetext: [
            {
                isred: false,
                content: "去听课申请",
            },
            {
                isred: false,
                content: "去听课申请",
            },
            {
                isred: false,
                content: "去听课申请",
            },
            {
                isred: false,
                content: "去听课申请",
            },
        ],
        japanesetext: [
            {
                isred: false,
                content: "チケットで該当部分のアカウント情報が合っているか確認後、相談を進めることができます。 受講申請は相談後、案内に従って行われます。",
            },
            {
                isred: false,
                content: "チケットで該当部分のアカウント情報が合っているか確認後、相談を進めることができます。 受講申請は相談後、案内に従って行われます。",
            },
            {
                isred: false,
                content: "チケットで該当部分のアカウント情報が合っているか確認後、相談を進めることができます。 受講申請は相談後、案内に従って行われます。",
            },
            {
                isred: false,
                content: "チケットで該当部分のアカウント情報が合っているか確認後、相談を進めることができます。 受講申請は相談後、案内に従って行われます。",
            },
        ],
        text: [
            {
                isred: false,
                content: "티켓에서 해당 부분의 계정 정보가 맞는지 확인 후 상담을 진행 할 수 있습니다. ",
            },
            {
                isred: true,
                content: "수강신청은 상담 후  안내에 따라 진행됩니다.",
            },
        ]
    },
];