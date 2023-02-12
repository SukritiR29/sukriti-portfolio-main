import React from "react";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {

  const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3fekmup', 'template_jf4n07l', form.current, '9IsH8DNDnEbZ-QxUJ')
  
      e.target.reset()
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <section
      id="contact"
      className="container mx-auto min-h-screen flex justify-center items-center overflow-x-hidden"
    >
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="text-4xl md:text-6xl font-black text-primary">
          Contact Me
        </div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap">
              <div className="p-2 w-full lg:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-base-200 bg-opacity-50 rounded border border-primary focus:primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full lg:w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-base-200 bg-opacity-50 rounded border border-primary focus:primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm ">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-base-200 bg-opacity-50 rounded border border-primary focus:primary focus:bg-white focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-700 py-1  resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="btn btn-primary">Button</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
} }
