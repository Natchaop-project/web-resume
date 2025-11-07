// ResumeContainer.jsx
// Fixed Tailwind config issue: Ensure @tailwindcss/vite is either installed or removed from vite.config.js
// This component uses Tailwind CSS and Framer Motion for a modern resume layout

import { motion } from 'framer-motion';
import myImage from './assets/profile-pic.jpg';


export default function ResumeContainer() {
  const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
 
  
  return (
    <div className="min-h-screen from-gray-50 to-white py-12 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mx-auto max-w-4xl "
      >
        <motion.header variants={fadeUp} className="mb-6 flex justify-center items-center gap-4">
          <div className="h-50 w-50 overflow-hidden rounded-full bg-gray-200">
            <img
              src={myImage}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-2xl font-semibold leading-tight">Natchanop Maliros</h1>
            <p className="text-sm text-gray-600">Frontend Developer • React / JavaScript</p>
          </div>

          
        </motion.header>

        <div className="grid gap-6 md:grid-cols-3">
          <motion.aside variants={fadeUp} className="md:col-span-1">
            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h2 className="mb-3 text-sm font-semibold text-gray-700">Contact</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className='hover:text-red-300'>📍 <a href="https://maps.app.goo.gl/XH4Li4ms7vSFxcf67">Khon Kaen, Thailand</a></li>
                <li>✉️ domenatchanop@gmail.com</li>
                <li className='hover:text-red-300'>🔗<a href="github.com/natchanop">github.com/natchanop</a></li>
                <li className='hover:text-red-300'>📷<a href="https://www.instagram.com/dx__dnm/"> Instagram</a></li>
              </ul>
            </div>

            <div className="mt-4 rounded-2xl bg-white p-5 shadow-md">
              <h2 className="mb-3 text-sm font-semibold text-gray-700">Skills</h2>
              <div className="flex flex-wrap gap-2">
                 
                {['React', 'JavaScript', 'TailwindCSS', 'Node.js', 'Git'].map((s) => (
                 <motion.span
                    key={s}
                    whileHover={{ scale: 1.1 ,
                      transition: { type: 'spring', stiffness: 100 }
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="cursor-pointer rounded-full border px-3 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-blue-200"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-white p-5 shadow-md">
              <h2 className="mb-3 text-sm font-semibold text-gray-700">Languages</h2>
              <ul className="text-sm text-gray-600">
                <li>Thai — Native</li>
                <li>English — Professional</li>
              </ul>
            </div>
             <section className="mt-4 rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Education</h3>
              <div>
                <h4 className="text-sm font-semibold">Bachelor of Technology — Khon Kaen University</h4>
                <p className="text-xs text-gray-500">2019 — 2024</p>
                <p className="mt-2 text-sm text-gray-700">Major in Computer Science. Activities: Web Development Club.</p>
              </div>
            </section>
          </motion.aside>

          <motion.main variants={fadeUp} className="md:col-span-2">
            <section className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-3 text-lg font-semibold">Summary</h3>
              <p className="text-gray-700">
                I hold a Bachelor’s degree in Computer Science from the College of Computing, Khon Kaen University.
                I am passionate about coding, continuous learning, and keeping up with new technology trends. I have strong teamwork and communication skills, along with experience in customer service, sales, and business management. I am eager to begin my career as a programmer and continue developing my skills in this field.
              </p>
            </section>

            <section className="mt-4 rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Experience</h3>

              <div className="space-y-4">
                <article>
                  <h4 className="text-sm font-semibold">Final Project (2023)</h4>
                  <p className="text-sm">Recommender System on Web by Python</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Developed a movie recommendation system using algorithms and user data to analyze preferences and suggest movies that best match users’ interests.
                  </p>
                </article>

                <article>
                  <h4 className="text-sm font-semibold">Internship (2023) — KP Like It (Kalasin)</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    <li>Assisted in managing the product storage system.</li>
                    <li>Handled customer chats and resolved inquiries and issues.</li>
                    <li>Gained experience in logistics and customer service.</li>
                  </ul>
                </article>

                <article>
                  <h4 className="text-sm font-semibold">Part-time Waiter — Isan Ramen(62 block Khonkaen)</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    <li>Assisted in serving customers and maintaining a positive dining experience.</li>
                    <li>Learned the fundamentals of restaurant management and operations.</li>
                  </ul>
                </article>

                <article>
                  <h4 className="text-sm font-semibold">Self-employed (2025) — Tres mala & Bar</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    <li>Operated dine-in and delivery services near Khon Kaen University.</li>
                    <li>Gained experience in time management, inventory control, and staff supervision.</li>
                  </ul>
                </article>
              </div>
            </section>

           

             
          </motion.main>
        </div>
      </motion.div>
    </div>
  );
}