// components/CategoryShowcase.js
import Image from 'next/image';

const categories = [
  { label: 'BAGS', src: '/images/p1.jpg' },
  { label: 'OUTERWEAR', src: '/images/p1.jpg' },
  { label: 'FOOTWEAR', src: '/images/p1.jpg' },
  { label: 'ACCESSORIES', src: '/images/p1.jpg' },
  { label: 'APPAREL', src: '/images/p1.jpg' },
];

export default function CategoryShowcase () {
  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-full h-[300px] relative overflow-hidden">
              <Image
                src={item.src}
                alt={item.label}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-center text-sm font-semibold tracking-widest uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
