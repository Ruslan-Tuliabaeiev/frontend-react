import React, { useState } from "react";

import Vector from '../Images/WorksImages/Group(1).svg';
import { ModalWindow } from "../ModelWindow/ModalWindow";

export const WorksComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dataText = [
        {number: 1, text: 'Fill Out The Registration Form on This Page ', conditions: 'Once your registration isaccepted, you will automaticallybecome the newest memberf Prime. This means you willget to claim our proprietarybitcoin trading softwarefor free.',},
        {number: 2, text: 'Fund Your Account', conditions: 'Like any business, you need working capital to get started. So to start profiting with Prime. This means you willget to claim our proprietarybitcoin trading softwarefor free.',},
        {number: 3, text: 'Start Profiting', conditions: 'Click trade to enjoy precise and accurate hands-free trading powered by ouraward-winning algorithm. You can also set the trading to manual if you prefer tradeon your own.',},

    ]

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <div className="flex items-center flex-col justify-center">
          <div className="relative w-full h-[148px] flex justify-center items-center mt-[50px] mb-[50px]">

             <img src={Vector} alt="Vector" className="absolute w-[738px] h-[148px] object-cover" />
               <p className="relative font-dela-gothic font-normal text-3xl leading-9 text-[#2C2C2C] text-center">
                  HOW IT WOKS?
               </p>
          </div>


          <div className="mt-4 flex flex-col items-center gap-10">
  <div className="flex justify-center mb-4 gap-4">
    {dataText.slice(0, 2).map((item, index) => (
      <div key={index} className="mr-10 ml-10 border-l-8  border-b-8 border-[#F78154] p-4 flex flex-col gap-4">
        <p className="font-bold text-4xl text-[#F78154] font-dela-gothic">{item.number}</p>
        <div className="h-[206px] w-[417px]">
          <p className="mb-6 font-bold text-2xl text-[#2C2C2C] text-center font-dela-gothic">{item.text}</p>
          <p className="font-bold text-base text-[#2C2C2C] text-center font-serif">{item.conditions}</p>
        </div>
      </div>
    ))}
  </div>
  
  <div className="border-l-8  border-b-8 border-[#F78154] p-4 flex flex-col gap-4">
    <p className="font-bold text-4xl text-[#F78154] font-dela-gothic">{dataText[2].number}</p>
    <div className="h-[206px] w-[417px]">
      <p className="mb-6 font-bold text-2xl text-[#2C2C2C] text-center font-dela-gothic">{dataText[2].text}</p>
      <p className="font-bold text-base text-[#2C2C2C] text-center font-serif">{dataText[2].conditions}</p>
    </div>
  </div>
</div>

          {/* <div className=" w-[800px] mt-4 flex">
                {dataText.map((item, index) => (
                 <div key={index} className=" mb-4 flex flex-col border-b-8 border-l-8 bordr-[#F78154]">
                   <div>
                     <p className="font-bold text-4xl text-[#F78154] font-dela-gothic">{item.number}</p>
                   </div>
                   <div className="h-[206px] w-[417px]">
                      <p className="font-bold text-2xl text-[#2C2C2C] text-center font-dela-gothic">{item.text}</p>
                     <p className="font-bold text-base text-[#2C2C2C] text-center font-serif">{item.conditions}</p>
                     </div>
                 </div>
          ))}
                </div> */}
                <button
                    onClick={openModal}
                    type="submit"
                    className="w-[315px] mt-10 py-2 px-4 bg-[#F78154] text-xl text-white rounded-[30px] hover:bg-[#d16a41]"
                >
                    Start
                </button>
                {isModalOpen && ( <ModalWindow isOpen={isModalOpen} onClose={closeModal}/>)}
        </div>
    )
}
