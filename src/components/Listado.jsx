import { useState } from "react";
import React from "react";
import { baseColaboradores } from "../utils/BaseColaboradores";

const Listado = () => {
    const [nombreColaborador, setNombreColaborador] = useState("");
    const [baseColaboradores, setBaseColaboradores] = useState(["colaborador 1", "colaborador 2", "colaborador3"]);

   // const lista = listaColaboradores.map((colaborador) =>
  //     colaborador.toUpperCase()
   // );

    const enviarFormulario = (e) => {
        e.preventDefault();
        setBaseColaboradores([...baseColaboradores, nombreColaborador]);
        setNombreColaborador("");
    };

    const capturaInput = (e) => {setNombreColaborador(e.target.value)};

    return (
        <>
            <form onSubmit={enviarFormulario}>
                <input name="nombreColaborador" onChange={capturaInput} />
                <button> Agregar tarea</button>
            </form>
            <ul>
                {baseColaboradores.map((colaborador) => (
                    <li key={id}>{colaborador}</li>
                ))}
            </ul>
        </>
    );
}

export default Listado;
