import React from "react";
import { IoCall } from "react-icons/io5";
import { MdChat } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import cntimage from '../assets/image/contact.jpg'
// import contimg from '../assets/image/'

const Contact = () => {
    const handelClick = (()=>{
        console.log("submitted");
    })
    return (
        <div>
            <section className="bg-neutral-500 h-[40vh] bg-[url('https://cdn.pixabay.com/photo/2015/01/25/21/02/phone-612061_1280.jpg')] bg-cover bg-center opacity-50-black  
    ">
            <div class="backdrop-blur-sm absolute inset-0"></div>
            <div className="flex items-center justify-center  h-full relative">
                <h1 className="text-7xl font-semibold text-black opacity-70 shadow-2xl shadow-black p-4 px-12">Contact Us</h1>
            </div>
        </section>
      <div className="p-20 flex relative">
        <div className="px-15 py-10">
          <div>
            <h1 className=" font-bold text-5xl pb-8">Contact Us</h1>
            <p>
              Let's Connect: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate dolore nam molestiae aliquam earum obcaecati
              perferendis aliquid magni pariatur fuga.
            </p>
          </div>
          <div className="pt-10">
            <div className="flex  gap-8">
              <button className="text-start text-xl flex p-5 bg-neutral-900 text-white items-center gap-2">
                <IoCall className="text-xl" />
                <h4>VIA SUPPORT CALL</h4>
              </button>
              <button className="text-start text-xl flex bg-neutral-900 text-white px-15  items-center gap-2">
                <MdChat />
                <h4>VIA CHAT</h4>
              </button>
            </div>
            <div className="flex flex-col pt-7 ">
              <div className="p-4 text-center text-xl font-medium border flex w-126 mb-8 justify-center gap-3 items-center bg-neutral-900 text-white">
                <MdEmail />
                <h4>VIA EMAIL FORM</h4>
              </div>
              <div className="flex flex-col gap-4 relative w-full">
                <div className="w-[92%]">
                  <label
                    className="absolute -top-4 left-4 bg-white p-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input className="border-2 p-2 w-full" type="text" />
                </div>
                <div className="relative w-[92%]">
                  <label
                    className="absolute -top-4 p-1 left-3 bg-white"
                    htmlFor="name"
                  >
                    Email
                  </label>
                  <input
                    className="border-2 p-2 w-full"
                    id="name"
                    type="email"
                  />
                </div>
                {/* <label
                            className='absolute'
                            htmlFor="name">Email</label> */}
                <div className="relative w-[92%]">
                  <label
                    className=" absolute p-1 -top-4 left-3 bg-white"
                    htmlFor="text"
                  >
                    Text Box
                  </label>
                  <textarea className="border-2 p-2 w-full" type="text" />
                </div>
                <button
                  onClick={handelClick}
                  className="bg-neutral-900 text-white p-4 font-medium w-[92%]"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </ div>
        <div className="w-full p-10l">
          <img
            className="p-3 pt-20"
            src={cntimage}
            alt="contact image"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
