import SingleProject from "./SingleProject";
import img from "../../assets/nikesite.png";
import img2 from "../../assets/lib.png";
import img3 from "../../assets/schol.png";
import img4 from "../../assets/usabilityHub.jpg";
import img5 from "../../assets/fb-clone.png";
import img6 from "../../assets/um-ss.jpg";
import img7 from "../../assets/chatApp.jpg";
import img8 from "../../assets/sqlcpic.jpg";
import sindhalf from "../../assets/sindhalf.jpg";
import { Element } from "react-scroll";

const Projects = () => {
  const ar = [
    {
      img: sindhalf,
      name: "Sindhal Finance Site",
      dec: "Worked For a startup to develope his own website to use for get data of user to run ads and collect data",
      topic: ["Login / Singup", "Animations", "Admin Panel", "Other..."],
      link: "https://sindhal-finance.netlify.app/",
      codeLink: "https://github.com/RajOdedara4u/Sindhal-Finance-Site",
      techonology: " MERN , JSON-WEBTOKEN, AOS , TAILWIND , OTHER...",
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
      link: "https://shoes-site-ui.netlify.app",
      techonology: " REACT , REDUX , TAILWIND",
    },
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
      link: "https://fullstack-bookstore.onrender.com",
      codeLink: "https://github.com/RajOdedara4u/fullstack-bookstore",
      techonology:
        " MERN STACK, ZOD , BCRYPTJS , JSON-WEBTOKEN , REDUX , TAILWIND , OTHER...",
    },

    {
      img: img7,
      name: "Real Time Chat Application",
      dec: "This chat application utilizes the MERN stack and Socket.IO, featuring messaging, user authentication, and theme options for experience.",
      topic: [
        "Login / Singup",
        "Upload/Update Profile Picture",
        "Send Message/Photo",
        "Change Theme",
        "Other...",
      ],
      link: "https://fullstake-chat-app.onrender.com",
      codeLink: "https://github.com/RajOdedara4u/fullstake-chat-app",
      techonology:
        " MERN STACK , SOCKET.IO , BCRYPTJS , JSON-WEBTOKEN , ZUSTAND , TAILWIND , OTHER...",
    },
    {
      img: img8,
      name: "Student Management System ",
      dec: "This Student Management System Is Developed For Learning Purpose It Allows To Add Delate And Update Student Data",
      topic: [
        "Add New Student",
        "Update Student",
        "Delate Student",
        "Other...",
      ],
      link: "/",
      codeLink: "https://github.com/RajOdedara4u/student-management-sql",
      techonology: " REACT , EXPRESS , MYSQL , NODE , TAILWIND , OTHER...",
    },
    {
      img: img6,
      name: "User Management System ",
      dec: "This User Management System Allows You to login and singup and view and update the userrr profile with mern tech",
      topic: ["Login / Singup", "View Profile", "Update Profile", "Other..."],
      link: "https://um-task.netlify.app",
      codeLink: "https://github.com/RajOdedara4u/user-management-client",
      techonology:
        " REACT , EXPRESS , MONGO , NODE , ZOD , BCRYPTJS , JSON-WEBTOKEN , REDUX/THUNK , TAILWIND , OTHER...",
    },
    {
      img: img5,
      name: "FB App Clone ",
      dec: `This Facebook App Clone replicates the design and functionality of the Facebook platform, providing users with a familiar interface for exploring content,`,
      topic: [
        "User-friendly Interface",
        "Modern UI Components:",
        "Performance Optimization:",
        "Other...",
      ],
      codeLink: "https://github.com/RajOdedara4u/Facebook_clone_tailwind_css",
      link: "https://project-f4.netlify.app",
      techonology: " REACT , TAILWIND",
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
      link: "https://project2-appoiment-system.netlify.app",
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
      link: "https://site1-clone.netlify.app",
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
