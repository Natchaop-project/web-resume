import { motion } from "framer-motion";
import myImage from '../assets/images/profile-pic.jpg';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex justify-center items-center  ">
            <motion.div
                className="flex justify-center items-center gap-20  my-50 text-shadow-lg "
                initial={{ opacity: 0, y: -50 }}   // ค่าเริ่มต้น
                animate={{ opacity: 1, y: 0 }}     // ค่าเมื่ออนิเมชันเริ่ม
                transition={{ duration: 0.5 }}     // ความเร็ว (วินาที)
            >
                <div>
                    <img className="w-100 h-100 drop-shadow-lg rounded-full object-cover" src={myImage} alt="" />
                </div>
                <div >
                    <div className="flex gap-3 text-7xl font-bold my-4 ">
                        <h1 className="text-gray-800">I'm</h1>
                        <h1 className="text-sky-500">Natchanop</h1>
                    </div>
                    <div className="text-2xl font-semibold text-gray-700 my-4">
                        <h2>Frontend Developer • React / JavaScript</h2>
                    </div>
                    <div className="flex gap-4 text-xl font-medium my-4  ">
                        <button className="shadow-2xl bg-sky-500 rounded-4xl text-whit px-6 py-2 hover:bg-gray-200 hover:text-black transition duration-200">
                            <Link to="/web-resume/resume">resume</Link>
                        </button>
                        <button className="shadow-2xl bg-gray-100 rounded-4xl px-6 py-2 border-1 hover:bg-sky-500 hover:text-black transition duration-200">
                            <Link to="/web-resume/project">project</Link>
                        </button>
                    </div>
                    <div className="text-gray-700 rounded-3xl w-200 text-2xl text-shadow-none my-4"> 
                        <p>I hold a Bachelor’s degree in Computer Science from the College of Computing, Khon Kaen University.
                            I am passionate about coding, continuous learning, and keeping up with new technology trends. I have strong teamwork and communication skills, along with experience in customer service, sales, and business management. I am eager to begin my career as a programmer and continue developing my skills in this field.</p>
                    </div>
                </div>
                <div>
                </div>


            </motion.div>
        </div>
    )
}

export default Home
