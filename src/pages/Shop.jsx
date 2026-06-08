import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const series = [
  { id: 'all', name: '전체 시리즈' },
  { id: '과일', name: '🍓 과일 시리즈' },
  { id: '빵', name: '🥐 빵 시리즈' },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSeries, setActiveSeries] = useState('all');

  const filtered = products.filter(p => {
    const catMatch = activeCategory === 'all' || p.category === activeCategory;
    const seriesMatch = activeSeries === 'all' || p.series === activeSeries;
    return catMatch && seriesMatch;
  });

  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-gradient-to-br from-pastel-blue to-pastel-lavender py-16 text-center">
        <h1 className="text-4xl font-bold text-brand-dark mb-2">굿즈샵</h1>
        <p className="text-gray-500">감성 일러스트 굿즈 모음</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* 시리즈 필터 */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {series.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSeries(s.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSeries === s.id
                  ? 'bg-accent-lavender text-white'
                  : 'bg-white text-gray-500 hover:bg-pastel-lavender hover:text-accent-lavender border border-gray-100'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-accent-pink text-white'
                  : 'bg-white text-gray-500 hover:bg-pastel-pink hover:text-accent-pink border border-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            해당 조건의 상품이 없습니다.
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-400 mb-4 text-right">{filtered.length}개 상품</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
