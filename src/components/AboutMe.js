import React from 'react';

export default function AboutMe() {
  return (
    <div id="about" className="h-[100vh] bg-gradient-to-r from-orange-500 to-orange-700 flex flex-col justify-evenly items-center">
        <article className="flex flex-col items-center">
          <h1 className="text-8xl font-bold text-slate-50 mb-5">Who Am I?</h1>
          <p className="text-xl text-slate-50 justify-self-center w-[85%]">I am a passionate software engineer who loves to create. Growing up, I've always found joy in creation whether it be through drawing,
            filmmaking, animation-- you name it. I took an interest in software engineering solely through the idea that you can create things with code. I attended Hack Reactor, an advanced software engineering
            immersive, where I honed not only my technical skills in JavaScript, Node, React, and Express, but also my non-technical communication skills through white boarding and pair-programming. Moving forward,
            I'd like to keep developing my software engineering skills even further in order to create more impactful and fulfilling projects.</p>
        </article>
        <article>
          <p className="text-xl text-slate-50">Oh, and I also make music!</p>
          <a href="https://open.spotify.com/artist/4HUOgASUBk02azKAKwJEYb" target="_blank">@PlutoKoi</a>
        </article>
    </div>
  )
}