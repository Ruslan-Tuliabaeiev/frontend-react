import React from "react";

import Vecto1 from '../Images/HomeImages/Vector-1.svg';
import Vecto2 from '../Images/HomeImages/Vector-2.svg';
import Vecto3 from '../Images/HomeImages/Vector-3.svg';

import { ModalWindow } from "./HomeComponentMisc/ModalWindow";

import './homeComponents.css';

export const HomeComponent = () => {
  return (
    <div className="relative-container">
      <div className="background-layer">
        <img src={Vecto1} alt="Vector 1" className="background-image" />
      </div>

      <div className="background-layer">
        <img src={Vecto2} alt="Vector 2" className="background-image" />
      </div>

      <div className="background-layer">
        <img src={Vecto3} alt="Vector 3" className="background-image" />
      </div>

      <div className="home-container">
      <div className="home-container_block flex flex-col items-center md:flex-row  mt-[200px]"> 
        <div className="home-text-container">
          <p className="home-main-heading text-center">
            OUR PRIME SOFTWARE HAS ALREADY LET THOUSANDS OF PEOPLE ALL AROUND
            THE GLOBE GET RICH!
          </p>
          <p className="sub-heading">
            Artificial intelligence by <span>Amazon</span>
          </p>
          <p className="description">
            Entrust the hardest part about trading to the most advanced algorithms on the Web and build fortune within less than a month!
          </p>
          <div className="background-box"></div>
        </div>
        <div className="modal-container">
          <ModalWindow />
        </div>
      </div>
      </div>
    </div>
  );

  };
