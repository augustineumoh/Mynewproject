import menu from "./menu 1.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";






export default function  Reservation() {
   const [formData, setFormData] = useState({
    name: "", email: "", phone: "", date: "", time: "",
    guests: "", message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Reservation:", formData);

    toast.success("Reservation submitted successfully 💌");

    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
  };


    return (
  <div>

    {/* Hero Section */}
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${menu})` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white drop-shadow-md">
          Pull Up a Chair, We’ve Got Flavor
        </h1>
        <p className="text-lg sm:text-xl text-amber-300 max-w-xl mx-auto font-medium">
          Bring your friends, bring your appetite — Urban Fork is serving good vibes and unforgettable dishes daily.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full shadow-lg transition-all"
        >
          Reserve Now
        </button>
      </div>
    </div>

    {/* Contact + Reservation Section */}
    <section
      className="flex flex-col lg:flex-row px-10 lg:px-20 py-20 gap-12 bg-gradient-to-l from-orange-200 to-green-100"
      data-aos="fade-up"
    >
      {/* Contact Info */}
      <div className="flex-1 space-y-6 pt-35">
        <h2 className="text-3xl font-bold text-amber-500">Get in Touch</h2>
        <p className="text-gray-700">
          We’d love to hear from you. Whether you’re booking for a special night or have questions about our dishes.
        </p>

        <div className="space-y-3">
          <div className="flex gap-40 pt-7">

          <div>
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <p className="text-gray-600">+234 907 920 7010</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">urbanforkrestaurant@gmail.com</p>
          </div>
          </div>

          <div className="flex gap-11 pt-7">

          <div>
            <h3 className="font-semibold text-gray-900">Address</h3>
            <p className="text-gray-600">Anthony Village Road, Lagos State</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-amber-600 text-xl ">
              <ul className="flex space-x-4 text-amber-600 text-xl ">
              <li className="p-2 bg-white text-amber-600 rounded-full hover:bg-red-500 hover:text-white transition">
          <FaFacebookF />
        </li>
        <li className="p-2 bg-white text-amber-600 rounded-full hover:bg-red-500 hover:text-white transition">
          <FaInstagram />
        </li>
        <li className="p-2 bg-white text-amber-600 rounded-full hover:bg-red-500 hover:text-white transition">
          <FaXTwitter />
        </li>
        <li className="p-2 bg-white text-amber-600 rounded-full hover:bg-red-500 hover:text-white transition">
          <FaPinterestP />
        </li>
        </ul>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Reservation Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="flex-1 bg-white p-8 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-red-500 mb-4">
          Reserve Your Table
        </h2>

        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name"
          required className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded focus:ring-amber-500" />
        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address"
          required className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded focus:ring-amber-500" />
        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number"
          required className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded focus:ring-amber-500" />
        <input name="date" value={formData.date} onChange={handleChange} type="date"
          required className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded focus:ring-amber-500" />
        <input name="time" value={formData.time} onChange={handleChange} type="time"
          required className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded focus:ring-amber-500" />

        <select name="guests" value={formData.guests} onChange={handleChange}
          required className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded focus:ring-amber-500">
          <option value="">Number of Guests</option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4+">4+ Guests</option>
        </select>

        <textarea name="message" value={formData.message} onChange={handleChange}
          placeholder="Special Requests (optional)" rows={4}
          className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-800 rounded resize-none focus:ring-amber-500" />

        <button type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition">
          Submit Reservation
        </button>
      </motion.form>
    </section>
  </div>
);
}