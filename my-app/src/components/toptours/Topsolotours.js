import React from 'react'
import bgCover3 from '../../assets//images/bgcover8.jpg';
const Topsolotours = () => {
  return (
    <div>
        <div class="mx-auto max-w-screen-xl ">
                <div class="flex mt-24 mb-16 justify-between ">
                    <h2 class="text-2xl font-bold">Top tours for solo travelers</h2>
                    <div class="flex gap-2">
                        <button type="button" class="border   border-slate-300 hover:border-slate-700 font-medium rounded-sm text-sm p-2 text-center inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" /></svg>
                        </button>
                        <button type="button" class="border   border-slate-300 hover:border-slate-700 font-medium rounded-sm text-sm p-2 text-center inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" /></svg>
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4 mb-4">
                    <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-lg ">
                        <div className="relative">
                            <a href="# ">
                                <img src={bgCover3} alt="Slide 1" className="object-cover h-72 w-full rounded-lg" />
                            </a>
                            <div className="absolute bottom-2 right-2 flex space-x-2">
                                <button className="bg-white p-2 rounded-full shadow border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="M444-336v-342L339-573l-51-51 192-192 192 192-51 51-105-105v342h-72ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z" /></svg>
                                </button>
                                <button className="bg-white p-2 rounded-full shadow border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z" /></svg>
                                </button>
                            </div>
                        </div>
                        <div class="px-5 py-3">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">THAILAND: Adventure to Chiang Mai, Phuket and Beaches</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 ">5 days | 8 days with Thailand extension</p>
                            <p class="mb-3 font-normal text-gray-700 ">From <span class="ml-2 font-bold text-gray-900">$1,000</span><span class="ml-2 line-through">$1000</span><span class="ml-2 text-lg text-yellow-300">Sale</span></p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                        <div className="relative">
                            <a href="# ">
                                <img src={bgCover3} alt="Slide 1" className="object-cover h-72 w-full rounded-lg" />
                            </a>
                            <div className="absolute bottom-2 right-2 flex space-x-2">
                                <button className="bg-white p-2 rounded-full shadow border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="M444-336v-342L339-573l-51-51 192-192 192 192-51 51-105-105v342h-72ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z" /></svg>
                                </button>
                                <button className="bg-white p-2 rounded-full shadow border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div class="px-5 py-3">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">THAILAND: Adventure to Chiang Mai, Phuket and Beaches</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 ">5 days | 8 days with Thailand extension</p>
                            <p class="mb-3 font-normal text-gray-700 ">From <span class="ml-2 font-bold text-gray-900">$1,000</span><span class="ml-2 line-through">$1000</span><span class="ml-2 text-lg text-yellow-300">Sale</span></p>
                        </div>
                    </div>
                    <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                        <div className="relative">
                            <a href="# ">
                                <img src={bgCover3} alt="Slide 1" className="object-cover h-72 w-full rounded-lg" />
                            </a>
                            <div className="absolute bottom-2 right-2 flex space-x-2">
                                <button className="bg-white p-2 rounded-full shadow border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="M444-336v-342L339-573l-51-51 192-192 192 192-51 51-105-105v342h-72ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z" /></svg>
                                </button>
                                <button className="bg-white p-2 rounded-full shadow border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div class="px-5 py-3">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">THAILAND: Adventure to Chiang Mai, Phuket and Beaches</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 ">5 days | 8 days with Thailand extension</p>
                            <p class="mb-3 font-normal text-gray-700 ">From <span class="ml-2 font-bold text-gray-900">$1,000</span><span class="ml-2 line-through">$1000</span><span class="ml-2 text-lg text-yellow-300">Sale</span></p>
                        </div>
                    </div>
                    <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                        <div className="relative">
                            <a href="# ">
                                <img src={bgCover3} alt="Slide 1" className="object-cover h-72 w-full rounded-lg" />
                            </a>
                            <div className="absolute bottom-2 right-2 flex space-x-2">
                                <button className="bg-white p-2 rounded-full shadow border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="M444-336v-342L339-573l-51-51 192-192 192 192-51 51-105-105v342h-72ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z" /></svg>
                                </button>
                                <button className="bg-white p-2 rounded-full shadow border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div class="px-5 py-3">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">THAILAND: Adventure to Chiang Mai, Phuket and Beaches</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 ">5 days | 8 days with Thailand extension</p>
                            <p class="mb-3 font-normal text-gray-700 ">From <span class="ml-2 font-bold text-gray-900">$1,000</span><span class="ml-2 line-through">$1000</span><span class="ml-2 text-lg text-yellow-300">Sale</span></p>
                        </div>
                    </div>
                    <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                        <div className="relative">
                            <a href="# ">
                                <img src={bgCover3} alt="Slide 1" className="object-cover h-72 w-full rounded-lg" />
                            </a>
                            <div className="absolute bottom-2 right-2 flex space-x-2">
                                <button className="bg-white p-2 rounded-full shadow border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="M444-336v-342L339-573l-51-51 192-192 192 192-51 51-105-105v342h-72ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z" /></svg>
                                </button>
                                <button className="bg-white p-2 rounded-full shadow border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#434343"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div class="px-5 py-3">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">THAILAND: Adventure to Chiang Mai, Phuket and Beaches</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 ">5 days | 8 days with Thailand extension</p>
                            <p class="mb-3 font-normal text-gray-700 ">From <span class="ml-2 font-bold text-gray-900">$1,000</span><span class="ml-2 line-through">$1000</span><span class="ml-2 text-lg text-yellow-300">Sale</span></p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end items-end my-8">
                    <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90  font-medium rounded-sm text-sm px-4 py-2.5 text-center inline-flex items-center">
                        See more tours
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Topsolotours
