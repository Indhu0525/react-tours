import { Carousel, HR } from 'flowbite-react';
import bgCover from '../assets/images/bgcover.jpg';
import bgCover3 from '../assets/images/bgcover2.avif';
import bgCover8 from '../assets/images/bgcover8.jpg';
import newsbg from '../assets/images/newsletterbg.jpg';
import { Dropdown, Button } from 'flowbite-react';
import Daytourspage from './daytours/Daytourspage';
import Grouptours from './groupstyles/Grouptours';
import Topsolotours from './toptours/Topsolotours';
import Lastestarticles from './articles/Lastestarticles';
import Cardslider from './swipers/Cardslider';
import Travelerssay from './travelers/Travelerssay';
export default function MyCarousel() {
    
    return (
        <div>
            {/* carousel */}
            <div className="mx-auto h-[600px] mt-2">
                <Carousel controls={false}>
                    <div className="relative h-full">
                        <img src={bgCover3} alt="Slide 1" className="object-cover w-full h-full" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50  text-center px-4">
                            <h1 className="text-4xl font-bold mb-3 text-white">Life is now. Travel.</h1>
                            <p className="my-6 text-lg font-semibold text-white">
                                CURATED GROUP STYLES & ITINERARIES FOR ALL TRAVELERS
                            </p>
                            <p className="text-sm font-normal text-gray-100 leading-relaxed hidden md:flex">
                                Connect with other solo travellers or experience the joy of travel with your friends and family.<br />
                                With our group styles explore the world and unfold your adventure!
                            </p>
                            <div className="flex items-center justify-center mt-4 gap-5">
                                <div className="relative  md:[24rem] bg-transparent backdrop-blur-sm border border-gray-600 rounded-sm">

                                    <Dropdown inlinedismissOnClick={false} renderTrigger={() => (
                                        <button className="flex items-center justify-between w-[24rem] px-4 py-2 text-gray-200" type="button">
                                            <span class="text-xs md:text-sm">Find destination ...</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#F3F3F3"><path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z" /></svg>
                                        </button>
                                    )}
                                    >
                                        <Dropdown.Item >
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                Dashboard
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                Settings
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                Earnings
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                Sign out
                                            </a>
                                        </Dropdown.Item>
                                    </Dropdown>
                                </div>
                                <button type="button" class="text-gray-900 bg-[#F7BE38]  hover:bg-[#F7BE38]/90  font-semibold rounded-md text-sm px-8 py-2.5 text-center inline-flex items-center">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <img src={bgCover8} alt="Slide 2" className="object-cover w-full h-full" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white">
                            <h1 className="text-4xl font-extrabold">Explore Slide 2</h1>
                            <p className="mt-2 text-lg">Here is some information about slide 2.</p>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <img src={bgCover} alt="Slide 3" className="object-cover w-full h-full" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white">
                            <h1 className="text-4xl font-extrabold">Discover Slide 3</h1>
                            <p className="mt-2 text-lg">Details about the third slide go here.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
            {/* Recently viewed tours */}
            <div class="mx-auto max-w-screen-xl ">
                <div class="flex mt-24 mb-16 justify-between ">
                    <h2 class="text-2xl font-bold">Recently viewed tours</h2>
                    <div class="flex gap-2">
                        <button type="button" class="border   border-slate-300 hover:border-slate-700 font-medium rounded-sm text-sm p-2 text-center inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" /></svg>
                        </button>
                        <button type="button" class="border   border-slate-300 hover:border-slate-700 font-medium rounded-sm text-sm p-2 text-center inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" /></svg>
                        </button>

                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
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
            </div>
            {/*popular trip themes  */}
            <div class="mx-auto max-w-screen-xl">
                <div class="flex mt-24 mb-16 justify-between ">
                    <h2 class="text-2xl font-bold">Popular trip themes</h2>
                    <div class="flex gap-2">
                        <button type="button" class="border   border-slate-300 hover:border-slate-700 font-medium rounded-sm text-sm p-2 text-center inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" /></svg>
                        </button>
                        <button type="button" class="border   border-slate-300 hover:border-slate-700 font-medium rounded-sm text-sm p-2 text-center inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" /></svg>
                        </button>

                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                    <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-lg ">
                        <div className="relative">
                            <a href="# ">
                                <img src={bgCover3} alt="Slide 1" className="object-cover h-72 " />
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
                                <img src={bgCover3} alt="Slide 1" className="object-cover h-72 " />
                            </a>
                            <div class="flex justify-center">
                                <div className="absolute bottom-5   flex space-x-2 mx-2">
                                    <button className="bg-white p-2 rounded-sm border-gray-700 font-semibold shadow w-44">
                                        Solo travellers
                                    </button>

                                </div>
                            </div>

                        </div>


                    </div>
                    <div class=" w-full bg-white border border-gray-200 rounded-lg shadow-lg ">
                        <div className="relative">
                            <a href="# ">
                                <img src={bgCover3} alt="Slide 1" className="object-cover h-72 " />
                            </a>
                            <div class="flex justify-center">
                                <div className="absolute bottom-5  flex space-x-2 mx-2">
                                    <button className="bg-white p-2 rounded-sm border-gray-700 font-semibold shadow w-44">
                                        Solo travellers
                                    </button>

                                </div>
                            </div>

                        </div>


                    </div>
                    <div class=" w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg ">
                        <div className="relative">
                            <a href="# ">
                                <img src={bgCover3} alt="Slide 1" className="object-cover h-72 " />
                            </a>
                            <div class="flex justify-center">
                                <div className="absolute bottom-5  flex space-x-2 mx-2">
                                    <button className="bg-white p-2 rounded-sm border-gray-700 font-semibold shadow w-44">
                                        Solo travellers
                                    </button>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            {/* newsletter */}
            <div class="p-0 md:px-8 py-12">
                <div className="relative w-full h-72">
                    <img
                        src={newsbg}
                        alt="Slide 1"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-white/70 flex items-end justify-end p-0  md:px-16 py-8">
                        <div className="flex flex-col justify-center items-start flex-grow max-w-2xl">
                            <h2 className="md:text-3xl text-lg font-bold text-gray-800 mb-4">
                                Join Our Newsletter
                            </h2>
                            <p className="text-gray-600 mb-6 text-sm text-center">
                                Stay updated on exclusive specials, new tours, travel tips and articles
                            </p>
                            <form className="block md:inline-flex  items-center gap-4 justify-center">
                                <input type="email" placeholder="Enter your email" className="flex justify-center items-center flex-grow px-2 py-2 border rounded-md w-[18rem] text-sm" />
                                <button className="bg-gray-900 text-gray-100 px-6 py-2 flex justify-center items-center rounded-md mt-3 md:m-0 ">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            {/* popular tours */}
            <div class="mx-auto max-w-screen-xl ">
                <div class="flex mt-24 mb-16 justify-between ">
                    <h2 class="text-2xl font-bold">Our most  popular tours</h2>
                    <div class="flex gap-2">
                        <button type="button" class="border   border-slate-300 hover:border-slate-700 font-medium rounded-sm text-sm p-2 text-center inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="m330-444 201 201-51 51-288-288 288-288 51 51-201 201h438v72H330Z" /></svg>
                        </button>
                        <button type="button" class="border   border-slate-300 hover:border-slate-700 font-medium rounded-sm text-sm p-2 text-center inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" /></svg>
                        </button>

                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4  mb-3">
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
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
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

                    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
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
                    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
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
                    <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90  font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center">
                        See more tours
                    </button>
                </div>
            </div>
            <Daytourspage/>
<div className="py-24 ">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      Reasons to choose Tiny Panda
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
    
      <div className="flex flex-col items-center text-center border-r-2 p-4">
        <div className="mb-4 bg-yellow-400 p-4 rounded-sm shadow-sm">
          <img src="#" alt="Connect" className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold my-3">Connect</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Travel with other like-minded people. Whether traveling solo or with friends - create organic connections with other travelers.
        </p>
      </div>

      
      <div className="flex flex-col items-center text-center border-r-2 p-4">
      <div className="mb-4 bg-yellow-400 p-4 rounded-sm shadow-sm">
          <img src="#" alt="Connect" className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Earn rewards</h3>
        <p className="text-gray-600 text-sm leading-relaxed my-4">
          We are passionate about travel and want to reward you for sharing our passion. Earn rewards with us and live your adventure.
        </p>
        <button className="text-white bg-gray-800 px-6 py-2 mt-4 rounded-md hover:bg-gray-700 transition-colors">
          Learn more
        </button>
      </div>

   
      <div className="flex flex-col items-center text-center border-r-2 p-4">
      <div className="mb-4 bg-yellow-400 p-4 rounded-sm shadow-sm">
          <img src="#" alt="Connect" className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Flexible bookings</h3>
        <p className="text-gray-600 text-sm leading-relaxed my-4">
          Travel plans change - we understand. Learn about our flexible booking terms so you can book with peace of mind.
        </p>
        <button className="text-white bg-gray-800 px-6 py-2 mt-4 rounded-md hover:bg-gray-700 transition-colors">
          Learn more
        </button>
      </div>

      <div className="flex flex-col items-center text-center border-r-2 p-4">
      <div className="mb-4 bg-yellow-400 p-4 rounded-sm shadow-sm">
          <img src="#" alt="Connect" className="w-12 h-12" />
        </div>
        <h3 className="text-xl font-semibold my-3">Flexible travel</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Request a departure date for your preferred group style - or request a private tour. We give you flexibility to travel when you want to you adventure.
        </p>
        <button className="text-white bg-gray-800 px-6 py-2 mt-4 rounded-md hover:bg-gray-700 transition-colors">
          Learn more
        </button>
      </div>
    </div>
  </div>
</div>
<Grouptours/>
<Topsolotours/>
<div class=" py-12">
                <div className="relative w-full h-72">
                    <img
                        src={newsbg}
                        alt="Slide 1"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-white/70 flex items-center justify-start py-8 md:px-16 md:py-8">
                        <div className="max-w-lg p-3 ">
                            <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">
                                Customise & get quote
                            </h2>
                            <p className="text-gray-600 mb-6 text-center text-sm">
                                Stay updated on exclusive specials, new tours, travel tips and articles  Stay updated on exclusive specials, new tours, travel tips and 
                            </p>
                            <p className="text-gray-600 text-center mb-6 text-sm">
                                Stay updated on exclusive specials, new tours, travel tips and articles
                            </p>
                            <div class="flex justify-center items-center mt-8">
                    <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90  font-medium rounded-sm text-sm px-4 py-2.5 text-center inline-flex items-center">
                        Request quote
                    </button>
                </div>
                        </div>
                        
                    </div>
                </div>

</div>
<Lastestarticles/>
<HR class="mt-16 mb-0"></HR>
{/* recent instagram posts */}
<div className="md:py-16 p-6">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      Recent instagram posts
    </h2>
    
    <div className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="flex">
    <div className="flex  justify-normal">
      <img 
        src={bgCover8} 
        alt="Kayaking view" 
        className="w-full h-full object-cover"
      />
    </div>
    </div>
    
    <div class="flex justify-center items-center h-64">
    <div className="flex  justify-normal">
      <img 
        src={bgCover8} 
        alt="Kayaking view" 
        className="w-full h-full object-cover"
      />
    </div>
    </div>
    <div class="flex">
    <div className="flex  justify-normal">
      <img 
        src={bgCover8} 
        alt="Kayaking view" 
        className="w-full h-full object-cover"
      />
    </div>
    </div>
    <div class="flex justify-center items-center h-64">
    <div className="flex  justify-normal">
      <img 
        src={bgCover8} 
        alt="Kayaking view" 
        className="w-full h-full object-cover"
      />
    </div>
    </div>
  </div>
</div>
  </div>
</div>
<Travelerssay/>
<HR class="m-16 "></HR>
<Cardslider/>
        </div>
    );
}
