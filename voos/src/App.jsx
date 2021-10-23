import React from "react"
import './components/App.css'
import VooInformacao from './components/FundBasico/VooInformacao'
import Cartao from "./layout/Cartao";
const App = () => {
    let objInformacao =[{
        "numero":3050,
        "origem":"Campinas",
        "destino":"São Paulo",
        "lugarDisponivel":10,
        "companhia":"AZUL"
    },
    {
        "numero":3051,
        "origem":"Rio de Janeiro",
        "destino":"São Paulo",
        "lugarDisponivel":19,
        "companhia":"GOL"
    },
    {
        "numero":3052,
        "origem":"Franca",
        "destino":"Cristais Paulista",
        "lugarDisponivel":0,
        "companhia":"PASSAREDO"
    },
    {
        "numero":3053,
        "origem":"Porto Alegre",
        "destino":"Caxias do Sul",
        "lugarDisponivel":57,
        "companhia":"AZUL"
    },
    {
        "numero":3054,
        "origem":"Rio de Janeiro",
        "destino":"Maceio",
        "lugarDisponivel":45,
        "companhia":"GOL"
    },
    {
        "numero":3055,
        "origem":"Manaus",
        "destino":"Rio Branco",
        "lugarDisponivel":34,
        "companhia":"PASSAREDO"
    },
    {
        "numero":3056,
        "origem":"Fortaleza",
        "destino":"Recife",
        "lugarDisponivel":82,
        "companhia":"PASSAREDO"
    },
    {
        "numero":3057,
        "origem":"Londrina",
        "destino":"Curitiba",
        "lugarDisponivel":4,
        "companhia":"AZUL"
    },
    {
        "numero":3058,
        "origem":"Rio de Janeiro",
        "destino":"Fortaleza",
        "lugarDisponivel":71,
        "companhia":"GOL"
    },
    {
        "numero":3059,
        "origem":"São Paulo",
        "destino":"Cuiaba",
        "lugarDisponivel":1,
        "companhia":"PASSAREDO"
    }];
    let informacoes = []
    for (let i = 0; i < objInformacao.length; i++){
        informacoes.push(<Cartao titulo={objInformacao[i].companhia}>
                    <VooInformacao numero={objInformacao[i].numero}
                                origem={objInformacao[i].origem}
                                destino={objInformacao[i].destino}
                                lugarDisponivel={objInformacao[i].lugarDisponivel}></VooInformacao>
                </Cartao>)
    }

    return (
        <div className="App">
            <h1>Informações de vôos</h1>
            <div className="Cartoes">
                {informacoes}
            </div>            
            
        </div>
    )
 
    
}

export default App
  