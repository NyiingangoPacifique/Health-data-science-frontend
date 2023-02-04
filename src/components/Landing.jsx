import React from "react";

const capacity = "https://gruninfoundation.org/wp-content/uploads/2019/12/GG_Illustration_Pillars_Capacity_1075x715-1.png";
const Landing = () => {
  
  return (
    <div>
      <div className="py-5">
        <div className="flex">
          <div className="w-4/12"></div>
          <div className="w-8/12 py-12 mb-5 text-left float-right">
            <h1 className="font-Sans-serif; text-8xl w-11/12 font-light leading-12 tracking-tight ml-4">
            Unleashing the power of data for better health
            </h1>
          </div>
        </div>
        <div className="flex ">
          <div className="w-1/2">
            <img
              className="text-white  m-auto"
              src={capacity}
              alt="Workflow"
            />
          </div>
          <div className="w-1/2">
            <div className="w-4/5 py-5">
              <p className="text-2xl font-light">
            Empower individuals and groups to take ownership of their own development and improve their long-term prospects
              for success by providing bespoke research trainings. 
              </p>
            </div>
            <div>
              <button class="bg-sky-400 hover:bg-green-400 text-white font-bold p-5 w-1/4 rounded-lg">
                Take Lessons
              </button>
            </div>
          </div>
        </div> 
      </div>
      <div className="flex bg-gray-100 py-20">
        <div className="w-1/12 py-24 mb-5 font-Sans-serif font-bold">
          
        </div>
        <div className="w-4/12 py-12 mb-5 text-left float-right"> 
          <h className="m-auto font-Sans-serif text-7xl w-11/12 font-light leading-12 tracking-tight">
            Exploring the Data
          </h>
        </div>
        <div className="flex-col w-6/12 py-12 mb-5 text-left float-right space-y-10 m-auto">
          <div className="font-Sans-serif; text-2xl w-11/12 font-light leading-12 tracking-tight ">
          At Health Data Science and Research, we have identified that one of the biggest problems with healthcare 
          services in Rwanda is poor data quality in electronic health records. To help improve the quality of data, 
          we devised a service that would empower healthcare providers in Rwanda to transform their data into valuable information.
           Doing so we plan to increase local evidence production and reduce the need for healthcare consultants and data training.
          </div>
          <div className="font-Sans-serif; text-2xl w-11/12 font-light leading-12 tracking-tight ">
          At Health Data Science and Research, we have identified that one of the biggest problems with healthcare services 
          in Rwanda is poor data quality in electronic health records. To help improve the quality of data, we devised a service
           that would empower healthcare providers in Rwanda to transform their data into valuable information. Doing so we plan 
           to increase local evidence production and reduce the need for healthcare consultants and data training.
          </div>
        </div>
      </div>
      <div className="flex-col py-20">
        <div className="flex">
          <div className="w-1/12">

          </div>
          <div className="w-11/12 font-bold font-Sans-serif text-2xl py-5 ">
            DATA CURATION
          </div>
        </div>
        <div className="flex m-auto">
          <div className="w-1/12">

          </div>
          <div className="w-7/12">
            <p className="font-Sans-serif text-7xl w-11/12 font-light leading-12 tracking-tight">
              Transform Data into Meaningful state
            </p>
          </div>
          <div className="w-4/12 text-left float-right">
            <p className="font-Sans-serif; text-1xl w-8/12 font-light leading-12 tracking-tight mr-4 ">
              Data is trustworthy, accessible, and usable for current and future research by
              Creating six-sigma system for data quality, 
              Creating AI/ML tool for data cleaning and curation and
              Transform data into actionable insights.
            </p>
            <div>
              <button class="bg-sky-400 hover:bg-green-400 text-white font-bold p-5 w-1/3 rounded-lg mt-5">
                Take Lessons
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
