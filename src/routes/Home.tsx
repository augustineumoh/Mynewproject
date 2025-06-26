import React, { useRef, useEffect } from 'react';
import { FiDollarSign } from 'react-icons/fi';
import dish1 from './dish7.avif';
import dish2 from './dish6.avif';
import dish3 from './dish5.avif';
import dish4 from './dish4.avif';
import dish5 from './dish3.avif';
import dish6 from './dish1.avif';
import dish7 from './dish2.avif';
import dish8 from './dish8.avif';
import dish9 from './dish9.jpg';

const foodItems = [
  { id: 1, name: 'Salmon & Zucchini', desc: 'Fresh shrimp with avocado & aioli', price: '12.99', img: dish1 },
  { id: 2, name: 'Hawaiian Chicken Pizza', desc: 'Served with grilled chicken & herbs', price: '15.49', img: dish2 },
  { id: 3, name: 'Vegan Buddha Bowl', desc: 'Chickpeas, quinoa, roasted veg', price: '11.25', img: dish3 },
  { id: 4, name: 'Bacon Cheese Burger', desc: 'Smoky bacon, melted cheddar, and bold burger bliss.', price: '17.99', img: dish4 },
  { id: 5, name: 'Avocado Egg Toast', desc:'Hearty and golden on sourdough', price: '16.99', img: dish5 },
  { id: 6, name: 'French Toast Brioche', desc:'Fluffy & topped with berries', price: '18.19', img: dish6 },
  { id: 7, name: 'Mediterranean Salad', desc:'Crisp greens, feta & olives', price: '12.24', img: dish7 },
  { id: 8, name: 'Pork Chop Dinner', desc:'With rustic potatoes & gravy', price: '10.79', img: dish8 },
  { id: 9, name: 'Stuffed Fries', desc:'Greek Gyro Meat French Fries with Tzatziki Sauc', price: '13.79', img: dish9 },
];

// Duplicate list to simulate endless scroll
const loopedItems = [...foodItems, ...foodItems];

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let frameId: number;
  let paused = false;

  const scroll = () => {
    if (!paused) {
      container.scrollLeft += 0.5;

      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      if (container.scrollLeft >= scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }

    frameId = requestAnimationFrame(scroll);
  };

  frameId = requestAnimationFrame(scroll);

  const pause = () => (paused = true);
  const resume = () => (paused = false);

  container.addEventListener('mouseenter', pause);
  container.addEventListener('mouseleave', resume);

  return () => {
    cancelAnimationFrame(frameId);
    container.removeEventListener('mouseenter', pause);
    container.removeEventListener('mouseleave', resume);
  };
}, []);

  return (
    <section className="bg-[#ca98664f] py-10 overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-[#F4A50A] text-lg font-bold flex justify-center gap-2 items-center">
          🍲 Best Food 🍲
        </p>
        <h2 className="text-2xl font-bold text-[24px] pt-5">Popular Food Items</h2>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#ca98664f] to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#ca98664f] to-transparent z-10" />

        <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 scrollbar-hide">

        
          {loopedItems.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="min-w-[240px] h-[320px] sm:min-w-[45%] md:min-w-[24%] bg-white rounded-lg shadow-md p-4 flex-shrink-0 hover:scale-105 transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-44 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
              <p className="text-red-600 font-bold flex items-center mt-2">
                <FiDollarSign className="mr-1" />
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Home;