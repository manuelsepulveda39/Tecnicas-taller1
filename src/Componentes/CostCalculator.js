import React, { useState, useEffect } from 'react';

const CostCalculator = ({ totalCost }) => {
  const [numPersonas, setNumPersonas] = useState(0);
  const [horasPorDia, setHorasPorDia] = useState(0);
  const [numDias, setNumDias] = useState(0);
  const [costoHora, setCostoHora] = useState(0);

  useEffect(() => {
    const newTotal = numPersonas * horasPorDia * numDias * costoHora;
    totalCost(newTotal);
  }, [numPersonas, horasPorDia, numDias, costoHora, totalCost]);

  return (
    <div>
      <h3>Costos personal</h3>
      <div>
        <label>
          Numero de trabajadores:
          <input type="number" value={numPersonas} onChange={e => setNumPersonas(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Horas por dia:
          <input type="number" value={horasPorDia} onChange={e => setHorasPorDia(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Numero de dias:
          <input type="number" value={numDias} onChange={e => setNumDias(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Pago por hora:
          <input type="number" value={costoHora} onChange={e => setCostoHora(parseFloat(e.target.value))} />
        </label>
      </div>
    </div>
  );
};

export default CostCalculator;
