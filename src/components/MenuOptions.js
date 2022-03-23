import React from "react";

import '../components/MenuOptions.css'

export default function MenuOptions() {

    return(
        <div className="MenuOptions">
            <ul>
                <li><a href="#about-me">Sobre mim</a></li>
                <li><a href="#education"> Formação Acadêmica</a></li>
                <li><a href="#projects">Projetos</a></li>
            </ul>
        </div>
    )
}