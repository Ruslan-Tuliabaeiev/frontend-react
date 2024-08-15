import React, { useState } from "react";
import Collapsible from 'react-collapsible';

import Down from '../Images/QuestionImages/Vector.svg';

export const QuestionComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const dataText = [
        {number: 1, text: 'What kind of results can I expect?', conditions: ' "Have you ever heard about the scientific developer? Prime is a leader of thismovement".',},
        {number: 2, text: 'How accurate are the softwares predictions?', conditions: 'Like any business, you need working capital to get started. So to start profiting with Prime. ',},
        {number: 3, text: 'Is this a paid software?', conditions: 'Click trade to enjoy precise and accurate hands-free trading powered by ouraward-winning algorithm.',},
        {number: 4, text: 'Will anyone help me to get a handle on the program?', conditions: 'Like any business, you need working capital to get started. So to start profiting with Prime. ',},
        {number: 5, text: 'Do I need powerful hardware to work with this software?', conditions: 'Click trade to enjoy precise and accurate hands-free trading powered by ouraward-winning algorithm.',},
        {number: 6, text: 'How accurate are the softwares predictions?', conditions: 'Like any business, you need working capital to get started. So to start profiting with Prime. ',},
        {number: 7, text: 'Is this a paid software?', conditions: 'Click trade to enjoy precise and accurate hands-free trading powered by ouraward-winning algorithm.',},
        {number: 8, text: 'Will anyone help me to get a handle on the program?', conditions: 'Like any business, you need working capital to get started. So to start profiting with Prime. ',},

    ]


    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

    return (
        <div className="h-[1442px] flex flex-col items-center">
               <p className="mt-[70px] font-dela-gothic font-normal text-3xl leading-9 text-[#2C2C2C] text-center">
                  FAQ
               </p>

               <div className="mt-[40px] p-4">
                {dataText.map((item, index) => (

                <Collapsible 
                key={index} 
                trigger={
                  <div 
                    className="w-[1050px] flex justify-between font-bold text-xl text-[#2C2C2C] cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <span>{item.text}</span>
                    <div>
                      <img 
                        className={`h-[10px] mt-2 transition-transform duration-1000 delay-200 fill-[#11986E] ${activeIndex === index ? 'rotate-180' : ''}`} 
                        src={Down} 
                        alt="Down Arrow"
                      />
                    </div>
                  </div>
                } 
                className="h-[104px] w-[1150px] pl-10 flex items-center mb-4 rounded-[40px] border-b-4 border-4 border-[#11986E]"
                openedClassName="h-[134px] w-[1150px] pl-10 flex flex-col justify-center mb-4 rounded-[40px] border-b-4 border-4 border-[#11986E]"
                open={activeIndex === index}
              >
                <p className="text-base text-[#6D6D6D] mt-2">{item.conditions}</p>
              </Collapsible>
            ))}
        </div>

        </div>

    );
};

                // <Collapsible 
                //     key={index} 
                //     trigger={<div className="w-[900px] flex font-bold text-xl text-[#2C2C2C]">{item.text}<div ><img className="h-[5px] ml-2" src={Down} alt="V"/></div></div>} 
                //     className="h-[104px] w-[1150px] pl-10 flex items-center mb-4 rounded-[40px] border-b-4 border-4 border-[#11986E]"
                //     triggerClassName="cursor-pointer"
                //     openedClassName="h-[134px] w-[1150px] pl-10 flex flex-col justify-center mb-4 rounded-[40px] border-b-4 border-4 border-[#11986E]">
                //     <p className="text-base text-[#6D6D6D] mt-2">{item.conditions}</p>
                // </Collapsible>