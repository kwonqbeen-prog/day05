import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
  const featured = products.filter(p => p.badge).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden pt-16 flex items-center">
        {/* 배경 이미지 슬라이더 */}
        <HeroSlider />

        {/* 텍스트 (슬라이더 위) */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-md">
            <span className="inline-block bg-white/80 text-accent-pink text-xs font-semibold px-3 py-1 rounded-full mb-5 shadow-sm">
              2026.06.08 OPEN
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight mb-6">
              규빈의 그림을
              <br />
              <span className="text-accent-pink">일상에</span> 담다
            </h1>
            <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
              일러스트레이터 규빈(Qbeen)의 귀엽고 따뜻한
              <br />
              일러스트를 굿즈로 만나보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/shop" className="btn-primary text-center">
                굿즈 둘러보기
              </Link>
              <Link to="/about" className="btn-outline text-center">
                브랜드 소개
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">왜 Q숍인가요?</h2>
          <p className="section-subtitle">규빈이 직접 그린 일러스트로 세상에 하나뿐인 굿즈를 만들어요</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎨', title: '100% 직접 제작', desc: '모든 일러스트는 직접 손으로 그린 오리지널 작품입니다.' },
              { icon: '💌', title: '정성스러운 포장', desc: '주문 하나하나 손수 포장해 소중하게 배송해 드립니다.' },
              { icon: '✨', title: '한정 수량 운영', desc: '퀄리티를 지키기 위해 소량만 제작하여 판매합니다.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-brand-light">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">인기 상품</h2>
          <p className="section-subtitle">많은 사랑을 받고 있는 굿즈들을 만나보세요</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/shop" className="btn-primary">전체 상품 보기</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent-pink to-accent-lavender text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Q숍 뉴스레터 구독</h2>
          <p className="text-white/80 mb-8">규빈의 신작 일러스트와 신상품 출시 소식을 가장 먼저 받아보세요</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소 입력"
              className="flex-1 px-4 py-3 rounded-full text-brand-dark outline-none text-sm"
            />
            <button type="submit" className="bg-white text-accent-pink font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
              구독하기
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
