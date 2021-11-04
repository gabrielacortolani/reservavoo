import React from 'react'
import './Painel.css'

const Painel = props => {
    let estilo ={
        backgroundColor: '#0B2238',
        borderColor: '#98A6B3',
        borderRadius: 20
    }

    return(
        <div className="Painel"  style={estilo}>
            <div className = "Titulo">Próximos Voos</div>
            <div className="Conteudo">
                <p>
                    <h3>Companhia: {props.companhia} </h3>
                </p>
                <p>
                    <h3>VÔO: {props.voo} - {props.origemDestino} </h3>
                </p>
                <p>
                    <h3>Saída: {props.hora} Chegada: {props.chegada}</h3>
                </p>
                <p>
                    <h3> Portão: {props.portao}</h3>
                </p>
            </div>
        </div> 
    )
}

export default Painel