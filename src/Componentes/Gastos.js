import React, { useState, useEffect } from 'react';

const Gastos = ({ totalGastos }) => {
  const [contadorMes, setContadorMes] = useState(0);
  const [otrosGastos, setOtrosGastos] = useState(0);

  useEffect(() => {
    const totalGasto = contadorMes + otrosGastos;
    totalGastos(totalGasto);
  }, [contadorMes, otrosGastos, totalGastos]);

  const handleContadorMesChange = (e) => {
    setContadorMes(parseFloat(e.target.value));
  };

  const handleOtrosGastosChange = (e) => {
    setOtrosGastos(parseFloat(e.target.value));
  };

  return (
    <div>
      <h2>Gastos</h2>
      <div>
        <label>
          Costo del contador al mes:
          <input type="number" value={contadorMes} onChange={handleContadorMesChange} />
        </label>
      </div>
      <div>
        <label>
          Otros gastos:
          <input type="number" value={otrosGastos} onChange={handleOtrosGastosChange} />
        </label>
      </div>
    </div>
  );
};

export default Gastos;
