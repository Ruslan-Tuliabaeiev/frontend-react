import React, { useState } from "react";

import Group from '../Images/PrimeLicenseImages/Group.svg';
import Shape from '../Images/PrimeLicenseImages/shape.svg';
import { ModalWindow } from "../ModelWindow/ModalWindow";

export const PrimeLicenseComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const dataText = [
        {text: 'PROFIT GAIN OPPORTUNITY', conditions: 'Starting at $900 per day',},
        {text: 'COMPUTATIONAL ACCURACY', conditions: '98-99%',},
        {text: 'TRADING PLATFORMS COMPATIBILITY', conditions: 'Yes',},
        {text: 'AUTOMATIC TRADING MODE', conditions: 'Yes',},
        {text: 'TECHNICAL SUPPORT', conditions: 'Yes',},
        {text: 'PRICE', conditions: '$0 (lifetime license)',},
    ]

    return (
      <div className="flex flex-col items-center justify-center">
        {/* Заголовки */}
        <p className="w-full max-w-[619px] mt-[50px] font-dela-gothic font-normal text-5xl leading-9 text-[#2C2C2C] text-center">
          PRIME
        </p>
        <p className="w-full max-w-[619px] mt-[30px] mb-[70px] font-dela-gothic font-normal text-5xl leading-9 text-[#2C2C2C] text-center"> 
          LIFETIME LICENSE
        </p>
        <div className="mt-4">
          {dataText.map((item, index) => (
            <div key={index} className="mb-4 flex items-center justify-center md:justify-start">
              <div className="mr-6 relative">
                <img src={Group} alt="Group" className="w-[85px]" />
                <img 
                  src={Shape} 
                  alt="Shape" 
                  className="h-4 mt-10 ml-[50px] absolute top-0 left-0 object-contain" 
                />
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <p className="font-bold text-2xl text-[#6D6D6D]">{item.text}</p>
                <p className="font-bold text-2xl text-[#F78154] ml-2 md:ml-1">: {item.conditions}</p>
              </div>
            </div>
          ))}
        </div>
  
        <button
          onClick={openModal}
          type="button"
          className="w-[315px] mt-10 py-2 px-4 bg-[#F78154] text-xl text-white rounded-[30px] hover:bg-[#d16a41] transition-colors duration-300"
        >
          Order now
        </button>
        {isModalOpen && <ModalWindow isOpen={isModalOpen} onClose={closeModal} />}
      </div>
    );
}
