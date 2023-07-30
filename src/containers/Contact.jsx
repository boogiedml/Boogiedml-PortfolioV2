import React from "react";
import AppWrap from "../wrapper/AppWrap";
import { FiArrowRight } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="relative mb-10 md:mb-0 mt-14 sm:mt-28 md:mt-32 lg:mt-36">
      <div className="max-w-lg mx-auto text-left sm:text-center mb-16">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-[650] mb-3 mx-auto font-grotesk leading-tight bg-gradient-to-r from-[#4732D3] to-[#4732D3] dark:from-[#9A9A9A] dark:to-zinc-700 bg-clip-text text-transparent">
          Send me a message!
        </h3>
        <p className="text-[#3D155F] dark:text-[#9A9A9A] text-xs sm:text-base md:text-lg lg:text-xl font-normal font-grotesk">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
      </div>
      <div className=" max-w-3xl mx-auto">
        <form className="flex flex-col gap-9 md:gap-12 lg:gap-16">
          <div className="w-full flex flex-col md:flex-row items-center gap-9 md:gap-12 lg:gap-16">
            <div className="w-full flex flex-col gap-1.5 group flex-1">
              <label
                className="text-[#3D155F] dark:text-[#9A9A9A] opacity-80 text-xs md:text-sm font-[200]"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="py-3 text-sm text-[#4732D3] dark:text-[#9A9A9A] md:text-base bg-transparent border-b-[.6px] group-focus-within:border-[#4732D3] dark:group-focus-within:border-[#CCF381] border-[#3D155F] dark:border-[#9A9A9A] outline-none transition-all duration-700"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full flex flex-col gap-1.5 group flex-1">
              <label
                className="text-[#3D155F] dark:text-[#9A9A9A] opacity-80 text-xs md:text-sm font-[200]"
                htmlFor="name"
              >
                Email Address
              </label>
              <input
                className="py-3 text-sm text-[#4732D3] dark:text-[#9A9A9A] md:text-base bg-transparent border-b-[.6px] group-focus-within:border-[#4732D3] dark:group-focus-within:border-[#CCF381] border-[#3D155F] dark:border-[#9A9A9A] outline-none transition-all duration-700"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 group flex-1">
            <label
              className="text-[#3D155F] dark:text-[#9A9A9A] opacity-80 text-xs md:text-sm font-[200]"
              htmlFor="name"
            >
              Your Message
            </label>
            <textarea
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              id="message"
              name="message"
              required="required"
              className="py-3 text-sm text-[#4732D3] dark:text-[#9A9A9A] md:text-base bg-transparent border-b-[.6px] group-focus-within:border-[#4732D3] dark:group-focus-within:border-[#CCF381] border-[#3D155F] dark:border-[#9A9A9A] outline-none transition-all duration-700"
              rows="3"
            ></textarea>
          </div>
          <div className="w-full">
            <button className="flex mx-auto items-center gap-5 w-fit font-outfit text-sm md:text-base dark:bg-[#1A1A1A] text-[#4732D3] hover:bg-[#4732D3] hover:text-white dark:text-[#9A9A9A] border-[1px] border-[#4732D3] dark:border-[#242424] py-2 md:py-3 px-14 md:px-20 hover:transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
              Shoot <FiArrowRight />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppWrap(Contact, "contact", "md:min-h-[98vh]");
