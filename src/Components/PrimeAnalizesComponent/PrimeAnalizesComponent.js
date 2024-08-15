import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Foto1 from '../Images/PrimeAnalizesImages/Rectangle(1).jpg';
import Foto2 from '../Images/PrimeAnalizesImages/Rectangle(2).jpg';
import Foto3 from '../Images/PrimeAnalizesImages/Rectangle(3).jpg';
import Foto4 from '../Images/PrimeAnalizesImages/Rectangle(4).jpg';
import Foto5 from '../Images/PrimeAnalizesImages/Rectangle(5).jpg';
import Foto6 from '../Images/PrimeAnalizesImages/Rectangle(6).jpg';
import Foto7 from '../Images/PrimeAnalizesImages/Rectangle288.jpg';

export const PrimeAnalizesComponent = () => {

    const items = [
        {
          image: Foto1,
          text: "High Profit Opportunity",
        },
        {
          image: Foto2,
          text: "Accurate Analysis",
        },
        {
          image: Foto3,
          text: "Competitor’s data.",
        },
        {
          image: Foto4,
          text: "Lifetime License",
        },
        {
            image: Foto5,
            text: "Expert opinions.",
          },
          {
            image: Foto6,
            text: "Political environmet",
          },
          {
            image: Foto7,
            text: "Lifetime License",
          },
      ];

    const carouselItems = items.map((item, index) => (
        <div key={index} className="h-[390px] w-[270px] flex flex-col items-center justify-center rounded-[40px]  border-[#2C2C2C] bg-[#F5FFFC]">
            <div className="mr-2 mb-2 border-2 rounded-[40px] border-[#11986E]">
            <img 
                src={item.image} 
                alt={`Prime Analyze ${index + 1}`} 
                className="w-[270px] h-[220px] object-cover rounded-t-[40px]"
            />
            <div>
            <p className="mt-[55px]  mb-[80px] text-center text-xl text-[#2C2C2C]">{item.text}</p>
            </div>
        </div>
        </div>
    ));

    return (
        <div className="min-h-[787px] mt-[100px] flex flex-col items-center bg-[#03C08B] p-8">
            <p className="w-full text-center font-dela-gothic font-normal text-5xl leading-9 text-[#FBFBFB] mt-[50px] mb-[50px]">
                PRIME ANALYZES
            </p>

            {/* Карусель */}
            <AliceCarousel
                mouseTracking
                items={carouselItems}
                responsive={{
                    0: { items: 1 },   // Показує 1 елемент на малих екранах
                    768: { items: 3 }, // Показує 2 елементи на середніх екранах
                    1024: { items: 4 }, // Показує 3 елементи на великих екранах
                }}
                controlsStrategy="responsive"
                autoPlay={true}
                autoPlayInterval={3000}
                infinite={true}
                disableButtonsControls={false}  // Включаємо кнопки навігації
                disableDotsControls={true}     // Вимикаємо точки навігації
            />
        </div>
    );

}
