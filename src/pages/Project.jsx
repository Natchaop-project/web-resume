import Img1 from '../assets/images/project-img1.jpg'
import Img2 from '../assets/images/project-img2.jpg'

function Project() {
  return (
    <div className='flex justify-center'>
      <section className="mt-4 rounded-2xl p-10 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-shadow-2xs">Projects</h3>

              <div>
                <article>
                  <h4 className="text-sm font-semibold">Final Project (2023)</h4>
                  <p className="text-sm">Recommender System</p>
                  <p className="my-2 text-sm text-gray-700">
                    Developed a movie recommendation system using algorithms and user data to analyze preferences and suggest movies that best match users’ interests.
                  </p>
                  <div>
                    <a className='bg-sky-500 rounded-full shadow-xl hover:shadow-none text-white px-2 py-1 hover:bg-gray-700' href="https://web-movies-recommender-system.vercel.app/">demo</a>
                  </div>
                  <div className='my-2 md:flex gap-2 '>
                    <img className='w-2/5 size-cover' src={Img1} alt="" />
                    <img className='w-2/5 size-cover' src={Img2} alt="" />
                  </div>
                </article> 
              </div>
              
            </section>
    </div>
  )
}

export default Project
