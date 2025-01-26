import Realisation from "../Components/Realisation";

export default function Portfolio() {
    const realisation = [
        {name: "Fresh Food", image:"", description: "Site de vente de produits frais en ligne", info:"Site réalisé avec PHP et MySQL"},
        {name: "Restaurant Akira", image:"", description: "Site de vente de produits frais en ligne", info:"Site réalisé avec WordPress"},
        {name: "Espace bien-être", image:"", description: "Site de vente de produits frais en ligne", info:"Site réalisé avec LARAVEL"},
        {name: "SEO", image:"", description: "Amélioration du référencement d'un site e-commerce", info:"Utilisation des outils SEO"},
        {name: "Création d'une API", image:"", description: "Création d'une API RESTFULL publique", info:"PHP - SYMFONY"},
        {name: "Maquette d'un site web", image:"", description: "Création du prototype d'un site", info:"Réalisé avec FIGMA"},
    ]

    return (
        <div>
            <h1>Portfolio</h1>
            <p>Voici quelques une de mes réalisations</p>
            <div>
                {realisation.map((realisation) => {
                    return (
                    <Realisation real={realisation}  />)
                })}
            </div>
        </div>
    );
}