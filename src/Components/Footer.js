import React, { useContext } from "react"
import { MyContext } from "./MyProvider"

export default function Footer() {
    const { coordonnees } = useContext(MyContext)

    return (
        <footer className="App-footer">
            <div>
                <h3>John Doe</h3>
                <p>{coordonnees.adresse}</p>
                <p>{coordonnees.codePostal} {coordonnees.ville}, {coordonnees.pays}</p>
                <p>{coordonnees.telephone}</p>
                <p>{coordonnees.email}</p>
                <div>
                    <a href="https://www.Github.com/example" target="_blank" rel="Github">
                        <img src="Github.png" alt="Github" />
                    </a>
                    <a href="https://www.twitter.com/example" target="_blank" rel="Twitterr">
                        <img src="twitter.png" alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/example" target="_blank" rel="LinkedIn">
                        <img src="linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div>
                <h3>Liens utiles</h3>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/services">SERVICES</a></li>
                    <li><a href="/portfolio">PORTFOLIO</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                    <li><a href="/mentions-legales">MENTION LÉGALES</a></li>
                </ul>
            </div>
            <div>
                <h3>Mes dernières réalisations</h3>
                <ul>
                    <li>Fresh Food</li>
                    <li>Restaurant Akira</li>
                    <li>Espace bien-être</li>
                    <li>SEO</li>
                    <li>Création d'une API</li>
                    <li>Maquette d'un site</li>
                </ul>
            </div>
        </footer>
    );  
}