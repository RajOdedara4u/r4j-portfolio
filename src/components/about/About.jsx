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
            <p className="pt-2  px-3 text-[#DCCFED] ">
              Hello👋, My name is Raj Odedara, and I am from Gujrat india.
              Currently I am pursuing my bachelor's degree in computer science,
              and during this period, I have learned MERN stack web development.
              I have Grow my skills in the MERN stack and other technology. I am
              eager to create engaging, user-friendly web applications that make
              a positive impact. My journey in web development is just
              beginning, and I am excited to continue learning growing and face
              challanges in this dynamic field.
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
