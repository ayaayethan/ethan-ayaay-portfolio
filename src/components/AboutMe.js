import React from 'react';
import profile from '../profile.jpeg';

export default function AboutMe() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-600
    flex py-10 px-5 max-h-[35vh]">
      <img src={profile} className="rounded-full aspect-square h-96 object-cover
      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.03] duration-300
      shadow-xl" ></img>
      <article className="max-h-full overflow-auto ml-7 flex flex-col">
        <h1 className="text-6xl font-bold text-slate-50">Hi, I'm Ethan!</h1>
        <p className="text-lg text-slate-50 justify-self-center">A passionate software engineer who loves to create. Growing up, I've always found joy in creation whether it be through drawing, filmmaking, or songwriting.
           I took an interest in software engineering solely through the idea that you can create things with code. I attended Hack Reactor, an advanced software engineering
           immersive, where I honed not only my technical skills in JavaScript, Node, React, and Express, but also my non-technical communication skills through white
           boarding and pair-programming. Moving forward, I'd like to keep developing my software engineering skills even further in order to create more impactful and
           fulfilling projects.</p>
      </article>
    </div>
  )
}