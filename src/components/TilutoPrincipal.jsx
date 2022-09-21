import React from "react";
import { useState } from "react";

const TilutoPrincipal = (props) => {
    let [stateMensajito, setStateMensajito] = useState(" ");
    return (
        <>
            <h1>
                {props.tituloActual}
                {stateMensajito}
            </h1>
            <button onClick={() => setStateMensajito((stateMensajito = " (from changed state)!"))}>Click me</button>
        </>
    );
};

export default TilutoPrincipal;
