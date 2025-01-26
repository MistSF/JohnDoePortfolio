import React, { useContext } from "react"
import { CoordonneesContext } from "./CoordonneesProvider"

export default function Coordonnees() {
    const { coordonnees } = useContext(CoordonneesContext)
    
    return (
        <div>
            <h2>Mes Coordonnées</h2>
            <h3>John Doe</h3>
            <p>{coordonnees.adresse}</p>
            <p>{coordonnees.codePostal} {coordonnees.ville}, {coordonnees.pays}</p>
            <p>{coordonnees.telephone}</p>
            <p>{coordonnees.email}</p>
        </div>
    )
}
