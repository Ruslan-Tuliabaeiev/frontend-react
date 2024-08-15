import React from "react";

import Group from '../Images/HeaderImages/Group.svg';
import VectoP from '../Images/HeaderImages/VectorP.svg';
import VectoR from '../Images/HeaderImages/VectorR.svg';
import VectoI from '../Images/HeaderImages/VectorI.svg';
import VectoM from '../Images/HeaderImages/VectorM.svg';
import VectoE from '../Images/HeaderImages/VectorE.svg';
import Amazon from '../Images/FooterImages/Frame234.svg';


export const FooterComponent = () => {

    return (
        <footer className="h-auto bg-[#FFFFFF]">
          <div className="h-[10px] bg-[#11986E]"></div>
          <div className="flex flex-col items-center bg-[#FFFFFF]">
            <div className="mt-4 flex flex-col items-center sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <img src={Group} alt="Group" className="mb-4 sm:mb-0"/>
              <div className="flex gap-2">
                <img src={VectoP} alt="P" className="h-6 w-auto"/>
                <img src={VectoR} alt="R" className="h-6 w-auto"/>
                <img src={VectoI} alt="I" className="h-6 w-auto"/>
                <img src={VectoM} alt="M" className="h-6 w-auto"/>
                <img src={VectoE} alt="E" className="h-6 w-auto"/>
              </div>
            </div>
      
            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-10">
              <p className="text-base font-medium text-[#2C2C2C]">PRIVACY POLICY</p>
              <p className="text-base font-medium text-[#2C2C2C]">USER AGREEMENT</p>
              <p className="text-base font-medium text-[#2C2C2C]">COOKIE POLICY</p>
            </div>
      
            <div className="mt-6">
              <img src={Amazon} alt="Amazon" className="h-24 w-auto"/>
            </div>
          </div>
        </footer>
      );
};
