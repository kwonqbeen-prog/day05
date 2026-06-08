import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-pink to-accent-lavender flex items-center justify-center text-white text-sm font-bold">
                Q
              </div>
              <div>
                <span className="font-bold text-white text-lg">Q숍</span>
                <span className="ml-1.5 text-xs text-white/40">Q.SHOP</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              일러스트레이터 규빈(Qbeen)의 귀엽고 따뜻한
              <br />일러스트를 굿즈로 만나보세요.
            </p>
            <p className="text-xs mt-3 text-white/40">개업일: 2026년 6월 8일</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-accent-pink transition-colors">굿즈샵</Link></li>
              <li><Link to="/about" className="hover:text-accent-pink transition-colors">브랜드 소개</Link></li>
              <li><Link to="/contact" className="hover:text-accent-pink transition-colors">문의하기</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">고객 지원</h4>
            <ul className="space-y-2 text-sm">
              <li>이메일: kwonqbeen@gmail.com</li>
              <li>운영시간: 평일 10:00 - 18:00</li>
              <li className="mt-4 flex gap-3">
                <a href="#" className="hover:text-accent-pink transition-colors">Instagram</a>
                <a href="#" className="hover:text-accent-pink transition-colors">Twitter</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-center text-white/30">
          © 2026 Q숍 (Q.SHOP). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
