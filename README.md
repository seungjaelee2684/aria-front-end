# ARIA (아리아)
[https://www.aria-academy.com/](https://www.aria-academy.com/)

<br />

[1. 사이트 소개](#1-사이트-소개)

[2. 팀원 소개](#2-팀원-소개)

[3. 화면 구성 및 주요 기능](#3-화면-구성-및-주요-기능)

[4. 기술적 의사결정](#4-기술적-의사결정)

[5. 기술 스택](#5-기술-스택)

[6. 트러블 슈팅](#6-트러블-슈팅)

<br />

## 1. 사이트 소개

![ARIA](https://github.com/seungjaelee2684/aria-front-end/assets/135948012/69ca83d8-8666-4649-a5a8-f635a8b3110d)

그림 실력이 늘지 않아 답답하고 힘드셨나요?
<br />
다양한 그림 스타일을 접해보고 싶으셨나요?
<br />
그렇다면 **ARIA**로 오세요!

**ARIA**는 다양한 그림 스타일과 강사들을 통해 학습을 제공하는 **다국적 학원 플랫폼**입니다.

국적에 구애받지 않고 전세계 다양한 작가님들에게 배움을 얻을 수 있는 공간이 마련되어 있습니다.

<br />

### 📆 제작 날짜
* 2023.10.29 ~ 현재 진행중

<br />

## 2. 팀원 소개

<h3>역할: 기획, 디자인, FE 개발, 운영</h3>
<table>
  <thead>
    <tr>
      <th align="center">프론트엔드</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><a target="_blank" rel="noopener noreferrer nofollow" href="https://avatars.githubusercontent.com/u/135948012s=400&u=9e8118cffef779128f2b653e7b8f09d99d7ab417&v=4"><img src="https://avatars.githubusercontent.com/u/135948012?s=400&u=9e8118cffef779128f2b653e7b8f09d99d7ab417&v=4" alt="승재" style="width: 100px"></img></a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/seungjaelee2684">이승재</a></td>
    </tr>
  </tbody>
</table>

<br />

## 3. 화면 구성 및 주요 기능

[🔗 화면 구성 및 주요 기능](https://github.com/seungjaelee2684/aria-front-end/wiki/%ED%99%94%EB%A9%B4-%EA%B5%AC%EC%84%B1-%EB%B0%8F-%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5)

<br />

## 4. 기술적 의사결정

[🔗 기술적 의사결정](https://github.com/seungjaelee2684/aria-front-end/wiki/%EA%B8%B0%EC%88%A0%EC%A0%81-%EC%9D%98%EC%82%AC%EA%B2%B0%EC%A0%95)

<br />

## 5. 기술 스택

* **프레임워크**

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
</div>

* **언어**

<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</div>

* **라이브러리**

<div>
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
  <img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"/>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
</div>

* **배포**

<div>
  <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/>
</div>

<br />

## 6. 트러블 슈팅

**1. 컴포넌트 요소 언마운트 이벤트**

**💣 문제 발생**

`이미지 슬라이드 구현 중 현재 이미지가 fade-out되는 애니메이션 효과가 나타나지 않고 갑자기 사라지는 문제가 발생`

**🎯 개선 방향**

`원인은 상태값에 따른 조건부 렌더링 시 렌더링이 애니메이션 효과를 보여주기도 전에 빠르게 일어난다는 것.
이를 해결하기 위해 state를 한 개가 아니라 현재 이미지와 이전 이미지, 이 두 가지로 저장하고 관리하기로 결정.`

**✅ 개선 결과**

`현재 등장해야하는 이미지와 이전에 등장했던 이미지를 담아 관리하는 state를 만들어 계획한 대로 이미지들을 useEffect()와 setTimeout() 을 이용해 fade-in, fade-out 효과를 나눠서 보이도록 설정.
원하는 형태로 잘 구동하는 것을 확인.`

**코드**

```
const [slideCurrent, setSlideCurrent] = useState<number>(0); // 현재 이미지
const [prevCurrent, setPrevCurrent] = useState<number | undefined>(); // 이전 이미지

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideCurrent((prevSlideCurrent) => (prevSlideCurrent + 1) % (NewMentorListData?.length));
      setPrevCurrent(slideCurrent);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideCurrent]);
```
