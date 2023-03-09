import React from 'react';
import profile from '../profile.jpeg';

export default function Main() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-600
    flex py-10 h-[100vh] items-center justify-center">
      <img src={profile} className="rounded-full aspect-square h-96 object-cover
      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.03] duration-300
      shadow-xl border-2 border-slate-50"></img>
      <article className="ml-7 flex flex-col">
        <h1 className="text-8xl font-bold text-slate-50">Hi, I'm Ethan!</h1>
        <h2 className="text-4xl text-slate-50">Software Engineer</h2>
      </article>
    </div>
  )
}