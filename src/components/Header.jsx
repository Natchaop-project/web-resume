
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='shadow-lg p-5'>
            <motion.header
                initial={{ opacity: 0, y: -50 }}   // ค่าเริ่มต้น
                animate={{ opacity: 1, y: 0 }}     // ค่าเมื่ออนิเมชันเริ่ม
                transition={{ duration: 0.5 }}
                className='flex flex-wrap  justify-between items-center max-w-7xl text-4xl px-10 mx-auto'>
                <Link to="/web-resume/">
                    <div className='flex font-bold  text-shadow-2xs'>
                        <h1 >Dome</h1>
                        <h1 className='text-sky-500'>Web</h1>
                    </div>
                </Link>
                <nav className='flex gap-10 text-2xl font-semibold'>
                    <Link to="/web-resume/">home</Link>
                    <Link to="/web-resume/resume">resume</Link>
                    <Link to="/web-resume/project">project</Link>
                </nav>
            </motion.header>

        </div>
    )
}

export default Header
