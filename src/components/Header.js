import React from 'react';
import { BsDownload } from "react-icons/bs";

export default function Header() {
  const scrollTo = (section) => {
    let e = document.getElementById(section);

    e.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <header className="flex justify-between items-center bg-orange-800
      h-20 w-full shadow-lg text-white fixed">
      <a  onClick={()=>{scrollTo('main')}}
          className="pl-5 hover:cursor-pointer">Ethan Ayaay</a>

      <nav className="flex justify-evenly w-[40%] h-full">
        <a className="hover:cursor-pointer hover:bg-orange-900 hover:underline
        h-full w-full flex items-center justify-center"
           onClick={()=>{scrollTo('about')}}> About Me </a>
        <a className="hover:cursor-pointer hover:bg-orange-900
        hover:underline h-full w-full flex items-center justify-center"
           onClick={()=>{scrollTo('skills')}}> Skills </a>
        <a className="hover:cursor-pointer hover:bg-orange-900
        hover:underline h-full w-full flex items-center justify-center"
           onClick={()=>{scrollTo('projects')}}> Projects </a>
        <a className="hover:cursor-pointer hover:bg-orange-900
        hover:underline h-full w-full flex items-center justify-center"
           onClick={()=>{scrollTo('contact')}}> Contact </a>
      </nav>

      <a className="bg-orange-500 w-52 h-[75%] rounded-full
      hover:bg-orange-400 text-white font-bold flex
      items-center justify-evenly mr-5"
         href="https://docs.google.com/document/d/13uCLBMetSoVP_WD6vK3VISpHiCP2eu7L7asQ2eseeqo/edit?usp=sharing"
         target="_blank"> Resumé </a>
    </header>
  )
}