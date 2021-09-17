import React from 'react'
import './Cartao.css'

const Cartao = props => {
    let estilo ={
        backgroundColor: props.color || '#AC0',
        borderColor: props.color || 'AC0',
        borderRadius: props.radio || 10
    }
    return(
        <div className = "Cartao" style={estilo}>
            <div className = "Titulo">{props.titulo}</div>
            <div className = "Conteudo">{props.children}</div>
        </div> 
    )
}

export default Cartao