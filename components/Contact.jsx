import React from "react";
import { useRef } from 'react';
import emailjs from 'emailjs-com'


export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3fekmup', 'template_3n2f39w', form.current, '9IsH8DNDnEbZ-QxUJ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
   
      <div className="stick lg:ml-20 lg:mr-20">
        <div className="">
          <h2 className="text-3xl font-semibold text-base-100 uppercase underline">Get In Touch</h2>
        </div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="lg:w-full md:w-2/3 mx-auto bg-secondary mt-10 rounded-xl pl-10 pr-10 pt-5 pb-5">
            <div className="flex flex-wrap">
              <div className="p-2 w-full lg:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-slate-300">
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
                  <label htmlFor="email" className="leading-7 text-sm text-slate-300">
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
                  <label htmlFor="message" className="leading-7 text-sm text-slate-300">
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
               <form ref={form} onSubmit={sendEmail}>
                <button className="btn btn-primary">Send</button>
               </form>
              </div>
            </div>
          </div>
        </form>
      </div>

  );
} 
