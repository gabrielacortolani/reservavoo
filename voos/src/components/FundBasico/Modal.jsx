import React from "react";
import './Modal.css'

const Modal = ({closeModal, reservarVoo, lugarDisponivel, semVaga}) => {
    
    function continuar(){
        reservarVoo(lugarDisponivel-1);
        closeModal(false);
    }
       
    let informacoes = []
    if (lugarDisponivel === 0 ) {
        informacoes.push(<div className="modalContainer">
                            <div className="corpo">
                                <h4>Não há lugares disponíveis</h4>
                            </div>
                        </div>)
    }else{
        informacoes.push(<div className="modalBackground">
                            <div className="modalContainer">
                                <div className="body">
                                    <form>
                                        <label>
                                            Nome:
                                            <input type="text" name="nome" />
                                        </label>
                                        <label>
                                            email:
                                            <input type="text" name="email" />
                                        </label>
                                        <label>
                                            Poltrona:
                                            <input type="number" name="poltrona" />
                                        </label>
                                    </form>
                                </div>
                                <div className="footer">
                                    <button onClick={continuar}>Efetivar</button>
                                </div>
                            </div>
                        </div>)
    }

    return informacoes;
    
}

export default Modal;