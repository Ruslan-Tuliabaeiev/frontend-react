import React from "react";

export const MediaComponent = () => {

    const dataText = [
        {number: 1, text: 'The Gurdian', conditions: ' "Have you ever heard about the scientific developer? Prime is a leader of thismovement".',},
        {number: 2, text: 'Bloomberg', conditions: 'Like any business, you need working capital to get started. So to start profiting with Prime. ',},
        {number: 3, text: 'Forbes', conditions: 'Click trade to enjoy precise and accurate hands-free trading powered by ouraward-winning algorithm.',},
        {number: 2, text: 'The Economist', conditions: 'Like any business, you need working capital to get started. So to start profiting with Prime. ',},
        {number: 3, text: 'Medium', conditions: 'Click trade to enjoy precise and accurate hands-free trading powered by ouraward-winning algorithm.',},

    ]


    return (
      <div className="h-auto bg-[#03C08B] mt-[70px] flex flex-col items-center py-10">
        <p className="w-full text-center font-dela-gothic font-normal text-3xl sm:text-5xl leading-9 text-[#FBFBFB]">
          MASS MEDIA
        </p>
        <div className="mt-[40px] w-full max-w-[1170px] bg-[#FFFFFF] border-4 rounded-[40px] border-[#F78154] p-8 flex flex-col sm:flex-row justify-center items-center gap-10">
          {dataText.map((item, index) => (
            <div 
              key={index} 
              className="h-auto w-full sm:w-[200px] flex flex-col items-center text-center"
            >
              <p className="font-bold text-xl sm:text-2xl text-[#2C2C2C]">
                {item.text}
              </p>
              <div className="h-[2px] w-[80px] sm:w-[100px] mt-2 mb-3 bg-[#F78154]"></div>
              <p className="font-bold text-xs sm:text-sm text-[#2C2C2C]">
                {item.conditions}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
}
