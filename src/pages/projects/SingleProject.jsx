import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const SingleProject = ({
  v,
  name,
  dec,
  topic,
  img,
  link,
  codeLink,
  techonology,
}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  let a = "flex-row-reverse";
  let b = "flex-row";
  return (
    <>
      <div
        data-aos="fade-up"
        className={`w-[100%] gap-3 llap:gap-2 max-[1244px]:py-5   flex  max-[1244px]:flex-col ${
          v % 2 === 0 ? b : a
        }`}
      >
        <div className=" w-full llap:w-[60%] max-[1244px]:my-0 my-[50px] mtab:px-2 flex mx-auto">
          <img src={img} className="w-full rounded-lg" />
        </div>
        <div className="bg-[#DCCFED]  my-[50px] max-[1244px]:my-0 mtab:mx-3 max-[1244px]:max-w-[100%]  p-4 rounded-lg  ">
          <div className="font-bold flex flex-col ltab:flex-row text-xl ltab:text-2xl  ">
            {name}
            <div className="flex gap-2 ltab:my-0 ltab:gap-0 my-1">
              <a
                href={link}
                className="flex backdrop-blur-sm bg-blue-500/20 justify-center items-center mtab:text-[1rem] mtab:mx-5 text-blue-700 gap-2 hover:bg-blue-500/30 hover:underline px-2 rounded-lg text-[0.8rem]"
              >
                Demo
                <svg viewBox="0 0 112.55 122.88" className="w-3 mtab:w-4">
                  <g>
                    <path
                      fillRule="evenodd"
                      fill="blue"
                      clipRule="evenodd"
                      d="M104.41,6.1c6.26,5.13,6.93,11.83,7.62,13.46l0.34,2.5c0.9,5.39-1.65,12.75-5.58,17.38L89.2,59.84 c-6.76,7.84-18.04,10.44-27.48,6.37l-0.03,0.04c3.45,5.63,3.15,9.64,3.46,10.57c0.9,5.41-1.65,12.74-5.58,17.38L41.97,114.6 c-8.53,9.89-23.58,11.1-33.53,2.61c-5.04-5.04-7.84-9.31-8.37-16.49c-0.47-6.24,1.53-12.37,5.59-17.18l17.92-20.79 c5.01-5.14,7.5-5.86,13.33-7.47l2.5-0.34l10.66,1.56c0.22,0.08,0.44,0.18,0.65,0.27l0.03-0.04c-5.35-8.71-4.57-20.11,2.14-27.97 L70.48,8.37c4.11-4.77,9.99-7.71,16.15-8.19c5.37-0.89,12.77,1.64,17.38,5.58L104.41,6.1L104.41,6.1z M74.23,51.71l-3.66,4.24 l0.64,0.01l0.02,0l0.6-0.02l0.01,0l0.14-0.01l0.02,0c2.11-0.16,4.19-0.88,5.96-2.14c0.34-0.24,0.68-0.51,1.02-0.82l0,0l0,0 c0.3-0.27,0.62-0.59,0.93-0.95l0,0l0.12-0.13l17.45-20.24c1.47-1.7,2.36-3.75,2.68-5.86c0.07-0.44,0.11-0.87,0.13-1.26 c0.02-0.41,0.01-0.85-0.01-1.28l0-0.05l-0.01-0.11c-0.16-2.11-0.88-4.19-2.14-5.96c-0.24-0.34-0.51-0.67-0.78-0.97l-0.03-0.04 c-0.29-0.32-0.61-0.64-0.94-0.94l0,0l-0.06-0.05l-0.05-0.05L96.16,15c-1.69-1.43-3.7-2.3-5.78-2.61l-0.03,0 c-0.43-0.06-0.85-0.11-1.24-0.12c-0.41-0.02-0.84-0.01-1.27,0.01l-0.07,0l-0.1,0.01c-2.11,0.16-4.19,0.88-5.96,2.14 c-0.34,0.24-0.68,0.51-0.98,0.78l-0.03,0.03c-0.33,0.29-0.64,0.61-0.94,0.95l0,0l-0.12,0.13L62.2,36.55 c-1.47,1.7-2.36,3.75-2.68,5.86h0c-0.06,0.43-0.11,0.86-0.12,1.26c-0.02,0.41-0.01,0.85,0.01,1.28l0.01,0.15l0,0.01v0.02 c0.03,0.46,0.09,0.91,0.18,1.37l3.58-4.15l0.1-0.12l0.13-0.14l0,0l0.02-0.02c1.29-1.39,3.02-2.18,4.79-2.3 c1.78-0.13,3.62,0.39,5.1,1.6l0,0l0.02,0.01l0.09,0.08l0.02,0.02l0.02,0.02l0.01,0.01l0.02,0.01l0.07,0.06l0,0l0,0 c2.06,1.83,2.82,4.6,2.21,7.13c-0.12,0.5-0.3,1-0.54,1.48c-0.22,0.46-0.51,0.9-0.83,1.31l-0.02,0.02l-0.03,0.04l0,0l-0.01,0.02 l-0.1,0.12l0,0L74.23,51.71L74.23,51.71z M40.06,80.23L40.06,80.23c2.33,2.01,5.88,1.75,7.89-0.58l5.58-6.47 c0.65,1.45,1.04,3,1.16,4.57c0.25,3.44-0.79,6.97-3.19,9.75l-17.46,20.24c-2.4,2.79-5.73,4.34-9.16,4.59 c-3.38,0.25-6.84-0.75-9.59-3.05l-0.16-0.14c-2.78-2.4-4.34-5.73-4.59-9.16c-0.25-3.4,0.76-6.89,3.1-9.65l0.09-0.1l17.25-20l0,0 l0,0l0.21-0.24c2.4-2.78,5.73-4.34,9.16-4.59c1.58-0.12,3.18,0.04,4.71,0.47l-5.58,6.47C37.47,74.67,37.73,78.22,40.06,80.23 L40.06,80.23z"
                    />
                  </g>
                </svg>
              </a>
              <a
                href={codeLink}
                className="flex backdrop-blur-sm bg-blue-500/20 justify-center items-center mtab:text-[1rem]  text-blue-700 gap-2 hover:bg-blue-500/30 hover:underline px-2 rounded-lg text-[0.8rem]"
              >
                Code
                <svg viewBox="0 0 112.55 122.88" className="w-3 mtab:w-4">
                  <g>
                    <path
                      fillRule="evenodd"
                      fill="blue"
                      clipRule="evenodd"
                      d="M104.41,6.1c6.26,5.13,6.93,11.83,7.62,13.46l0.34,2.5c0.9,5.39-1.65,12.75-5.58,17.38L89.2,59.84 c-6.76,7.84-18.04,10.44-27.48,6.37l-0.03,0.04c3.45,5.63,3.15,9.64,3.46,10.57c0.9,5.41-1.65,12.74-5.58,17.38L41.97,114.6 c-8.53,9.89-23.58,11.1-33.53,2.61c-5.04-5.04-7.84-9.31-8.37-16.49c-0.47-6.24,1.53-12.37,5.59-17.18l17.92-20.79 c5.01-5.14,7.5-5.86,13.33-7.47l2.5-0.34l10.66,1.56c0.22,0.08,0.44,0.18,0.65,0.27l0.03-0.04c-5.35-8.71-4.57-20.11,2.14-27.97 L70.48,8.37c4.11-4.77,9.99-7.71,16.15-8.19c5.37-0.89,12.77,1.64,17.38,5.58L104.41,6.1L104.41,6.1z M74.23,51.71l-3.66,4.24 l0.64,0.01l0.02,0l0.6-0.02l0.01,0l0.14-0.01l0.02,0c2.11-0.16,4.19-0.88,5.96-2.14c0.34-0.24,0.68-0.51,1.02-0.82l0,0l0,0 c0.3-0.27,0.62-0.59,0.93-0.95l0,0l0.12-0.13l17.45-20.24c1.47-1.7,2.36-3.75,2.68-5.86c0.07-0.44,0.11-0.87,0.13-1.26 c0.02-0.41,0.01-0.85-0.01-1.28l0-0.05l-0.01-0.11c-0.16-2.11-0.88-4.19-2.14-5.96c-0.24-0.34-0.51-0.67-0.78-0.97l-0.03-0.04 c-0.29-0.32-0.61-0.64-0.94-0.94l0,0l-0.06-0.05l-0.05-0.05L96.16,15c-1.69-1.43-3.7-2.3-5.78-2.61l-0.03,0 c-0.43-0.06-0.85-0.11-1.24-0.12c-0.41-0.02-0.84-0.01-1.27,0.01l-0.07,0l-0.1,0.01c-2.11,0.16-4.19,0.88-5.96,2.14 c-0.34,0.24-0.68,0.51-0.98,0.78l-0.03,0.03c-0.33,0.29-0.64,0.61-0.94,0.95l0,0l-0.12,0.13L62.2,36.55 c-1.47,1.7-2.36,3.75-2.68,5.86h0c-0.06,0.43-0.11,0.86-0.12,1.26c-0.02,0.41-0.01,0.85,0.01,1.28l0.01,0.15l0,0.01v0.02 c0.03,0.46,0.09,0.91,0.18,1.37l3.58-4.15l0.1-0.12l0.13-0.14l0,0l0.02-0.02c1.29-1.39,3.02-2.18,4.79-2.3 c1.78-0.13,3.62,0.39,5.1,1.6l0,0l0.02,0.01l0.09,0.08l0.02,0.02l0.02,0.02l0.01,0.01l0.02,0.01l0.07,0.06l0,0l0,0 c2.06,1.83,2.82,4.6,2.21,7.13c-0.12,0.5-0.3,1-0.54,1.48c-0.22,0.46-0.51,0.9-0.83,1.31l-0.02,0.02l-0.03,0.04l0,0l-0.01,0.02 l-0.1,0.12l0,0L74.23,51.71L74.23,51.71z M40.06,80.23L40.06,80.23c2.33,2.01,5.88,1.75,7.89-0.58l5.58-6.47 c0.65,1.45,1.04,3,1.16,4.57c0.25,3.44-0.79,6.97-3.19,9.75l-17.46,20.24c-2.4,2.79-5.73,4.34-9.16,4.59 c-3.38,0.25-6.84-0.75-9.59-3.05l-0.16-0.14c-2.78-2.4-4.34-5.73-4.59-9.16c-0.25-3.4,0.76-6.89,3.1-9.65l0.09-0.1l17.25-20l0,0 l0,0l0.21-0.24c2.4-2.78,5.73-4.34,9.16-4.59c1.58-0.12,3.18,0.04,4.71,0.47l-5.58,6.47C37.47,74.67,37.73,78.22,40.06,80.23 L40.06,80.23z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className=" text-gray-800 pt-1">
            {dec}
            <ul className="px-2  text-black  mt-3">
              {topic.map((obj, index) => {
                return (
                  <div key={index} className="flex my-1 gap-2  items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      className="h-4"
                      viewBox="0 0 32 32"
                    >
                      <path d="M18.85,6.41c.15,.21,.38,.33,.62,.33,.14,0,.29-.04,.42-.13,.34-.23,.43-.7,.2-1.04l-1.08-1.59c-.23-.34-.7-.43-1.04-.2-.34,.23-.43,.7-.2,1.04l1.08,1.59Z" />
                      <path d="M7.17,11.75c.09,.03,.18,.05,.27,.05,.3,0,.59-.18,.7-.48l.73-1.91c.15-.39-.04-.82-.43-.97-.38-.15-.82,.04-.97,.43l-.73,1.91c-.15,.39,.04,.82,.43,.97Z" />
                      <path d="M24.68,18.13c-.41-.04-.78,.25-.83,.66l-.2,1.81c-.04,.41,.25,.78,.67,.83,.03,0,.05,0,.08,0,.38,0,.7-.28,.75-.67l.2-1.81c.04-.41-.25-.78-.67-.83Z" />
                      <path d="M12.35,24.31l-1.66,.39c-.4,.09-.65,.5-.56,.9,.08,.35,.39,.58,.73,.58,.06,0,.12,0,.17-.02l1.66-.39c.4-.09,.65-.5,.56-.9-.1-.4-.51-.65-.9-.56Z" />
                      <path d="M30.73,16.27c0-.09,.01-.18,.01-.27C30.75,7.87,24.13,1.25,16,1.25S1.72,7.43,1.29,15.19c-.04,.09-.07,.19-.07,.3,0,.08,.02,.16,.04,.24,0,.09-.01,.18-.01,.27,0,8.13,6.62,14.75,14.75,14.75s14.28-6.18,14.71-13.94c.04-.09,.07-.19,.07-.3,0-.08-.02-.16-.04-.24ZM16,2.75c6.94,0,12.64,5.36,13.19,12.16-.18-.09-.37-.16-.62-.16-.74,0-1.12,.53-1.33,.81-.03,.04-.07,.1-.1,.14-.03-.04-.07-.1-.1-.14-.2-.28-.58-.81-1.32-.81s-1.12,.53-1.32,.81c-.03,.04-.07,.1-.1,.14-.03-.04-.07-.1-.1-.14-.13-.18-.34-.45-.66-.63-.52-3.7-3.69-6.55-7.53-6.55s-7.04,2.88-7.54,6.6c-.2-.13-.44-.24-.76-.24-.74,0-1.12,.53-1.33,.81-.03,.04-.07,.1-.1,.14-.03-.04-.07-.1-.1-.14-.2-.28-.58-.81-1.32-.81s-1.12,.53-1.32,.81c-.03,.04-.07,.1-.1,.14-.03-.04-.07-.1-.1-.14-.11-.15-.28-.38-.52-.55C3.31,8.17,9.03,2.75,16,2.75Zm6.12,13.25c0,3.37-2.74,6.12-6.12,6.12-3.19,0-5.82-2.46-6.09-5.59,0,0,0,0,0-.01,0,0,0-.02,0-.03-.01-.16-.02-.32-.02-.48,0-3.37,2.74-6.11,6.11-6.11,3.19,0,5.82,2.46,6.09,5.59,0,0,0,.01,0,.02,0,.01,0,.02,0,.03,.01,.16,.02,.32,.02,.48Zm-6.12,13.25c-6.94,0-12.64-5.36-13.19-12.16,.17,.09,.37,.16,.62,.16,.74,0,1.12-.53,1.32-.82,.03-.04,.07-.09,.1-.14,.03,.04,.07,.1,.1,.14,.2,.28,.58,.81,1.32,.81s1.12-.53,1.32-.81c.03-.04,.07-.1,.1-.14,.03,.04,.07,.1,.1,.14,.13,.18,.34,.45,.66,.63,.52,3.7,3.69,6.55,7.53,6.55s7.04-2.88,7.54-6.6c.2,.13,.44,.24,.75,.24,.74,0,1.12-.53,1.32-.82,.03-.04,.07-.09,.1-.14,.03,.04,.07,.1,.1,.14,.2,.28,.58,.81,1.32,.81s1.12-.53,1.33-.81c.03-.04,.07-.1,.1-.14,.03,.04,.07,.1,.1,.14,.11,.15,.28,.38,.52,.55-.51,6.85-6.23,12.26-13.2,12.26Z" />
                    </svg>
                    <li className="font-semibold"> {obj}</li>
                  </div>
                );
              })}
              <div className="flex gap-2 font-bold text-[1rem] font-serif mt-3">
                <svg className="w-3 mtab:w-4" viewBox="0 0 512 508.84">
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      fill="black"
                      fillRule="nonzero"
                      d="M122.58 82.55l266.84 0c10.1,0 19.28,4.14 25.92,10.78l0.56 0.62c6.33,6.6 10.24,15.55 10.24,25.31l0 270.32c0,10.04 -4.15,19.21 -10.8,25.87l-0.04 0.04c-6.66,6.65 -15.83,10.8 -25.88,10.8l-266.84 0c-10.05,0 -19.23,-4.14 -25.89,-10.79 -6.68,-6.65 -10.83,-15.83 -10.83,-25.92l0 -270.32c0,-10.1 4.13,-19.29 10.78,-25.93l0.61 -0.56c6.6,-6.32 15.54,-10.22 25.33,-10.22zm44.46 167.97c7.83,0 14.96,3.19 20.13,8.35l0.04 0.04c5.17,5.19 8.35,12.31 8.35,20.13 0,7.86 -3.19,15 -8.35,20.16l-0.54 0.5c-2.82,2.67 -6.18,4.78 -9.89,6.13l0 41.93 97.67 0c4.82,0 8.73,3.9 8.73,8.72l0 50.47 106.24 0c4.75,0 9.1,-1.96 12.26,-5.11 3.16,-3.17 5.12,-7.52 5.12,-12.26l0 -270.32c0,-4.56 -1.8,-8.75 -4.72,-11.87l-0.41 -0.39c-3.15,-3.15 -7.49,-5.11 -12.25,-5.11l-24.78 0 0 138.73c0,4.82 -3.9,8.73 -8.73,8.73l-38.24 0c-1.37,4.59 -3.88,8.72 -7.19,12.03 -5.14,5.18 -12.28,8.38 -20.15,8.38 -7.82,0 -14.95,-3.2 -20.12,-8.36l-0.04 -0.03c-5.17,-5.19 -8.35,-12.31 -8.35,-20.13 0,-7.87 3.19,-15.01 8.35,-20.17 5.16,-5.15 12.3,-8.35 20.16,-8.35 7.87,0 15.01,3.2 20.17,8.36l0.49 0.54c2.77,2.92 4.94,6.41 6.28,10.27l29.92 0 0 -130 -224.61 0c-4.58,0 -8.77,1.79 -11.89,4.7l-0.38 0.41c-3.15,3.15 -5.11,7.5 -5.11,12.26l0 35.07 151.42 0 0 -6.25c0,-3.48 1.42,-6.64 3.7,-8.92 2.28,-2.28 5.45,-3.7 8.92,-3.7l29.71 0c3.48,0 6.64,1.42 8.92,3.7 2.27,2.28 3.7,5.44 3.7,8.92l0 29.95c0,3.47 -1.43,6.64 -3.7,8.91 -2.28,2.28 -5.44,3.7 -8.92,3.7l-29.71 0c-3.47,0 -6.64,-1.42 -8.92,-3.7 -2.28,-2.27 -3.7,-5.44 -3.7,-8.91l0 -6.25 -151.42 0 0 37.9 121.36 0c4.82,0 8.73,3.91 8.73,8.73l0 85.8 77.27 0 0 -8.63c0,-3.61 1.48,-6.9 3.84,-9.26 2.37,-2.37 5.66,-3.85 9.27,-3.85l32.98 0c3.62,0 6.9,1.48 9.27,3.85 2.36,2.36 3.84,5.65 3.84,9.26l0 33.24c0,3.62 -1.48,6.9 -3.84,9.27 -2.37,2.37 -5.65,3.85 -9.27,3.85l-32.98 0c-3.61,0 -6.9,-1.48 -9.27,-3.85 -2.36,-2.37 -3.84,-5.65 -3.84,-9.27l0 -7.15 -86 0c-4.82,0 -8.73,-3.91 -8.73,-8.73l0 -85.81 -112.63 0 0 162.45c0,4.75 1.97,9.1 5.12,12.25 3.15,3.16 7.5,5.12 12.26,5.12l143.14 0 0 -41.74 -97.66 0c-4.82,0 -8.73,-3.91 -8.73,-8.73l0 -49.98c-4.77,-1.34 -9.04,-3.89 -12.45,-7.3 -5.16,-5.16 -8.35,-12.3 -8.35,-20.16 0,-7.84 3.2,-14.98 8.37,-20.15 5.14,-5.18 12.27,-8.37 20.14,-8.37zm8.71 19.77c-2.2,-2.2 -5.28,-3.57 -8.71,-3.57 -3.4,0 -6.48,1.38 -8.71,3.61 -2.24,2.2 -3.6,5.28 -3.6,8.71 0,3.4 1.38,6.48 3.6,8.71 2.23,2.22 5.31,3.6 8.71,3.6 3.26,0 6.2,-1.23 8.38,-3.25l0.33 -0.35c2.23,-2.23 3.61,-5.31 3.61,-8.71 0,-3.43 -1.37,-6.51 -3.57,-8.71l-0.04 -0.04zm179.81 28.38l-26.8 0 0 27.06 26.8 0 0 -27.06zm-56.52 -66.14c-2.22,-2.22 -5.3,-3.6 -8.71,-3.6 -3.4,0 -6.48,1.37 -8.7,3.6 -2.23,2.22 -3.61,5.31 -3.61,8.71 0,3.42 1.37,6.5 3.57,8.71l0.04 0.03c2.2,2.21 5.28,3.57 8.7,3.57 3.41,0 6.49,-1.38 8.71,-3.6 1.93,-1.9 3.21,-4.44 3.53,-7.29 -0.15,-0.66 -0.24,-1.34 -0.24,-2.04 0,-0.52 0.05,-1.03 0.14,-1.53 -0.42,-2.39 -1.51,-4.54 -3.07,-6.22l-0.36 -0.34zm-3.68 -80.87l-22.54 0 0 22.78 22.54 0 0 -22.78zm-295.36 192.64l0 30.52c0,3.14 2.57,5.71 5.71,5.71l44.84 0c3.14,0 5.71,-2.57 5.71,-5.71l0 -30.52c0,-3.14 -2.57,-5.71 -5.71,-5.71l-44.84 0c-3.14,0 -5.71,2.57 -5.71,5.71zm0 -70.09l0 30.52c0,3.14 2.57,5.71 5.71,5.71l44.84 0c3.14,0 5.71,-2.57 5.71,-5.71l0 -30.52c0,-3.14 -2.57,-5.71 -5.71,-5.71l-44.84 0c-3.14,0 -5.71,2.57 -5.71,5.71zm0 -70.09l0 30.52c0,3.14 2.57,5.71 5.71,5.71l44.84 0c3.14,0 5.71,-2.57 5.71,-5.71l0 -30.52c0,-3.14 -2.57,-5.71 -5.71,-5.71l-44.84 0c-3.14,0 -5.71,2.57 -5.71,5.71zm0 -70.09l0 30.52c0,3.14 2.57,5.71 5.71,5.71l44.84 0c3.14,0 5.71,-2.57 5.71,-5.71l0 -30.52c0,-3.14 -2.57,-5.71 -5.71,-5.71l-44.84 0c-3.14,0 -5.71,2.57 -5.71,5.71zm512 210.27l0 30.52c0,3.14 -2.57,5.71 -5.71,5.71l-44.85 0c-3.13,0 -5.7,-2.57 -5.7,-5.71l0 -30.52c0,-3.14 2.57,-5.71 5.7,-5.71l44.85 0c3.14,0 5.71,2.57 5.71,5.71zm0 -70.09l0 30.52c0,3.14 -2.57,5.71 -5.71,5.71l-44.85 0c-3.13,0 -5.7,-2.57 -5.7,-5.71l0 -30.52c0,-3.14 2.57,-5.71 5.7,-5.71l44.85 0c3.14,0 5.71,2.57 5.71,5.71zm0 -70.09l0 30.52c0,3.14 -2.57,5.71 -5.71,5.71l-44.85 0c-3.13,0 -5.7,-2.57 -5.7,-5.71l0 -30.52c0,-3.14 2.57,-5.71 5.7,-5.71l44.85 0c3.14,0 5.71,2.57 5.71,5.71zm0 -70.09l0 30.52c0,3.14 -2.57,5.71 -5.71,5.71l-44.85 0c-3.13,0 -5.7,-2.57 -5.7,-5.71l0 -30.52c0,-3.14 2.57,-5.71 5.7,-5.71l44.85 0c3.14,0 5.71,2.57 5.71,5.71zm-166.13 374.81l30.52 0c3.14,0 5.71,-2.57 5.71,-5.71l0 -44.84c0,-3.14 -2.57,-5.71 -5.71,-5.71l-30.52 0c-3.14,0 -5.71,2.57 -5.71,5.71l0 44.84c0,3.14 2.57,5.71 5.71,5.71zm-70.08 0l30.52 0c3.14,0 5.7,-2.57 5.7,-5.71l0 -44.84c0,-3.14 -2.56,-5.71 -5.7,-5.71l-30.52 0c-3.14,0 -5.71,2.57 -5.71,5.71l0 44.84c0,3.14 2.57,5.71 5.71,5.71zm-70.09 0l30.52 0c3.13,0 5.7,-2.57 5.7,-5.71l0 -44.84c0,-3.14 -2.57,-5.71 -5.7,-5.71l-30.52 0c-3.14,0 -5.71,2.57 -5.71,5.71l0 44.84c0,3.14 2.57,5.71 5.71,5.71zm-70.09 0l30.52 0c3.14,0 5.7,-2.57 5.7,-5.71l0 -44.84c0,-3.14 -2.56,-5.71 -5.7,-5.71l-30.52 0c-3.14,0 -5.71,2.57 -5.71,5.71l0 44.84c0,3.14 2.57,5.71 5.71,5.71zm210.26 -508.84l30.52 0c3.14,0 5.71,2.57 5.71,5.71l0 44.85c0,3.13 -2.57,5.7 -5.71,5.7l-30.52 0c-3.14,0 -5.71,-2.57 -5.71,-5.7l0 -44.85c0,-3.14 2.57,-5.71 5.71,-5.71zm-70.08 0l30.52 0c3.14,0 5.7,2.57 5.7,5.71l0 44.85c0,3.13 -2.56,5.7 -5.7,5.7l-30.52 0c-3.14,0 -5.71,-2.57 -5.71,-5.7l0 -44.85c0,-3.14 2.57,-5.71 5.71,-5.71zm-70.09 0l30.52 0c3.13,0 5.7,2.57 5.7,5.71l0 44.85c0,3.13 -2.57,5.7 -5.7,5.7l-30.52 0c-3.14,0 -5.71,-2.57 -5.71,-5.7l0 -44.85c0,-3.14 2.57,-5.71 5.71,-5.71zm-70.09 0l30.52 0c3.14,0 5.7,2.57 5.7,5.71l0 44.85c0,3.13 -2.56,5.7 -5.7,5.7l-30.52 0c-3.14,0 -5.71,-2.57 -5.71,-5.7l0 -44.85c0,-3.14 2.57,-5.71 5.71,-5.71z"
                    />
                  </g>
                </svg>
                Techonology
              </div>
              <div className="w-full text-[0.8rem] mlap:text-[1rem]">
                {" "}
                {techonology}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#DCCFED]  flex w-[17%] ltab:w-[7%]  mx-auto  h-1   rounded-lg"></div>
    </>
  );
};

export default SingleProject;
