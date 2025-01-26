import { createContext, useState } from 'react';

export const CoordonneesContext = createContext();

export const CoordonneesProvider = ({ children }) => {
    const [coordonnees, setCoordonnees] = useState({
        adresse: '40 rue Laure Diebold',
        codePostal: '69009',
        ville: 'Lyon',
        pays: 'France',
        telephone: '10 20 30 40 50',
        email: 'john.doe@gmail.com'
    });

    return (
        <CoordonneesContext.Provider value={{ coordonnees, setCoordonnees }}>
            {children}
        </CoordonneesContext.Provider>
    )
}