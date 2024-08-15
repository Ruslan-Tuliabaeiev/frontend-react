import React from 'react';
// import { AiOutlineCheckCircle } from 'react-icons/ai';

export const ModalWindow = () => {

    return (
      
          <div className="w-[500px] h-[607px] bg-[#11986d2c] p-8 shadow-lg  rounded-[40px] border-2 border-[#11986E]">

            <p className="w-[327px] ml-[50px] mt-6 mb-4 font-medium text-xl text-center text-[#2C2C2C]">SIGN UP NOW AND START! YOU'LL SEE THE RESULT IN 30 MINUTES</p>
            <form>
              <div className="mb-4 mt-6">
                {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label> */}
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-[30px] p-2"
                  placeholder="First name"
                />
              </div>
              <div className="mb-4 mt-6">
                <input
                 type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-[30px] p-2"
                  placeholder="Last name"
                />
              </div>
              <div className="mb-4 mt-6">
            
                <input
                  type="date"
                  id="age"
                  className="mt-1 block w-full border border-gray-300 rounded-[30px] p-2"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4 mt-6">
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-[30px] p-2"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="flex items-center mb-4 mt-10">
                <input type="checkbox" id="agreement" className="mr-2" />
                <label htmlFor="agreement" className="flex items-center text-sm text-[#5B5B5B]">
                 I have read and accept the Customer Agreement
                </label>
              </div>
              <div className="flex items-center mb-4 mt-6">
                <input type="checkbox" id="ageConfirmation" className="mr-2" />
                <label htmlFor="ageConfirmation" className="flex items-center text-sm text-[#5B5B5B]">
                   I hereby confirm that I am at least 18 years old
                </label>
              </div>
              <button
                type="submit"
                className="w-full mt-10 py-2 px-4 bg-[#F78154] text-white rounded-[30px] hover:bg-[#d16a41]"
              >
                Register now
              </button>
            </form>
          </div>
      );

} 
