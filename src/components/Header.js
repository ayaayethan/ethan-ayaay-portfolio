import React from 'react';
import { BsDownload } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-orange-800
    h-20 w-full shadow-lg sticky text-white">
      <h1>Ethan Ayaay</h1>
      <nav className="flex justify-evenly w-[40%] h-full">
        <a className="hover:cursor-pointer hover:bg-orange-900 hover:underline h-full w-full flex items-center justify-center"> About Me </a>
        <a className="hover:cursor-pointer hover:bg-orange-900 hover:underline h-full w-full flex items-center justify-center"> Skills </a>
        <a className="hover:cursor-pointer hover:bg-orange-900 hover:underline h-full w-full flex items-center justify-center"> Projects </a>
        <a className="hover:cursor-pointer hover:bg-orange-900 hover:underline h-full w-full flex items-center justify-center"> Contact </a>
      </nav>
      <button className="bg-orange-500 w-52 h-[75%] ml-3 rounded-full
      hover:bg-orange-400 text-white font-bold flex
      items-center justify-evenly"> Resume <BsDownload size={25} /> </button>
    </header>
  )
}