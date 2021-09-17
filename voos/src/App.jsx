/*export default _ => (

)*/

import React from "react"
import './components/App.css'
import VooInformacao from './components/FundBasico/VooInformacao'
import Cartao from "./layout/Cartao";
const App = () => {
    
    return (
        <div className="App">
            <h2>Informações de vôos</h2>
            <div className="Cartoes"></div>            
            <Cartao titulo="AZUL"
                    color = '#FB2'
                    radio = {20}>
                <VooInformacao numero="3054"
                               origem="Campinas"
                               destino="São Paulo"
                               lugarDisponivel="130"
                               reserva = "false"></VooInformacao>
            </Cartao>
            <Cartao titulo="AZULA"
                    color = '#FB2'
                    radio = {20}>
                <VooInformacao numero="3054"
                               origem="Rio de Janeiro"
                               destino="São Paulo"
                               lugarDisponivel="33"></VooInformacao>
            </Cartao>
            <Cartao titulo="AZUL"
                    color = '#FB2'
                    radio = {20}>
                <VooInformacao numero="3054"
                               origem="Maceió"
                               destino="Brasilia"
                               lugarDisponivel="131"></VooInformacao>
            </Cartao>
            <Cartao titulo="PASSAREDO"
                    color = '#FB2'
                    radio = {20}>
                <VooInformacao numero="3054"
                               origem="Ribeirão Preto"
                               destino="Rio de Janeiro"
                               lugarDisponivel="12"></VooInformacao>
            </Cartao>
            <Cartao titulo="PASSAREDO"
                    color = '#FB2'
                    radio = {20}>
                <VooInformacao numero="3054"
                               origem="Porto Alegre"
                               destino="Manaus"
                               lugarDisponivel="1"></VooInformacao>
            </Cartao>
            <Cartao titulo="LATAM"
                    color = '#FB2'
                    radio = {20}>
                <VooInformacao numero="3054"
                               origem="Curitiba"
                               destino="Fortaleza"
                               lugarDisponivel="34"></VooInformacao>
            </Cartao>
            <Cartao titulo="LATAM"
                    color = '#FB2'
                    radio = {20}>
                <VooInformacao numero="3054"
                               origem="Natal"
                               destino="Recife"
                               lugarDisponivel="50"></VooInformacao>
            </Cartao>
            <Cartao titulo="GOL"
                    color = '#FB2'
                    radio = {20}>
                <VooInformacao numero="3054"
                               origem="Franca"
                               destino="Claraval"
                               lugarDisponivel="0"></VooInformacao>
            </Cartao>
            <Cartao titulo="GOL"
                    color = '#FB2'
                    radio = {20}>
                <VooInformacao numero="3054"
                               origem="São Paulo"
                               destino="Buenos Aires"
                               lugarDisponivel="89"></VooInformacao>
            </Cartao>
            <Cartao titulo="GOL"
                    color = '#FB2'
                    radio = {20}>
                <VooInformacao numero="3054"
                               origem="Rio Branco"
                               destino="Boa Vista"
                               lugarDisponivel="88"></VooInformacao>
            </Cartao>
        </div>
    )
}

export default App
