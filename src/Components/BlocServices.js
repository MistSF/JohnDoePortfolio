export default function BlocServices(props) {
    const { service } = props;
    return (
        <div>
            <img alt="" src="" />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
        </div>
    )
}