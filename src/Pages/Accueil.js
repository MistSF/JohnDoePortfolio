import Competences from '../Components/Competences';
import '../CSS/Accueil.css';


export default function HomePage() {
    return (
        <div className="HomePage">
            <section>
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
            </section>
            <section>
                <article>
                    <h3>A propos</h3>
                    <img></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, purus vitae interdum feugiat, sapien nunc pulvinar ex, in tempor ex ex et lectus. Donec vel massa a dolor accumsan malesuada id id neque.</p>
                </article>
                <article>
                    <h3>Mes compétences</h3>
                    <Competences />
                </article>
            </section>
        </div>
    )
}