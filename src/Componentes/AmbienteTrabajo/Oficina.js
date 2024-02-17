import React, { useState, useEffect } from "react";

const Oficina = ({ updateTotal }) => {
  const [arriendo, setArriendo] = useState(0);
  const [servicios, setServicios] = useState(0);
  const [mantenimiento, setMantenimiento] = useState(0);
  const [otros, setOtros] = useState(0);

  const handleArriendo = (event) => {
    setArriendo(Number(event.target.value));
  };

  const handleServicios = (event) => {
    setServicios(Number(event.target.value));
  };

  const handleMantenimiento = (event) => {
    setMantenimiento(Number(event.target.value));
  };

  const handleOtros = (event) => {
    setOtros(Number(event.target.value));
  };

  useEffect(() => {
    const newTotal = arriendo + servicios + mantenimiento + otros;
    console.log(newTotal, arriendo, servicios, mantenimiento, otros);
    updateTotal(newTotal);
  }, [arriendo, servicios, mantenimiento, otros, updateTotal]);

  return (
    <div>
      <h4>Oficina</h4>
      <label>
        Arriendo mensual: 
        <br/>
        <input type="number" value={arriendo} onChange={handleArriendo} />
      </label>
      <br />
      <label>
        Gastos en servicios:
        <br />
        <input type="number" value={servicios} onChange={handleServicios} />
      </label>
      <br />
      <label>
        Mantenimiento de computadores:
        <br />
        <input type="number" value={mantenimiento} onChange={handleMantenimiento} />
      </label>
      <br />
      <label>
        Otros:
        <br />
        <input type="number" value={otros} onChange={handleOtros} />
      </label>
    </div>
  );
};

export default Oficina;
