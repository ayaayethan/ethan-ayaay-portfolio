import React from 'react';
import profile from '../profile.JPG';

export default function Main() {
  return (
    <div id="main" className="bg-gradient-to-r from-orange-400 to-orange-600
    flex py-10 h-[100vh] items-center justify-evenly">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        <img src={profile} className="rounded-full aspect-square object-cover object-top h-[70%] shadow-xl"></img>
        <article className="flex flex-col">
          <h1 className="text-9xl font-bold text-slate-50">Hi, I'm Ethan!</h1>
          <h2 className="text-5xl text-slate-50">Software Engineer</h2>
        </article>
    </div>
  )
}