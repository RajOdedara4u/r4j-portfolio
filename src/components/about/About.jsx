import { Element } from "react-scroll";
import cartoon from "../../assets/cartoon.png";
const About = () => {
  return (
    <Element name="about" className="bg-[#44266c] py-5 ltab:py-10">
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center  ltab:gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl px-2 font-serif font-extrabold text-[#DCCFED] sm:text-4xl">
              About Me
            </h2>
            <p className="pt-2  px-3 text-[#DCCFED] text-[0.9rem] md:text-[1rem]">
              Hello! 👋 I’m Raj Odedara from Gujarat, India. I’m pursuing a
              bachelor’s degree in Computer Applications and have honed my
              skills in Full Stack Web Development. Passionate about building
              scalable web applications, I specialize in the MERN stack and love
              exploring cloud computing and emerging technologies. Always eager
              to learn and take on new challenges, I’m excited to grow and
              contribute to the tech world. 🚀
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
