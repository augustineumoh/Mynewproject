// routes/CheckoutPage.tsx
import { useCart } from "./cartcontext";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function CheckoutPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email:"",
    street:"",
    city:"",
    state:"",
    country:"",
    notes:"",
    payment: "card",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();


 const { clearCart } = useCart();
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  toast.success(`Order placed for ₦${total.toLocaleString()}!`);
  clearCart(); // ✅ this should clear the cart
  setTimeout(() => navigate("/confirmationpage"), 1500);
};



  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 mb-20 border border-gray-200"
    >
      <h1 className="text-3xl font-bold text-red-500 mb-6">🧾 Checkout</h1>

      {/* Cart Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Order</h2>
        <div className="divide-y divide-gray-200">
          {cart.map((item) => (
            <div key={item.name} className="flex justify-between py-2 text-gray-700">
              <span>{item.name} × {item.quantity}</span>
              <span>₦{(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
        </div>
        <p className="text-lg font-bold text-right mt-4">
          Total: ₦{total.toLocaleString()}
        </p>
      </div>

     <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto px-4 sm:px-6 py-8 bg-white rounded-lg shadow-md">
  {/* Full Name */}
  <input
    name="name"
    placeholder="Full Name"
    value={form.name}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
  />

  {/* Email Address */}
  <input
    name="email"
    placeholder="Email Address"
    value={form.email}
    onChange={handleChange}
    type="email"
    required
    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg"
  />

  {/* Phone Number */}
  <input
    name="phone"
    placeholder="Phone Number"
    value={form.phone}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg"
  />

  {/* Street Address */}
  <input
    name="street"
    placeholder="Street Address"
    value={form.street}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg"
  />

  {/* City, State */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input
      name="city"
      placeholder="City"
      value={form.city}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg"
    />
    <input
      name="state"
      placeholder="State"
      value={form.state}
      onChange={handleChange}
      required
      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg"
    />
  </div>

  {/* Country */}
  <input
    name="country"
    placeholder="Country"
    value={form.country}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg"
  />

  {/* Delivery Notes (Optional) */}
  <textarea
    name="notes"
    placeholder="Delivery Notes (optional)"
    value={form.notes}
    onChange={handleChange}
    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg resize-none"
  />

  {/* Payment Options */}
  <select
    name="payment"
    value={form.payment}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg"
  >
    <option value="card">💳 Card Payment</option>
    <option value="cash">💵 Cash on Delivery</option>
    <option value="bank">🏦 Bank Transfer</option>
    <option value="wallet">👛 Pay with Wallet</option>
    <option value="ussd">🧾 USSD</option>
    <option value="pickup">🏃 Pay on Pickup</option>
  </select>

  {/* Submit Button */}
  <motion.button
    whileTap={{ scale: 0.97 }}
    type="submit"
    className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
  >
    Confirm Order
  </motion.button>
</form>
    </motion.div>
  );
}