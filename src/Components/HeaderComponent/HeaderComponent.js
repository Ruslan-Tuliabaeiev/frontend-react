import React, { useEffect, useState } from "react";
import ReactCountryFlag from 'react-country-flag';

import Group from '../Images/HeaderImages/Group.svg';
import VectoP from '../Images/HeaderImages/VectorP.svg';
import VectoR from '../Images/HeaderImages/VectorR.svg';
import VectoI from '../Images/HeaderImages/VectorI.svg';
import VectoM from '../Images/HeaderImages/VectorM.svg';
import VectoE from '../Images/HeaderImages/VectorE.svg';
import Down from '../Images/HeaderImages/VectorDown.svg';

import './headerComponent.css'

export const HeaderComponent = () => {
    const [countryCode, setCountryCode] = useState('');

    useEffect(() => {
      fetch('https://ipapi.co/json/')
        .then((response) => response.json())
        .then((data) => setCountryCode(data.country_code))
        .catch((error) => console.log('Error fetching country code: ', error));
    }, []);
    
    return (
      <header className="z-10">
          <div className="h-[80px] flex items-center justify-between bg-[#FFFFFF] px-4 md:px-[380px]">
              <div className="flex items-center">
                  <div>
                      <img src={Group} alt="Group" className="h-[40px] w-auto md:h-auto" />
                  </div>

                  <div className="ml-2 flex gap-1">
                      <img src={VectoP} alt="P" className="h-6 w-auto" />
                      <img src={VectoR} alt="R" className="h-6 w-auto" />
                      <img src={VectoI} alt="I" className="h-6 w-auto" />
                      <img src={VectoM} alt="M" className="h-6 w-auto" />
                      <img src={VectoE} alt="E" className="h-6 w-auto" />
                  </div>
              </div>
              <div className="flex items-center gap-2">
                  <p className="header-text font-normal font-dela-gothic text-xs text-[#2C2C2C]">Available in COUNTRY</p>
                  <img className="h-[5px]" src={Down} alt="V" />
                  <div>
                      {countryCode ? (
                          <ReactCountryFlag countryCode={countryCode} svg style={{ width: '18px', height: '26px' }} />
                      ) : (
                          'Loading...'
                      )}
                  </div>
              </div>
          </div>

          <div className="h-[5px] bg-[#11986E] md:h-[10px]"></div>
      </header>
  );
};
