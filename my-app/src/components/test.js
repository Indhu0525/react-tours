import {  Carousel } from 'flowbite-react';
import bgCover from '../assets/images/bgcover.jpg';
import bgCover3 from '../assets/images/bgcover2.avif';
import bgCover8 from '../assets/images/bgcover8.jpg';
import { Dropdown, Button } from 'flowbite-react';
export default function MyCarousel() {
    return (
        <div>
  <div className="mx-auto h-[600px] mt-2">
            <Carousel  controls={false}>
                <div className="relative h-full">
                    <img src={bgCover3} alt="Slide 1" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50  text-center px-4">
                        <h1 className="text-4xl font-bold mb-3 text-white">Life is now. Travel.</h1>
                        <p className="my-6 text-lg font-semibold text-white">
                            CURATED GROUP STYLES & ITINERARIES FOR ALL TRAVELERS
                        </p>
                        <p className="text-sm font-normal text-gray-100 leading-relaxed">
                            Connect with other solo travellers or experience the joy of travel with your friends and family.<br />
                            With our group styles explore the world and unfold your adventure!
                        </p>
                        <div className="flex items-center justify-center mt-4 gap-5">
                            <div className="relative w-[24rem] bg-transparent backdrop-blur-sm border border-gray-600 rounded-sm">

                                <Dropdown inlinedismissOnClick={false} renderTrigger={() => (
                                    <button className="flex items-center justify-between w-full px-4 py-2 text-gray-200" type="button">
                                        <span>Find destination ...</span>
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
    <div class="mx-auto max-w-screen-xl ">
        <div class="flex my-6">
            <h2 class="text-2xl font-bold">Recently viewed tours</h2>

        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" src="../" alt="product1 img" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" src="../" alt="product1 img" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" src="../" alt="product1 img" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" src="../" alt="product1 img" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
        </div>


    </div>
        </div>
      
    );
}
