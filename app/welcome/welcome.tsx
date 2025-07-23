import { FaArrowRight } from "react-icons/fa";
import MainPage from "../mainpage";
import { CartProvider } from "~/routes/cartcontext";

export function Welcome() {
  return (
    <CartProvider>
      <MainPage/>
    </CartProvider>
  );
}
