import menu from "./menu 1.jpg";
import suya from "./gallery1.jpg";
import turkey from "./gallery2.jpg";
import fruit from "./gallery3.jpg";
import ginger from "./ginger.jpg";
import puff from "./gallery5.jpg";
import chef from "./gallery6.jpg";
import salad from "./gallery7.jpg";
import roof from "./gallery 8.jpg";
import bar from "./gallery9.jpg"

export default function Gallery() {
  const galleryImages = [
    { img: suya, alt: "Spicy Chicken Dish" },
    { img: turkey, alt: "Grilled Turkey" },
    { img: fruit, alt: "Fruit Combo" },
    { img: ginger, alt: "Ginger Drink" },
    { img: puff, alt: "Puff Pastry" },
    { img: chef, alt: "Chef in Action" },
    {img: salad, alt:"Special Salad" },
    {img:roof, alt:"Roof Top"},
    {img:bar, alt:"Bar Section"},
  ];

  return (
    <div className="bg-white text-black w-full overflow-hidden">
      {/* 🔻 Banner Section */}
       <div className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${menu})`}}>
 {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0"></div>



  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Urban Fork Gallery</h1>
    
  </div>
  </div>

      {/* 🖼️ Gallery Section */}
      <section className="px-4 py-12 md:px-16 lg:px-20" data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1200">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-6">Signature Moments</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1200">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-md shadow-lg cursor-pointer animate-fadeIn"
            >
              <img
                src={img.img}
                alt={img.alt}
                className="w-full h-[270px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute bottom-0 left-0 w-full p-2 text-sm text-white font-semibold bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}