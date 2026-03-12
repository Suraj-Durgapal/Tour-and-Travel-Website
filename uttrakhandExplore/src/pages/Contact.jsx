import React from "react";
import { IoCall } from "react-icons/io5";
import { MdChat } from "react-icons/md";
import { MdEmail } from "react-icons/md";
// import contimg from '../assets/image/'

const Contact = () => {
    const handelClick = (()=>{
        console.log("submitted");
        
    })
  return (
    <div>
      <div className="p-20 flex">
        <div className="p-20">
          <div>
            <h1 className=" font-bold text-5xl pb-3">Contact Us</h1>
            <p>
              Let's Connect: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate dolore nam molestiae aliquam earum obcaecati
              perferendis aliquid magni pariatur fuga.
            </p>
          </div>
          <div className="pt-20">
            <div className="flex  gap-8">
              <button className="text-start text-xl flex p-5 bg-neutral-900 text-white items-center gap-2">
                <IoCall className="text-xl" />
                <h4>VIA SUPPORT CALL</h4>
              </button>
              <button className="text-start text-xl flex bg-neutral-900 text-white px-15 py-5 items-center gap-2">
                <MdChat />
                <h4>VIA CHAT</h4>
              </button>
            </div>
            <div className="flex flex-col pt-7 ">
              <div className="p-4 text-center text-xl font-medium border flex w-126 mb-8 justify-center gap-3 items-center bg-neutral-900 text-white">
                <MdEmail />
                <h4>VIA EMAIL FORM</h4>
              </div>
              <div className="flex flex-col gap-4 relative w-3/4">
                <div className="w-full">
                  <label
                    className="absolute -top-4 left-4 bg-white p-1"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input className="border-2 p-2 w-full" type="text" />
                </div>
                <div className="relative">
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
                <div className="relative w-full">
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
                  className="bg-neutral-900 text-white p-5 font-medium"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
