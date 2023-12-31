import { Link, useLocation } from "react-router-dom";
import React from "react";
import localVideo from "../assets/WhatsApp Video 2023-11-27 at 3.40.16 PM.mp4";
import Statistic from "./Statistic";
import CartList from "./CartList";
import ViewAll from "../components/viewAll";
import Features from "./Features";
import NewsLetter from "./NewsLetter";
import SalesList from './salesList'
import { AiFillAlert, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";
import ProgresBar from "./ProgresBar";
import Halmet from "./Halmet";

export default function Home() {
    
  return (
    <Halmet title="Home">
      <div className="overflow-hidden  ease-linear duration-500 relative h-screen flex items-start sm:justify-center  ">
        <div className="absolute  w-full h-screen z-20 bg-black/60  backdrop-blur-sm backdrop-filter  bg-opacity-20"></div>
        <video
          src={localVideo}
          autoPlay
          loop
          muted
          className="absolute z-10 
           w-full  h-screen max-w-none object-cover"
        ></video>
        <div className="text-white z-20 relative  container m-auto md:px-12 py-16 rounded-lg flex flex-col justify-center items-center">
          <h1 className="text-2xl text-white uppercase sm:text-4xl lg:w-2/3  text-center  md:text-5xl  text-transparent   mb-3 ">
            Seth and Sons
          </h1>
          <h1 className="text-2xl uppercase text-white  sm:text-4xl lg:w-2/3  text-center  md:text-5xl  text-transparent   mb-12">
            Estate sales
          </h1>

          <div className="flex justify-center items-center gap-2 ">
            <Link
              id="Subscribe"
              to="/newsletter"
              type="button"
              className="text-white flex gap-1 items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:scale-110 ease-linear duration-300 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded-lg text-lg px-6 py-2.5 text-center mr-2 mb-2"
            >
              <AiFillAlert className="text-xl" /> Subscribe
            </Link>
            <Link
              to="/ContactUs"
              type="button"
              className="text-sky_blue  flex gap-1 items-center justify-center  bg-gradient-to-r from-white to-gray-300 hover:bg-gradient-to-bl font-semibold focus:scale-110 ease-in duration-300 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800  rounded-lg text-lg px-6 py-2.5 text-center mb-2"
            >
              Contact us <AiOutlineRight className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <NewsLetter show={true} />
      <SalesList commmon={false} />

      {/* <CartList /> */}
      {/* <ViewAll />
      <Features /> */}

      {/* <section className="h-screen w-full"></section> */}
    </Halmet>
  );
}
