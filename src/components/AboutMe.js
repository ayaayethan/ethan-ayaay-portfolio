import React from 'react';
import profile from '../profile.jpeg';

export default function AboutMe() {
  return (
    <div className="bg-slate-300 flex">
      <img src={profile} className="rounded-full aspect-square h-96 object-cover" ></img>
      <article>
        <h1>Hi, I'm Ethan Ayaay!</h1>
        <p></p>
      </article>
    </div>
  )
}