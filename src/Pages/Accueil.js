import '../CSS/Accueil.css';

export default function HomePage() {
    const competences = {
        html5: 90,
        css3: 80,
        javascript: 70,
        php: 60,
        react: 50,
    }

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
                    <ul>
                        <li>HTML5 {competences.html5}%</li>
                        <div className="progress">
                            <div className="progress-bar bg-danger" style={{width: `${competences.html5}%`}}></div>
                        </div>
                        <li>CSS3 {competences.css3}%</li>
                        <div className="progress">
                            <div className="progress-bar bg-info" style={{width: `${competences.css3}%`}}></div>
                        </div>
                        <li>JavaScript {competences.javascript}%</li>
                        <div className="progress">
                            <div className="progress-bar bg-warning" style={{width: `${competences.javascript}%`}}></div>
                        </div>
                        <li>PHP {competences.php}%</li>
                        <div className="progress">
                            <div className="progress-bar bg-success" style={{width: `${competences.php}%`}}></div>
                        </div>
                        <li>React {competences.react}%</li>
                        <div className="progress">
                            <div className="progress-bar bg-primary" style={{width: `${competences.react}%`}}></div>
                        </div>
                    </ul>
                </article>
            </section>
        </div>
    )
}