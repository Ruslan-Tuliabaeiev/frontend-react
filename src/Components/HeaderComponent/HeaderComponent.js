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

    const headerTitCompanyName = [
        { src: VectoP, alt: 'P' },
        { src: VectoR, alt: 'R' },
        { src: VectoI, alt: 'I' },
        { src: VectoM, alt: 'M' },
        { src: VectoE, alt: 'E' }
      ]

    useEffect(() => {
      fetch('https://ipapi.co/json/')
        .then((response) => response.json())
        .then((data) => setCountryCode(data.country_code))
        .catch((error) => console.log('Error fetching country code: ', error));
    }, []);
    
    return (
        <header className="header">
        <div className="header-component">
            <div className="header-component-logo">
                <div>
                    <img src={Group} alt="Group" className="header-group-logo" />
                </div>
                <div className="header-logo-title">
                {
                  headerTitCompanyName.map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} className="header-title-char"/>
                  ))
                }
              </div>
            </div>
            <div className="header-country">
                <p className="country-text">Available in COUNTRY</p>
                <img className="down-arrow" src={Down} alt="V" />
                <div className="flag-container">
                    {countryCode ? (
                        <ReactCountryFlag countryCode={countryCode} svg />
                    ) : (
                        'Loading...'
                    )}
                </div>
            </div>
        </div>
        <div className="header-line"></div>
    </header>

  );
};
