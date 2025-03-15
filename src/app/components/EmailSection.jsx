import React from "react";
import link from "next/link";
import Image from "next/image"; 

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Hello! Thank you for visiting my website. If you have any questions
          about my projects, would like to collaborate, or just want to share
          your thoughts, feel free to reach out. Your feedback and questions are
          highly valuable to me. I look forward to helping you!
        </p>
        <div className="social flex flex-row gap-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Image src={"/portfolio/images/github-icon.png"} alt="GitHub Icon" width={64} height={64} className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src={"/portfolio/images/linkedin-icon.png"} alt="LinkedIn Icon" width={64} height={64} className="w-8 h-8" />
          </a>
        </div>
      </div>
      <form className="flex flex-col">
        <div className="mb-6"></div>
        
        <label 
          htmlFor="name" 
          className="text-white block mb-2 text-sm font-medium"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Your Name"
        />
        
        <label 
          htmlFor="email" 
          className="text-white block mb-2 text-sm font-medium mt-4"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          required
          className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="zeynepnyuksell@gmail.com"
        />
        
        <label 
          htmlFor="subject" 
          className="text-white block mb-2 text-sm font-medium mt-4"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Just saying hi"
        />
        
        <div className="mb-6"></div>
        
        <label
          htmlFor="message"
          className="text-white block text-sm mb-2 font-medium"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="bg-[#18191E] mb-4 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="...."
        ></textarea>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          </div>
      </form>
    </section>
  );
};

export default EmailSection;
