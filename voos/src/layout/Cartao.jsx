import React from 'react'
import './Cartao.css'

const Cartao = props => {
    let estilo ={
        backgroundColor: '#0B2238',
        borderColor: '#98A6B3',
        borderRadius: 20
    }
    return(
        <div className = "Cartao" style={estilo}>
            <div className = "Titulo">{props.titulo}</div>
            <div className = "Conteudo">{props.children}</div>
        </div> 
    )
}

export default Cartao