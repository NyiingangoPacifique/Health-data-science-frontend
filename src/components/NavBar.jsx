import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../slices/authSlice";
import { toast } from "react-toastify";
import logo from "../img/logo1.png"

const svgClose = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`;
const svgMenu = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
`;

// const Explaination ="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
const searchMenu=`<svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>`;
const searchClose=`<svg class="h-6 w-6 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>`;

const evidence = "https://platformlifesciences.com/wp-content/uploads/2022/09/image-expert-corner@3x.png"
const together= "https://platformlifesciences.com/wp-content/uploads/2022/09/image-press-and-publications@3x.png"
const NavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
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
    <>
    <div className={`${color}`}>
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="items-center h-16">
              <div className="flex justify-between my-8">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img src={logo} class="h-16 w-32 text-white" alt="Flowbite Logo" />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {auth._id ? (
                        <Logout
                          onClick={() => {
                            dispatch(logoutUser(null));
                            toast.warning("Logged out!", { position: "bottom-left" });
                          }}
                        >
                          <a href="#contact" class="btn block py-2 pr-4 pl-3 text-orange-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
                          
                        </Logout>
                      ) : (
                        <AuthLinks>
                          <button className={`${textColor}`}>
                          <Link to="/login">Login</Link>
                          </button>
                          <button className={`${textColor}`}>
                          <Link to="/register">Register</Link>
                          </button>
                          
                        </AuthLinks>
                      )}
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
    </>
  );
};

export default NavBar;

const AuthLinks = styled.div`
  a {
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

const Logout = styled.div`
  color: white;
  cursor: pointer;
`;
