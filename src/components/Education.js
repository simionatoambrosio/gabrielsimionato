import React from "react";

import '../components/Education.css'

import FatecLogo from './images/fatec.png'
import EtecLogo from './images/etec.png'
import ObjetivoLogo from './images/objetivo.png'

export default function Education() {
    return(
        <div className="Education" id="education">
            <h1><span>Formação Acadêmica</span></h1>
            <p>Algum texto q eu vo escrever e etc</p>

            <h2>Ensino Superior</h2>
            <div className="Fatec">
                <div className="education-logo">
                    <img src={FatecLogo} alt="logotipo da FATEC"></img>
                </div>
                <div className="education-description">
                    <h3>Faculdade de Tecnologia de São Paulo</h3>
                    <p>Cursando Análise e Desenvolvimento de Sistemas</p>
                    <p>Período: fev de 2022 - dez de 2024</p>
                </div>
            </div>

            <h2>Ensino Tecníco</h2>
            <div className="Etec">
                <div className="education-logo">
                    <img src={EtecLogo} alt="logotipo da ETEC"></img>
                </div>
                <div className="education-description">
                    <h3>Técnico em Desenvolvimento de Sistemas</h3>
                    <p>Concluído</p>
                    <p>Período: jul de 2020 - dez de 2021</p>
                </div>
            </div>

            <h2>Ensino Médio</h2>
            <div className="Objetivo">
                <div className="education-logo">
                    <img src={ObjetivoLogo} alt="logotipo do Colégio Objetivo"></img>
                </div>
                <div className="education-description">
                    <h3>Ensino Médio + Robótica com Lego MindStorms</h3>
                    <p>Concluído</p>
                    <p>Período: fev de 2019 - dez de 2021</p>
                </div>
            </div>

            
        </div>
    )
}