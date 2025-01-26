import React, { useContext } from "react"
import { MyContext } from "./MyProvider"

import mapIcon from "../images/icon/map.svg"
import geoIcon from "../images/icon/geo-alt.svg"
import phoneIcon from "../images/icon/phone.svg"
import mailIcon from "../images/icon/envelope-at.svg"

export default function Coordonnees() {
    const { coordonnees } = useContext(MyContext)
    
    return (
        <div>
            <h2>Mes Coordonnées</h2>
            <h3>John Doe</h3>
            <div>
                <img src={mapIcon} alt="icon-adresse" />
                <p>{coordonnees.adresse}</p>
            </div>
            <div>
                <img src={geoIcon} alt="icon-ville" />
                <p>{coordonnees.codePostal} {coordonnees.ville}, {coordonnees.pays}</p>
            </div>
            <div>
                <img src={phoneIcon} alt="icon-telephone" />
                <p>{coordonnees.telephone}</p>
            </div>
            <div>
                <img src={mailIcon} alt="icon-mail" />
                <p>{coordonnees.email}</p>
            </div>
        </div>
    )
}
