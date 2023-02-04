import React, { useState } from "react";
import logo from "./images/logo1.png";

const svgClose = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`;
const svgMenu = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
`;

const capacity = "https://gruninfoundation.org/wp-content/uploads/2019/12/GG_Illustration_Pillars_Capacity_1075x715-1.png";
// const Explaination ="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
const searchMenu=`<svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>`;
const searchClose=`<svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>`;

const evidence = "https://platformlifesciences.com/wp-content/uploads/2022/09/image-expert-corner@3x.png"
const together= "https://platformlifesciences.com/wp-content/uploads/2022/09/image-press-and-publications@3x.png"

function Nav() {
 
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [color, setColor] = useState("bg-white");
  const [svgSearch, setSvgSearch] = useState(searchMenu);
  const [textColor, seTextColor] = useState("bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-4 px-8 hover:border-transparent rounded text-black border border-black");
  const [menu, setMenu] = useState(svgMenu);
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setColor("bg-black");
      setSvgSearch(searchClose);
      seTextColor("bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-4 px-8 hover:border-transparent rounded text-white border border-white");
      setMenu(svgClose);
    } else {
      setColor("bg-white");
      setSvgSearch(searchMenu);
      seTextColor("bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-4 px-8 hover:border-transparent rounded text-black border border-black");
      setMenu(svgMenu)
    }
  };
  return (
    <div>
      <div className={`${color}`}>
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="items-center h-16">
              <div className="flex justify-between my-8">
                <div className="flex-shrink-0">
                  <img
                    className="h-16 w-32 text-white"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <button className={`${textColor}`}>
                      Login
                    </button>
                    <button>
                      <div dangerouslySetInnerHTML={{ __html: svgSearch }} />
                    </button>
                    <button onClick={handleClick}
                        className={`${color}`}>
                      <div dangerouslySetInnerHTML={{ __html: menu }} />
                    </button>
        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {isCollapsed ?(
        <div>
          <div className="pl-20 pr-20">
            <div className="max-w-screen-xl flex">
              <div className="w-5/12 border-r border-white">
                <div className="w-full relative">
                  <ul className="mt-8 p-0">
                    <li className="relative flex mt-12">
                      <p className="font-sans text-5xl font-light text-white leading-10 tracking-widest">Our Approach</p>
                      <div className="my-auto ml-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </li>
                    <li className="relative flex mt-12">
                      <p className="font-sans text-5xl font-light text-white leading-10 tracking-widest">Our Approach</p>
                      <div className="my-auto ml-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </li>
                    <li className="relative flex mt-12">
                      <p className="font-sans text-5xl font-light text-white leading-10 tracking-widest">Our Approach</p>
                      <div className="my-auto ml-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div>
                    {/* /add email here */}
                  </div>
                </div>
              </div>
              <div className="w-7/12 flex justify-around">
                <div className="w-5/12">
                  <div>
                    <h2 className="font-sans text-2xl font-light text-white mb-2 leading-6">Scientific Evidence</h2>
                    <img
                    className="h-42 w-62"
                    src={evidence}
                    alt="Workflow"
                  />
                  </div>
                  <div className="flex">
                    <p className="mt-auto mb-auto text-white">Expert Corner</p>
                    <div class="relative flex py-5 items-center w-6/12">
                        <div class="w-6/12 ml-4 flex-grow border-dashed border-t border-white"></div>
                    </div>
                  </div>
                  <div className="relative flex mb-4">
                      <p className="font-sans text-2xl font-light text-white leading-10 tracking-widest">Our Approach</p>
                      <div className="my-auto ml-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                  </div>
                </div>
                <div className="w-5/12">  
                <h2 className="font-sans text-2xl font-light text-white mb-2 leading-6">Scientific Evidence</h2>
                  <img
                    className="h-42 w-62"
                    src={together}
                    alt="Workflow"
                  />
                  <div className="flex">
                    <p className="mt-auto mb-auto text-white">Press & Publications</p>
                    <div class="relative flex py-5 items-center w-6/12">
                        <div class="w-6/12 ml-4 flex-grow border-dashed border-t border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
          </div>
        ):<></>}
        
      
      </div>
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
      
      <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p>This content  visible when not collapsed</p>
            </div>
          </header>
    </div>
   
  );
  

}

export default Nav;