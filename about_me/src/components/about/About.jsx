import React, { Component } from 'react';
import tfm from './TFM.png';
import ttc from './TTC.png';
import master from './Mastery.png';
import dune from './dune.png';
import tbtci from './tbtci.png';
import tfh from './tfh.png';

export default function About() {
    return (
    <div className = "h-4/5 w-4/5 lg:w-4/5 p-10 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded ">
        <h1 className='font-sans break-normal text-gray-900 pt-6 pb-2 text-5xl'> Who am I?</h1>
        <hr className='class="border-b border-gray-400"'></hr>
        
        <p className='pt-5'>
            Hi - I'm Abu Khawaja. I'm a software engineer located in New Jersey. I always loved computers growing up and decided to make a career of it. 
            I got my B.S. in Computer Science from Ramapo College and from there got a plethora of experience
            working as a software developer for numerous companies across the east coast. I've worked for tech companies where 
            I'm a part of huge teams and I've worked for companies where I am the sole programmer; it's forced me to wear many hats and to 
            learn a diverse skillset in order to tackle any problem that arises.
            
        </p>


        <p className='pt-5'>
            Outside of software development I have a bunch of passion projects to keep me busy. I'm an avid gamer, outdoorsman, martial artist coach and competitor and dabble in entrepreneurship.. 
            I love reading too - below are some of my favorite reads.
        </p>

        <div className='flex items-center justify-center '>
            <img src={tfm} alt="tfm" />
            <img src={ttc} alt="ttc" />
            <img src={master} alt="master" />
            <img src={tfh} alt="tfh" />
            <img src={tbtci} alt="tbtci" />
        </div>
    </div>
    )
}