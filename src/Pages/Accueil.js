import Competences from '../Components/Competences';
import "../CSS/Accueil.css"

import JohnDoe from '../images/john-doe-about.jpg';

export default function HomePage() {
    return (
        <div className="HomePage">
            <section className="Section-1">
                <div>
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <button className="btn-info bg-danger">En savoir plus</button>
                </div>
            </section>
            <section className="Section-2">
                <article className="col-3">
                    <h3>A propos</h3>
                    <img src={JohnDoe}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, purus vitae interdum feugiat, sapien nunc pulvinar ex, in tempor ex ex et lectus. Donec vel massa a dolor accumsan malesuada id id neque.</p>
                </article>
                <article className="col-3">
                    <h3>Mes compétences</h3>
                    <Competences />
                </article>
            </section>
        </div>
    )
}