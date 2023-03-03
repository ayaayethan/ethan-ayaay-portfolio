import React from 'react';
import { BsDownload } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-orange-700
    h-20 w-full shadow-lg p-3 sticky text-white">
      <h1>Ethan Ayaay</h1>
      <a> About Me </a>
      <a> Skills </a>
      <a> Projects </a>
      <a> Contact </a>
      <button className="bg-orange-500 w-52 h-[95%] rounded-full
      hover:bg-orange-400 text-white font-bold flex
      items-center justify-evenly"> Resume <BsDownload size={25} /> </button>
    </header>
  )
}