import React, { useState, useEffect } from 'react';
import slide1 from './background hero.jpg';
import slide2 from './chef cooking.jpg';
import slide3 from './food on table.jpg';


const slides = [
{
image: slide1,
heading: 'Fresh Ingredients, Bold Flavors',
subtext: 'Experience the taste of authenticity',
},
{
image: slide2,
heading: 'Crafted by Passionate Chefs',
subtext: 'Every dish tells a story',
},
{
image: slide3,
heading: 'A Place to Savor & Celebrate',
subtext: 'Welcome to Urban Fork',
},
];
const App = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
    <div className="relative w-full h-130 overflow-hidden">
      <img
        src={slides[current].image}
        alt={slides[current].heading}
        className="w-full h-full object-cover transition duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{slides[current].heading}</h1>
        <p className="text-lg md:text-2xl">{slides[current].subtext}</p>
      </div>
    </div>


    </div>
  )
}

export default App