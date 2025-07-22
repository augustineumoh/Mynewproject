import menu from "./menu 1.jpg";
import { SlLocationPin } from "react-icons/sl";
import { IoIosMailOpen } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FaArrowRight } from 'react-icons/fa';
import turkey from "./turkey.jpg";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";



export default function contactus(){


  const { register, handleSubmit, formState: { errors }, reset } = useForm();

const onSubmit = (data:any) => {
  console.log(data);
  toast.success("Message sent successfully 💌");
  reset();
};

    return(
        <div>
             <div className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${menu})`}}>
 {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6">
   <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-200">
Contact Us
</h1>
<p className="text-lg sm:text-xl text-red-500 max-w-xl mx-auto">
 Reach out to us anytime — our team at Urban Fork is just a message away.
</p>

  </div>             
            </div>
            <section className="py-20 px-6 bg-white mx-20" data-aos="fade-up" id="contact"
  data-aos-delay="200"
  data-aos-duration="1200">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

    {/* Address */}
    <div className="bg-white border border-red-300 rounded-xl shadow-md p-8 space-y-4 flex flex-col items-center">
      <div className="w-14 h-14 flex items-center justify-center bg-red-100 text-red-500 rounded-full text-3xl shadow">
        <SlLocationPin />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">Our Address</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        225 Anthony Village Road,<br /> Lagos State, Nigeria.
      </p>
    </div>

    {/* Email */}
    <div className="bg-white border border-red-300 rounded-xl shadow-md p-8 space-y-4 flex flex-col items-center">
      <div className="w-14 h-14 flex items-center justify-center bg-red-100 text-red-500 rounded-full text-3xl shadow">
        <IoIosMailOpen />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        urbanforkrestaurant@gmail.com<br />
        We reply fast — promise!
      </p>
    </div>

    {/* Phone */}
    <div className="bg-white border border-red-300 rounded-xl shadow-md p-8 space-y-4 flex flex-col items-center" >
      <div className="w-14 h-14 flex items-center justify-center bg-red-100 text-red-500 rounded-full text-3xl shadow">
        <FiPhoneCall />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        HOTLINE: +208-666-01112<br />
        Live Chat & 24/7 Support
      </p>
    </div>

    {/* Opening Hours */}
    <div className="bg-white border border-red-300 rounded-xl shadow-md p-8 space-y-4 flex flex-col items-center">
      <div className="w-14 h-14 flex items-center justify-center bg-red-100 text-red-500 rounded-full text-3xl shadow">
        <FiClock />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">Opening Hours</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Sun–Fri: 9 AM – 6 PM<br />
        Sat: 9 AM – 4 PM
      </p>
    </div>

  </div>
</section>

  <div className="w-full flex flex-col lg:flex-row pr-6 items-stretch pb-16" data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1200">
  {/* Chicken Image Section */}
  <div className="w-full lg:w-1/2">
    <img
      src={turkey}
      alt="Grilled chicken combo"
      className="w-full h-full object-cover rounded-r-full"
    />
  </div>


 <section className="w-full max-w-2xl bg-white border border-gray-300 rounded-2xl pr-20 sm:px-10 py-10 shadow-xl mr-20 ml-10" >
  <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h1>

  <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
    {/* Full Name */}
    <div className="col-span-1">
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="Full Name"
        className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
    </div>

    {/* Email */}
    <div className="col-span-1">
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email Address"
        className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
    </div>

    {/* Phone */}
    <div className="col-span-1">
      <input
        {...register("phone", { required: true })}
        type="tel"
        placeholder="Phone Number"
        className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      {errors.phone && <p className="text-red-500 text-sm mt-1">Phone number is required</p>}
    </div>

    {/* Subject Dropdown */}
    <div className="col-span-1">
      <select
        {...register("subject", { required: true })}
        defaultValue=""
        className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        <option value="" disabled>Choose a Subject</option>
        <option>Complaints</option>
        <option>Reservations</option>
        <option>Expiry Date</option>
        <option>About Order</option>
        <option>About Price</option>
      </select>
      {errors.subject && <p className="text-red-500 text-sm mt-1">Subject is required</p>}
    </div>

    {/* Message Box */}
    <div className="sm:col-span-2">
      <textarea
        {...register("message", { required: true })}
        placeholder="Write your message here..."
        rows={5}
        className="w-full border border-gray-300 rounded-xl px-5 py-3 text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
    </div>

    {/* Terms Checkbox */}
    <div className="sm:col-span-2 flex items-start gap-3 mt-2">
      <input type="checkbox" {...register("terms")} className="mt-1" />
      <span className="text-sm text-gray-600 leading-snug">
        I agree to the terms and acknowledge a 24-hour response window.
      </span>
    </div>

    {/* Submit Button */}
    <div className="sm:col-span-2 mt-6">
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 transition duration-300 ease-in-out"
      >
        Submit Now <FaArrowRight />
      </button>
    </div>
  </form>
</section>
</div>
<section className="bg-white pt-10 ">
  <h2 className="text-2xl font-bold mb-4 text-center text-red-500">📍 Find Us</h2>
  <div className="w-full  pt-6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39743.00308080022!2d3.3626168429541523!3d6.564610764467166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d80c497f71b%3A0xb63ddbfef12dba4e!2sAnthony%20Village%2C%20Kosofe%2C%20Ikeja%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1752486946461!5m2!1sen!2sng" 
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full rounded-lg shadow-lg"
  ></iframe>

 
</div>

</section>

      {/* <div className="aspect-w-96 aspect-h-9 shadow-lg rounded overflow-hidden">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39743.00308080022!2d3.3626168429541523!3d6.564610764467166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d80c497f71b%3A0xb63ddbfef12dba4e!2sAnthony%20Village%2C%20Kosofe%2C%20Ikeja%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1752486946461!5m2!1sen!2sng" 
        width="600" 
        height="450" 
        style={{border:0 }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div> */}

        </div>
    )
}