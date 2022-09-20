import Image from "next/image";
import React, { useState } from "react";
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const search= ()=>{
    router.push({
      pathname:'/search',
      query:{
        location:searchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfGuests,
      }
    })
  }
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput =()=>{
    setSearchInput("")
  }
  return (
    <div>


    <header  className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div onClick={()=>router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
        />
      </div>
      <div className="flex items-center  md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className=" flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder|| "Start your search"}
          
        />
        <MagnifyingGlassCircleIcon onClick={search} className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="md:flex hidden items-center space-x-4 justify-end tet-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className=" h-4 cursor-pointer" />
        <div className="flex  items-center space-x-2 p-2 border-2 rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              onChange={(e) => setNoOfGuests(e.target.value)}
              value={noOfGuests}
              className="w-12 pl-2 text-lg outline-none text-red-800"
              type="number"
              min={1}
              max={10}
            />
          </div>
          <div className="flex ">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={search} className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
    </div>
  );
}

export default Header;
