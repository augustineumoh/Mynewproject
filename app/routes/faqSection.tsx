import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import menu from "./menu 1.jpg";
import faq from "./faq image.png";
import { FaBowlFood } from "react-icons/fa6";

const faqs = [
  {
    question: "Do I need a reservation to dine at Urban Fork?",
    answer: "While walk-ins are welcome, we recommend reservations during peak hours to guarantee seating and minimize wait time."
  },
  {
    question: "Can I customize my order for dietary needs?",
    answer: "Absolutely! We offer vegetarian options and can accommodate dietary preferences—just let us know when placing your order."
  },
  {
    question: "Is delivery available outside Lagos?",
    answer: "Currently, we deliver within Lagos only, but expansion is on the horizon. Stay tuned!"
  },
  {
    question: "Do you host private events or catering?",
    answer: "Yes! From birthday dinners to corporate tastings, Urban Fork offers tailored catering packages. Contact us to plan your flavor-filled event."
  },
  {
    question: "How can I give feedback or share my experience?",
    answer: "We love hearing from you! Use our Contact Us page or leave a review to let us know how we did."
  },
];





export default function faqSection(){
    const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

    return(
        <div className="w-full">
      {/* 🧠 Banner Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${menu})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white drop-shadow">
            Curious About Urban Fork? You're Not Alone.
          </h1>
          <p className="text-lg sm:text-xl text-red-500 max-w-xl mx-auto drop-shadow">
            We're a community-first kitchen, and every guest brings a new question to the table. Here's our best attempt to answer yours.
          </p>
        </div>
      </div>

      <section className="bg-gradient-to-l from-orange-100 to-green-100 sm:px-12 py-16 max-w-8xl lg:px-20">
        <div className="flex flex-col justify-center items-center">
           <h2 className="font-bold text-red-600 uppercase pb-3 flex items-center gap-3 text-[20px]">
        <FaBowlFood /> FAQ'S <FaBowlFood />
      </h2>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h3> 
        </div>
        
  <div className="flex flex-col sm:flex-row items-center gap-4">
    
    {/* 🍔 Left Side - Image */}
    <div className="flex-1 flex justify-center w-full sm:justify-start">
      <img src={faq} alt="FAQ Visual" className="w-full sm:w-64 md:w-72 object-contain" />
    </div>

    {/* ❓ Right Side - FAQ Content */}
    <div className="flex-1 ">
      

      <div className="space-y-4 w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 bg-gray-100 hover:bg-red-100 transition"
            >
              <span>{faq.question}</span>
              <FaChevronDown className={`transform transition duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-600 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </div>

    )
}