import React from "react";

import Group from '../Images/HeaderImages/Group.svg';
import VectoP from '../Images/HeaderImages/VectorP.svg';
import VectoR from '../Images/HeaderImages/VectorR.svg';
import VectoI from '../Images/HeaderImages/VectorI.svg';
import VectoM from '../Images/HeaderImages/VectorM.svg';
import VectoE from '../Images/HeaderImages/VectorE.svg';
import Amazon from '../Images/FooterImages/Frame234.svg';

import './footerComponent.css';

export const FooterComponent = () => {
  const footerTitCompanyName = [
    { src: VectoP, alt: 'P' },
    { src: VectoR, alt: 'R' },
    { src: VectoI, alt: 'I' },
    { src: VectoM, alt: 'M' },
    { src: VectoE, alt: 'E' }
  ]

    return (
        <footer className="h-auto mb-10 bg-[#FFFFFF]">
          <div className="h-[10px] bg-[#11986E]"></div>
          <div className="flex flex-col items-center bg-[#FFFFFF]">
            <div className="mt-4 flex flex-col items-center sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <img src={Group} alt="Group" className="mb-4"/>
              <div className="flex gap-2">
                {
                  footerTitCompanyName.map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} className="footer-title-char"/>
                  ))
                }
              </div>
              {/* <div className="flex gap-2">
                <img src={VectoP} alt="P" className="footer-title-char"/>
                <img src={VectoR} alt="R" className="footer-title-char"/>
                <img src={VectoI} alt="I" className="footer-title-char"/>
                <img src={VectoM} alt="M" className="footer-title-char"/>
                <img src={VectoE} alt="E" className="footer-title-char"/>
              </div> */}
            </div>
      
            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-10">
              <p className="footer-link text-base font-medium text-[#2C2C2C]">PRIVACY POLICY</p>
              <p className="footer-link text-base font-medium text-[#2C2C2C]">USER AGREEMENT</p>
              <p className="footer-link text-base font-medium text-[#2C2C2C]">COOKIE POLICY</p>
            </div>
            <div className="mt-6">
              <img src={Amazon} alt="Amazon" className="h-24 w-auto"/>
            </div>
          </div>
        </footer>
      );
};
