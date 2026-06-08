// Renders a visual goods mockup from illustration PNGs

function StickerSheet({ images }) {
  const slots = images.slice(0, 6);
  return (
    <div className="relative w-full h-full flex items-center justify-center p-3">
      {/* sticker sheet background */}
      <div className="relative bg-white rounded-xl shadow-inner border border-dashed border-gray-200 w-full h-full p-2 grid grid-cols-3 grid-rows-2 gap-2">
        {slots.map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-lg bg-gray-50 p-1"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Postcard({ images }) {
  const main = images[0];
  const thumbs = images.slice(1, 4);
  return (
    <div className="relative w-full h-full flex items-center justify-center p-3 gap-2">
      {/* main card */}
      <div className="flex-1 h-full bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center p-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
        <img src={main} alt="" className="relative z-10 w-3/4 h-3/4 object-contain drop-shadow" />
        {/* postcard lines */}
        <div className="absolute bottom-3 right-3 flex flex-col gap-1 w-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-px bg-gray-200 w-full" />
          ))}
        </div>
        <div className="absolute top-3 right-3 w-5 h-6 border border-gray-200 rounded-sm" />
      </div>
      {/* small previews */}
      <div className="flex flex-col gap-1.5 h-full justify-center">
        {thumbs.map((src, i) => (
          <div key={i} className="w-10 h-10 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-1">
            <img src={src} alt="" className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Keyring({ images }) {
  const slots = images.slice(0, 3);
  return (
    <div className="w-full h-full flex items-center justify-center gap-3 p-4">
      {slots.map((src, i) => (
        <div key={i} className="flex flex-col items-center gap-1" style={{ transform: `rotate(${(i - 1) * 8}deg)` }}>
          {/* keyring hole */}
          <div className="w-3 h-3 rounded-full border-2 border-gray-300 bg-white shadow-sm" />
          {/* acrylic body */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-white shadow-lg border border-gray-100" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 to-transparent" />
            <img src={src} alt="" className="relative z-10 w-10 h-10 object-contain drop-shadow" />
            {/* shine */}
            <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-white/60 blur-sm" />
          </div>
        </div>
      ))}
    </div>
  );
}

function WashiTape({ images }) {
  const icons = images.slice(0, 6);
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-[180px]">
        {/* tape roll body */}
        <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-pastel-pink via-pastel-lavender to-pastel-blue shadow-lg flex items-center justify-center">
          {/* inner circle */}
          <div className="absolute inset-6 rounded-full bg-white shadow-inner" />
          {/* pattern icons around the roll */}
          {icons.map((src, i) => {
            const angle = (360 / icons.length) * i - 90;
            const rad = (angle * Math.PI) / 180;
            const r = 36;
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <img
                key={i}
                src={src}
                alt=""
                className="absolute w-8 h-8 object-contain drop-shadow-sm"
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
              />
            );
          })}
        </div>
        {/* tape strip */}
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-8 h-full max-h-24 bg-gradient-to-r from-pastel-pink/80 to-pastel-lavender/80 rounded-r-sm shadow-md flex flex-col justify-around items-center overflow-hidden">
          {icons.slice(0, 3).map((src, i) => (
            <img key={i} src={src} alt="" className="w-6 h-6 object-contain opacity-80" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GoodsMockup({ goodsType, images, bgClass }) {
  const bg = bgClass || 'from-pastel-pink to-pastel-lavender';
  return (
    <div className={`w-full h-full bg-gradient-to-br ${bg} flex items-center justify-center`}>
      {goodsType === 'sticker-sheet' && <StickerSheet images={images} />}
      {goodsType === 'postcard' && <Postcard images={images} />}
      {goodsType === 'keyring' && <Keyring images={images} />}
      {goodsType === 'washi' && <WashiTape images={images} />}
    </div>
  );
}
