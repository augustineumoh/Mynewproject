// import aboutImage from "./menu 1.jpg";
import menu from "./menu 1.jpg";
import aboutImage from "./ambiance .png";
import jollof from "./jollof combo.png"
import sandwich from "./sandwich.png";
import friedChickenImage from "./combo chick.png"
import back from "./back.jpg"
import back3 from "./back3.jpg"
import back4 from "./back4.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import devonImg from "./chef 1.jpg"
import ralphImg from "./chef 2.jpg";
import marvinImg from "./chef 3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useCart } from "./cartcontext";
import toast  from 'react-hot-toast';


const team = [
  {
    name: "Victoria Lane",
    title: "President of Sales",
    image: devonImg,
  },
  {
    name: "Ralph Edwards",
    title: "Chefe Manager",
    image: ralphImg,
  },
  {
    name: "Rachel McKinney",
    title: "Main Chefe",
    image: marvinImg,
  },
];


export default function () {
   const { addToCart } = useCart();

    return(
        <div>
            <div className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${menu})`}}>
 {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6">
   <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-200">
Discover the Soul Behind Urban Fork
</h1>
<p className="text-lg sm:text-xl text-red-500 max-w-xl mx-auto">
Born out of a love for food and community, Urban Fork blends culinary creativity with heartfelt hospitality.</p>
   
  </div>
               
            </div>
           
<section className="bg-white text-gray-800 py-20 px-6 sm:px-12 md:px-20 lg:px-32" data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1200">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* About Text Content */}
    <div>
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-amber-700">About Urban Fork</h2>
      <p className="text-lg leading-relaxed mb-4">
        Urban Fork is more than just a restaurant — it’s a culinary sanctuary nestled in the heart of Lagos. We started with one goal: to serve dishes that feel like home, while tasting like adventure.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Whether it's a casual brunch with friends, a romantic dinner, or a celebration that deserves unforgettable flavors, our table is open to all. We blend local comfort with global inspiration, creating experiences that linger long after the last bite.
      </p>
      <p className="text-lg leading-relaxed">
        From sourcing fresh ingredients to crafting seasonal menus, our team pours passion into every detail. At Urban Fork, every plate is a story — and every guest becomes family.
      </p>
    </div>

    {/* About Image */}
    <div className="relative">
      <img
        src={aboutImage} // replace with actual import or image path
        alt="Urban Fork dining atmosphere"
        className="rounded-lg shadow-lg object-cover w-full h-96"
      />
      <div className="absolute bottom-4 left-4 bg-white/80 text-gray-700 px-4 py-2 rounded font-medium backdrop-blur-sm">
        Est. 2020 — Anthony Village, Lagos
      </div>
    </div>

  </div>
</section>
<section
  className="py-16 px-6 sm:px-12 bg-white"
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1200"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* 🥘 Card 1 – Jollof Chicken Combo */}
    <div className="bg-red-600 text-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden"
      style={{ backgroundImage: `url(${back4})` }}>
      
      {/* 🔔 Badge */}
      <div className="absolute top-4 right-4 z-10 animate-bounce">
        <div className="bg-amber-500 text-black font-bold text-xs px-3 py-1 rounded-full shadow-md">
          50% OFF
        </div>
      </div>

      {/* Text Content */}
      <div className="sm:w-2/3 text-center sm:text-left space-y-2">
        <h2 className="text-sm font-bold">START PRICE ₦2500</h2>
        <h3 className="text-xl font-bold">Jollof Chicken Combo</h3>
        <p className="text-md font-semibold">Limited Time Offer</p>
        <button
         onClick={() => {
    addToCart({
      name: "Jollof Chicken Combo",
      price: 2500,
      img: jollof, 
    });
    toast.success("Jollof Chicken Combo");
  }}
          className="px-5 py-2 bg-amber-600 text-white rounded-full font-bold hover:bg-black transition duration-300"
        >
          ORDER NOW
        </button>
      </div>

      {/* Image */}
      <img src={jollof} alt="Jollof Combo" className="w-32 h-32 object-cover rounded-md mt-6 sm:mt-0 sm:ml-4" />
    </div>

    {/* 🥪 Card 2 – Chicken Sandwich Combo */}
    <div className="bg-red-600 text-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden"
      style={{ backgroundImage: `url(${back})` }}>

      {/* Badge */}
      <div className="absolute top-4 right-4 z-10 animate-bounce">
        <div className="bg-amber-500 text-black font-bold text-xs px-3 py-1 rounded-full shadow-md">
          50% OFF
        </div>
      </div>

      {/* Text */}
      <div className="sm:w-2/3 text-center sm:text-left space-y-2">
        <h2 className="text-sm font-bold text-red-300">START PRICE ₦3000</h2>
        <h3 className="text-xl font-bold">Chicken Sandwich Combo</h3>
        <p className="text-md font-semibold text-amber-400">Limited Time Offer</p>
        <button
          onClick={() => {
    addToCart({
      name: "Chicken Sandwich Combo",
      price: 3000,
      img: sandwich, 
    });
    toast.success("Chicken Sandwich Combo");
  }}
          className="px-5 py-2 bg-red-500 text-white rounded-full font-bold hover:bg-black transition duration-300"
        >
          ORDER NOW
        </button>
      </div>

      {/* Image */}
      <img src={sandwich} alt="Chicken Sandwich" className="w-32 h-32 object-cover rounded-md mt-6 sm:mt-0 sm:ml-4" />
    </div>

    {/* 🍗 Card 3 – Spicy Fried Chicken */}
    <div className="bg-red-600 text-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden"
      style={{ backgroundImage: `url(${back3})` }}>

      {/* Badge */}
      <div className="absolute top-4 right-4 z-10 animate-bounce">
        <div className="bg-amber-500 text-black font-bold text-xs px-3 py-1 rounded-full shadow-md">
          50% OFF
        </div>
      </div>

      {/* Text */}
      <div className="sm:w-2/3 text-center sm:text-left space-y-2">
        <h2 className="text-sm font-bold">START PRICE ₦5500</h2>
        <h3 className="text-xl font-bold">Spicy Fried Chicken</h3>
        <p className="text-md font-semibold">Limited Time Offer</p>
        <button
           onClick={() => {
    addToCart({
      name: "Spicy Fried Chicken",
      price: 5500,
      img: friedChickenImage, 
    });
    toast.success("Spicy Fried Chicken");
  }}
          className="px-5 py-2 bg-red-500 text-white rounded-full font-bold hover:bg-black transition duration-300"
        >
          ORDER NOW
        </button>
      </div>

      {/* Image */}
      <img src={friedChickenImage} alt="Fried Chicken" className="w-32 h-32 object-cover rounded-md mt-6 sm:mt-0 sm:ml-4" />
    </div>

  </div>
</section>

<section className="bg-amber-100 py-20 px-6 mx-4 lg:mx-20 my-10 sm:px-12 md:px-20 lg:px-32 rounded-2xl" data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1200">
  <div className="max-w-5xl mx-auto text-center space-y-6">

    {/* Decorative Title */}
    <div className="flex justify-center items-center gap-3 mb-4">
      <span className="text-amber-600"><FaBowlFood /></span>
      <h2 className="text-xl sm:text-2xl font-bold text-amber-600">ABOUT US</h2>
      <span className="text-amber-600"><FaBowlFood /></span>
    </div>

    {/* Heading & Subheading */}
    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
      Variety of Flavours from American Cuisine
    </h1>
    <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
      We bring you comfort food reimagined — classics inspired by American kitchens and seasoned with our own twist. Sit back, relax, and taste the goodness.
    </p>

    {/* View Menu Button */}
    <a href="/menu">
      <button className="mt-6 px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold text-lg rounded-full inline-flex items-center transition">
        VIEW MENU <span className="ml-2 text-xl"><FaArrowRight /></span>
      </button>
    </a>
    
  </div>
</section>

<section className="py-20 px-6 bg-white" data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1200">
  <div className="flex flex-col justify-center items-center pb-16 text-center">
  <p className="text-2xl sm:text-1xl font-extrabold text-amber-600 flex items-center gap-4">
    <FaBowlFood />
    Our Chefs
    <FaBowlFood />
  </p>

  <p className="mt-4 text-4xl sm:text-2xl font-bold text-gray-900">
    Meet Our Culinary Experts
  </p>
</div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10" data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1200">

    {/* Team Card */}
    {team.map((member) => (
      <div key={member.name} className="group relative bg-gray-100 rounded-xl shadow-lg overflow-hidden">
        {/* Chef Image */}
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-100 object-cover rounded-xl transition duration-300"
        />

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 bg-white py-4 px-6 text-center">
          <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.title}</p>
        </div>

        {/* Red Hover Slide-Out */}
        <div className="absolute top-0 right-[-100px] group-hover:right-0 transition-all duration-500 bg-red-600 text-white p-4 h-full flex flex-col justify-center items-center space-y-4 rounded-l-xl shadow-xl z-10">
          {/* Social Icons */}
          <div className="flex flex-col space-y-3 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
          </div>

          {/* Share Button */}
          <button className="mt-4 px-4 py-2 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition">
            Share
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
</div>
    )
}