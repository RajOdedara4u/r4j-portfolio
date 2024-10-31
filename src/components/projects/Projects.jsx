import SingleProject from "./SingleProject";
import img from "../../assets/nikesite.png";
import img2 from "../../assets/lib.png";
import img3 from "../../assets/schol.png";
import img4 from "../../assets/usability.png";
import { Element } from "react-scroll";

const Projects = () => {
  const ar = [
    {
      img: img2,
      name: "Ecommerce Library BookStore ",
      dec: "This eCommerce Bookstore utilizes the MERN stack, featuring an admin panel for product management, CRUD operations, user login/signup.",
      topic: [
        "Login / Singup",
        "Create Invonce",
        "Admin Panel",
        "Cart Option",
        "Other...",
      ],
      link: "https://ecommerce-library.netlify.app/",
      codeLink: "https://github.com/RajOdedara4u/library-mern-front",
      techonology:
        " REACT , EXPRESS , MONGO , NODE , ZOD , BCRYPTJS , JSONWEBTOKEN , REDUX , TAILWIND , OTHER...",
    },
    {
      img: img,
      name: "Nike Ecommerce Site ",
      dec: `This Nike eCommerce site showcases a modern, responsive design, featuring a wide selection of shoes, easy navigation, and "Add to Cart" option.`,
      topic: [
        "Explore Shose's",
        "Responsive design",
        "Add to cart facality",
        "Other...",
      ],
      codeLink: "https://github.com/RajOdedara4u/shoes-site",
      link: "https://shoes-site-ui.netlify.app/",
      techonology: " REACT , REDUX , TAILWIND",
    },

    {
      img: img3,
      name: "Appoiment Booking System ",
      dec: "This Booking System includes an admin panel, user login/signup, appointment booking, and a view for teachers' schedules.",
      topic: [
        "Admin Panel",
        "Login Singup",
        "Book Appointment",
        "See Appoiment for Teacher",
      ],
      codeLink: "https://github.com/RajOdedara4u/Project2-AppoimentSystem",
      link: "https://project2-appoiment-system.netlify.app/",
      techonology: " HTML , CSS , JS , FIREBASE",
    },
    {
      img: img4,
      name: "Usability hub site clone",
      dec: "This Site have fully responsive design which looks greate on any device and include html and css only for responsive.",
      topic: [
        "Intractive design",
        "Responsive Design",
        "Explore Site ",
        "Other...",
      ],
      codeLink: "https://github.com/RajOdedara4u/Usability_hub_clone_html-css-",
      link: "https://site1-clone.netlify.app/",
      techonology: " HTML , CSS",
    },
  ];

  return (
    <>
      <Element
        name="projects"
        className="flex flex-col  w-full justify-between  bg-[#44266c] py-5 ltab:py-10"
      >
        <h2 className="text-3xl text-center font-serif font-extrabold text-[#DCCFED] sm:text-4xl">
          Projects
        </h2>
        <div className="w-full px-3 ltab:px-5">
          {ar.map((obj, index) => {
            return (
              <SingleProject
                key={index}
                v={index}
                img={obj.img}
                name={obj.name}
                dec={obj.dec}
                topic={obj.topic}
                link={obj.link}
                codeLink={obj.codeLink}
                techonology={obj.techonology}
              />
            );
          })}
        </div>
      </Element>
    </>
  );
};

export default Projects;
