import { createContext, useContext, useState, useEffect, } from "react";
import type { ReactNode } from "react";


type CartItem = {
  name: string;
  price: number;
  img: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  updateQuantity: (name: string, change: number) => void;
  clearCart: () => void; // ✅ new function!
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Load cart from localStorage on startup
  useEffect(() => {
    const stored = localStorage.getItem("urbanCart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("urbanCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const found = prevCart.find((ci) => ci.name === item.name);
      if (found) {
        return prevCart.map((ci) =>
          ci.name === item.name ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (name: string, change: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((ci) =>
          ci.name === name ? { ...ci, quantity: ci.quantity + change } : ci
        )
        .filter((ci) => ci.quantity > 0);
    });
  };

  // ✅ Clears the cart after checkout
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}