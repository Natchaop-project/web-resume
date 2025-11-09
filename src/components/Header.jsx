import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ไอคอนเมนู

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-lg p-4 sticky top-0 bg-white z-50">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-10"
      >
        {/* Logo */}
        <Link to="/web-resume/">
          <div className="flex font-bold text-3xl sm:text-4xl text-shadow-2xs">
            <h1>Dome</h1>
            <h1 className="text-sky-500">Web</h1>
          </div>
        </Link>

        {/* เมนูสำหรับจอใหญ่ */}
        <nav className="hidden md:flex gap-8 text-xl font-semibold">
          <Link
            to="/web-resume/"
            className="hover:text-sky-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/web-resume/resume"
            className="hover:text-sky-500 transition-colors duration-200"
          >
            Resume
          </Link>
          <Link
            to="/web-resume/project"
            className="hover:text-sky-500 transition-colors duration-200"
          >
            Project
          </Link>
        </nav>

        {/* ปุ่มเมนูมือถือ */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </motion.header>

      {/* เมนูมือถือแบบ slide down */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex flex-col items-center gap-4 mt-4 pb-4 text-lg font-semibold md:hidden"
        >
          <Link
            to="/web-resume/"
            className="hover:text-sky-500 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/web-resume/resume"
            className="hover:text-sky-500 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <Link
            to="/web-resume/project"
            className="hover:text-sky-500 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Project
          </Link>
        </motion.nav>
      )}
    </div>
  );
}

export default Header;
