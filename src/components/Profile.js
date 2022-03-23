import React from "react";

import Picture from './images/imagem-vermelho.jpeg'
import './Profile.css'

export default function Profile() {
    return(
        <div className="Profile">
            <img src={Picture} id="my-picture"></img>
            <h1>Olá, meu nome é Gabriel &#128075;</h1>
            <p id="description">Atualmente estou estudando com foco em <span>Front-End</span> e cursando <span>Análise e Desenvolvimento de Sistemas </span>na Faculdade de Tecnologia de São Paulo</p>
        </div>
    )
}