import React from "react";
// import ReactCountryFlag from 'react-country-flag';

import Group from '../Images/HeaderImages/Group.svg';
import VectoP from '../Images/HeaderImages/VectorP.svg';
import VectoR from '../Images/HeaderImages/VectorR.svg';
import VectoI from '../Images/HeaderImages/VectorI.svg';
import VectoM from '../Images/HeaderImages/VectorM.svg';
import VectoE from '../Images/HeaderImages/VectorE.svg';
import Amazon from '../Images/FooterImages/Frame234.svg';

// import './headerComponent.css'

export const FooterComponent = () => {
    // const [countryCode, setCountryCode] = useState('');

    // useEffect(() => {
    //   fetch('https://ipapi.co/json/')
    //     .then((response) => response.json())
    //     .then((data) => setCountryCode(data.country_code))
    //     .catch((error) => console.log('Error fetching country code: ', error));
    // }, []);
  

    return (
    <footer className="h-[397px]">
           <div className="h-[10px] bg-[#11986E]"></div>
        <div className="h-[100px] flex flex-col items-center bg-[#FFFFFF]">
           
          <div className="mt-[50px] flex items-center"> 
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
             
             <div className="mt-[50px] flex items-center gap-10">
                 <p className="header-text font-medium text-xl text-[#2C2C2C]">PRIVACY POLICY</p>
                 <p className="header-text font-medium text-xl text-[#2C2C2C]">USER AGREEMENT </p>
                 <p className="header-text font-medium text-xl text-[#2C2C2C]">COOKIE POLICY</p>
             </div>

            <div>
             <img src={Amazon} alt="Amazon" className="h-[100px] mt-[30px]"/>
            </div> 

        </div>
        </footer>
      
    )
};
