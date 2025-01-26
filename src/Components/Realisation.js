export default function Realisation(props) {
    const { real } = props;
    return (
        <div className="Realisation">
            <img src={real.image} alt={real.name} />
            <h2>{real.name}</h2>
            <p>{real.description}</p>
            <button onClick={() => props.handleClick(real)}>Voir plus</button>
            <p>{real.info}</p>
        </div>
    )
}