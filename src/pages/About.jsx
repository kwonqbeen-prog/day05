export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-gradient-to-br from-pastel-pink to-pastel-lavender py-16 text-center">
        <h1 className="text-4xl font-bold text-brand-dark mb-2">브랜드 소개</h1>
        <p className="text-gray-500">Q숍(Q.SHOP)의 이야기</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-accent-pink text-sm font-semibold">Our Story</span>
            <h2 className="text-3xl font-bold text-brand-dark mt-2 mb-6">
              규빈의 그림이
              <br />굿즈가 되기까지
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Q숍은 일러스트레이터 규빈(Qbeen)이 2026년 6월 8일 직접 운영하는 굿즈 브랜드입니다.
              매일 조금씩 그려온 귀엽고 따뜻한 일러스트들이 스티커, 엽서, 아크릴 굿즈로 탄생했습니다.
            </p>
            <p className="text-gray-500 leading-relaxed">
              규빈의 그림 속 작은 캐릭터들이 여러분의 일상 곳곳에 자리잡길 바랍니다.
              소중한 사람에게, 혹은 나 자신에게 주는 작은 선물로 Q숍이 함께하겠습니다.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pastel-pink to-pastel-blue rounded-3xl h-72 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-3">🎨</div>
              <p className="text-accent-pink font-bold text-lg">Q.SHOP</p>
              <p className="text-accent-lavender text-sm mt-1">by Qbeen</p>
              <p className="text-gray-400 text-xs mt-3">2026. 06. 08 OPEN</p>
            </div>
          </div>
        </div>

        {/* Artist intro */}
        <div className="bg-gradient-to-br from-pastel-lavender/40 to-pastel-pink/40 rounded-3xl p-8 md:p-12 mb-16 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-pink to-accent-lavender flex items-center justify-center text-white text-3xl font-bold mx-auto mb-5">
            Q
          </div>
          <h3 className="text-xl font-bold text-brand-dark mb-2">일러스트레이터 규빈 (Qbeen)</h3>
          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
            일러스트레이터 규빈(Qbeen)의 귀엽고 따뜻한 일러스트를 굿즈로 만나보세요.<br />
            과일, 빵, 동물 등 일상 속 사랑스러운 소재를 특유의 파스텔 감성으로 담아냅니다.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="section-title">브랜드 가치</h2>
          <p className="section-subtitle">Q숍이 굿즈를 만드는 이유</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🌸', title: '오리지널 일러스트', desc: '모든 캐릭터와 패턴은 규빈이 직접 손그림으로 작업한 오리지널 아트워크입니다.' },
              { icon: '🌿', title: '친환경 소재', desc: '가능한 환경 친화적인 인쇄 방식과 포장재를 사용합니다.' },
              { icon: '💝', title: '소량 한정 제작', desc: '대량생산이 아닌 소량 한정으로 제작하여 퀄리티를 유지합니다.' },
              { icon: '🤝', title: '소통하는 브랜드', desc: '고객과의 적극적인 소통으로 더 좋은 굿즈를 만들어갑니다.' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
