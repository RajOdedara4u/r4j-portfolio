import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Earth from "./Earth";
const Header = () => {
  window.onscroll = function () {
    const header = document.getElementById("header");
    if (window.scrollY > 60) {
      header.classList.remove("absolute");
      header.classList.add("fixed");
      header.classList.add("z-20");
      header.classList.remove("to-[#0000]");
      header.classList.add("to-[#2a2446]");
    } else {
      header.classList.remove("to-[#2a2446]");
      header.classList.add("to-[#0000]");
      header.classList.remove("fixed");
      header.classList.remove("z-20");
      header.classList.add("absolute");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        id="header"
        className={`w-[100%] bg-gradient-to-r from-[#8121D0] via-[#9333ea]  animate__animated animate__fadeInDownBig py-3 z-10 ltab:py-5  absolute flex`}
      >
        <div className="w-[100%] px-3 mx-auto flex flex-row justify-between">
          <div className="  flex items-center font-bold font-serif max-[768px]:w-[50%]">
            <h1 className=" text-[0.7rem] md:text-[1rem] font-mono font-bold text-[#e2e2e2] flex justify-center items-center gap-2">
              <div className="h-[0.6rem] w-[0.6rem] rounded-full bg-green-400 flex"></div>{" "}
              Available For Work
            </h1>
          </div>
          <div className=" z-20 flex justify-center max-[1000px]:ml-20  ">
            <button className=" min-[769px]:hidden " onClick={toggleMenu}>
              <svg
                className="ast-mobile-svg ast-menu-svg h-[28px] fill-white hover:fill-[#e4cb86] w-[28px]"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
              </svg>
            </button>
            <ul className="max-[769px]:hidden flex flex-row  text-[1.4rem] mx-auto items-center gap-10 ">
              {["home", "about", "skills", "projects", "services"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-[#e2e2e2]  text-[16px] cursor-pointer font-bold hover:text-[#e4cb86]"
                  >
                    <Link to={item} smooth={true} duration={700}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div
          className={`fixed  animate__animated  animate__fadeInLeft  h-screen z-50 max-w-[100%] w-full bg-[#2a2446] flex flex-col  justify-between  min-[769px]:hidden`}
        >
          <Earth />
          <div className="w-full flex justify-between px-3 py-2">
            <h1 className=" text-[1.4rem] font-mono font-bold text-[#e2e2e2] flex gap-1 items-end">
              WEB
              <p className="font-semibold font-sans text-[1rem]">Developer</p>
            </h1>
            <button onClick={toggleMenu} className="w-5">
              <svg
                fill="#ffffff"
                className="full"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490 490"
                xmlSpace="preserve"
              >
                <polygon
                  points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
           489.292,457.678 277.331,245.004 489.292,32.337 "
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col  text-[1.4rem] mx-auto items-center gap-[3rem] ">
            {["home", "about", "skills", "projects", "services"].map((item) => (
              <li
                key={item}
                className="text-[#ffffff] text-[1.2rem] cursor-pointer font-semibold font-serif"
              >
                <Link
                  onClick={toggleMenu}
                  to={item}
                  smooth={true}
                  duration={700}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex w-full my-2  justify-evenly items-center">
            <a
              href="https://www.instagram.com/save_point4u/"
              className=" dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 fill-gray-500 dark:hover:fill-white"
                viewBox="0 0 2476 2476"
                id="instagram"
              >
                <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
              </svg>
              <span className="sr-only">instagram page</span>
            </a>
            <a
              href="https://www.youtube.com/@Raj_odedara4u"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 fill-gray-500 dark:hover:fill-white"
                xmlSpace="preserve"
                viewBox="0 0 16 16"
                id="youtube"
              >
                <path
                  fillRule="evenodd"
                  d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Youtube community</span>
            </a>
            <a
              href="https://x.com/RAJBHAI4955"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://github.com/RajOdedara4u"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="https://www.linkedin.com/in/raj-maher" className=" ms-5">
              <svg
                className="fill-gray-500 hover:fill-gray-900 dark:hover:fill-white w-6"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 128 128"
                viewBox="0 0 128 128"
                id="linkdin"
              >
                <path
                  fillRule="evenodd"
                  d="M72.658 52.912c7.188-8.265 15.318-12.457 25.597-11.951 16.723.822 28.493 12.464 29.339 30.639.743 16.008.216 32.072.33 48.108.028 3.848-1.774 5.286-5.467 5.193-4.947-.125-9.912-.239-14.847.049-4.896.286-6.758-1.679-6.674-6.542.193-10.887.074-21.782.053-32.673-.007-2.968.03-5.95-.202-8.904-.715-9.143-6.08-14.661-14.034-14.599-8.175.063-14.789 6.633-14.933 15.374-.211 12.868-.084 25.741-.111 38.612-.019 8.618-.026 8.618-8.535 8.674-18.4.118-18.393.118-18.4-18.286-.007-18.811.13-37.627-.144-56.434-.079-5.446 1.742-7.627 7.172-7.118 3.14.295 6.331.033 9.501.046C70.761 43.142 70.761 43.147 72.658 52.912zM1.921 83.654c0-11.282.207-22.569-.091-33.842-.137-5.272 1.876-7.097 6.958-6.784 4.93.302 9.896.17 14.84.065 3.714-.077 5.393 1.435 5.379 5.27-.088 23.751-.1 47.499-.054 71.25.007 3.802-1.637 5.369-5.376 5.29-5.341-.114-10.692-.156-16.029.021-4.097.137-5.636-1.614-5.592-5.646.13-11.874.046-23.751.046-35.625C1.977 83.654 1.949 83.654 1.921 83.654zM15.182 31.319C6.494 31.282.059 25.299 0 17.203-.06 9.245 6.582 3.029 15.147 3.023c9.32-.005 15.632 5.739 15.595 14.19C30.702 25.819 24.592 31.356 15.182 31.319z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">linkdin account</span>
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Header;
