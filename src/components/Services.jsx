import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo2.jpg"
import Vision from "../img/vision.jpg"
import Mission from "../img/mission.JPG"

const Services = () => {

return (
  
    <div>
        <div className=" py-12 mb-5 text-center">
        <p className="font-Sans-serif; text-4xl w-11/12 font-light font-semibold leading-12 tracking-tight m-auto mt-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Your Data, Your Power!
        </p>
      </div>
      <div className="">
        <div className="w-full flex">
          <div className="w-1/2">
          
            <img
              className="text-white  m-auto h-72  mt-14 w-10/12 "
              src={Mission}
              alt="Workflow"
            />
          
          </div>
          <div className=" p-5 w-1/2 ml-auto">
             <p className=" w-10/12 font-light font-Sans-serif font-semibold text-2xl py-5 text-left m-auto sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl ">
                OUR MISSION
             </p>
             <p className=" w-10/12 font-Sans-serif text-2xl font-light leading-12 tracking-tight text-left m-auto  sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
             Empower our clients to harness the power of data by co-creating tools and solutions for evidence-based decisions
             </p>
          </div>
        </div>
        <div className="p-5 w-full flex">
          <div className="w-1/2">
             <p className=" w-10/12 font-light  font-Sans-serif font-semibold text-2xl py-5 text-left m-auto sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
                OUR VISION
             </p>
             <p className=" w-10/12 font-Sans-serif text-2xl font-light leading-12 tracking-tight text-left m-auto sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
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
      <div className="mt-14 mb-14 font-Sans-serif text-2xl font-medium leading-12 tracking-tight sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl " >
          OUR SERVICES
        </div>
      <div className="flex-col justify-between">
           <div>
           <div className="flex  py-5 bg-blue-100">
        
        <div className="w-3/12 text-left float-right m-auto"> 
          <h className="m-auto  font-Sans-serif text-2xl w-10/12 font-light leading-12 tracking-tight break-words sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
           Capacity Building
          </h>
        </div>
        <div className="w-7/12 ">
        <ul class="list-disc text-left w-10/12 font-Sans-serif font-light m-auto break-words m-10 sm:text-xl md:text-xl lg:text-2xl xl:text-2xl ">
               <li> Trainings</li>
               <li> Coaching and Mentorship</li>
               <li> Reasearch hub incubators</li>
               <li> Fellowship </li>
               
            </ul>
        </div>
        </div>        
           </div>

           <div className=" py-5">
           <div className="flex  py-5 bg-blue-100">
        
        <div className="w-3/12  text-left float-right m-auto"> 
          <h className="m-auto  font-Sans-serif text-2xl w-10/12 font-light leading-12 tracking-tight break-words sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
           Data Curation
          </h>
        </div>
        <div className="w-7/12 ">
        <ul class="list-disc text-left w-10/12 font-Sans-serif font-light m-auto break-words m-10 sm:text-xl md:text-xl lg:text-2xl xl:text-2xl ">
               <li> Data Quality assessment</li>
               <li> Data flow streamlined</li>
               <li> Metadata creation</li>
               <li> Data Cleaning </li>
               <li> Data integration</li>
            </ul>
        </div>
        
      </div>
           </div>

           <div>
           <div className="flex py-5 bg-blue-100">
        
        <div className="flex  py-5">
        
        <div className="w-4/12  text-left float-right m-auto"> 
          <h className="m-auto  font-Sans-serif text-2xl w-10/12 px-10 font-light leading-12 tracking-tight break-words sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
           Evidence Generation
          </h>
        </div>
        <div className="w-6/12 ">
        <ul class="list-disc text-left font-Sans-serif px-5  font-light m-auto break-words sm:text-xl md:text-xl lg:text-2xl xl:text-2xl ">
               <li> Support in Study design</li>
               <li> Data Analysis</li>
               <li>Evidence Synthesis</li>
               <li> Systematic reviews and Meta-analyses</li>
               <li> Evidence-based guidelines and Recommendations</li>
               <li> Support in Medical writing</li>
            </ul>
        </div>
        
      </div>
      </div>
           </div>

           <div className="py-5">
           <div className="flex py-5 ">
        
        <div className="flex  py-5 bg-blue-100 ">
        
        <div className="w-3/12 py-5 text-left float-right m-auto"> 
          <h className="m-auto  font-Sans-serif w-10/12 font-light text-2xl leading-12 tracking-tight break-words sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
           Monitoring, Evaluation, Accountability and Learning
          </h>
        </div>
        <div className="w-7/12 ">
        <ul class="list-disc text-left w-10/12 py-5 font-Sans-serif font-light m-auto break-words sm:text-xl md:text-xl lg:text-2xl xl:text-2xl ">
               <li> Designing monitoring and Evaluation frameworks</li>
               <li> Developing and Implementing monitoring and Evaluation plans</li>
               <li> Conducting evaluations</li>
               <li> Impact assessment </li>
               <li> Establishing accountability mechanisms </li>
               <li> Supporting organizational</li>
            </ul>
        </div>
        
      </div>
      
      </div>
           </div>
      </div>
      <div className="flex-col py-10">
        <div className="w-11/12 font-Sans-serif font-semibold font-light text-2xl py-5 text-left m-auto sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
            OUR VALUES
          </div>
       
        <div className="flex m-auto py-5">
          
          <div className="w-6/12">
            <p className="font-Sans-serif text-2xl w-10/12 font-light leading-12 tracking-tight text-left m-auto break-words text-left m-auto sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
            Principles, beliefs and guidance.
            </p>
          </div>
          <div className="w-6/12 float-right ">
          <ul class="list-disc text-left w-10/12 font-Sans-serif font-light m-auto  break-words sm:text-xl md:text-xl lg:text-2xl xl:text-2xl ">
               <li> Obsessed with our customer satisfaction</li>
               <li> Speed and qaulity in our delivery</li>
               <li> Constantly learning and innonating together</li>
               <li> A fun, creative, adventurous and open-minded environment with a pinch of weirdness </li>
               <li> Radical transparency</li>
            </ul>
            
          </div>
        </div>
        </div>   
         
        <div className="bg-black text-white flex-col mt-10">
      <div className="flex m-auto">
      <div className="mt-10  m-auto ">
                  <Link to="/">
                    <img src={logo} class="h-20 w-40 text-white" alt="Flowbite Logo" />
                  </Link>
                </div>
        <div className=" mt-10  m-auto">
        
            <p className="font-Sans-serif font-light leading-12 tracking-tight sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
             Platform
            </p>
            
          </div>
          <div className=" mt-10  m-auto">
          
            <p className="font-Sans-serif  font-light leading-12 tracking-tight sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
             About Us
            </p>
            
          
          </div>
        </div>
      <div className="flex m-auto mt-10">
       <div className="m-auto flex ">
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M3.99984 4H27.9998C28.3535 4 28.6926 4.14048 28.9426 4.39052C29.1927 4.64057 29.3332 4.97971 29.3332 5.33333V26.6667C29.3332 27.0203 29.1927 27.3594 28.9426 27.6095C28.6926 27.8595 28.3535 28 27.9998 28H3.99984C3.64622 28 3.30708 27.8595 3.05703 27.6095C2.80698 27.3594 2.6665 27.0203 2.6665 26.6667V5.33333C2.6665 4.97971 2.80698 4.64057 3.05703 4.39052C3.30708 4.14048 3.64622 4 3.99984 4ZM26.6665 9.65067L16.0958 19.1173L5.33317 9.62133V25.3333H26.6665V9.65067ZM6.0145 6.66667L16.0812 15.5493L26.0025 6.66667H6.0145Z" fill="#FF5520"></path> </svg>
       <p className="text-white sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
        info@africaqs.life
       </p>
       </div>
       <div className=" m-auto flex">
       <a href="/"> <span class="elementor-icon-list-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_968_33565)"><path d="M12.488 14.2427C13.7391 16.4406 15.5594 18.2609 17.7573 19.512L18.936 17.8613C19.1255 17.5959 19.4058 17.4092 19.7237 17.3364C20.0417 17.2637 20.3752 17.31 20.6613 17.4667C22.5471 18.4972 24.6296 19.117 26.772 19.2853C27.1064 19.3118 27.4185 19.4634 27.6461 19.7098C27.8737 19.9561 28 20.2793 28 20.6147V26.564C28.0001 26.8941 27.8777 27.2125 27.6565 27.4576C27.4353 27.7027 27.1311 27.857 26.8027 27.8907C26.096 27.964 25.384 28 24.6667 28C13.2533 28 4 18.7467 4 7.33333C4 6.616 4.036 5.904 4.10933 5.19733C4.14301 4.86893 4.29731 4.56469 4.54239 4.34351C4.78746 4.12233 5.10587 3.99993 5.436 4H11.3853C11.7207 3.99996 12.0439 4.12634 12.2902 4.35393C12.5366 4.58153 12.6882 4.89363 12.7147 5.228C12.883 7.37039 13.5028 9.45291 14.5333 11.3387C14.69 11.6248 14.7363 11.9583 14.6636 12.2763C14.5908 12.5942 14.4041 12.8745 14.1387 13.064L12.488 14.2427ZM9.12533 13.3667L11.6587 11.5573C10.9397 10.0055 10.4471 8.35845 10.196 6.66667H6.68C6.672 6.888 6.668 7.11067 6.668 7.33333C6.66667 17.2747 14.7253 25.3333 24.6667 25.3333C24.8893 25.3333 25.112 25.3293 25.3333 25.32V21.804C23.6415 21.5529 21.9945 21.0603 20.4427 20.3413L18.6333 22.8747C17.9049 22.5916 17.1973 22.2575 16.516 21.8747L16.4387 21.8307C13.8234 20.3423 11.6577 18.1766 10.1693 15.5613L10.1253 15.484C9.74254 14.8027 9.40838 14.0951 9.12533 13.3667Z" fill="#FF5520"></path></g><defs><clipPath id="clip0_968_33565"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg> </span> </a>
       <p className="sm:text-xl md:text-xl lg:text-2xl xl:text-2xl">
        +250 788 494 257
       </p>
       </div>
       <div className=" m-auto flex ">
       <a href="https://www.google.com/maps/place/Norrsken+House+Kigali/@-1.9511719,30.0578045,17z/data=!3m1!4b1!4m6!3m5!1s0x19dca5a86d814c61:0x7d3b83e12b1c11a9!8m2!3d-1.9511719!4d30.0599932!16s%2Fg%2F11rd26_3_h" target="_blank"> <span class="elementor-icon-list-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_968_33572)"><path d="M2.6665 6.66675L11.9998 2.66675L19.9998 6.66675L28.4038 3.06541C28.5053 3.02193 28.6159 3.00431 28.7259 3.01414C28.8358 3.02397 28.9416 3.06094 29.0337 3.12174C29.1258 3.18254 29.2014 3.26526 29.2537 3.36248C29.306 3.4597 29.3333 3.56837 29.3332 3.67875V25.3334L19.9998 29.3334L11.9998 25.3334L3.59584 28.9347C3.49439 28.9782 3.38373 28.9959 3.27379 28.986C3.16385 28.9762 3.05808 28.9392 2.96595 28.8784C2.87383 28.8176 2.79824 28.7349 2.74598 28.6377C2.69371 28.5405 2.66641 28.4318 2.6665 28.3214V6.66675ZM21.3332 25.8601L26.6665 23.5747V6.71075L21.3332 8.99608V25.8601ZM18.6665 25.6854V8.98141L13.3332 6.31475V23.0187L18.6665 25.6854ZM10.6665 23.0041V6.14008L5.33317 8.42541V25.2894L10.6665 23.0041Z" fill="#FF5520"></path></g><defs><clipPath id="clip0_968_33572"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg> </span>  </a>
       <p className="sm:text-xl md:text-xl lg:text-xl xl:text-xl">
       Norrsken House Kigali
       </p>
       </div>

      </div>
      
      </div>

         
        
    </div>



 );




};

export default Services;