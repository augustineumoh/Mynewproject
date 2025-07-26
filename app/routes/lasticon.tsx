import dish1 from "./tiger.jpg";
import dish2 from "./pear.jpg";
import dish3 from "./puff.jpg";
import dish4 from "./ginger.jpg";
import dish5 from "./turkey.jpg";
import dish6 from "./mango.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router";
// import { MdOutlineTexture } from "react-icons/md";


interface InfoPanelProps {
  open: boolean;
  onClose: () => void;
}


export default function LastIcon({ open, onClose }: InfoPanelProps) {
  return (
    <div className={`fixed right-0 top-0 w-[380px] max-w-full h-screen overflow-y-auto shadow-lg px-4 py-6 bg-white transition-all duration-300 z-50 ${open ? 'right-0' : 'right-[-100%]'}`}>
      <div className="p-4 flex flex-col gap-y-4">
        <button onClick={onClose} className="self-end text-white hover:text-red-500 text-1xl font-bold bg-amber-500 rounded-full px-3">×</button>

        <h2 className="text-xl font-bold text-red-500">Urban Fork Help Desk</h2>
        <p className="text-sm text-gray-700">Need help with an order, reservation, or something else? We're here for you!</p>

        <div className="border-t border-gray-400 pt-4">
          <h4 className="font-semibold text-gray-800">Visit Us</h4>
          <p className="text-sm">Anthony Village Road, Lagos, Nigeria</p>
        </div>

        <div className="grid grid-cols-3 gap-2 px-6 py-4">
          <img src={dish1} className="rounded-md object-cover h-28 w-full" />
          <img src={dish2} className="rounded-md object-cover h-28 w-full" />
          <img src={dish3} className="rounded-md object-cover h-28 w-full" />
          <img src={dish4} className="rounded-md object-cover h-28 w-full" />
          <img src={dish5} className="rounded-md object-cover h-28 w-full" />
          <img src={dish6} className="rounded-md object-cover h-28 w-full" />
        </div>

        <div className="px-6 py-4 text-left text-gray-800 sm:px-6">
          <h2 className="text-lg font-bold  sm-text-lg text-red-500 mb-2">Contact Info</h2>
          <p className="text-sm py-1"><strong className="text-[18px]">Address:</strong> Anthony Village Road, Lagos, Nigeria</p>
          <p className="text-sm py-1"><strong className="text-[18px]">Email:</strong> urbanforkrestaurant@gmail.com</p>
          <p className="text-sm py-1"><strong className="text-[18px]">Hours:</strong> Mon–Fri, 09am–05pm</p>
          <p className="text-sm py-1"><strong className="text-[18px]">Phone:</strong> +234 800 123 4567</p>
        </div>

        <div className="px-6 pb-4">
          <Link to="/menu">
          <button className="w-full py-2 text-sm sm:text-base bg-red-500 hover:bg-red-700 text-white rounded font-semibold transition">
            ORDER NOW
          </button></Link>
        </div>

        <div className="flex justify-center gap-4 pt-2 pb-6 text-red-500 text-xl">
          <a href="#" className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition"><FaFacebookF /></a>
          <a href="#" className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition"><FaInstagram /></a>
          <a href="#" className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition"><FaXTwitter /></a>
          <a href="#" className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition"><FaPinterestP /></a>
        </div>
      </div>
    </div>
  );
}