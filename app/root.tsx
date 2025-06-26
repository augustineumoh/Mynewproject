import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import {Link} from "react-router-dom"
import image from "../src/routes/urban fork restaurant .png";
import type { Route } from "./+types/root";
import { useState } from "react";
import { LuBus } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineTexture } from "react-icons/md";
import home1 from "../src/routes/ambiance .png";
import home2 from "../src/routes/chef.png";
import home3 from "../src/routes/hero5.png";
import "./app.css";

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
  
    const filteredData=data.filter(item=>
    item.toLowerCase().includes(query.toLowerCase())
  ); 
  const [menuOpen, setMenuOpen] = useState(false);
const [homeOpen, setHomeOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
         <header className="flex justify-between items-center space-x-5 mt-0 mb-0 bg-[#005F73] text-sm">
          <div className="flex pl-20 gap-x-7">
            <p className="gap-x-6 text-white"><span className="text-[#F4A50A] pr-1">100%</span>Secure delivery without contacting the courier</p>
            <p className="items-center justify-center flex text-white text-sm"><span className="text-[#F4A50A] text-[20px] pr-1"><LuBus /></span>Track Your Order</p>
          </div>
          <div className="flex justify-center">
            <label className="flex items-center gap-x-1 " ><IoSearch className="text-[20px] text-white"/><input className="border-none pl-2 focus:outline-none text-white text-sm" type="text" placeholder="Search ..." value={query} onChange={(e) =>setQuery(e.target.value)}
            /></label>
            
            <ul>
              {filteredData.map((item, index) =>(
                <li key={index}>{item}</li>
              )
            )}
            </ul>
          
          <div className="flex space-x-6 bg-[#1A1A1A] text-white text-[16px] font-bold mt-0 pt-4 pb-4 pr-25 pl-6">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaPinterestP />
          </div>
          </div>
        </header>
        <div className="flex justify-between items-center mt-0 mb-0 bg-[#ca9866be]">
          <img className="mt-0 mb-0 pl-15" src={image} alt={image} width={180} />
          <ul className="flex space-x-6">
          <li
      className="relative group flex items-center justify-center text-[17px] font-medium space-x-1 cursor-pointer text-white"
      onClick={() => setHomeOpen(!homeOpen)}
    >
      {/* Label and Icon */}
      <span className="relative text-black hover:text-teal-500">
        Home
        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-teal-300 group-hover:w-full transition-all duration-30"></span>
      </span>
      <IoMdArrowDropdown
        className={`text-[18px] text-black hover:text-teal-500 transition-transform duration-30 ${homeOpen ? 'rotate-180' : 'group-hover:rotate-180'}`}
      />

      {/* Dropdown */}
      <div
        className={`absolute top-full left-0 mt-8 ${
          homeOpen ? 'flex' : 'hidden group-hover:flex'
        } gap-4 bg-[#0060734b] p-4 shadow-lg rounded-lg z-50 transition-all duration-300 w-260 h-80 justify-center items-center`}
      >
        <img
          src={home1}
          // width={}
          alt="Ambience"
          className=" object-cover rounded-md hover:scale-105 transition-transform duration-300 h-full w-1/3 "
        />
        <img
          src={home2}
          alt="Chef at Work"
          className="w-1/3 h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={home3}
          alt="Signature Dish"
          className=" h-full object-cover rounded-md w-1/3 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </li>

    <li
  className="relative group flex items-center justify-center text-[17px] font-medium space-x-1 cursor-pointer"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {/* Label and Dropdown Icon */}
  <Link to='/menu' className="relative text-black hover:text-teal-500">
    Menu
    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
  </Link>
  <IoMdArrowDropdown
    className={`text-[18px] text-black transition-transform duration-300 ${
      menuOpen ? 'rotate-180' : 'group-hover:rotate-180'
    }`}
  />

  {/* Dropdown */}
  <ul
    className={`absolute top-full left-0 mt-4 ${
      menuOpen ? 'flex' : 'hidden group-hover:flex'
    } gap-4 bg-[#0060734b] backdrop-blur-md p-4 rounded-lg shadow-lg z-50 transition-all duration-300 w-[800px] h-[200px] justify-center items-center`}
  >
    {['Starter', 'Main', 'Desserts', 'Drinks'].map((item, idx) => (
      <li
        key={idx}
        className="w-48 h-32 flex items-center justify-center bg-white/80 text-black rounded-md font-semibold text-lg hover:scale-105 transition-transform"
      >
        {item}
      </li>
    ))}
  </ul>
</li>
              <li className="flex items-center justify-center text-[17px] relative hover:text-teal-500 font-medium space-x-1 group">
  <Link to="/reservation">Reservation</Link>
  <IoMdArrowDropdown className="text-[18px] transition-transform duration-300 group-hover:rotate-180" />
  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
</li>
              <li className="flex items-center justify-center text-[17px] relative hover:text-teal-500 font-medium space-x-1 group">
  <Link to="/about">About</Link>
  <IoMdArrowDropdown className="text-[18px] transition-transform duration-300 group-hover:rotate-180" />
  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
</li>
              <li className="flex items-center justify-center text-[17px] relative hover:text-teal-500 font-medium space-x-1 group">
  <span>Contact</span>
  <IoMdArrowDropdown className="text-[18px] transition-transform duration-300 group-hover:rotate-180" />
  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-teal-300 group-hover:w-full transition-all duration-300"></span>
</li>
</ul>
<button className="bg-teal-600 hover:bg-teal-500 text-white py-2 px-6 rounded-md font-semibold transition transform hover:scale-105">
  Contact Us
</button>

          <p className="pr-25 text-[26px] flex space-x-6">
          <Link to={""} className="text-white hover:text-teal-500 transition duration-200 text-[26px]">
          <i className=" text-[26px]"><BsFillCartPlusFill /></i>
          </Link>
          <Link to={""} className="text-white hover:text-teal-500 transition duration-200 text-[26px]">
          <i className=" text-[26px]"><MdOutlineTexture /></i>
          </Link>
            
          </p>
        </div>
        {children}
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
