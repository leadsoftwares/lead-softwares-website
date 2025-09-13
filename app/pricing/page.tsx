// components/BgDiv.tsx
import Banner from '@/public/png/banner-bg.png'
export default function BgDiv() {
  return (
    <div
      className="w-full h-[85vh] bg-cover bg-center rounded-xl shadow-lg"
      style={{
          backgroundImage: `url(${Banner.src})`, // ✅ correct
      }}
    >
      
    </div>
  );
}
