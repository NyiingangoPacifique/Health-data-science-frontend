import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth._id) {
      navigate("/");
    }
  }, [auth._id, navigate]);

  return (
    <div className="home-container">
      <div id="home" class="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
        <div class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start sm:mt-16 md:mt-16">
          {/* <!--Left Col--> */}
          <div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0 sm:mt-16 mt-20">
            <h1 data-aos="fade-right" data-aos-once="true" class="my-4 text-5xl font-bold leading-tight text-darken">
              Your are now logeed in you can access our Course and test
            </h1>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default Home;
