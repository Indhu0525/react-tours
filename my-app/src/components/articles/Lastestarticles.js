import React from 'react'
import bgCover3 from '../../assets/images/bgcover7.jpg';
const Lastestarticles = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full bg-white shadow-sm border-gray-200 border p-2 rounded-lg">
          <div className="space-y-4">
            <img src={bgCover3} alt="Majestic Mountains" className="w-full  object-cover rounded-lg" />
            <div class="px-4">
              <h2 className="text-2xl font-bold my-4">
                Majestic Mountains: Trekking the Alps
              </h2>
              <p className="text-gray-600">
                Dive into the exhilarating experience of trekking through the Alpine landscapes. Discover tips and must-see spots for your next adventure
              </p>
              <a href="#" className="text-yellow-400 font-medium block my-4">
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div className="h-full space-y-3">
          <div class="border border-gray-200 p-2 rounded-lg h-1/2">
            <div className="h-full block  md:flex   gap-3 justify-between">
              <img src={bgCover3} alt="City Breaks" className="w-1/2 sm:w-full object-cover rounded-lg flex-shrink-0"/>
              <div className="flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">
                    City Breaks: Top 5 European Cities to Explore
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Planning a quick getaway? Here are the top 5 cities in Europe perfect
                    for a weekend escape. From historical landmarks to culinary delights,
                    find out what awaits.
                  </p>
                </div>
                <a href="#" className="text-yellow-500 font-medium block self-start">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
          <div class="border border-gray-200 p-2 rounded-lg h-1/2">
            <div className="h-full block  md:flex   gap-3 justify-between">
              <img src={bgCover3} alt="City Breaks"className="w-1/2 sm:w-full object-cover rounded-lg flex-shrink-0"/>
              <div className="flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">
                    City Breaks: Top 5 European Cities to Explore
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Planning a quick getaway? Here are the top 5 cities in Europe perfect
                    for a weekend escape. From historical landmarks to culinary delights,
                    find out what awaits.
                  </p>
                </div>
                <a href="#" className="text-yellow-500 font-medium block self-start">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lastestarticles
