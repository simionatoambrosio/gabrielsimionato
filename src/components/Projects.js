import React from "react";

import '../components/Projects.css'

import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css"
import Project from "./Project";

import PokemonProject from "../ProjectsAssets/pokemon-project.PNG"
import CalculatorProject from "../ProjectsAssets/calculator-project.PNG"


export default function Projects() {
    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true
        })
    }, []);
    return (
        <div className="Projects" id="projects">
            <h1><span>Projetos</span></h1>
            <Project
                image={PokemonProject}
                name="React Pokedex"
                description="Construída utilizando HTML, CSS e JavaScript com o framework React.
            Aplicada a lógica de componentes, consumo da API Rest pokeapi.co,
            HTML LocalStorage, React Hooks, renderização condicional, Contexts
            e React Router V6."
                gitlink="github.com/simionatoambrosio/react-pokedex"
                webpagelink="react-pokedex-five-omega.vercel.app"
            />

            <Project
                image={CalculatorProject}
                name="React Calculator"
                description="Construída utilizando HTML, CSS e JavaScript com o framework React.
                Componentização de elementos e transmissão de informações entre
                eles via props."
                gitlink="github.com/simionatoambrosio/calculator"
                webpagelink="calculator-with-react-zeta.vercel.app"
            />
        </div>
    )
}