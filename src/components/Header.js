import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-orange-200 h-20 opacity-60 shadow-lg p-3">
      <h1>Ethan Ayaay</h1>
      <a> About Me </a>
      <a> Skills </a>
      <a> Projects </a>
      <a> Contact </a>
      <button className="bg-orange-400 w-52 h-[95%] rounded-full hover:bg-orange-600 border-2 border-orange-300 text-white font-bold"> Resume </button>
    </header>
  )
}