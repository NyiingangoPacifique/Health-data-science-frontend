import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpeg"

const Services = () => {

return (
  
    <div>
         
        <div className="w-full mt-20 ">
             <p className="mt-15 mb-10 font-Sans-serif text-2xl font-light leading-12 tracking-tight ">
                OUR SERVICES
             </p>
             <p className="font-Sans-serif text-5xl font-light leading-12 tracking-tight ml-32 mr-32 mb-10">
             Providing the expertise needed to turn data into a strategic asset
             </p>
          <div className=" p-5 w-1/2 ml-auto bg-blue-100">
            
             <p className=" font-Sans-serif text-2xl py-5 text-left">
             Increasing data literacy and research outputs 
             </p>
             <ul class="list-decimal text-left ml-4 font-Sans-serif text-2xl font-light">
               <li>Provide capacity building in statistics and research</li>
               <li>Provide capacity building in research writing </li>
               <li>Provide statistical support </li>
            </ul>
          </div>
        </div>
        <div className="p-5 w-1/2">
          <div className="">
             <p className=" font-Sans-serif text-2xl py-5 text-left ml-24  ">
             Design and implement a six-sigma system to improve data infrastructure
             </p>
             <ul class="list-decimal text-left ml-28 font-Sans-serif text-2xl font-light">
               <li>Mapping of existing data ecosystem</li>
               <li>Support in creation of metadata (s)</li>
               <li>Designing a six-sigma system to improve data quality  </li>
            </ul>
          </div>
          <div className="w-3/12"></div>
        </div>
        <div className="w-full mt-10">
          <div className=" p-5 w-1/2 ml-auto bg-blue-100">
             <p className=" font-Sans-serif text-2xl py-5 text-left">
             Design automated data curation AI algorithm
             </p>
             <ul class="list-decimal text-left ml-4 w-10/12 text-2xl font-light">
               <li>Working with healthcare facility to design automated data cleaning script</li>
               <li>Creating automated script to transform existing data into research-grade format </li>
               
            </ul>
          </div>
        </div>
        
      <div className="bg-black text-white flex-col">
      <div className="flex m-14">
      <div className="mt-10 ml-10 mr-72 ">
                  <Link to="/">
                    <img src={logo} class="h-20 w-40 text-white" alt="Flowbite Logo" />
                  </Link>
                </div>
        <div className=" mt-10 ml-4 mr-72">
        <li className="list-none">
            <p className="font-Sans-serif text-2xl font-light leading-12 tracking-tight">
             Platform
            </p>
            <button class=" text-white font-bold rounded-lg justify-start mt-5">
                Take Lessons
              </button>
            <p className="font-bold">
              Results
            </p>
          </li>
          </div>
          <div className=" mt-10">
          <li className="list-none">
            <p className="font-Sans-serif text-2xl font-light leading-12 tracking-tight">
             About
            </p>
            <p className="mt-5 font-bold">
            About Us
            </p>
            <p className="font-bold">
            Contact Us
            </p>
          </li>
          </div>
        </div>
      <div className="flex mt-10 ml-10">
       <div className="ml-14 flex w-1/3">
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M3.99984 4H27.9998C28.3535 4 28.6926 4.14048 28.9426 4.39052C29.1927 4.64057 29.3332 4.97971 29.3332 5.33333V26.6667C29.3332 27.0203 29.1927 27.3594 28.9426 27.6095C28.6926 27.8595 28.3535 28 27.9998 28H3.99984C3.64622 28 3.30708 27.8595 3.05703 27.6095C2.80698 27.3594 2.6665 27.0203 2.6665 26.6667V5.33333C2.6665 4.97971 2.80698 4.64057 3.05703 4.39052C3.30708 4.14048 3.64622 4 3.99984 4ZM26.6665 9.65067L16.0958 19.1173L5.33317 9.62133V25.3333H26.6665V9.65067ZM6.0145 6.66667L16.0812 15.5493L26.0025 6.66667H6.0145Z" fill="#FF5520"></path> </svg>
       <p className="text-white ml-3">
        aqs@life
       </p>
       </div>
       <div className="w-1/3 flex">
       <a href=""> <span class="elementor-icon-list-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_968_33565)"><path d="M12.488 14.2427C13.7391 16.4406 15.5594 18.2609 17.7573 19.512L18.936 17.8613C19.1255 17.5959 19.4058 17.4092 19.7237 17.3364C20.0417 17.2637 20.3752 17.31 20.6613 17.4667C22.5471 18.4972 24.6296 19.117 26.772 19.2853C27.1064 19.3118 27.4185 19.4634 27.6461 19.7098C27.8737 19.9561 28 20.2793 28 20.6147V26.564C28.0001 26.8941 27.8777 27.2125 27.6565 27.4576C27.4353 27.7027 27.1311 27.857 26.8027 27.8907C26.096 27.964 25.384 28 24.6667 28C13.2533 28 4 18.7467 4 7.33333C4 6.616 4.036 5.904 4.10933 5.19733C4.14301 4.86893 4.29731 4.56469 4.54239 4.34351C4.78746 4.12233 5.10587 3.99993 5.436 4H11.3853C11.7207 3.99996 12.0439 4.12634 12.2902 4.35393C12.5366 4.58153 12.6882 4.89363 12.7147 5.228C12.883 7.37039 13.5028 9.45291 14.5333 11.3387C14.69 11.6248 14.7363 11.9583 14.6636 12.2763C14.5908 12.5942 14.4041 12.8745 14.1387 13.064L12.488 14.2427ZM9.12533 13.3667L11.6587 11.5573C10.9397 10.0055 10.4471 8.35845 10.196 6.66667H6.68C6.672 6.888 6.668 7.11067 6.668 7.33333C6.66667 17.2747 14.7253 25.3333 24.6667 25.3333C24.8893 25.3333 25.112 25.3293 25.3333 25.32V21.804C23.6415 21.5529 21.9945 21.0603 20.4427 20.3413L18.6333 22.8747C17.9049 22.5916 17.1973 22.2575 16.516 21.8747L16.4387 21.8307C13.8234 20.3423 11.6577 18.1766 10.1693 15.5613L10.1253 15.484C9.74254 14.8027 9.40838 14.0951 9.12533 13.3667Z" fill="#FF5520"></path></g><defs><clipPath id="clip0_968_33565"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg> </span> </a>
       <p className="ml-3">
        +250 788 494 257
       </p>
       </div>
       <div className="w-1/3 flex ">
       <a href="https://www.google.com/maps/place/1505+W+2nd+Ave,+Vancouver,+BC+V6J+1H2,+Canada/@49.2659389,-123.1537767,13z/data=!4m5!3m4!1s0x548673ced1cf1367:0xc96d451174ad2612!8m2!3d49.2698875!4d-123.1379953" target="_blank"> <span class="elementor-icon-list-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_968_33572)"><path d="M2.6665 6.66675L11.9998 2.66675L19.9998 6.66675L28.4038 3.06541C28.5053 3.02193 28.6159 3.00431 28.7259 3.01414C28.8358 3.02397 28.9416 3.06094 29.0337 3.12174C29.1258 3.18254 29.2014 3.26526 29.2537 3.36248C29.306 3.4597 29.3333 3.56837 29.3332 3.67875V25.3334L19.9998 29.3334L11.9998 25.3334L3.59584 28.9347C3.49439 28.9782 3.38373 28.9959 3.27379 28.986C3.16385 28.9762 3.05808 28.9392 2.96595 28.8784C2.87383 28.8176 2.79824 28.7349 2.74598 28.6377C2.69371 28.5405 2.66641 28.4318 2.6665 28.3214V6.66675ZM21.3332 25.8601L26.6665 23.5747V6.71075L21.3332 8.99608V25.8601ZM18.6665 25.6854V8.98141L13.3332 6.31475V23.0187L18.6665 25.6854ZM10.6665 23.0041V6.14008L5.33317 8.42541V25.2894L10.6665 23.0041Z" fill="#FF5520"></path></g><defs><clipPath id="clip0_968_33572"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg> </span>  </a>
       <p className="ml-3">
       Norrsken House Kigali
       </p>
       </div>

      </div>
      <div>

      </div>
      <div>

      </div>
      </div>

         
        
    </div>



 );




};

export default Services;