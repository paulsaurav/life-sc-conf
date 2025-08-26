import { useEffect, useState } from 'react';

const lines = [
  'Assam University, Silchar',
  '28 & 29 November 2025',
];

export default function HeroTitleBlock() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white font-poppins text-left mx-auto max-w-fit leading-tight relative z-10">
      <h1 className="text-[24px] md:text-[24px] font-bold text-center z-50">
        Climate Change and Environmental Sustainability in Mountainous and Hilly Landscapes
      </h1>

      <div className="relative h-[40px] md:h-[48px] mt-1">
        <div
          key={index}
          className="absolute animate-flipText text-[20px] md:text-[28px] font-bold whitespace-nowrap"
        >
          {lines[index]}
        </div>
      </div>
    </div>
  );
}
