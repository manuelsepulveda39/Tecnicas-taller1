import React, { useState, useEffect } from "react";

const Teletrabajo = ({ updateTotal }) => {
    const [mantenimiento, setMantenimiento] = useState(0);
    const [otrosGastos, setOtrosGastos] = useState(0);

    const handleMantenimiento = (event) => {
        setMantenimiento(Number(event.target.value));
    };

    const handleOtrosGastos = (event) => {
        setOtrosGastos(Number(event.target.value));
    };

    useEffect(() => {
        const newTotal = mantenimiento + otrosGastos;
        updateTotal(newTotal);
    }, [mantenimiento, otrosGastos, updateTotal]);

    return (
        <div>
            <h4>Teletrabajo</h4>
            <label>
                Mantenimiento de computadores:
                <br />
                <input
                    type="number"
                    value={mantenimiento}
                    onChange={handleMantenimiento}
                />
            </label>
            <br />
            <label>
                Otros gastos:
                <br />
                <input
                    type="number"
                    value={otrosGastos}
                    onChange={handleOtrosGastos}
                />
            </label>
        </div>
    );
};

export default Teletrabajo;
