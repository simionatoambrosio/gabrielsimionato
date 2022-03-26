import React from "react";

import '../components/AboutMe.css'

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import curriculo from './doc.pdf'

export default function AboutMe() {
    return(
        <div className="AboutMe" id="about-me">
            <h2><span>Sobre mim</span></h2>
            <p>Meu nome é Gabriel Simionato Ambrósio,  </p>
            <p>Formas de contato que eu utilizo:</p>
            <ul>
                <li><div id="icon"><a href="https://www.linkedin.com/in/gabriel-simionato-293528218/" hrefLang="pt-br" target="_blank"><LinkedInIcon/>Linkedin</a></div></li>
                <li><div id="icon" ><a href="https://github.com/simionatoambrosio" hrefLang="pt-br" target="_blank"><GitHubIcon/>GitHub</a></div></li>
                <li><div id="icon"><a href="google.com" hrefLang="pt-br" target="_blank"><EmailIcon/>E-mail</a></div></li>
            </ul>
            <br></br>
            <button id="download-button"><a href={curriculo} download="Currículo Gabriel Simionato">Baixe meu currículo!</a></button>
        </div>
    )
}