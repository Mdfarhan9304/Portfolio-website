import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/ContactAnimation.json";

const Contact = () => {
  return (
    <div name="Contact" className="max-w-screen-lg w-4/5     mb-14 mx-auto flex flex-col md:flex-row justify-around rounded-3xl p-2 bg-white  shadow-2xl shadow-orange-500 ">
      <Lottie animationData={animation} className="w-1/2 mx-auto" />

      <form className="flex flex-col justify-center w-full md:w-1/2" action="https://getform.io/f/002b255b-317e-474c-b193-d6c83c217dbf" method="POST">
      <p className="text-3xl font-bold border-b-4 border-orange-300 p-2 inline text-center md:text-left text-orange-500 ">
            Contact Us
          </p>
          <p className="py-2">Submit the form below to get in touch with me </p>
        <input
          type="text"
          placeholder="Your name"
          name="Name"
          className=" bg-transparent mb-2 p-2 focus:outline-none rounded-md border-2 border-orange-500 w-2/10"
        />
        <input type="email" placeholder="Your Email" name="email"
        className=" bg-transparent  mb-2 p-2 focus:outline-none rounded-md border-2 border-orange-500 w-2/10"
        />
        <textarea placeholder="Your message" rows='5' name="message"
        className=" bg-transparent  mb-2 p-2  focus:outline-none rounded-md border-2 border-orange-500 w-2/10" />
        <button className="bg-orange-500 text-white w-[80px] p-2 rounded-md mx-auto">Submit</button>
      </form>
    </div>
  );
};
 
export default Contact;
