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
                <h2>VÔO: {props.voo} Companhia: {props.companhia} Horário: {props.hora} Portão: {props.portao}</h2>
            </div>
        </div> 
    )
}

export default Painel
