import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-gradient-to-br from-pastel-lavender to-pastel-blue py-16 text-center">
        <h1 className="text-4xl font-bold text-brand-dark mb-2">문의하기</h1>
        <p className="text-gray-500">궁금한 점이 있으시면 편하게 연락해 주세요</p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16">
        {sent ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💌</div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">문의가 접수되었습니다!</h2>
            <p className="text-gray-500 mb-6">평일 1-2일 내로 이메일로 답변 드리겠습니다.</p>
            <button onClick={() => setSent(false)} className="btn-outline">
              다시 문의하기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1.5">이름</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="홍길동"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-lavender text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1.5">이메일</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-lavender text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1.5">문의 유형</label>
              <select
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-lavender text-sm text-gray-600"
              >
                <option value="">선택해주세요</option>
                <option value="order">주문/배송 문의</option>
                <option value="product">상품 문의</option>
                <option value="wholesale">도매/협업 문의</option>
                <option value="etc">기타</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1.5">문의 내용</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="문의하실 내용을 입력해주세요"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-accent-lavender text-sm resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full py-3">
              문의 보내기
            </button>
          </form>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: '📧', label: '이메일', value: 'kwonqbeen@gmail.com' },
            { icon: '⏰', label: '운영시간', value: '평일 10:00 - 18:00' },
          ].map(item => (
            <div key={item.label} className="text-center p-5 bg-brand-light rounded-2xl">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-xs text-gray-400 mb-1">{item.label}</div>
              <div className="text-sm font-medium text-brand-dark">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
