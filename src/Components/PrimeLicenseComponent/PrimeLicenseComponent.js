import React, { useState } from "react";

import Group from '../Images/PrimeLicenseImages/Group.svg';
import Shape from '../Images/PrimeLicenseImages/shape.svg';
import { ModalWindow } from "../ModelWindow/ModalWindow";

import './primeLicenseComponent.css';

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
      <div className="container">
        <p className="main-title">PRIME</p>
        <p className="sub-title">LIFETIME LICENSE</p>
    
        <div className="items-container">
          {dataText.map((item, index) => (
            <div key={index} className="item">
              <div className="icon-wrapper">
                <img src={Group} alt="Group" className="group-icon" />
                <img src={Shape} alt="Shape" className="shape-icon" />
              </div>
    
              <div className="text-wrapper">
                <p className="text-gray">{item.text}<span className="text-orange">: {item.conditions}</span></p>
              </div>
            </div>
          ))}
        </div>
    
        <button
          onClick={openModal}
          type="button"
          className="order-button"
        >
          Order now
        </button>
    
        {isModalOpen && <ModalWindow isOpen={isModalOpen} onClose={closeModal} />}
      </div>
    );
}
