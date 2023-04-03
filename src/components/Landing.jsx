import React  from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo2.jpg"

import AboutUs from "./AboutUs";
import Hinda from "../img/Hinda.png"
import Pascal from "../img/pascal.png"
import Diva from "../img/divine.png"
import Jado from "../img/iradukunda.png"
import Laura from "../img/laura.png"
import Vision from "../img/vision.jpg"
import Mission from "../img/mission.JPG"
import Prince from "../img/prince.jpeg"




const capacity = "https://gruninfoundation.org/wp-content/uploads/2019/12/GG_Illustration_Pillars_Capacity_1075x715-1.png";
const Landing = () => {
  
  const [activeButton, setActiveButton] = useState('button1');

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);}
    const YoutubeButton = () => {}
    

  
  return (
    <div>
      <div className="py-5 flex">
        <div className="flex">
          
          <div className="w-10/12 py-12 mb-5 text-left float-right">
            <div>
              <h1 className="font-Sans-serif; text-6xl w-10/12 font-light leading-12 tracking-tight m-auto break-words">
                Unleashing the power of data for Africa's transformation
              </h1>
            </div>
            <div className="mt-14 m-auto w-10/12">
              <a href="https://www.youtube.com/watch?v=6X2RNnje8Fg" target="_blank" rel="noopener noreferrer" className="active bg-white border border-black hover:bg-blue-900 font-semibold hover:text-white py-4 px-8 hover:border-transparent text-white border mt-20' : 'bg-white hover:bg-blue-900 font-semibold hover:text-white py-4 px-8 hover:border-transparent text-black border mt-20">
                  Watch Video
              </a>
              </div>
          </div>
        </div>
        <div className="flex-col mr-14 font-Sans-serif text-xl ">
        <button className="block px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white mt-14">
        <Link to="/about">
        About Us 
        </Link>  
        </button>
       
            
        <button className="block px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white mt-5">
        <Link to="/approach">
        Our Approach 
        </Link>  
        </button>
        <button className="block px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white mt-5">
        <Link to="/services">
        Our Services 
        </Link>  
        </button>
        <button className="block px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white mt-5">
        <Link to="/login">
        Resources 
        </Link>  
        </button>
        </div> 
      </div>
      <div className="flex bg-blue-100 py-20 m-auto">
        <div className="w-1/12"></div>
        <div className="py-12 mb-5 text-left float-right w-3/12"> 
          <h className="w-9/12 font-Sans-serif text-7xl font-light leading-12 tracking-tight  break-words">
            Exploring the Data
          </h>
        </div>
        <div className="flex-col w-7/12 py-12 mb-5 text-left float-right space-y-10 m-auto">
          <div className="font-Sans-serif text-2xl w-10/12 font-light leading-12 tracking-tight ">
          AQS is a Rwandan-based startup that is passionate about unleashing the power of data.
           We specialize in providing customized solutions that enable decision-makers across industries to turn complex data into actionable insights.
          </div>
          <div className="font-Sans-serif text-2xl w-10/12 font-light leading-12 tracking-tight ">
          Our co-creation process is at the core of everything we do. We believe in working collaboratively with our clients to understand their unique needs and goals, 
          providing tailored solutions that meet their specific requirements.
          </div>
          <div className="font-Sans-serif text-2xl w-10/12 font-light leading-12 tracking-tight ">
          Our team of experts includes data scientists, analysts, and business strategists who have extensive experience in analyzing and interpreting complex data.
           We use state-of-the-art technology and advanced analytics tools to transform messy and unstructured data into powerful insights that drive better decision-making and improve business outcomes.
          </div>
          <div className="font-Sans-serif text-2xl w-10/12 font-light leading-12 tracking-tight ">
          At AQS, we are committed to empowering decision-makers in Africa to harness the power of their data. We believe that data-driven insights can drive innovation,
           improve efficiency, and enable growth across industries.
          </div>
          <div className="font-Sans-serif text-2xl w-10/12 font-light leading-12 tracking-tight ">
           
             Our services include capacity building, data curation, evidence generation, and monitoring, evaluation, accountability, and learning. We work with clients across a range of industries,
             including healthcare, education, and agriculture.
          </div>
          <div className="font-Sans-serif text-2xl w-10/12 font-light leading-12 tracking-tight ">
          In addition to our services, we are also committed to making a positive impact on our community.
           We partner with local organizations to provide free analytics services and support educational initiatives that empower the next generation of leaders.

          </div>
          <div className="font-Sans-serif; text-2xl w-10/12 font-light leading-12 tracking-tight ">
          At AQS, we are dedicated to constantly learning and innovating, striving to deliver impactful solutions that drive success for our clients and contribute to the overall development of Africa.
          </div>
        </div>
      </div>
      
        <div className=" py-12 mb-5 text-center">
        <p className="font-Sans-serif; text-6xl w-11/12 font-light leading-12 tracking-tight m-auto mt-10">
        Your Data, Your Power!
        </p>
      </div>
      <div className="">
        <div className="w-full flex">
          <div className="w-1/2">
          
            <img
              className="text-white  m-auto h-72  mt-14 w-10/12"
              src={Mission}
              alt="Workflow"
            />
          
          </div>
          <div className=" p-5 w-1/2 ml-auto">
             <p className=" w-10/12 font-light font-Sans-serif text-2xl py-5 text-left m-auto ">
                OUR MISSION
             </p>
             <p className=" w-10/12 font-Sans-serif text-5xl font-light leading-12 tracking-tight text-left m-auto md:max-xl:flex">
             Empower our clients to harness the power of data by co-creating tools and solutions for evidence-based decisions
             </p>
          </div>
        </div>
        <div className="p-5 w-full flex">
          <div className="w-1/2">
             <p className=" w-10/12 font-light  font-Sans-serif text-2xl py-5 text-left m-auto ">
                OUR VISION
             </p>
             <p className=" w-10/12 font-Sans-serif text-5xl font-light leading-12 tracking-tight text-left m-auto">
             An Africa uplifted by data-driven solutions

             </p>
          </div>
          <div className="w-1/2">
          <img
              className="text-white  m-auto w-10/12 mt-10 h-72"
              src={Vision}
              alt="Workflow"
            />

          </div>
        </div>
      </div>
      
       <div className="w-full mt-20 ">
       <div className="w-full mt-20 ">
             <p className="mt-15 mb-14 font-Sans-serif text-2xl font-light leading-12 tracking-tight">
                OUR APPROACH
             </p>
             <p className=" m-auto font-Sans-serif font-light text-5xl w-7/12 leading-12 tracking-tight text-left mb-10">
             We partner with healthcare facilities to co-create a positive feedback loop that begins with, 
             we prepare data using international standards, increase use of data and ends with continually improving quality data.
             
             </p>
          
        </div>
          
        </div>
        <div className="flex  py-10 ">
        
        <div className="flex  py-10 bg-blue-100">
        
        <div className="w-3/12 py-12 text-left float-right m-auto"> 
          <h className="m-auto font-Sans-serif text-7xl w-10/12 font-light leading-12 tracking-tight break-words">
           Leveraging high-quality data
          </h>
        </div>
        <div className="w-8/12 ">
        <ul className=" w-9/12 list-decimal py-12 mb-5 font-light text-2xl text-left  space-y-10 m-auto">
               <li className="space-y-4 m-auto">	
                 <p className="mb-5 mt-10 " >
                 We help healthcare facilities harness the power of data to enhance healthcare delivery and inform policy decisions.
                 </p>


                  Our customized service helps health facilities improve data literacy, generate evidence, streamline data flow, curate data, 
                  and monetize data. We offer training to healthcare facility staff on the entire research process, from generating research
                  questions to writing manuscripts.


                 <p>
                 In addition to working with healthcare providers on the development of research outputs, we also offer suggestions for
                 improving the efficiency of the facility.
                 </p>
              </li>
               <li className=""> 
               Primary data collection can be time-consuming and prone to bias, so we aim to assist governments and other organizations
               in obtaining reliable data to answer their research questions in a timely and cost-effective manner.
               </li>
               
            </ul>
        </div>
        
      </div>
      </div>
      <div className="w-full mt-10 ">
             <p className="mt-15 mb-10 font-Sans-serif text-2xl font-light leading-12 tracking-tight ">
                OUR SERVICES
             </p>
             <p className="font-Sans-serif text-5xl font-light leading-12 tracking-tight m-auto w-8/12 mb-10">
             Providing the expertise needed to turn data into a strategic asset
             </p>
          <div className=" p-5 w-1/2 ml-auto bg-blue-100">
            
             <p className=" font-Sans-serif text-2xl py-5 text-left m-auto w-9/12">
             Increasing data literacy and research outputs 
             </p>
             <ul class="list-decimal text-left m-auto w-9/12 font-Sans-serif text-2xl font-light">
               <li>Provide capacity building in statistics and research</li>
               <li>Provide capacity building in research writing </li>
               <li>Provide statistical support </li>
            </ul>
          </div>
        </div>
        <div className="p-5 w-1/2">
          <div className="">
             <p className="  font-Sans-serif text-2xl py-5 text-left m-auto w-9/12  ">
             Design and implement a six-sigma system to improve data infrastructure
             </p>
             <ul class="w-9/12 list-decimal text-left m-auto font-Sans-serif text-2xl font-light">
               <li>Mapping of existing data ecosystem</li>
               <li>Support in creation of metadata (s)</li>
               <li>Designing a six-sigma system to improve data quality  </li>
            </ul>
          </div>
          <div className="w-3/12"></div>
        </div>
        <div className="w-full mt-10">
          <div className=" p-5 w-1/2 ml-auto bg-blue-100">
             <p className=" font-Sans-serif text-2xl py-5 m-auto w-9/12 text-left">
             Design automated data curation AI algorithm
             </p>
             <ul class="list-decimal text-left m-auto w-9/12 text-2xl font-light">
               <li>Working with healthcare facility to design automated data cleaning script</li>
               <li>Creating automated script to transform existing data into research-grade format </li>
               
            </ul>
          </div>
        </div>
        <div className="flex-col py-20">
        <div className="flex">
          
          <div className="w-11/12 font-Sans-serif font-light text-2xl py-5 text-left m-auto ">
            OUR VALUES
          </div>
        </div>
        <div className="flex m-auto">
          
          <div className="w-7/12">
            <p className="font-Sans-serif text-7xl w-10/12 font-light leading-12 tracking-tight text-left m-auto break-words">
            Principles, beliefs and guidance.
            </p>
          </div>
          <div className="w-5/12 text-left float-right">
          <ul class="list-disc text-left w-10/12 font-Sans-serif font-light m-auto  break-words">
               <li> Obsessed with our customer satisfaction</li>
               <li> Speed and qaulity in our delivery</li>
               <li> Constantly learning and innonating together</li>
               <li> A fun, creative, adventurous and open-minded environment with a pinch of weirdness </li>
               <li> Radical transparency</li>
            </ul>
            
          </div>
        </div>
        </div>
        <div>

          <div className="p-5 m-auto" >
                 <p className="font-light font-Sans-serif text-2xl py-5 text-center">
                  OUR TEAM
                 </p>
                 <p className="font-Sans-serif text-5xl font-light leading-12 tracking-tight text-center"> 
                 We strive to get best from your data for you.
                 </p>
            
                  <button
                   id="Team"
                   onClick={() => handleButtonClick('Team')}
                   className={activeButton === 'Team' ? 'active bg-orange-500 hover:bg-blue-900 font-semibold hover:text-white py-4 px-8 hover:border-transparent rounded-lg text-white border mt-20' : 'bg-white hover:bg-blue-900 font-semibold hover:text-white py-4 px-8 hover:border-transparent rounded-lg text-black border border-black mt-20'}
                   >
                    AQS Team
                 </button>
                 <button
                   id="Experts"
                   onClick={() => handleButtonClick('Experts')}
                   className={activeButton === 'Experts' ? 'active bg-orange-500 hover:bg-blue-900 font-semibold hover:text-white py-4 px-8 hover:border-transparent rounded-lg text-white border ml-10 mt-20 ' : 'bg-white hover:bg-blue-900 font-semibold hover:text-white py-4 px-8 hover:border-transparent rounded-lg text-black border border-black ml-10 mt-20'}
                  >
                    Experts
                 </button>

            
          </div>
        {activeButton === 'Team' && <div>
        <div class="w-10/12 m-auto grid grid-cols-2 gap-8 mt-10 ">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
               <div class="md:shrink-0">
               <img
              className="text-white  m-auto object-full h-40 w-40"
              src={Hinda}
              alt="Workflow"
            />
          </div>
            <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">HINDA Ruton</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Founder and CEO</a>
                    <p class="mt-2 text-slate-500">
                     Hinda has over two decades of experience 
                    in the healthcare field and is currently completing post-graduate degrees at the University of British Columbia, Harvard 
                    and Massachusetts Institute of Technology (MIT).
                      </p>
            </div>
          </div>
          </div>
          <div>
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div class="md:flex">
                   <div class="md:shrink-0">
                   <img
              className="text-white  m-auto object-full h-40 w-40"
              src={Pascal}
              alt="Workflow"
            />
                 </div>
              <div class="p-8">
             <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Pascal BIRINDABAGABO </div>
               <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Chief Scientific Officer</a>
               <p class="mt-2 text-slate-500">
                Pascal currently consults for the African Union Commission as a Senior Public Health
                Specialist focusing in developing Domestic Health Financing and has mustered up more than a decade of experience in the health sector.
               </p>
             </div>
            </div>
          </div>
        </div>
            
        <div>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                <div class="md:flex">
                   <div class="md:shrink-0">
                   <img
              className="text-white  m-auto object-full h-48 w-35 ml-5"
              src={Jado}
              alt="Workflow"
            />
                </div>
               <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">IRADUKUNDA Jean de Dieu</div>
                     <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Chief Operations Officer </a>
                     <p class="mt-2 text-slate-500">Jean de Dieu is a trained pharmacist with over a decade of experience in health services and pharmaceutical practices and research.</p>
                 </div>
             </div>
            </div>
        </div>
            
        <div>
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
              <img
              className="text-white  m-auto object-full h-48 w-35 ml-5"
              src={Diva}
              alt="Workflow"
            />
             </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">UMUTESI RUSA Divine</div>
                  <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Chief Medical officer</a>
                  <p class="mt-2 text-slate-500">Dr Divine is a medical doctor at Kibagabaga level 2 teaching hospital specifically in the internal medicine department and an MSc candidate in Epidemiology. </p>
               </div>
             </div>
            </div>
           </div>
        <div>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
        <img
              className="text-white  m-auto object-full h-48 w-40 ml-3"
              src={Laura}
              alt="Workflow"
            />
        </div>
      <div class="p-8">
           <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Laura UWINEZA</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Digital marketer and sales Manager</a>
            <p class="mt-2 text-slate-500">
            Laura is pursuing a bachelor's degree at the University of Tourism Technology and
            business studies and is experienced in sales and customer service.
            </p>
        </div>
      </div>
     </div>
        </div>
        </div>
          </div>}
       {activeButton === 'Experts' &&
        <div className="w-10/12 m-auto grid grid-cols-2 gap-8 mt-10" >
       <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
               <div class="md:shrink-0">
               <img
              className="text-white  m-auto object-full h-40 w-40"
              src={Prince}
              alt="Workflow"
            />
          </div>
            <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Prince rukundo</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">AI Expert</a>
                    <p class="mt-2 text-slate-500">
                    Mr.Prince RUKUNDO is completing his PhD. in the School of Computer Science and Technology at  Beijing Institute of Technology.

                    He has papers under review, other published already in top-tier journals and conferences in  Artificial Intelligence Review, BMC Bioinformatics, etc.

                      </p>
            </div>
          </div>
          </div>
        </div>}
       </div>
        
      <div className="bg-black text-white flex-col mt-10">
      <div className="flex m-auto">
      <div className="mt-10  m-auto ">
                  <Link to="/">
                    <img src={logo} class="h-20 w-40 text-white" alt="Flowbite Logo" />
                  </Link>
                </div>
        <div className=" mt-10  m-auto">
        
            <p className="font-Sans-serif text-2xl font-light leading-12 tracking-tight">
             Platform
            </p>
            
          </div>
          <div className=" mt-10  m-auto">
          
            <p className="font-Sans-serif text-2xl font-light leading-12 tracking-tight">
             About Us
            </p>
            
          
          </div>
        </div>
      <div className="flex m-auto mt-10">
       <div className="m-auto flex ">
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M3.99984 4H27.9998C28.3535 4 28.6926 4.14048 28.9426 4.39052C29.1927 4.64057 29.3332 4.97971 29.3332 5.33333V26.6667C29.3332 27.0203 29.1927 27.3594 28.9426 27.6095C28.6926 27.8595 28.3535 28 27.9998 28H3.99984C3.64622 28 3.30708 27.8595 3.05703 27.6095C2.80698 27.3594 2.6665 27.0203 2.6665 26.6667V5.33333C2.6665 4.97971 2.80698 4.64057 3.05703 4.39052C3.30708 4.14048 3.64622 4 3.99984 4ZM26.6665 9.65067L16.0958 19.1173L5.33317 9.62133V25.3333H26.6665V9.65067ZM6.0145 6.66667L16.0812 15.5493L26.0025 6.66667H6.0145Z" fill="#FF5520"></path> </svg>
       <p className="text-white">
        info@africaqs.life
       </p>
       </div>
       <div className=" m-auto flex">
       <a href="/"> <span class="elementor-icon-list-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_968_33565)"><path d="M12.488 14.2427C13.7391 16.4406 15.5594 18.2609 17.7573 19.512L18.936 17.8613C19.1255 17.5959 19.4058 17.4092 19.7237 17.3364C20.0417 17.2637 20.3752 17.31 20.6613 17.4667C22.5471 18.4972 24.6296 19.117 26.772 19.2853C27.1064 19.3118 27.4185 19.4634 27.6461 19.7098C27.8737 19.9561 28 20.2793 28 20.6147V26.564C28.0001 26.8941 27.8777 27.2125 27.6565 27.4576C27.4353 27.7027 27.1311 27.857 26.8027 27.8907C26.096 27.964 25.384 28 24.6667 28C13.2533 28 4 18.7467 4 7.33333C4 6.616 4.036 5.904 4.10933 5.19733C4.14301 4.86893 4.29731 4.56469 4.54239 4.34351C4.78746 4.12233 5.10587 3.99993 5.436 4H11.3853C11.7207 3.99996 12.0439 4.12634 12.2902 4.35393C12.5366 4.58153 12.6882 4.89363 12.7147 5.228C12.883 7.37039 13.5028 9.45291 14.5333 11.3387C14.69 11.6248 14.7363 11.9583 14.6636 12.2763C14.5908 12.5942 14.4041 12.8745 14.1387 13.064L12.488 14.2427ZM9.12533 13.3667L11.6587 11.5573C10.9397 10.0055 10.4471 8.35845 10.196 6.66667H6.68C6.672 6.888 6.668 7.11067 6.668 7.33333C6.66667 17.2747 14.7253 25.3333 24.6667 25.3333C24.8893 25.3333 25.112 25.3293 25.3333 25.32V21.804C23.6415 21.5529 21.9945 21.0603 20.4427 20.3413L18.6333 22.8747C17.9049 22.5916 17.1973 22.2575 16.516 21.8747L16.4387 21.8307C13.8234 20.3423 11.6577 18.1766 10.1693 15.5613L10.1253 15.484C9.74254 14.8027 9.40838 14.0951 9.12533 13.3667Z" fill="#FF5520"></path></g><defs><clipPath id="clip0_968_33565"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg> </span> </a>
       <p className="">
        +250 788 494 257
       </p>
       </div>
       <div className=" m-auto flex ">
       <a href="https://www.google.com/maps/place/Norrsken+House+Kigali/@-1.9511719,30.0578045,17z/data=!3m1!4b1!4m6!3m5!1s0x19dca5a86d814c61:0x7d3b83e12b1c11a9!8m2!3d-1.9511719!4d30.0599932!16s%2Fg%2F11rd26_3_h" target="_blank"> <span class="elementor-icon-list-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_968_33572)"><path d="M2.6665 6.66675L11.9998 2.66675L19.9998 6.66675L28.4038 3.06541C28.5053 3.02193 28.6159 3.00431 28.7259 3.01414C28.8358 3.02397 28.9416 3.06094 29.0337 3.12174C29.1258 3.18254 29.2014 3.26526 29.2537 3.36248C29.306 3.4597 29.3333 3.56837 29.3332 3.67875V25.3334L19.9998 29.3334L11.9998 25.3334L3.59584 28.9347C3.49439 28.9782 3.38373 28.9959 3.27379 28.986C3.16385 28.9762 3.05808 28.9392 2.96595 28.8784C2.87383 28.8176 2.79824 28.7349 2.74598 28.6377C2.69371 28.5405 2.66641 28.4318 2.6665 28.3214V6.66675ZM21.3332 25.8601L26.6665 23.5747V6.71075L21.3332 8.99608V25.8601ZM18.6665 25.6854V8.98141L13.3332 6.31475V23.0187L18.6665 25.6854ZM10.6665 23.0041V6.14008L5.33317 8.42541V25.2894L10.6665 23.0041Z" fill="#FF5520"></path></g><defs><clipPath id="clip0_968_33572"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg> </span>  </a>
       <p className="">
       Norrsken House Kigali
       </p>
       </div>

      </div>
      
      </div>
    </div>
  );
};

export default Landing;
