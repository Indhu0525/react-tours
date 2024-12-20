import React from 'react'
import bgcover6 from '../../assets/images/bgcover6.webp';
const Grouptours = () => {
  return (
    <div>
      <div className="md:py-24 p-2">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Introducing group styles
          </h2>
          <div className="flex flex-col items-center text-center m-2 md:mx-24">
            <p className="text-gray-900 text-md leading-relaxed mb-4">
              Travel with other like-minded people. Whether traveling solo or with friends - create organic connections with other travelers.Travel with other like-minded people.with other travelers.Travel with other like-minded people.  Whether traveling solo or with friends - create organic connections with other travelers.
            </p>
            <p className="text-gray-900 text-md  leading-relaxed mb-6">
              Travel with other like-minded people. Whether traveling solo or with friends - create organic connections with other travelers.
            </p>
            <h2 className="text-xl font-semibold text-center mb-12">
              Because who you travels matters
            </h2>
          </div>
          <div class="mx-auto max-w-screen-xl">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-lg ">
                <div className="relative">
                  <a href="# ">
                    <img src={bgcover6} alt="Slide 1" className="object-cover h-72 w-full" />
                  </a>
                  <div class="flex justify-center">
                    <div className="absolute bottom-5  flex space-x-2 mx-2">
                      <button className="bg-white p-2 rounded-sm border-gray-700 shadow font-semibold w-44">
                        Solo travellers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-lg ">
                <div className="relative">
                  <a href="# ">
                    <img src={bgcover6} alt="Slide 1" className="object-cover h-72 w-full" />
                  </a>
                  <div class="flex justify-center">
                    <div className="absolute bottom-5  flex space-x-2 mx-2">
                      <button className="bg-white p-2 rounded-sm border-gray-700 font-semibold shadow w-44">
                        Open
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-lg ">
                <div className="relative">
                  <a href="# ">
                    <img src={bgcover6} alt="Slide 1" className="object-cover h-72 w-full" />
                  </a>
                  <div class="flex justify-center">
                    <div className="absolute bottom-5  flex space-x-2 mx-2">
                      <button className="bg-white p-2 rounded-sm border-gray-700 font-semibold shadow w-44">
                        Family
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center m-0 my-10 md:mx-24">
              <h2 className="text-xl font-semibold text-center mb-12">
                Option to request departure date
              </h2>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                Travel with other like-minded people. Whether traveling solo or with friends - create organic connections with other travelers.with other travelers.Travel with other like-minded people.
              </p>
            </div>
            <div class="flex justify-center">
              <button className="text-white bg-gray-800 px-6 py-2  rounded-md hover:bg-gray-700 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grouptours
