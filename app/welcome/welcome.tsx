import { FaArrowRight } from "react-icons/fa";
import App from "src/routes/App";
import Navbar from "src/routes/Navbar";
import MainPage from "../mainpage";

import { CartProvider } from "~/routes/cartcontext";

export function Welcome() {
  return (
    <CartProvider>
      <Navbar />
      <App />
      <MainPage/>
    </CartProvider>
  );
}
