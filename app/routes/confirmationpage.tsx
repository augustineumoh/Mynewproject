// routes/ConfirmationPage.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ConfirmationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-20 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-500 mb-4">🎉 Order Confirmed!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for dining with Urban Fork!<br />
          Your meal is being prepared with love. ❤️
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Estimated delivery time: <span className="font-semibold text-gray-700">25–35 minutes</span>
        </p>
        <Link
          to="/menu"
          className="inline-block px-6 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition"
        >
          Back to Menu
        </Link>
      </div>
    </motion.div>
  );
}