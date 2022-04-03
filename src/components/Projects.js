import React from "react";

import '../components/Projects.css'

import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css"


export default function Projects() {
    useEffect(() => {
        Aos.init({ 
            duration: 500,
            once: true
         })
      }, []);
    return(
        <div className="Projects" id="projects">
            <h1><span>Projetos</span></h1>
            <p>Em breve!</p>
        </div>
    )
}