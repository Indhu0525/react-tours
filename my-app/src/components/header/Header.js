import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="App-header ">
        <div class="header-top flex justify-end items-center mx-auto max-w-screen-xl py-2 px-2 gap-4">
          <button type="button" class="border   border-slate-700 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" /></svg>
          </button>
          <button type="button" class="border   border-slate-700 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z" /></svg>
          </button>
          <button type="button" class="border   border-slate-700 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z" /></svg>
          </button>
          <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90  font-bold rounded-md text-sm px-3 py-2.5 text-center inline-flex items-center">
            SEE ALL TRIPS
          </button>
        </div>
        <div class="header-bottom max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1 px-2 gap-2">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse border p-1">
            <img src="#" class="h-8" alt="Flowbite Logo" />
          </a>
          <button data-collapse-toggle="navbar-search" type="button" class=" items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden inline-flex  border " aria-controls="navbar-search" aria-expanded="false">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          <div class="flex md:order-2 gap-3">
            <div className="flex items-center border border-gray-300 rounded-md p-1.5 w-72">
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none pl-1 text-gray-700 border-none p-0 focus:outline-none focus:ring-0 focus:ring-transparent placeholder:text-gray-400 text-sm"
              />
              <button className="p-1.5 ps-3 border-s-2 border-slate-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </div>
            <button data-collapse-toggle="navbar-search" type="button" class=" items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hidden md:inline-flex lg:hidden border " aria-controls="navbar-search" aria-expanded="false">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1" id="navbar-search">
         
            <div class="relative mt-3 lg:hidden">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
           
            <ul class="flex flex-col p-3 md:p-0 mt-4 space-x-3 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li class="m-0">
                <a href="#" class="block p-2 text-slate-800 rounded font-normal " aria-current="page">Destination</a>
              </li>
              <li class="m-0">
                <a href="#" class="block p-2 text-slate-800 rounded font-normal " aria-current="page">Travel styles</a>
              </li>
              <li class="m-0">
                <a href="#" class="block p-2 text-slate-800 rounded font-normal " aria-current="page">Articles</a>
              </li>
              <li class="m-0">
                <a href="#" class="block p-2 text-slate-800 rounded font-normal " aria-current="page">Deals & Rewards</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header