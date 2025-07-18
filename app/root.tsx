import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

// import { Links, LiveReload, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { Toaster } from "react-hot-toast";

import {Link} from "react-router-dom"
import image from "../src/routes/urban fork restaurant .png";
import type { Route } from "./+types/root";
import { useState,useEffect } from "react";
import { LuBus } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
//import { BsFillCartPlusFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineTexture } from "react-icons/md";
import home1 from "../src/routes/ambiance .png";
import home2 from "../src/routes/chef.png";
import home3 from "../src/routes/hero5.png";
import "./app.css";
import { FiMapPin } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdDoubleArrow } from "react-icons/md";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { FaArrowRight } from 'react-icons/fa';
import { CartProvider } from "./routes/cartcontext";
import { CartBadge } from "./routes/cartbadge";
import LastIcon from "./routes/lasticon"




export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];



export function Layout({ children }: { children: React.ReactNode }) {
  const [query, setQuery] =useState('');
    const data =[''];
  
const [infoOpen, setInfoOpen] = useState(false);

    const filteredData=data.filter(item=>
    item.toLowerCase().includes(query.toLowerCase())
  ); 
  const [menuOpen, setMenuOpen] = useState(false);
const [homeOpen, setHomeOpen] = useState(false);

 useEffect(() => {
    // Only run on client
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({ duration: 1000 });
      });
      import('aos/dist/aos.css');
    }
  }, []);


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <CartProvider>
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 px- sm:px-8 md:px-12 py-3 bg-red-500 text-sm">
  {/* Delivery Notice & Tracking */}
  <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-x-8 gap-y-2 text-center sm:text-left">
    <p className="text-white text-sm sm:text-base">
      <span className="text-[#005F73] font-semibold pr-1">100%</span>
      Secure delivery without contacting the courier
    </p>
    <p className="flex items-center justify-center text-white text-sm sm:text-base">
      <span className="text-[#005F73] text-lg sm:text-xl pr-1">
        <LuBus />
      </span>
      Track Your Order
    </p>
  </div>

  {/* Search & Social */}
  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6 w-full sm:w-auto">
    {/* Search Field */}
    <label className="flex items-center gap-x-2 w-full sm:w-auto">
      <IoSearch className="text-lg sm:text-xl text-white" />
      <input
        className="w-full sm:w-60 border-none pl-2 py-1 bg-transparent text-white placeholder-white text-sm sm:text-base focus:outline-none"
        type="text"
        placeholder="Search ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </label>

    {/* Optional Filter List (Only on Medium Screens and Up) */}
    <ul className="hidden md:block">
      {filteredData.map((item, index) => (
        <li key={index} className="text-white text-sm">
          {item}
        </li>
      ))}
    </ul>

    {/* Social Icons */}
    <div className="flex space-x-3 bg-[#1A1A1A] text-white text-base font-bold py-2 px-4 rounded-md">
      <FaFacebookF />
      <FaInstagram />
      <FaXTwitter />
      <FaPinterestP />
    </div>
  </div>
</header>

          


       <div className="flex flex-wrap items-center justify-between mt-0 mb-0 bg-[#ca9866be] px-4 sm:px-10 lg:px-20">
  {/* Logo */}
  <img
    className="w-36 sm:w-40 lg:w-[110px] mb-3 md:mb-0"
    src={image}
    alt={image}
  />

  {/* Navigation Links (visible only on large screens) */}
  <ul className="hidden lg:flex space-x-6 flex-wrap items-center">
    {/* Home */}
    <li
      className="relative group flex items-center text-sm lg:text-[17px] font-medium space-x-1 cursor-pointer text-white"
      onClick={() => setHomeOpen(!homeOpen)}
    >
      <Link to="/mainpage" className="relative text-black hover:text-red-500">
        Home
        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-300 group-hover:w-full transition-all duration-300"></span>
      </Link>
      <IoMdArrowDropdown
        className={`text-base lg:text-[18px] text-black hover:text-red-500 transition-transform duration-300 ${homeOpen ? 'rotate-180' : 'group-hover:rotate-180'}`}
      />
      {/* Home Dropdown */}
      <div
        className={`absolute top-full left-0 mt-4 ${homeOpen ? 'flex' : 'hidden group-hover:flex'} gap-2 bg-[#0060734b] p-4 shadow-lg rounded-lg z-50 transition-all duration-300 w-full lg:w-[260px] h-auto lg:h-80 flex-wrap justify-center items-center`}
      >
        {[home1, home2, home3].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`home-${idx}`}
            className="w-full sm:w-1/2 lg:w-1/3 object-cover rounded-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </li>

    {/* Menu */}
    <li
      className="relative group flex items-center text-sm lg:text-[17px] font-medium space-x-1 cursor-pointer"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <Link to="/menu" className="relative text-black hover:text-red-500">
        Menu
        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-300 group-hover:w-full transition-all duration-300"></span>
      </Link>
      <IoMdArrowDropdown
        className={`text-base lg:text-[18px] text-black hover:text-red-500 transition-transform duration-300 ${menuOpen ? 'rotate-180' : 'group-hover:rotate-180'}`}
      />
      {/* Menu Dropdown */}
      <ul
        className={`absolute top-full left-0 mt-4 ${menuOpen ? 'flex' : 'hidden group-hover:flex'} flex-wrap gap-4 bg-[#0060734b] backdrop-blur-md p-4 rounded-lg shadow-lg z-50 transition-all duration-300 w-full lg:w-[800px] h-auto lg:h-[200px] justify-center items-center`}
      >
        {['Starter', 'Main', 'Desserts', 'Drinks'].map((item, idx) => (
          <li
            key={idx}
            className="w-full sm:w-36 lg:w-48 h-20 lg:h-32 flex items-center justify-center bg-white/80 text-black rounded-md font-semibold text-sm lg:text-lg hover:scale-105 transition-transform"
          >
            <Link
              to={`/menu#${item.toLowerCase()}`}
              className="w-full h-full flex items-center justify-center"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </li>

    {/* Simple Links */}
    {[
      { label: 'Reservation', to: '/reservation' },
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contactus#contact' },
    ].map((navItem, i) => (
      <li
        key={i}
        className="flex items-center justify-center text-sm lg:text-[17px] relative hover:text-red-500 font-medium space-x-1 group"
      >
        <Link to={navItem.to}>{navItem.label}</Link>
        <IoMdArrowDropdown className="text-base lg:text-[18px] transition-transform duration-300 group-hover:rotate-180" />
        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-300 group-hover:w-full transition-all duration-300"></span>
      </li>
    ))}
  </ul>

  {/* Right-side Icons & Button (visible across all screens) */}
  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-x-4 mt-4 sm:mt-0">
    <Link to="/contactus">
      <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-5 sm:px-6 rounded-md text-sm sm:text-base font-semibold transition transform hover:scale-105">
        Contact Us
      </button>
    </Link>

    <div className="flex items-center space-x-4">
      <CartBadge />
      <button onClick={() => setInfoOpen(true)}>
        <MdOutlineTexture className="text-white hover:text-red-500 transition duration-200 text-lg sm:text-[26px]" />
      </button>
      <LastIcon open={infoOpen} onClose={() => setInfoOpen(false)} />
    </div>
  </div>
</div>
      

        {children}
      <footer className="bg-[#03252c] pt-10 text-white" data-aos="fade-up">
  {/* Top Contact Bar */}
  <div className="bg-amber-600 rounded-2xl shadow-lg max-w-7xl mx-4 sm:mx-10 md:mx-20 px-4 sm:px-8 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">
    {/* Address */}
    <div className="flex items-center gap-4 text-center lg:text-left">
      <div className="bg-amber-50 text-amber-600 text-2xl sm:text-3xl p-3 rounded-full">
        <FiMapPin />
      </div>
      <div className="text-sm sm:text-base font-semibold">
        <p>Address</p>
        <p className="text-white">4648 Rocky Road, Philadelphia</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center gap-4 text-center lg:text-left">
      <div className="bg-amber-50 text-amber-600 text-2xl sm:text-3xl p-3 rounded-full">
        <IoIosMail />
      </div>
      <div className="text-sm sm:text-base font-semibold">
        <p>Send Email</p>
        <p className="text-white">urbanforkrestaurant@gmail.com</p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-4 text-center lg:text-left">
      <div className="bg-amber-50 text-amber-600 text-2xl sm:text-3xl p-3 rounded-full">
        <BiSolidPhoneCall />
      </div>
      <div className="text-sm sm:text-base font-semibold">
        <p>Call Emergency</p>
        <p className="text-white">+234 907 920 7010</p>
      </div>
    </div>
  </div>

  {/* Footer Content */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-10 lg:px-20 py-16">
    {/* Logo & Description */}
    <div>
      <img src={image} alt="Urban Fork logo" className="w-32 sm:w-44 bg-amber-100 rounded-md" />
      <p className="pt-4 text-sm sm:text-base text-gray-300">
        Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis.
      </p>
      <ul className="flex gap-3 mt-4">
        {[FaFacebookF, FaInstagram, FaXTwitter, FaPinterestP].map((Icon, i) => (
          <li key={i} className="p-2 bg-white text-amber-600 rounded-full hover:bg-red-500 hover:text-white transition">
            <Icon />
          </li>
        ))}
      </ul>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
      <ul className="space-y-4 text-sm sm:text-base mt-3">
        {["About Us", "Our Gallery", "Contact Us", "FAQ'S"].map((item, i) => (
          <li key={i} className="flex items-center gap-2 hover:text-red-500 transition-transform duration-300 hover:translate-x-2">
            <MdDoubleArrow /> {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Our Menu */}
    <div>
      <h3 className="text-lg sm:text-xl font-bold mb-4">Our Menu</h3>
      <ul className="space-y-4 text-sm sm:text-base mt-3">
        {["Starter", "Main", "Desserts", "Drinks"].map((item, i) => (
          <li key={i} className="flex items-center gap-2 hover:text-red-500 transition-transform duration-300 hover:translate-x-2">
            <Link to={`/menu#${item.toLowerCase()}`} className="flex items-center">
              <MdDoubleArrow /> {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact & Subscription */}
    <div>
      <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Us</h3>
      <p className="text-gray-400 text-sm sm:text-base mb-2 mt-3">
        Monday–Friday: <span className="text-amber-500">8am–9pm</span>
      </p>
      <p className="text-gray-400 text-sm sm:text-base mb-4">
        Saturday–Sunday: <span className="text-amber-500">8am–6pm</span>
      </p>

      <div className="relative max-w-md my-4">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-3 sm:py-4 pr-14 rounded-full bg-white text-black focus:outline-none text-sm sm:text-base"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-6 -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-white p-2 px-3 rounded-xl"
        >
          <FaArrowRight />
        </button>
      </div>

      <label className="text-sm sm:text-base text-gray-300 flex items-center gap-2">
        <input type="checkbox" className="accent-amber-500" />
        I agree to the <span className="underline text-white">Privacy Policy</span>
      </label>
    </div>
  </div>

  <div className="h-1 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 opacity-30 mb-2"></div>

  <div className="border-t border-gray-700 text-center py-4 text-sm sm:text-base text-gray-400">
    © {new Date().getFullYear()} Urban Fork Restaurant. All rights reserved.
  </div>
</footer>

</CartProvider>
<Toaster position="top-center" reverseOrder={false} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
