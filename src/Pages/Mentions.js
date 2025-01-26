import React, { useContext} from "react"
import { MyContext } from "../Components/MyProvider"

export default function Mentions() {
    const {coordonnees} = useContext(MyContext)

    return (
        <div>
            <h1>Mentions légales</h1>
            <div>
                <div>
                    <h2>John Doe</h2>
                    <p>{coordonnees.adresse}</p>
                    <p>{coordonnees.codePostal} {coordonnees.ville}, {coordonnees.pays}</p>
                    <p>{coordonnees.telephone}</p>
                    <p>{coordonnees.email}</p>
                </div>
                <div>
                    <h2>alwaysdata</h2>
                    <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                    <a href="https://www.alwaysdata.com">www.alwaysdata.com</a>
                </div>
                <div>
                    <h2>Crédits</h2>
                    <p>Ce site à été réalisé par John Doe, étudiant au <a>Centre Européen de formation</a></p>
                    <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a>Pixabay</a></p>
                    <p>La favicon de ce site à été fournis par <a>John doe Icons ertsellt von Freepik - Flaticon</a></p>
                </div>
            </div>
        </div>
    )
}