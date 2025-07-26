import dish1 from "./tiger.jpg";
import dish2 from "./pear.jpg";
import dish3 from "./puff.jpg";
import dish4 from "./ginger.jpg";
import dish5 from "./turkey.jpg";
import dish6 from "./mango.jpg";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

interface InfoPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function LastIcon({ open, onClose }: InfoPanelProps) {
  return (
    <div style={{ border: "2px" }}>
    <div
     className={`fixed top-0 right-0 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
  open ? 'translate-x-0' : 'translate-x-full'
} w-full sm:w-[380px] overflow-y-auto`}
    >
      <div className="p-4 sm:p-6 flex flex-col gap-y-4">

        {/* Close Button Top-Right */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-white hover:text-red-500 text-2xl font-bold bg-amber-500 rounded-full px-3"
          >
            ×
          </button>
        </div>

        {/* Header */}
        <h2 className="text-xl font-bold text-red-500">Urban Fork Help Desk</h2>
        <p className="text-sm text-gray-700">
          Need help with an order, reservation, or something else? We're here for you!
        </p>

        {/* Visit Info */}
        <div className="border-t border-gray-400 pt-4">
          <h4 className="font-semibold text-gray-800">Visit Us</h4>
          <p className="text-sm">Anthony Village Road, Lagos, Nigeria</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-4 py-4">
          {[dish1, dish2, dish3, dish4, dish5, dish6].map((dish, index) => (
            <img
              key={index}
              src={dish}
              alt={`Dish ${index + 1}`}
              className="rounded-md object-cover h-28 w-full"
            />
          ))}
        </div>

        {/* Contact Info */}
        <div className="px-6 py-4 text-left text-gray-800 sm:px-6">
          <h2 className="text-lg font-bold text-red-500 mb-2">Contact Info</h2>
          <p className="text-sm py-1">
            <strong className="text-[18px]">Address:</strong> Anthony Village Road, Lagos, Nigeria
          </p>
          <p className="text-sm py-1">
            <strong className="text-[18px]">Email:</strong> urbanforkrestaurant@gmail.com
          </p>
          <p className="text-sm py-1">
            <strong className="text-[18px]">Hours:</strong> Mon–Fri, 09am–05pm
          </p>
          <p className="text-sm py-1">
            <strong className="text-[18px]">Phone:</strong> +234 800 123 4567
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="px-6 pb-4">
          <Link to="/menu">
            <button className="w-full py-2 text-sm sm:text-base bg-red-500 hover:bg-red-700 text-white rounded font-semibold transition">
              ORDER NOW
            </button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 pt-2 pb-6 text-red-500 text-xl">
          {[FaFacebookF, FaInstagram, FaXTwitter, FaPinterestP].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
</div>

  );
}