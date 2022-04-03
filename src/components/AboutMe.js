import React from "react";

import '../components/AboutMe.css'

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import curriculo from './doc.pdf'

import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css"


export default function AboutMe() {
    useEffect(() => {
        Aos.init({ 
            duration: 1500,
            once: true
         })
      }, []);
    return(
        <div className="AboutMe" id="about-me">
            <h2>Sobre mim</h2>
            <p> Meu nome é <span>Gabriel Simionato Ambrósio</span>, tenho <span>17 anos</span> e sou apaixonado por <span>tecnologia e design</span>.
                Atualmente estou em busca de um <span>estágio</span>, principalmente na área de <span>Front-End</span>.
            </p>

            <p>
                Estou cursando <span>Análise e Desenvolvimento de Sistemas</span> na FATEC. Além disso
                tenho bons conhecimentos em <span>HTML, CSS </span>e estou estudando <span>JavaScript, React e Python</span>.
            </p>

            <p>
                Por gostar muito da parte que o cliente interage nos sites, acabei me interessando também em <span>UX/UI</span> para
                me auxiliar a construir interfaces mais intuitivas.
            </p>

            <p>Essas são algumas formas de me contatar ou ver meus trabalhos:</p>
            <ul>
                <li data-aos="fade-right"><div id="icon"><a href="https://www.linkedin.com/in/gabriel-simionato-293528218/" hrefLang="pt-br" target="_blank"><LinkedInIcon/>Linkedin</a></div></li>
                <li data-aos="fade-right"><div id="icon" ><a href="https://github.com/simionatoambrosio" hrefLang="pt-br" target="_blank"><GitHubIcon/>GitHub</a></div></li>
                <li data-aos="fade-right"><div id="icon"><a href="google.com" hrefLang="pt-br" target="_blank"><EmailIcon/>E-mail</a></div></li>
            </ul>
            <br></br>
            <button id="download-button" data-aos="fade-up"><a href={curriculo} download="Currículo Gabriel Simionato">Baixe meu currículo!</a></button>
        </div>
    )
}