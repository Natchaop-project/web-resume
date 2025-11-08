import Img1 from '../assets/images/project-img1.jpg'
import Img2 from '../assets/images/project-img2.jpg'

function Project() {
  return (
    <div className='flex justify-center'>
      <section className="mt-4 rounded-2xl p-10 shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-shadow-2xs">Projects</h3>

              <div className="space-y-4">
                <article>
                  <h4 className="text-sm font-semibold">Final Project (2023)</h4>
                  <p className="text-sm">Recommender System</p>
                  <p className="my-2 text-sm text-gray-700">
                    Developed a movie recommendation system using algorithms and user data to analyze preferences and suggest movies that best match users’ interests.
                  </p>
                  <div>
                    <a className='rounded-full border-2 px-2 hover:bg-gray-700 hover:text-white' href="https://web-movies-recommender-system.vercel.app/">demo</a>
                  </div>
                  <div className='flex gap-2'>
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
