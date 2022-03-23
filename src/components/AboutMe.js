import React from "react";

import '../components/AboutMe.css'

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function AboutMe() {
    return(
        <div className="AboutMe" id="about-me">
            <h1><span>Sobre mim</span></h1>
            <p>Meu nome é Gabriel Simionato Ambrósio,  </p>
            <h3>Formas de contato</h3>
            <ul>
                <li><div id="icon"><a href="https://www.linkedin.com/in/gabriel-simionato-293528218/" hrefLang="pt-br" target="_blank"><LinkedInIcon/>Linkedin</a></div></li>
                <li><div id="icon" ><a href="https://github.com/simionatoambrosio" hrefLang="pt-br" target="_blank"><GitHubIcon/>GitHub</a></div></li>
                <li><div id="icon"><a href="google.com" hrefLang="pt-br" target="_blank"><EmailIcon/>E-mail</a></div></li>
            </ul>
        </div>
    )
}