import React from "react";
import './BioCard.css'

export default function BioCard(){
    return(
            <div id='name-title-div'>
                <h1 id='name'>Dan Szwarc</h1>
                <h3 id='my-title'>Software Engineer</h3>
                <a href='../utils/DS_Resume.pdf' download>Download Resume</a>
                <p id='my-bio'>My name is Dan and I am a mechanical engineer turned software engineer. I have chosen to challenge myself and change careers from one demanding field to the next. I bring my love of problem-solving and obsessive need to know how things work from my previous career into the realm of software engineering in the hopes of push myself even further.</p>
            </div>
    )
}