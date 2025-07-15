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

      {/* Delivery Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <input
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <select
          name="payment"
          value={form.payment}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          <option value="card">💳 Card Payment</option>
          <option value="cash">💵 Cash on Delivery</option>
        </select>
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Confirm Order
        </motion.button>
      </form>
    </motion.div>
  );
}