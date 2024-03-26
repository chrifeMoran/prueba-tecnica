import response from "../mockup/with-results.json"

export default function DetallePersonaje(props){
    const testPj = response.results[0]
    const {location, status, gender, species, name} = testPj;
    //TO DO: conectarlo con boton
    return (
        <>
        <h1>{name}</h1>
        <h3>{status}</h3>
        <h3>{species}</h3>
        <h3>{gender}</h3>
        <h3>{location}</h3>
        <button >VOLVER</button>
        </>
    )
}