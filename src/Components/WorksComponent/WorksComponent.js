import React, { useState } from "react";

import Vector from '../Images/WorksImages/Group(1).svg';
import { ModalWindow } from "../ModelWindow/ModalWindow";

import './worksComponent.css'

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
      <div className="works-container">
          <div className="works-header">
              <img src={Vector} alt="Vector" className="works-logo"/>
              <p className="works-logo-text">HOW IT WORKS?</p>
          </div>
  
          <div className="card-container">
              <div className="flex flex-col sm:flex-row justify-center mb-4 gap-4 relative">
                  {dataText.slice(0, 2).map((item, index) => (
                      <div 
                          key={index} 
                          className="card"
                      >
                          <p className="card-number">{item.number}</p>
                          <div className="h-auto flex flex-col justify-center">
                              <p className="card-text">{item.text}</p>
                              <p className="card-conditions">{item.conditions}</p>
                          </div>
                      </div>
                  ))}
              </div>
  
              <div className="card">
                  <p className="card-number">{dataText[2].number}</p>
                  <div className="h-auto flex flex-col justify-center">
                      <p className="card-text">{dataText[2].text}</p>
                      <p className="card-conditions">{dataText[2].conditions}</p>
                  </div>
              </div>
          </div>
  
          <button
              onClick={openModal}
              type="submit"
              className="works-container-button"
          >
              Start
          </button>
  
          {isModalOpen && <ModalWindow isOpen={isModalOpen} onClose={closeModal} />}
      </div>
  );
  
}
