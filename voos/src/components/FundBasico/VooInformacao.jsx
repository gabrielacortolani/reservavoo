export default function Parametro(props){
    let vaga = props.lugarDisponivel == 0 ? true :false;
    console.log(vaga)
    return(
        <div>
            <h2>Vôo {props.numero}</h2>
            <h3>{props.origem} - {props.destino}</h3>
            <h2>Lugares disponíveis: {props.lugarDisponivel}</h2>
            <div class="container">
                <div class="vertical-center">
                   <button disabled={vaga}>Reservar</button>
                </div>
            </div>
            
        </div>
    )
}
