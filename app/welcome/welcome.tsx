import { FaArrowRight } from "react-icons/fa";
import MainPage from "../mainpage";
import Hero from "../routes/hero";
import { CartProvider } from "~/routes/cartcontext";

export function Welcome() {
  return (
    <CartProvider>
      <Hero/>
      <MainPage/>
    </CartProvider>
  );
}
