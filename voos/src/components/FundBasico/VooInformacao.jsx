import React, {useState} from "react";
import Modal from './Modal';

export default function Parametro(props){
    let semVaga = props.lugarDisponivel === 0 ? true :false;

    const [lugarDisponivel, reservaVoo] = useState(props.lugarDisponivel);
    const [isModalVisible, setModalVisible] = useState(false);
    
    function cancelar(){
        if (isModalVisible){
            setModalVisible(false);
        }else{
            reservaVoo(lugarDisponivel+1)
        }
    }
    return(
        <div>
            <h2>Vôo {props.numero}</h2>
            <h3>{props.origem}-{props.destino}</h3>
            <h3>Data: {props.data}</h3>
            <h3>Lugares disponíveis: {lugarDisponivel}</h3>
            <div class="container">
                <div class="vertical-center">
                   <button onClick={() => setModalVisible(true)}>Reservar</button>
                   {isModalVisible ?<Modal closeModal={() => setModalVisible(false)}
                                           reservarVoo={() => reservaVoo(lugarDisponivel-1)}
                                           lugarDisponivel ={lugarDisponivel}
                                           semVaga = {semVaga} ></Modal>: null}
                </div>
                <div class="vertical-center">
                   <button onClick={cancelar}>Cancelar Reserva</button>
                </div>
            </div> 
        </div>
    )
}