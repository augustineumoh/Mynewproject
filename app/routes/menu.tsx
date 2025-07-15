import menu from "./menu 1.jpg"
// import jollof from "./jolly.png"
import yamBites from "./fried yam.png";
import suya from "./suya.png";
import plantain from "./plantain.png";
import pepperSoup from "./peppersoup.png";
import coconutShrimp from "./coconut shrimp.png";
import akara from "./akara.png";
import srimp from "./bur1.jpg";
import shrimp from "./shrimp.jpg";
import jollof from "./center img.png";
import asun from "./asun.png"
import efo from "./efo.png"
import grill from "./grill.png"
import ofa from "./ofa1.png"
import burger from "./buger.jpg"
import puff from "./puff.jpg"
import zobo from "./zobo.png"
import pla from "./pla.jpg"
import chin from "./chin.jpg"
import pear from "./pear.jpg"
import moi from "./moi.jpg"
import zob from "./moctail.jpg"
import chap from "./chap.jpg"
import tiger from "./tiger.jpg"
import palm from "./palm.jpg"
import ginger from "./ginger.jpg"
import mango from "./mango.jpg"
// import { useNavigate } from "react-router-dom";
import { useCart } from "../routes/cartcontext";
import toast from "react-hot-toast";







const leftItems = [
  {
    name: "Spicy Yam Bites",
    price: 2500,
    description: "Crispy yam cubes tossed in pepper sauce and garnished with onions.",
    img: yamBites,
  },
  {
    name: "Mini Suya Skewers",
    price: 3200,
    description: "Tender beef skewers marinated in our signature suya spice blend.",
    img: suya,
  },
  {
    name: "Plantain Poppers",
    price: 2000,
    description: "Sweet plantain balls stuffed with spicy minced meat.",
    img: plantain,
  },
];

const rightItems = [
  {
    name: "Pepper Soup Shots",
    price: 2800,
    description: "Mini bowls of catfish pepper soup with a fiery kick.",
    img: pepperSoup,
  },
  {
    name: "Coconut Shrimp",
    price: 3500,
    description: "Golden-fried shrimp coated in coconut flakes, served with tangy dip.",
    img: coconutShrimp,
  },
  {
    name: "Akara Sliders",
    price: 2200,
    description: "Fluffy bean cakes served with spicy mayo and pickled onions.",
    img: akara,
  },
];
const mainleftItems = [
  {
    name: "Jollof Rice Royale",
    price: 5500,
    description: "Smoky, party-style jollof rice served with grilled chicken, fried plantains, and a side of pepper sauce.",
    img: jollof,
  },
  {
    name: "Asun Pasta Fusion",
    price: 6200,
    description: "Creamy penne pasta tossed with spicy goat meat (asun), bell peppers, and a hint of suya spice.",
    img: asun,
  },
  {
    name: "Efo Riro Bowl",
    price: 5000,
    description: "Rich spinach stew simmered with assorted meats, crayfish, and palm oil.",
    img: efo,
  },
];

const mainrightItems = [
  {
    name: "Grilled Tilapia Deluxe",
    price: 8800,
    description: "Whole tilapia marinated in herbs and spices, flame-grilled and served with yam fries and pepper dip.",
    img: grill,
  },
  {
    name: "Ofada Rice & Ayamase",
    price: 4500,
    description: "Traditional ofada rice paired with green pepper stew (ayamase), assorted meats, and boiled egg.",
    img: ofa,
  },
  {
    name: "Urban Fork Signature Burger",
    price: 2200,
    description: "Juicy beef patty layered with caramelized onions, lettuce, and cheddar. Served with potato fries",
    img: burger,
  },
];

const dessertItems = [
  {
    name: "Coconut Puff Puff",
    price: 1800,
    description: "Golden puff balls drizzled with coconut glaze and a dusting of cinnamon sugar.",
    img: puff,
  },
  {
    name: "Zobo Sorbet",
    price: 2200,
    description: "A refreshing frozen treat made from hibiscus petals, infused with citrus and mint.",
    img: zobo,
  },
  {
    name: "Plantain Caramel Tart",
    price: 2500,
    description: "Buttery tart crust filled with caramelized plantains and a hint of nutmeg.",
    img: pla,
  },
  {
    name: "Chin Chin Cheesecake Bites",
    price: 2000,
    description: "Mini cheesecake squares with a crunchy chin chin crust and creamy vanilla filling.",
    img: chin,
  },
  {
    name: "Palm Wine Poached Pear",
    price: 2800,
    description: "Sweet pears gently poached in spiced palm wine, served with a scoop of vanilla cream.",
    img: pear,
  },
  {
    name: "Chocolate Moi Moi",
    price: 2300,
    description: "A bold twist on a classic — steamed chocolate pudding with a silky, rich texture.",
    img: moi,
  },
];

const drinkItems = [
  {
    name: "Mugtail",
    price: 1200,
    description: "A bold, house-crafted mocktail served in a frosted mug — fruity, fizzy, and unforgettable.",
    img: zob,
  },
  {
    name: "Chapman Classic",
    price: 1500,
    description: "A bold blend of Angostura bitters, citrus soda, grenadine, and cucumber.",
    img: chap,
  },
  {
    name: "Tigernut Smoothie",
    price: 1800,
    description: "Creamy blend of tigernuts, dates, and coconut milk — naturally sweet and dairy-free.",
    img: tiger,
  },
  {
    name: "Palm Wine Spritz",
    price: 2000,
    description: "A sparkling twist on tradition — palm wine with lime and soda over ice.",
    img: palm,
  },
  {
    name: "Ginger Zing",
    price: 1300,
    description: "Spicy ginger drink with a splash of pineapple juice and a hint of honey.",
    img: ginger,
  },
  {
    name: "Frozen Mango Bliss",
    price: 1700,
    description: "Icy mango smoothie blended with lime and a touch of chili salt on the rim.",
    img: mango,
  },
];


export default function Menu() {
const { addToCart } = useCart();
  // const navigate = useNavigate();

  


    return(
        <div>
            <div className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${menu})`}}>
 {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0"></div>



  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Welcome to Urban Fork</h1>
    <p className="text-lg sm:text-xl text-red-500 max-w-xl mx-auto">
      Discover flavors that tell a story. Fresh, bold, unforgettable.
    </p>
    <button className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full shadow-lg transition">
      Explore Our Menu
    </button>
  </div>

                
            </div>

            <section className="bg-[#fffaf5] py-15 px-20 sm:px-12 lg:px-24">
  {/* Hero Heading */}
  <div className="text-center mb-16" data-aos="fade-down">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-600 mb-4">
      Fork Yeah! Let’s Eat.
    </h1>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Explore our signature dishes, crafted to impress and obsess.
    </p>
  </div>
</section>

<section className="py-20 px-6 sm:px-12 lg:px-24 bg-white" data-aos="fade-up" id="starter">
  <h2 className="text-3xl font-bold text-center text-amber-600 mb-12">Starters</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
    {/* Left Column */}
    <div className="space-y-8 w-90">
      {leftItems.map((item, i) => (
        <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <div className="flex items-center justify-center ">
  <img
    src={item.img}
    alt={item.name}
    className="w-50 h-40 object-cover rounded"
  />
</div>
          <div className="p-4">
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>{item.name}</span>
              <span className="text-amber-600">₦{item.price}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            <button onClick={() => {
  addToCart({
    name: item.name,
    price: item.price,
    img: item.img,
  });
  toast.success(`${item.name} added to cart!`);
}} className="mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition">
  Add to Cart
</button>


          </div>
        </div>
      ))}
    </div>

    {/* Center Image */}
    <div className="flex justify-center pt-12">
      <img
        src={shrimp}
        alt="Starter Dish"
        className="w-full max-w-sm rounded-lg shadow-lg"
      />
    </div>

    {/* Right Column */}
    <div className="space-y-8 w-90">
      {rightItems.map((item, i) => (
        <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <div className="flex items-center justify-center">
  <img
    src={item.img}
    alt={item.name}
    className="w-40 h-40 object-cover rounded"
  />
</div>
          <div className="p-4">
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>{item.name}</span>
              <span className="text-amber-600">₦{item.price}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            <button onClick={() => {
  addToCart({
    name: item.name,
    price: item.price,
    img: item.img,
  });
  toast.success(`${item.name} added to cart!`);
}} className="mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition">
  Add to Cart
</button>


          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-20 px-6 sm:px-12 lg:px-24 bg-white" data-aos="fade-up" id="main">
  <h2 className="text-3xl font-bold text-center text-amber-600 mb-12">Main Meals</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
    {/* Left Column */}
    <div className="space-y-8 w-90">
      {mainleftItems.map((item, i) => (
        <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <div className="flex items-center justify-center ">
  <img
    src={item.img}
    alt={item.name}
    className="w-50 h-40 object-cover rounded"
  />
</div>
          <div className="p-4">
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>{item.name}</span>
              <span className="text-amber-600">₦{item.price}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          <button onClick={() => {
  addToCart({
    name: item.name,
    price: item.price,
    img: item.img,
  });
  toast.success(`${item.name} added to cart!`);
}} className="mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition">
  Add to Cart
</button>



          </div>
        </div>
      ))}
    </div>

    {/* Center Image */}
    <div className="flex justify-center pt-12">
      <img
        src={srimp}
        alt="Starter Dish"
        className="w-full max-w-sm rounded-lg shadow-lg h-190"
      />
    </div>

    {/* Right Column */}
    <div className="space-y-8 w-90">
      {mainrightItems.map((item, i) => (
        <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          <div className="flex items-center justify-center">
  <img
    src={item.img}
    alt={item.name}
    className="w-40 h-40 object-cover rounded"
  />
</div>
          <div className="p-4">
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>{item.name}</span>
              <span className="text-amber-600">₦{item.price}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          <button onClick={() => {
  addToCart({
    name: item.name,
    price: item.price,
    img: item.img,
  });
  toast.success(`${item.name} added to cart!`);
}} className="mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition">
  Add to Cart
</button>


          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#fffaf5]" data-aos="fade-up" id="desserts">
      <h2 className="text-3xl font-bold text-center text-amber-600 mb-12">Desserts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dessertItems.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <p className="text-amber-600 font-bold mt-2">₦{item.price}</p>
           <button onClick={() => {
  addToCart({
    name: item.name,
    price: item.price,
    img: item.img,
  });
  toast.success(`${item.name} added to cart!`);
}} className="mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition">
  Add to Cart
</button>


            </div>
          </div>
        ))}
      </div>
    </section>


    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white" data-aos="fade-up" id="drinks">
      <h2 className="text-3xl font-bold text-center text-amber-600 mb-12">Drinks & Juices</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {drinkItems.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <p className="text-amber-600 font-bold mt-2">₦{item.price}</p>
            <button onClick={() => {
  addToCart({
    name: item.name,
    price: item.price,
    img: item.img,
  });
  toast.success(`${item.name} added to cart!`);
}} className="mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition">
  Add to Cart
</button>


            </div>
          </div>
        ))}
      </div>
    </section>

        </div>
    )
  }