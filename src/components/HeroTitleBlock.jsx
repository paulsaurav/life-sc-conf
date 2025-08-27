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
    <div className="text-white font-poppins text-center mx-auto max-w-fit leading-tight relative z-10 flex flex-col items-center justify-center">
      <h1 className="text-[24px] md:text-[24px] font-bold z-50">
        Climate Change and Environmental Sustainability in Mountainous and Hilly Landscapes - 2025
      </h1>

      <div className="relative h-[40px] md:h-[48px] mt-1">
        <div
          key={index}
          className="animate-flipText text-[20px] md:text-[28px] font-bold whitespace-nowrap"
        >
          {lines[index]}
        </div>
      </div>
    </div>
  );
}
