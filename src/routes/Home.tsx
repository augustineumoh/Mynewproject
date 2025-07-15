// import React, { useRef, useEffect } from 'react';
// // import { FiDollarSign } from 'react-icons/fi';
// import dish1 from './dish7.avif';
// import dish2 from './dish6.avif';
// import dish3 from './dish5.avif';
// import dish4 from './dish4.avif';
// import dish5 from './dish3.avif';
// import dish6 from './dish1.avif';
// import dish7 from './dish2.avif';
// import dish8 from './dish8.avif';
// import dish9 from './dish9.jpg';
// import img from './spicy chicken.jpg';
// import imga from './beef wrap.jpg'
// import image from './cheeseburger.jpg'
// import { FaArrowRight } from "react-icons/fa";
// import images from './spag-removebg-preview.png'
// import { FaBowlFood } from "react-icons/fa6";
// import { FaHeart } from "react-icons/fa6";
// import hoverimage from "./background.jpg"
// import ima2 from "./veg fried rice.png"
// import ima3 from "./pizza.png"
// import image1 from "./new jollof.png"
// import imag3 from "./new burger.png"
// import start from "./starter.png"
// import spinach from "./spinach dip.png"
// import taco from "./new tacos.png"
// import wrap from "./lettuce wrap.png"
// import stir from "./chicken stir.png"
// import bur from "./burger with onion.png"
// import spag from "./new spag.png"
// import ofa from "./ofa.png"
// import cake from "./cake.png"
// import par from "./parfiat.png"
// import backgroundimage from "./new background.png"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Link } from 'react-router';
// import { useCart } from "../../app/routes/cartcontext";
// import { TbCurrencyNaira } from "react-icons/tb";
// import toast  from 'react-hot-toast';


// const foodItems = [
//   { id: 1, name: 'Salmon & Zucchini', desc: 'Fresh shrimp with avocado & aioli', price: '3400', img: dish1 },
//   { id: 2, name: 'Hawaiian Chicken Pizza', desc: 'Served with grilled chicken & herbs', price: '5000', img: dish2 },
//   { id: 3, name: 'Vegan Buddha Bowl', desc: 'Chickpeas, quinoa, roasted veg', price: '6000', img: dish3 },
//   { id: 4, name: 'Bacon Cheese Burger', desc: 'Smoky bacon, melted cheddar, and bold burger bliss.', price: '4500', img: dish4 },
//   { id: 5, name: 'Avocado Egg Toast', desc:'Hearty and golden on sourdough', price: '5600', img: dish5 },
//   { id: 6, name: 'French Toast Brioche', desc:'Fluffy & topped with berries', price: '4950', img: dish6 },
//   { id: 7, name: 'Mediterranean Salad', desc:'Crisp greens, feta & olives', price: '5660', img: dish7 },
//   { id: 8, name: 'Pork Chop Dinner', desc:'With rustic potatoes & gravy', price: '7000', img: dish8 },
//   { id: 9, name: 'Stuffed Fries', desc:'Greek Gyro Meat French Fries with Tzatziki Sauc', price: '4900', img: dish9 },
// ];

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Food Blogger",
//     rating: 5,
//     text: "Urban Fork is a hidden gem! The grilled chicken combo was perfectly seasoned, and the ambiance made me feel right at home. Highly recommend for date nights or solo indulgence.",
//   },
//   {
//     name: "David Kim",
//     role: "Entrepreneur",
//     rating: 4,
//     text: "The service was warm and attentive, and the jollof rice had just the right kick. I’ll definitely be back with my team for lunch meetings.",
//   },
//   {
//     name: "Linda Obasi",
//     role: "Photographer",
//     rating: 5,
//     text: "Every plate was a work of art — I couldn’t stop taking pictures! The flavors were bold and authentic. Urban Fork is now my go-to spot for weekend brunch.",
//   },
//   {
//     name: "Michael Adeyemi",
//     role: "Software Developer",
//     rating: 4,
//     text: "I loved the plantain platter and the suya skewers. The staff was super friendly, and the prices were fair. Great spot for casual hangouts.",
//   },
//   {
//     name: "Chinwe Okafor",
//     role: "Interior Designer",
//     rating: 5,
//     text: "From the moment I walked in, I felt welcomed. The décor is stunning, and the food? Absolutely divine. The seafood pasta was unforgettable!",
//   },
//   {
//     name: "James O'Connor",
//     role: "Tourist",
//     rating: 3,
//     text: "Nice atmosphere and friendly staff. The food was good, but I wish the portions were a bit larger. Still a pleasant experience overall.",
//   },
//   {
//     name: "Amina Yusuf",
//     role: "Nutritionist",
//     rating: 5,
//     text: "I appreciate the healthy options on the menu. The grilled tilapia with steamed veggies was delicious and guilt-free. Keep it up!",
//   },
// ];


// // Duplicate list to simulate endless scroll
// const loopedItems = [...foodItems, ...foodItems];

// const Home = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const { addToCart } = useCart();

//   // ✅ Scroll animation effect
//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     let frameId: number;
//     let paused = false;

//     const scroll = () => {
//       if (!paused) {
//         container.scrollLeft += 0.5;

//         const scrollWidth = container.scrollWidth;
//         const clientWidth = container.clientWidth;

//         if (container.scrollLeft >= scrollWidth / 2) {
//           container.scrollLeft = 0;
//         }
//       }

//       frameId = requestAnimationFrame(scroll);
//     };

//     frameId = requestAnimationFrame(scroll);

//     const pause = () => (paused = true);
//     const resume = () => (paused = false);

//     container.addEventListener('mouseenter', pause);
//     container.addEventListener('mouseleave', resume);

//     return () => {
//       cancelAnimationFrame(frameId);
//       container.removeEventListener('mouseenter', pause);
//       container.removeEventListener('mouseleave', resume);
//     };
//   }, []);

//   // ✅ AOS animation effect
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       import('aos').then((AOS) => AOS.init({ duration: 1000 }));
//       import('aos/dist/aos.css');
//     }
//   }, []);


//   return (
//     <section className="bg-gradient-to-l from-orange-200 to-green-100 py-10 overflow-hidden" data-aos="fade-up">
//       <div className="text-center mb-10">
//         <p className="text-[#F4A50A] text-lg font-bold flex justify-center gap-2 items-center">
//           🍲 Best Food 🍲
//         </p>
//         <h2 className="text-2xl font-bold text-[24px] pt-5">Popular Food Items</h2>
//       </div>

//       <div className="relative">
//         {/* Edge fades */}
//         <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#ca98664f] to-transparent z-10" />
//         <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#ca98664f] to-transparent z-10" />

//         <div 
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto px-6 scrollbar-hide">

        
//           {loopedItems.map((item, i) => (
//             <div
//               key={`${item.id}-${i}`}
//               className="min-w-[240px] h-[320px] sm:min-w-[45%] md:min-w-[24%] bg-white rounded-lg shadow-md p-4 flex-shrink-0 hover:scale-105 transition"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-44 object-cover rounded-lg mb-3"
//               />
//               <h3 className="text-lg font-semibold">{item.name}</h3>
//               <p className="text-sm text-gray-500">{item.desc}</p>
//               <p className="text-red-600 font-bold flex items-center mt-2">
//                 <TbCurrencyNaira  className="mr-1" />
//                 {item.price}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-20 py-20 "  data-aos="fade-up"
//   data-aos-delay="200"
//   data-aos-duration="1200"
// >
//   {/* 🔥 Promo 1 */}
//   <div
//     className="w-full max-w-sm mx-auto relative rounded-xl overflow-hidden h-[280px] flex flex-col justify-end p-6 text-white shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
//     style={{
//       backgroundImage: `url(${img})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}
//   >
//     <div className="absolute inset-0 bg-black/40" />
//     <span className="absolute top-4 right-4 bg-white text-black px-2 py-1 rounded text-xs font-bold z-20">
//       50% OFF
//     </span>
//     <div className="relative z-20">
//       <p className="text-sm font-bold uppercase pb-2">On This Week</p>
//       <h3 className="text-xl font-bold mb-1 text-red-400">Sweet & Spicy Fried Chicken</h3>
//       <p className="text-base font-bold">Limited Time Offer</p>
//       <button
//   onClick={() => {
//     addToCart({
//       name: "Sweet & Spicy Fried Chicken",
//       price: 2900,
//       img: img, // use correct image variable
//     });
//     toast.success("Sweet & Spicy Fried Chicken added to cart!");
//   }}
//   className="mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition"
// >
//   Add to Cart
// </button>

//     </div>
//   </div>

//   {/* 🌯 Promo 2 */}
//   <div
//     className="w-full max-w-sm mx-auto relative rounded-xl overflow-hidden h-[280px] flex flex-col justify-end p-6 text-white shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
//     style={{
//       backgroundImage: `url(${imga})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}
//   >
//     <div className="absolute inset-0 bg-black/40" />
//     <span className="absolute top-4 right-4 bg-white text-black px-2 py-1 rounded text-xs font-bold z-20">
//       50% OFF
//     </span>
//     <div className="relative z-20">
//       <p className="text-sm font-bold uppercase pb-2">On This Week</p>
//       <h3 className="text-xl font-bold mb-1 text-green-300">Nacho Cheese Beef Wrap</h3>
//       <p className="text-base font-bold">Limited Time Offer</p>
//       <button className="mt-3 bg-green-500 hover:bg-green-700 px-5 py-2 rounded-md text-sm font-semibold">
//         Order Now
//       </button>
//     </div>
//   </div>

//   {/* 🍔 Promo 3 */}
//   <div
//     className="w-full max-w-sm mx-auto relative rounded-xl overflow-hidden h-[280px] flex flex-col justify-end p-6 text-white shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
//     style={{
//       backgroundImage: `url(${image})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     }}
//   >
//     <div className="absolute inset-0 bg-black/40" />
//     <span className="absolute top-4 right-4 bg-white text-black px-2 py-1 rounded text-xs font-bold z-20">
//       50% OFF
//     </span>
//     <div className="relative z-20">
//       <p className="text-sm font-bold uppercase pb-2">On This Week</p>
//       <h3 className="text-[18px] font-bold mb-1 text-yellow-300">Garlic Parmesan Cheeseburger Bombs</h3>
//       <p className="text-base font-bold">Limited Time Offer</p>
//       <button className="mt-3 bg-yellow-500 hover:bg-yellow-700 px-5 py-2 rounded-md text-sm font-semibold text-black">
//         Order Now
//       </button>
//     </div>
//   </div>
// </div>

// <div className="mx-20 my-8 bg-[#e293447a] flex flex-col items-center text-center px-6 py-20 rounded-lg"  data-aos="fade-up"
//   data-aos-delay="200"
//   data-aos-duration="1200"
// >
//   <h3 className="text-xl font-bold uppercase tracking-widest text-red-600 mb-2">About Us</h3>
//   <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl">
//     Inspired by American soul. Crafted for every craving.
//   </h2>
//   <p className="max-w-xl text-gray-900 mb-6 leading-relaxed text-[16px]">
//     At <span className="font-bold text-red-500">Urban Fork</span>, we believe good food tells a story — one of comfort,
//     spice, flavor, and flair. From sizzling southern classics to bold, modern favorites, we bring you a curated journey
//     through the heart of American cuisine. Every dish is made with passion, prepared fresh, and served with a warm
//     welcome that feels like home.
//   </p>
//   <Link to="/menu">
//   <button className="bg-red-500 hover:bg-red-700 text-white px-5 flex items-center py-3 rounded-md text-sm font-semibold transition">
//     Order Now <span className='px-0.5 py-1 text-white ml-2'><FaArrowRight /></span>
//   </button>
//   </Link>
// </div>
    
//     <div className="flex flex-col justify-center items-center pt-14 px-4 sm:px-6 lg:px-12"  data-aos="fade-up"
//   data-aos-delay="200"
//   data-aos-duration="1200"
// >
//   <h2 className="font-bold text-red-600 uppercase pb-3 flex items-center gap-3 text-[20px]">
//     <FaBowlFood /> Popular Dishes <FaBowlFood />
//   </h2>
//   <h2 className="font-bold uppercase text-[27px] pb-11 text-center">Best Selling Dishes</h2>

// <div className='flex space-x-8.5 mx-20'  data-aos="fade-up"
//   data-aos-delay="200"
//   data-aos-duration="1200"
// >
//    <div className="group relative w-[380px] h-[370px] items-center max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03] bg-white">
//     {/* Hover background image */}
//     <div
//       className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
//       style={{ backgroundImage: `url(${hoverimage})` }}
//     ></div>

//     {/* Frosted glass overlay */}
//     <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 transition duration-300 group-hover:bg-white/30" />

//     {/* Heart icon */}
//     <span className="absolute top-6 right-6 bg-red-500 text-white p-2 rounded-full text-lg font-bold z-20 shadow-md">
//       <FaHeart />
//     </span>

//     {/* Card content */}
//     <div className="relative z-20 flex flex-col items-center p-6 text-center transition-colors duration-300">
//   <img src={images} alt="Spaghetti" className="w-[160px] h-[160px] object-contain mb-4" />
  
//   <h3 className="font-bold text-lg sm:text-xl text-gray-800 group-hover:text-white transition-colors duration-300">
//     Spaghetti
//   </h3>
  
//   <p className="text-sm sm:text-base text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
//     The Registration Fee
//   </p>
  
//   <p className="flex items-center justify-center text-red-600 font-bold text-base sm:text-lg mt-2 group-hover:text-white transition-colors duration-300">
//     <TbCurrencyNaira className="mr-1" /> 5000
//   </p>
  
//   <button className="bg-red-500 hover:bg-red-700 text-white px-5 flex items-center py-2 rounded-md text-sm font-semibold transition">
//     Order Now <span className='px-0.5 py-0.5 text-white ml-2'><FaArrowRight /></span>
//   </button>
// </div>
//   </div>
//    <div className="group relative w-[350px] max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03] bg-white">
//     {/* Hover background image */}
//     <div
//       className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
//       style={{ backgroundImage: `url(${hoverimage})` }}
//     ></div>

//     {/* Frosted glass overlay */}
//     <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 transition duration-300 group-hover:bg-white/30" />

//     {/* Heart icon */}
//     <span className="absolute top-6 right-6 bg-red-500 text-white p-2 rounded-full text-lg font-bold z-20 shadow-md">
//       <FaHeart />
//     </span>

//     {/* Card content */}
//     <div className="relative z-20 flex flex-col items-center p-6 text-center transition-colors duration-300">
//   <img src={ima3} alt="Spaghetti" className="w-[160px] h-[160px] object-contain mb-4" />
  
//   <h3 className="font-bold text-lg sm:text-xl text-gray-800 group-hover:text-white transition-colors duration-300">
//     Special Toppings Pizza
//   </h3>
  
//   <p className="text-sm sm:text-base text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
//     The Registration Fee
//   </p>
  
//   <p className="flex items-center justify-center text-red-600 font-bold text-base sm:text-lg mt-2 group-hover:text-white transition-colors duration-300">
//     <TbCurrencyNaira className="mr-1" /> 8000
//   </p>
  
//   <button className="bg-red-500 hover:bg-red-700 text-white px-5 flex items-center py-2 rounded-md text-sm font-semibold transition">
//     Order Now <span className='px-0.5 py-0.5  text-white ml-2'><FaArrowRight /></span>
//   </button>
// </div>
//   </div>
//    <div className="group relative w-[350px] max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03] bg-white">
//     {/* Hover background image */}
//     <div
//       className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
//       style={{ backgroundImage: `url(${hoverimage})` }}
//     ></div>

//     {/* Frosted glass overlay */}
//     <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 transition duration-300 group-hover:bg-white/30" />

//     {/* Heart icon */}
//     <span className="absolute top-6 right-6 bg-red-500 text-white p-2 rounded-full text-lg font-bold z-20 shadow-md">
//       <FaHeart />
//     </span>

//     {/* Card content */}
//     <div className="relative z-20 flex flex-col items-center p-6 text-center transition-colors duration-300">
//   <img src={ima2} alt="Spaghetti" className="w-[160px] h-[160px] object-contain mb-4" />
  
//   <h3 className="font-bold text-lg sm:text-xl text-gray-800 group-hover:text-white transition-colors duration-300">
//     Vegetable Fried Rice 
//   </h3>
  
//   <p className="text-sm sm:text-base text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
//     The Registration Fee
//   </p>
  
//   <p className="flex items-center justify-center text-red-600 font-bold text-base sm:text-lg mt-2 group-hover:text-white transition-colors duration-300">
//     <TbCurrencyNaira className="mr-1" /> 5500
//   </p>
  
//   <button className="bg-red-500 hover:bg-red-700 text-white px-5 flex items-center py-2 rounded-md text-sm font-semibold transition">
//     Order Now <span className='px-0.5 py-0.5 text-white ml-2'><FaArrowRight /></span>
//   </button>
// </div>
//   </div>
// </div>


// <div className='flex space-x-12 pt-16 items-start'  data-aos="fade-up"
//   data-aos-delay="200"
//   data-aos-duration="1200"
// >
//    <div className="group relative w-[380px] h-[370px] items-end max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03] bg-white">
//     {/* Hover background image */}
//     <div
//       className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
//       style={{ backgroundImage: `url(${hoverimage})` }}
//     ></div>

//     {/* Frosted glass overlay */}
//     <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 transition duration-300 group-hover:bg-white/30" />

//     {/* Heart icon */}
//     <span className="absolute top-6 right-6 bg-red-500 text-white p-2 rounded-full text-lg font-bold z-20 shadow-md">
//       <FaHeart />
//     </span>

//     {/* Card content */}
//     <div className="relative z-20 flex flex-col items-center p-6 text-center transition-colors duration-300">
//   <img src={image1} alt="jollof" className="w-[160px] h-[160px] object-contain mb-4" />
  
//   <h3 className="font-bold text-lg sm:text-xl text-gray-800 group-hover:text-white transition-colors duration-300">
//     Niger Jollof
//   </h3>
  
//   <p className="text-sm sm:text-base text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
//     The Registration Fee
//   </p>
  
//   <p className="flex items-center justify-center text-red-600 font-bold text-base sm:text-lg mt-2 group-hover:text-white transition-colors duration-300">
//     <TbCurrencyNaira className="mr-1" /> 4500
//   </p>
  
//   <button className="bg-red-500 hover:bg-red-700 text-white px-5 flex items-center py-2 rounded-md text-sm font-semibold transition">
//     Order Now <span className='px-0.5 py-0.5 text-white ml-2'><FaArrowRight /></span>
//   </button>
// </div>
//   </div>
  
//    <div className="group relative w-[350px] h-[370px] max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.03] bg-white">
//     {/* Hover background image */}
//     <div
//       className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
//       style={{ backgroundImage: `url(${hoverimage})` }}
//     ></div>

//     {/* Frosted glass overlay */}
//     <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 transition duration-300 group-hover:bg-white/30" />

//     {/* Heart icon */}
//     <span className="absolute top-6 right-6 bg-red-500 text-white p-2 rounded-full text-lg font-bold z-20 shadow-md">
//       <FaHeart />
//     </span>

//     {/* Card content */}
//     <div className="relative z-20 flex flex-col items-center p-6 text-center transition-colors duration-300">
//   <img src={imag3} alt="Burger and fries" className="w-[160px] h-[160px] object-contain mb-4" />
  
//   <h3 className="font-bold text-lg sm:text-xl text-gray-800 group-hover:text-white transition-colors duration-300">
//     Burger and Fries
//   </h3>
  
//   <p className="text-sm sm:text-base text-gray-600 mt-1 group-hover:text-white transition-colors duration-300">
//     The Registration Fee
//   </p>
  
//   <p className="flex items-center justify-center text-red-600 font-bold text-base sm:text-lg mt-2 group-hover:text-white transition-colors duration-300">
//     <TbCurrencyNaira className="mr-1" /> 6000
//   </p>
  
//   <button className="bg-red-500 hover:bg-red-700 text-white px-5 flex items-center py-2 rounded-md text-sm font-semibold transition">
//     Order Now <span className='px-0.5 py-0.5 text-white ml-2'><FaArrowRight /></span>
//   </button>
// </div>
//   </div>
// </div>

 
// </div>

// <div className="relative justify-center bg-gradient-to-r from-black via-[#ca9866be] to-amber-900 text-white pt-30 px-6 sm:px-12 lg:px-20 overflow-hidden h-[500px] mt-20"  data-aos="fade-up"
//   data-aos-delay="200"
//   data-aos-duration="1200"
// >
//   {/* Text Content */}
//   <div className="max-w-xl z-10 relative">
//     <p className="text-red-500 text-xl font-bold uppercase mb-2"> Welcome Urban Fork</p>
//     <h1 className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight mb-4">
//       Today Special Food
//     </h1>
//     <p className="text-orange-400 text-lg font-semibold uppercase mb-6">Limited Time Offer</p>
//     <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition">
//       Order Now <FaArrowRight />
//     </button>
//   </div>

//   {/* Pizza Image with Animation */}
//   <div className="absolute right-6 bottom-0 sm:right-12 sm:bottom-6 lg:right-20 lg:bottom-10 animate-float z-0">
//     <img src={ima3} alt="Pizza" className="w-[280px] sm:w-[340px] md:w-[400px]" />
    
//     {/* Discount Badge */}
//     <div className="absolute top-0 left-0 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
//       45% Off
//     </div>
//   </div>
// </div>


// <div className="bg-white my-6 mx-20 rounded-xl sm:mx-10 lg:mx-20"  data-aos="fade-up"
//   data-aos-delay="200"
//   data-aos-duration="1200"
// >
//   {/* Section Header */}
//   <div className="flex flex-col items-center justify-center py-10 text-center">
//     <h2 className="flex uppercase items-center text-[#f78310e7] font-bold gap-3 pb-4 text-lg sm:text-xl">
//       <FaBowlFood /> Food Menu <FaBowlFood />
//     </h2>
//     <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Urban Fork Foods Menu</h1>
//   </div>

//   {/* Menu Categories */}
//   <div className="py-6 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
//     {['Starters', 'Main Meals', 'Fresh Desserts', 'Drinks and Juices'].map((item, index) => (
//       <p
//         key={index}
//         className="px-4 py-2 text-[18px] font-bold text-gray-700 border-r border-dashed border-gray-400 last:border-none hover:text-[#f78310] transition"
//       >
//         {item}
//       </p>
//     ))}
//     <hr className="border-t border-gray-300 mt-8 w-full" />
//   </div>

//   <div className="px-6 sm:px-16 py-10 max-w-6xl mx-auto">
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//     {/* Menu Item */}
//     {[ 
//       { name: "Starter Snack Paneer", price: "5000", image: start },
//       { name: "Spinach and Artichoke Dip", price: "3400", image: spinach },
//       { name: "Mini Tacos", price: "4000", image: taco },
//       { name: "Lettuce Wraps with Chicken", price: "4700", image: wrap },
//       { name: "Lettuce Wraps with Chicken", price: "2500", image: stir },
//       { name: "Cheeseburger & Onion Rings", price: "3400", image: bur },
//       { name: "Spaghetti Bolognese", price: "5500", image: spag },
//       { name: "Ofada Rice & Ayamase Sauce", price: "5000", image: ofa },
//       { name: "New York Cheesecake", price: "3900", image: cake },
//       { name: "Fruit Parfaits", price: "2900", image: par },
//     ].map((item, index) => (
//       <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
//         {/* Image */}
//         <img src={item.image} alt={item.name} className="w-[120px] h-[100px] object-cover rounded-md" />

//         {/* Text */}
//         <div className="mx-6 flex-1">
//           <p className="text-red-500 font-bold text-xl">{item.name}</p>
//           <p className="text-sm text-gray-600">It's a testament to our...</p>
//         </div>

//         {/* Price */}
//         <p className="flex items-center font-bold text-xl text-gray-800 whitespace-nowrap">
//           <TbCurrencyNaira className="mr-1" /> {item.price}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>

 
// </div>

// <div className="overflow-hidden whitespace-nowrap py-8 "  data-aos="fade-up"
//   data-aos-delay="200"
//   data-aos-duration="1200"
// >
//   <div className="marquee-track">
//     {/* Repeat the same content twice for seamless looping */}
//     <div className="flex gap-12 text-5xl sm:text-6xl font-extrabold text-gray-600/50">
//       <span className="word-hover pause-on-hover">BURGER</span>
//       <span className="word-hover pause-on-hover">CHICKEN PIZZA</span>
//       <span className="word-hover pause-on-hover">GRILLED CHICKEN</span>
//       <span className="word-hover pause-on-hover mr-12">FRESH SALAD</span>
//     </div>
//     <div className="flex gap-12 text-5xl sm:text-6xl font-extrabold text-gray-600/50">
//       <span className="word-hover pause-on-hover">BURGER</span>
//       <span className="word-hover pause-on-hover">CHICKEN PIZZA</span>
//       <span className="word-hover pause-on-hover">GRILLED CHICKEN</span>
//       <span className="word-hover pause-on-hover">FRESH SALAD</span>
//     </div>
//   </div>
// </div>

// <div
//       className="relative bg-cover bg-center bg-no-repeat py-20 px-6 sm:px-12 lg:px-20"
//        data-aos="fade-up"
//   data-aos-delay="200"
//   data-aos-duration="1200"

//       style={{ backgroundImage: `url(${backgroundimage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto text-white">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl sm:text-4xl font-extrabold">What Our Clients Have to Say</h2>
//           <p className="text-lg text-gray-200 mt-2">Real stories from real customers</p>
//         </div>

//        <Swiper
//   modules={[Autoplay, Pagination]}
//   spaceBetween={30}
//   slidesPerView={1}
//   loop={true}
//   autoplay={{
//     delay: 5000,
//     disableOnInteraction: false,
//   }}
//   pagination={{ clickable: true }}
//   className="w-full max-w-xl mx-auto"
// >
//   {testimonials.map((t, index) => (
//     <SwiperSlide key={index}>
//       <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-white">
//         <p className="text-xl font-bold">{t.name}</p>
//         <p className="text-sm text-gray-300">{t.role}</p>
//         <div className="text-yellow-400 text-lg my-2">
//           {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
//         </div>
//         <p className="text-gray-200">{t.text}</p>
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>
//       </div>
//     </div>



//     </section>
//   );
// };

// export default Home;