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
            <h3>Ensino Superior</h3>
            <div className="Fatec">
                <div className="education-logo">
                    <img src={FatecLogo}></img>
                </div>
                <div className="education-description">
                    <h4>Faculdade de Tecnologia de São Paulo</h4>
                    <p>Cursando Análise e Desenvolvimento de Sistemas</p>
                    <p>Período: fev de 2022 - dez de 2024</p>
                </div>
            </div>

            <h3>Ensino Tecníco</h3>
            <div className="Etec">
                <div className="education-logo">
                    <img src={EtecLogo}></img>
                </div>
                <div className="education-description">
                    <h4>Técnico em Desenvolvimento de Sistemas</h4>
                    <p>Concluído</p>
                    <p>Período: jul de 2020 - dez de 2021</p>
                </div>
            </div>

            <h3>Ensino Médio</h3>
            <div className="Objetivo">
                <div className="education-logo">
                    <img src={ObjetivoLogo}></img>
                </div>
                <div className="education-description">
                    <h4>Ensino Médio + Robótica com Lego MindStorms</h4>
                    <p>Concluído</p>
                    <p>Período: fev de 2019 - dez de 2021</p>
                </div>
            </div>

            
        </div>
    )
}