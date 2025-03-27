import { Element } from "react-scroll";
import cartoon from "../../assets/cartoon.png";
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
            <p className="pt-2  px-3 text-[#DCCFED] text-[0.9rem] md:text-[1rem]">
              Hello! 👋 I’m Raj Odedara from Gujarat, India and just complated
              bachelor’s degree in Computer Applications and Actively Looking
              For Intership+Job opportunity, Need your support To grow in this
              field. I specialize in the React and fullStake Development and
              other technologies. Always eager to learn and take on new
              challenges, I’m excited to grow and contribute to the tech world.
              🚀
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
