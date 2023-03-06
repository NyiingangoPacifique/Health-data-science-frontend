import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../slices/authSlice";
import { toast } from "react-toastify";
import logo from "../img/logo.jpeg"

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
  const [svgSearch, setSvgSearch] = useState(searchMenu); const [textColor, seTextColor] = useState("bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-4 px-8 hover:border-transparent rounded-lg text-black border border-black ");
 
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
                    <img src={logo} class="h-20 w-40 text-white" alt="Flowbite Logo" />
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
                          <button className={`${textColor}`}><a href="#contact" class="btn block py-2 pr-4 pl-3 text-orange-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-center">Logout</a></button>
                          
                        </Logout>
                      ) : (
                        
                         <button className={`${textColor}`}>
                         <Link to="/login">Login</Link>
                         </button>
                      )}
                    
                    
        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
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
