export default function FormulaireContact() {
    return (
        <div>
            <h2>Formulaire de contact</h2>
            <form>
                <input type="text" placeholder="Nom" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="telephone" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}