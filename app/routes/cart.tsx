// src/pages/CartPage.tsx
import { Link } from "react-router";
import { useCart } from "../routes/cartcontext";

export default function Cart() {
  const { cart, updateQuantity } = useCart();
  const total = cart.reduce((sum, ci) => sum + ci.price * ci.quantity, 0);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((ci) => (
            <div
              key={ci.name}
              className="flex items-center bg-white p-4 rounded-lg shadow"
            >
              <img
                src={ci.img}
                alt={ci.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h2 className="font-semibold">{ci.name}</h2>
                <p className="text-sm text-gray-500">
                  ₦{ci.price.toLocaleString()} × {ci.quantity} = ₦
                  {(ci.price * ci.quantity).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(ci.name, -1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  –
                </button>
                <span>{ci.quantity}</span>
                <button
                  onClick={() => updateQuantity(ci.name, 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ₦{total.toLocaleString()}</p>
            <Link to="/checkout"><button className="mt-4 px-6 py-3 bg-amber-600 text-white rounded-full">
              Proceed to Checkout
            </button></Link>
          </div>
        </div>
      )}
    </div>
  );
}