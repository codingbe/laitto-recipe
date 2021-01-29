import routers from "./routers";

export const menuArray = [
  {
    id: routers.friedRice,
    title: "볶음밥",
  },
  {
    id: routers.riceBowl,
    title: "덮밥",
  },
  {
    id: routers.cookedRamen,
    title: "조리형 라면",
  },
  {
    id: routers.hamburger,
    title: "햄버거",
  },
  {
    id: routers.tteogbokki,
    title: "떡볶이",
  },
  {
    id: routers.microwave,
    title: "전자레인지",
    subTitle: "소떡 회오리핫도그 탕수육 뼈치킨",
  },
  {
    id: routers.friedFood,
    title: "튀김",
    subTitle: "치즈볼 치즈스틱 치킨팝콘 순살치킨 닭강정 핫도그",
  },
  {
    id: routers.mandoo,
    title: "만두",
  },
  {
    id: routers.ade,
    title: "에이드",
  },
];

export const friedRice = [
  {
    title: "낚지",
    description: "계란후라이 + 김가루 + 깨",
  },
  {
    title: "스팸김치",
    description: "계란후라이 + 김가루 + 깨",
  },
  {
    title: "대패삼겹",
    description: "계란후라이 + 김가루 + 깨",
  },
  {
    title: "치킨카레",
    description: "계란후라이 + 깨",
  },
  {
    title: "치킨데리야끼",
    description: "계란후라이 + 깨",
  },
];

export const riceBowl = [
  {
    title: "돈까스",
    description: "밥 + 맛감자 3개(튀김기 4분) + 돈까스(튀김기 5분) + 볶은김치 + 단무지 + 소스",
  },
  {
    title: "돈까스김치",
    description: "밥 + 돈까스(튀김기 5분) + 볶은김치 한스푼 + 깨",
  },
  {
    title: "치킨마요",
    description: "밥 + 치킨텐더 2개(튀김기 4분) + 마요 + 데리야끼 + 김가루 + 깨",
  },
  {
    title: "스팸마요",
    description: "밥 + 스팸 한스푼(후라이팬 굽기) + 마요 + 데리야끼 + 김가루 + 깨",
  },
  {
    title: "떡갈비마요",
    description: "밥 + 떡갈비(전자레인지 2분) + 마요 + 데리야끼 + 김가루 + 깨",
  },
  {
    title: "소불고기",
    description: "밥 + 소불고기소스(전자레인지 5분) + 계란후라이 + 김가루 + 깨",
  },
  {
    title: "제육",
    description: "밥 + 제육소스(전자레인지 5분) + 계란후라이 + 김가루 + 깨",
  },
];

export const cookedRamen = [
  {
    title: "만두라면",
    description: "신라면 + 물만두 6개 + 단무지",
  },
  {
    title: "김치찌개라면",
    description: "신라면 + 볶은김치 한 스푼 + 단무지",
  },
];

export const hamburger = [
  {
    title: "햄버거",
    description: "모든 햄버거는 전자레인지 1분 30초로 통일",
  },
];

export const tteogbokki = [
  {
    title: "떡볶이",
    description: "물150ml + 떡오뎅 + 대파 한 스푼 + 떡볶이소스 두 스푼 + 다시다 세 스푼 + 후추 한 스푼",
  },
  {
    title: "라볶이",
    description: "물150ml + 떡오뎅 + 라면사리 반개 + 대파 한 스푼 + 떡볶이소스 두 스푼 + 다시다 세 스푼 + 후추 한 스푼",
  },
  {
    title: "소시지떡볶이",
    description: "물150ml + 떡오뎅 + 대파 한 스푼 + 소시지 6개 + 떡볶이소스 두 스푼 + 다시다 세 스푼 + 후추 한 스푼",
  },
];

export const microwave = [
  {
    title: "소떡소떡",
    description: "전자레인지 1분30초 + 튀김기 2분 + 소떡소스 + 파슬리",
  },
  {
    title: "회오리핫도그",
    description: "전자레인지 1분30초 + 케찹 + 머스타드 + 젓가락",
  },
  {
    title: "찹쌀탕수육",
    description: "전자레인지 3분",
  },
  {
    title: "후라이드치킨",
    description: "전자레인지 3분",
  },
  {
    title: "양념치킨",
    description: "전자레인지 3분",
  },
];

export const friedFood = [
  {
    title: "감자튀김",
    description: "튀김기 4분 + 케찹",
  },
  {
    title: "케이준 감자튀김",
    description: "튀김기 4분 + 케찹",
  },
  {
    title: "허니 감자튀김",
    description: "튀김기 4분 + 봉투에 허니가루 뿌리고 섞기",
  },
  {
    title: "맛감자튀김",
    description: "20개 튀김기 4분 + 케찹",
  },
  {
    title: "김말이튀김",
    description: "10개 튀김기 4분",
  },
  {
    title: "고구마치즈볼",
    description: "10개 튀김기 2분 + 케찹 + 머스타드",
  },
  {
    title: "치즈스틱",
    description: "6개 튀김기 2분",
  },
  {
    title: "치킨팝콘",
    description: "20개 튀김기 2분 + 닭강정소스 한 스푼",
  },
  {
    title: "순살치킨",
    description: "6개 튀김기 4분 + 닭강정소스 한 스푼",
  },
  {
    title: "핫칠리닭강정",
    description: "순살치킨 6개 & 맛감자튀김 5개 튀김기 4분 + 닭강정소스 두 스푼 + 땅콩가루",
  },
  {
    title: "핫도그",
    description: "전자레인지 30초 + 튀김기 2분",
  },
];

export const mandoo = [
  {
    title: "물만두",
    description: "물만두 10개 라면조리기로 조리",
  },
  {
    title: "군만두",
    description: "군만두 5개 전자레인지 1분 + 후라이팬에 굽기",
  },
];

export const ade = [
  {
    title: "에이드",
    description: "플라스틱컵 아랫줄까지 원액 + 얼음 + 작은 사이다",
  },
];
