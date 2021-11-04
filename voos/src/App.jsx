import React from "react"
import './components/App.css'
import VooInformacao from './components/FundBasico/VooInformacao'
import Cartao from "./layout/Cartao";
import Painel from "./layout/Painel";

const App = () => {
    let objInformacao =[{
        "numero":3050,
        "origem":"Campinas",
        "destino":"São Paulo",
        "lugarDisponivel":10,
        "data":"01/12/2021",
        "hora_saida":"1:30",
        "hora_chegada":"14:00",
        "companhia":"AZUL"
    },
    {
        "numero":3051,
        "origem":"Rio de Janeiro",
        "destino":"São Paulo",
        "lugarDisponivel":19,
        "data":"23/01/2022",
        "hora_saida": "05:10",
        "hora_chegada":"6:15",
        "companhia":"GOL"
    },
    {
        "numero":3052,
        "origem":"Franca",
        "destino":"Ribeirão Preto",
        "lugarDisponivel":0,
        "data":"20/12/2021",
        "hora_saida":"11:30",
        "hora_chegada":"12:00",
        "companhia":"PASSAREDO"
    },
    {
        "numero":3053,
        "origem":"Porto Alegre",
        "destino":"Caxias do Sul",
        "lugarDisponivel":57,
        "data":"23/11/2021",
        "hora_saida":"13:30",
        "hora_chegada":"14:40",
        "companhia":"AZUL"
    },
    {
        "numero":3054,
        "origem":"Rio de Janeiro",
        "destino":"Maceio",
        "lugarDisponivel":45,
        "data":"01/03/2022",
        "hora_saida": "00:00",
        "hora_chegada":"3:55",
        "companhia":"GOL"
    },
    {
        "numero":3055,
        "origem":"Manaus",
        "destino":"Rio Branco",
        "lugarDisponivel":34,
        "data":"02/01/2022",
        "hora_saida":"14:25",
        "hora_chegada":"16:00",
        "companhia":"PASSAREDO"
    },
    {
        "numero":3056,
        "origem":"Fortaleza",
        "destino":"Recife",
        "lugarDisponivel":82,
        "data":"25/02/2022",
        "hora_saida":"17:35",
        "hora_chegada":"19:00",
        "companhia":"PASSAREDO"
    },
    {
        "numero":3057,
        "origem":"Londrina",
        "destino":"Curitiba",
        "lugarDisponivel":4,
        "data":"23/12/2021",
        "hora_saida":"19:55",
        "hora_chegada":"20:40",
        "companhia":"AZUL"
    },
    {
        "numero":3058,
        "origem":"Rio de Janeiro",
        "destino":"Fortaleza",
        "lugarDisponivel":71,
        "data":"02/01/2022",
        "hora_saida":"14:05",
        "hora_chegada":"16:23",
        "companhia":"GOL"
    },
    {
        "numero":3059,
        "origem":"São Paulo",
        "destino":"Cuiaba",
        "lugarDisponivel":1,
        "data":"01/12/2021",
        "hora_saida": "01:45",
        "hora_chegada":"3:20",
        "companhia":"PASSAREDO"
    }];

    let proximosVoos = [
        {"numero": 1013,
         "portao": 1,
         "companhia":"AZUL",
         "voo":"São Paulo - Salvador",
         "saida":"13:00",
         "chegada":"15:10"},
         {"numero": 1492,
         "portao": 2,
         "companhia":"GOL",
         "voo":"São Paulo - Manaus",
         "saida":"13:15",
         "chegada":"20:00"},
         {"numero": 1389,
         "portao": 6,
         "companhia":"AZUL",
         "voo":"Navegantes - Florianópolis",
         "saida":"13:20",
         "chegada":"14:10"},
         {"numero": 1384,
         "portao": 1,
         "companhia":"PASSAREDO",
         "voo":"São Paulo - Porto Alegre",
         "saida":"14:00",
         "chegada":"19:00"},
         {"numero": 3949,
         "portao": 4,
         "companhia":"AZUL",
         "voo":"Curitiba - Campo Grande",
         "saida":"13:45",
         "chegada":"18:00"}
    ]

    let informacoes = []
    for (let i = 0; i < objInformacao.length; i++){
        informacoes.push(<Cartao titulo={objInformacao[i].companhia}
                        color = '#FB2'
                        radio = {20}>
                    <VooInformacao numero={objInformacao[i].numero}
                                origem={objInformacao[i].origem}
                                destino={objInformacao[i].destino}
                                lugarDisponivel={objInformacao[i].lugarDisponivel}
                                data={objInformacao[i].data}
                                saida={objInformacao[i].hora_saida}
                                chegada={objInformacao[i].hora_chegada}>
                                </VooInformacao>
                </Cartao>)
    }
    
    function timeout(){
        if (counter === 0){
            setCounter(5)
            posicao === 4 ? setPosicao(0):setPosicao(posicao+1)
            console.log(posicao)
            for (let i = 0; i <= posicao; i ++){
                if (i === posicao){
                    setVoo(proximosVoos[i].numero);
                    setCompanhia(proximosVoos[i].companhia);
                    setPortao(proximosVoos[i].portao);
                    setHora(proximosVoos[i].saida);
                    setChegada(proximosVoos[i].chegada)
                    setOrigemDestino(proximosVoos[i].voo)
                }
                
            }
        } else{
            setTimeout(() => setCounter(counter - 1), 1000)
        }
        
    }

    const [counter, setCounter] = React.useState(0);
    const [posicao, setPosicao] = React.useState(0);
    const [nro, setVoo] = React.useState("");
    const [companhia, setCompanhia] = React.useState("");
    const [portao, setPortao] = React.useState();
    const [hora, setHora] = React.useState("");
    const [chegada, setChegada] = React.useState("");
    const [voo, setOrigemDestino] = React.useState("");

    React.useEffect(() => {
        counter >= 0 && timeout();
      }, [counter]);

    return (
        <div className="App">
            <div className="Cartoes">
                <Painel voo={nro}
                        origemDestino={voo}
                        companhia={companhia}
                        portao={portao}
                        hora={hora}
                        chegada={chegada}/>
            </div>
            <h2>Reservas de vôos</h2>
            <div className="Cartoes">
                {informacoes}
            </div>            
            
        </div>
    )
}

export default App