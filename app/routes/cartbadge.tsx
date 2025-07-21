import { useCart } from "../routes/cartcontext";
import { Link, useLocation } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useState, useEffect } from "react";

export function CartBadge() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleCart = () => setOpen((prev) => !prev);

  return (
    <div className="relative">
      <button onClick={toggleCart} className="relative">
        <BsFillCartPlusFill className="text-white hover:text-red-500 transition duration-200 text-[26px]" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute -right-10 mt-4 w-80 bg-white border rounded shadow-xl z-50 text-sm border-gray-300">
          <div className="p-3 border-b font-semibold text-gray-800 border-gray-300">
            Your Cart ({cartCount})
          </div>

          {/* Cart items */}
          <div className="max-h-52 overflow-y-auto divide-y divide-gray-100">
            {cart.length === 0 ? (
              <div className="p-3 text-gray-500">Your cart is empty.</div>
            ) : (
              cart.map((item) => (
                <div key={item.name} className="flex justify-between items-center px-4 py-3">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      {item.quantity} × ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-red-500">
                    ₦{(item.quantity * item.price).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Total */}
          {cart.length > 0 && (
            <div className="px-4 py-3 text-right font-semibold text-gray-800 border-t border-gray-300">
              Total: <span className="text-red-500 font-bold">₦{cartTotal.toLocaleString()}</span>
            </div>
          )}

          {/* Action buttons */}
          <div className="border-t border-gray-300 p-3 space-y-2">
            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="block w-full text-center border py-2 rounded text-red-500 hover:bg-red-100 transition"
            >
              View Cart
            </Link>
            <Link
              to="/checkout"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Checkout
            </Link>
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="block w-full text-center border py-2 rounded text-gray-600 hover:bg-gray-100 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}