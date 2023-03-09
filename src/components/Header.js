import React from 'react';
import { BsDownload } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-orange-800
      h-20 w-full shadow-lg text-white fixed">
      <a href="#main">Ethan Ayaay</a>
      <nav className="flex justify-evenly w-[40%] h-full">
        <a className="hover:cursor-pointer hover:bg-orange-900 hover:underline
        h-full w-full flex items-center justify-center" href="#about"> About Me </a>
        <a className="hover:cursor-pointer hover:bg-orange-900
        hover:underline h-full w-full flex items-center justify-center" href="#skills"> Skills </a>
        <a className="hover:cursor-pointer hover:bg-orange-900
        hover:underline h-full w-full flex items-center justify-center" href="#projects"> Projects </a>
        <a className="hover:cursor-pointer hover:bg-orange-900
        hover:underline h-full w-full flex items-center justify-center" href="#contact"> Contact </a>
      </nav>
      <button className="bg-orange-500 w-52 h-[75%] rounded-full
      hover:bg-orange-400 text-white font-bold flex
      items-center justify-evenly"> Resumé <BsDownload size={25} /> </button>
    </header>
  )
}