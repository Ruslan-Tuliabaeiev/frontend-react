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
        <div className="h-[100px] flex items-center justify-between bg-[#FFFFFF]">
          <div className="ml-[350px] flex items-center"> 
            <div>
                <img src={Group} alt="Group"/>
            </div>

            <div className="ml-[20px] h-[24px] flex gap-1">
                <img src={VectoP} alt="P"/>
                <img src={VectoR} alt="R"/>
                <img src={VectoI} alt="I"/>
                <img src={VectoM} alt="M"/>
                <img src={VectoE} alt="E"/>
            </div>
           </div>
             
             <div className="mr-[350px] flex justify-end items-center gap-1">
                <p className="header-text font-normal font-dela-gothic text-xs text-[#2C2C2C]">Available in COUNTRY</p>
                <img className="h-[5px] ml-2" src={Down} alt="V"/>

                <div className="ml-2">
                 {countryCode ? (
                     <ReactCountryFlag countryCode={countryCode} svg style={{ width: '18px', height: '26px' }} />
                  ) : (
                     'Loading...'
                      )}
                 </div>
                <div>

                </div>
             </div>

        </div>

        <div className="h-[10px] bg-[#11986E]"></div>
        </header>
    )
};
