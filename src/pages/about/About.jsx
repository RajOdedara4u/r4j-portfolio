import { Element } from "react-scroll";
import cartoon from "../../assets/cartoon.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Element
      data-aos="fade-up"
      name="about"
      className="bg-[#44266c] py-5 ltab:py-10"
    >
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center  ltab:gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl px-2 font-serif font-extrabold text-[#DCCFED] sm:text-4xl">
              About Me
            </h2>
            <p className="py-5  px-3 text-[#DCCFED] text-[0.9rem] md:text-[1rem]">
             Hello! 👋 I’m Raj Odedara from Gujarat, India.
I have completed my Bachelor’s degree in Computer Applications and currently working as a Web Developer with hands-on experience in the MERN stack, React.js, and modern web technologies.
<br />
<br />
My journey started with an internship where I built real-time applications, followed by a trainee role, and now a full-time developer position. These experiences have strengthened my skills in frontend and backend development, API integration, and building scalable web applications.
<br />
<br />
I’m always eager to learn, take on new challenges, and contribute to impactful projects in the tech world. 🚀
            </p>
          </div>
          <div className="mt-3 md:mt-0">
            <img
              src={cartoon}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
