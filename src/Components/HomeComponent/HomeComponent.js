import React from "react";

import Vecto1 from '../Images/HomeImages/Vector-1.svg';
import Vecto2 from '../Images/HomeImages/Vector-2.svg';
import Vecto3 from '../Images/HomeImages/Vector-3.svg';

import { ModalWindow } from "./HomeComponentMisc/ModalWindow";

// import './homeComponents.css';

export const HomeComponent = () => {
  return (
    <div className="relative h-auto">
      <div className="absolute top-0 left-0 w-full h-full">
        <img src={Vecto1} alt="Vector 1" className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <img src={Vecto2} alt="Vector 2" className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <img src={Vecto3} alt="Vector 3" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 flex justify-center">
        <div className="flex flex-col items-center md:flex-row mt-[200px] max-w-[1200px] mx-auto px-4">
          <div className="w-full md:w-[670px] mb-[100px] text-center md:text-left">
            <p className="text-4xl leading-9 font-dela-gothic text-[#FBFBFB] mb-6">
              OUR PRIME SOFTWARE HAS ALREADY LET THOUSANDS OF PEOPLE ALL AROUND
              THE GLOBE GET RICH!
            </p>
            <p className="text-xl leading-9 font-normal font-dela-gothic text-[#FBFBFB] mb-4">
              Artificial intelligence by <span className="text-[#F78154]">Amazon</span>
            </p>

            <p className="mt-4 text-lg font-normal text-[#FBFBFB] mb-6">
              Entrust the hardest part about trading to the most advanced algorithms on the Web and build fortune within less than a month!
            </p>

            <div className="mt-4 w-full h-[412px] bg-[#FBFBFB] rounded-[40px] border-2 border-[#11986E]"></div>
          </div>
          <div className="w-full md:w-auto ml-0 md:ml-10 mt-[77px] flex justify-center md:justify-start">
            <ModalWindow />
          </div>
        </div>
      </div>
    </div>
  );
  };
  