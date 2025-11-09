import { motion } from "framer-motion";
import myImage from "../assets/images/profile-pic.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen px-6 py-10">
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 drop-shadow-lg rounded-full object-cover"
            src={myImage}
            alt="Profile"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left">
          {/* Name */}
          <div className="flex flex-col md:flex-row md:gap-3 justify-center md:justify-start text-4xl sm:text-5xl lg:text-6xl font-bold my-4">
            <h1 className="text-gray-800">I'm</h1>
            <h1 className="text-sky-500">Natchanop</h1>
          </div>

          {/* Position */}
          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 my-4">
            <h2>Frontend Developer • React / JavaScript</h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-base sm:text-lg font-medium my-4">
            <Link
              to="/web-resume/resume"
              className="shadow-2xl bg-sky-500 text-white rounded-full px-6 py-2 hover:bg-gray-200 hover:text-black transition duration-200"
            >
              Resume
            </Link>
            <Link
              to="/web-resume/project"
              className="shadow-2xl bg-gray-100 border rounded-full px-6 py-2 hover:bg-sky-500 hover:text-black transition duration-200"
            >
              Projects
            </Link>
          </div>

          {/* Description */}
          <div className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed my-4">
            <p>
              I hold a Bachelor’s degree in Computer Science from the College of
              Computing, Khon Kaen University. I am passionate about coding,
              continuous learning, and keeping up with new technology trends. I
              have strong teamwork and communication skills, along with
              experience in customer service, sales, and business management. I
              am eager to begin my career as a programmer and continue
              developing my skills in this field.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
