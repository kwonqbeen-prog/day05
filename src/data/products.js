export const categories = [
  { id: 'all', name: '전체' },
  { id: 'sticker', name: '스티커' },
  { id: 'postcard', name: '엽서' },
  { id: 'acrylic', name: '아크릴 굿즈' },
  { id: 'washi', name: '마스킹 테이프' },
];

// 과일 시리즈
const fruitStickerA = [
  '/images/과일/딸기.png',
  '/images/과일/사과.png',
  '/images/과일/레몬.png',
  '/images/과일/오렌지.png',
  '/images/과일/체리.png',
  '/images/과일/포도.png',
];

const fruitStickerB = [
  '/images/과일/수박.png',
  '/images/과일/복숭아.png',
  '/images/과일/망고.png',
  '/images/과일/블루베리.png',
  '/images/과일/파인애플.png',
  '/images/과일/키위.png',
];

const fruitPostcards = [
  '/images/과일/딸기.png',
  '/images/과일/수박.png',
  '/images/과일/복숭아.png',
  '/images/과일/레몬.png',
];

const fruitKeyrings = [
  '/images/과일/체리.png',
  '/images/과일/딸기.png',
  '/images/과일/레몬.png',
];

const fruitWashi = [
  '/images/과일/감.png',
  '/images/과일/참외.png',
  '/images/과일/한라봉.png',
  '/images/과일/아보카도.png',
  '/images/과일/토마토.png',
  '/images/과일/바나나.png',
];

// 빵 시리즈
const breadStickerA = [
  '/images/빵/식빵.png',
  '/images/빵/크루아상.png',
  '/images/빵/소금빵.png',
  '/images/빵/바게트.png',
  '/images/빵/마들렌.png',
  '/images/빵/와플.png',
];

const breadCharSticker = [
  '/images/빵/강아지빵.png',
  '/images/빵/고양이빵.png',
  '/images/빵/곰돌이빵.png',
  '/images/빵/토끼빵.png',
];

const breadPostcards = [
  '/images/빵/소금빵.png',
  '/images/빵/크루아상.png',
  '/images/빵/팬케이크.png',
  '/images/빵/마들렌.png',
];

const breadKeyrings = [
  '/images/빵/곰돌이빵.png',
  '/images/빵/강아지빵.png',
  '/images/빵/토끼빵.png',
];

const breadStickerB = [
  '/images/빵/까눌레.png',
  '/images/빵/깜빠뉴.png',
  '/images/빵/꽈배기.png',
  '/images/빵/메론빵.png',
  '/images/빵/프레첼.png',
  '/images/빵/만겹크루아상.png',
];

export const products = [
  // ── 과일 시리즈 ──────────────────────────────
  {
    id: 1,
    name: '과일 시리즈 스티커 세트 A',
    series: '과일',
    category: 'sticker',
    goodsType: 'sticker-sheet',
    price: 4500,
    images: fruitStickerA,
    badge: 'NEW',
    description: '딸기·사과·레몬·오렌지·체리·포도 6종 스티커 세트',
  },
  {
    id: 2,
    name: '과일 시리즈 스티커 세트 B',
    series: '과일',
    category: 'sticker',
    goodsType: 'sticker-sheet',
    price: 4500,
    images: fruitStickerB,
    badge: null,
    description: '수박·복숭아·망고·블루베리·파인애플·키위 6종 스티커 세트',
  },
  {
    id: 3,
    name: '과일 시리즈 엽서 세트',
    series: '과일',
    category: 'postcard',
    goodsType: 'postcard',
    price: 7200,
    images: fruitPostcards,
    badge: 'BEST',
    description: '딸기·수박·복숭아·레몬 일러스트 A6 엽서 4종 세트',
  },
  {
    id: 4,
    name: '과일 시리즈 아크릴 키링',
    series: '과일',
    category: 'acrylic',
    goodsType: 'keyring',
    price: 12000,
    images: fruitKeyrings,
    badge: null,
    description: '체리·딸기·레몬 아크릴 키링 3종 (랜덤 1개)',
  },
  {
    id: 5,
    name: '과일 시리즈 마스킹 테이프',
    series: '과일',
    category: 'washi',
    goodsType: 'washi',
    price: 3500,
    images: fruitWashi,
    badge: null,
    description: '감·참외·한라봉·아보카도·토마토·바나나 패턴 15mm 마스킹 테이프',
  },
  // ── 빵 시리즈 ──────────────────────────────
  {
    id: 6,
    name: '빵 시리즈 스티커 세트 A',
    series: '빵',
    category: 'sticker',
    goodsType: 'sticker-sheet',
    price: 4500,
    images: breadStickerA,
    badge: 'NEW',
    description: '식빵·크루아상·소금빵·바게트·마들렌·와플 6종 스티커 세트',
  },
  {
    id: 7,
    name: '빵 캐릭터 스티커 세트',
    series: '빵',
    category: 'sticker',
    goodsType: 'sticker-sheet',
    price: 4500,
    images: breadCharSticker,
    badge: 'BEST',
    description: '강아지빵·고양이빵·곰돌이빵·토끼빵 캐릭터 4종 스티커 세트',
  },
  {
    id: 8,
    name: '빵 시리즈 엽서 세트',
    series: '빵',
    category: 'postcard',
    goodsType: 'postcard',
    price: 7200,
    images: breadPostcards,
    badge: null,
    description: '소금빵·크루아상·팬케이크·마들렌 일러스트 A6 엽서 4종 세트',
  },
  {
    id: 9,
    name: '빵 캐릭터 아크릴 키링',
    series: '빵',
    category: 'acrylic',
    goodsType: 'keyring',
    price: 12000,
    images: breadKeyrings,
    badge: 'BEST',
    description: '곰돌이빵·강아지빵·토끼빵 아크릴 키링 3종 (랜덤 1개)',
  },
  {
    id: 10,
    name: '빵 시리즈 스티커 세트 B',
    series: '빵',
    category: 'sticker',
    goodsType: 'sticker-sheet',
    price: 4500,
    images: breadStickerB,
    badge: null,
    description: '까눌레·깜빠뉴·꽈배기·메론빵·프레첼·만겹크루아상 6종 스티커 세트',
  },
];
