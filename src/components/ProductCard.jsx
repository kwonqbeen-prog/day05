import GoodsMockup from './GoodsMockup';

const seriesBg = {
  '과일': 'from-pastel-pink to-[#FFF0C8]',
  '빵': 'from-[#FFF0C8] to-pastel-lavender',
};

export default function ProductCard({ product }) {
  const { name, price, badge, description, goodsType, images, series } = product;
  const bg = seriesBg[series] || 'from-pastel-pink to-pastel-lavender';

  return (
    <div className="card cursor-pointer group">
      <div className="relative h-52">
        {badge && (
          <span className={`absolute top-3 left-3 z-10 text-xs font-bold px-2 py-1 rounded-full ${
            badge === 'BEST' ? 'bg-accent-pink text-white' : 'bg-accent-lavender text-white'
          }`}>
            {badge}
          </span>
        )}
        {series && (
          <span className="absolute top-3 right-3 z-10 text-xs font-medium px-2 py-1 rounded-full bg-white/80 text-gray-500">
            {series} 시리즈
          </span>
        )}
        <GoodsMockup goodsType={goodsType} images={images} bgClass={bg} />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-brand-dark text-sm mb-1 group-hover:text-accent-pink transition-colors line-clamp-1">
          {name}
        </h3>
        <p className="text-xs text-gray-400 mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-accent-pink">
            {price.toLocaleString()}원
          </span>
          <button className="text-xs bg-pastel-pink text-accent-pink px-3 py-1.5 rounded-full hover:bg-accent-pink hover:text-white transition-colors font-medium">
            담기
          </button>
        </div>
      </div>
    </div>
  );
}
