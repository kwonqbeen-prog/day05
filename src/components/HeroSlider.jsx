import { useState, useEffect, useCallback } from 'react';
import { products } from '../data/products';

const n = products.length;

// 슬라이드별 배경 그라데이션
const slideBg = {
  '과일': ['#FFF0F5', '#FFF8E8', '#F5F0FF'],
  '빵':  ['#FFF8E8', '#FFF0F5', '#EFF5FF'],
};

// 각 이미지의 회전/위치 변환 (최대 4개)
const transforms = [
  { rotate: -7, y: 18, scale: 1.05 },
  { rotate:  4, y: -12, scale: 1.15 },
  { rotate: -3, y: 22, scale: 0.97 },
  { rotate:  9, y:  4, scale: 1.0  },
];

function SlideScene({ product }) {
  const { images, series, name, goodsType } = product;
  const imgs = images.slice(0, Math.min(images.length, 4));
  const [c1, c2, c3] = slideBg[series] || ['#FFF0F5', '#FFF5E8', '#F0F0FF'];

  const goodsLabel = {
    'sticker-sheet': '스티커 세트',
    'postcard': '엽서',
    'keyring': '아크릴 키링',
    'washi': '마스킹 테이프',
  }[goodsType] || '';

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)` }}
    >
      {/* 배경 원형 장식 */}
      <div
        className="absolute -top-20 -right-20 rounded-full opacity-30"
        style={{ width: 400, height: 400, background: `radial-gradient(circle, ${c3}, transparent)` }}
      />
      <div
        className="absolute -bottom-16 right-32 rounded-full opacity-20"
        style={{ width: 300, height: 300, background: `radial-gradient(circle, ${c1}, transparent)` }}
      />

      {/* 일러스트 이미지들 */}
      <div className="absolute inset-0 flex items-center justify-end pr-12 md:pr-24">
        <div className="flex items-center gap-2 md:gap-6">
          {imgs.map((src, i) => {
            const t = transforms[i];
            return (
              <img
                key={i}
                src={src}
                alt=""
                draggable={false}
                className="select-none object-contain drop-shadow-2xl"
                style={{
                  width: 'clamp(80px, 10vw, 160px)',
                  height: 'clamp(80px, 10vw, 160px)',
                  transform: `rotate(${t.rotate}deg) translateY(${t.y}px) scale(${t.scale})`,
                  transition: 'transform 0.3s ease',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* 굿즈 종류 + 상품명 레이블 (하단 우측) */}
      <div className="absolute bottom-5 right-6 text-right pointer-events-none">
        <p className="text-xs text-gray-400/80 mb-0.5">{series} 시리즈 · {goodsLabel}</p>
        <p className="text-sm font-semibold text-brand-dark/50">{name}</p>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  // [last-clone | 0…n-1 | first-clone] → 총 n+2 슬라이드
  const track = [products[n - 1], ...products, products[0]];
  const total = track.length;

  const [pos, setPos] = useState(1);       // 현재 track 인덱스 (1 = products[0])
  const [animated, setAnimated] = useState(true);

  const advance = useCallback(() => {
    setAnimated(true);
    setPos(p => p + 1);
  }, []);

  // 자동 전환
  useEffect(() => {
    const t = setInterval(advance, 3500);
    return () => clearInterval(t);
  }, [advance]);

  // 무한 루프 리셋
  useEffect(() => {
    if (pos === n + 1) {
      const t = setTimeout(() => { setAnimated(false); setPos(1); }, 750);
      return () => clearTimeout(t);
    }
    if (pos === 0) {
      const t = setTimeout(() => { setAnimated(false); setPos(n); }, 750);
      return () => clearTimeout(t);
    }
  }, [pos]);

  // 실제 products 인덱스 (dots용)
  const realIdx = pos <= 0 ? n - 1 : pos >= n + 1 ? 0 : pos - 1;

  const goTo = (i) => { setAnimated(true); setPos(i + 1); };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 슬라이드 트랙 */}
      <div
        className="flex h-full"
        style={{
          width: `${total * 100}%`,
          transform: `translateX(${(-pos / total) * 100}%)`,
          transition: animated ? 'transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          willChange: 'transform',
        }}
      >
        {track.map((product, i) => (
          <div key={i} className="h-full flex-shrink-0" style={{ width: `${100 / total}%` }}>
            <SlideScene product={product} />
          </div>
        ))}
      </div>

      {/* 좌측 텍스트 가독성 오버레이 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(253,246,250,0.97) 0%, rgba(253,246,250,0.92) 35%, rgba(253,246,250,0.55) 60%, transparent 100%)',
        }}
      />

      {/* 페이지 인디케이터 dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === realIdx ? 20 : 6,
              background: i === realIdx ? '#F06292' : 'rgba(74,48,80,0.2)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
