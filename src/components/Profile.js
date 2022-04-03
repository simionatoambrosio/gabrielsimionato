import React from "react";

import Picture from './images/imagem-vermelho.jpeg'
import './Profile.css'

import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css"


export default function Profile() {
    useEffect(() => {
        Aos.init({ 
            duration: 1500,
            once: true
         })
      }, []);
    return(
        <div className="Profile"  >
            <img src={Picture} id="my-picture" alt="fotografia minha"></img>
            <h1 data-aos="fade-right">Olá, meu nome é Gabriel &#128075;</h1>
            <p id="description" data-aos="fade-right">Atualmente estou estudando com foco em <span>Front-End</span> e cursando <span>Análise e Desenvolvimento de Sistemas </span>na Faculdade de Tecnologia de São Paulo</p>
        </div>
    )
}