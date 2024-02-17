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
          ¿Cuántas personas desea contratar?
          <br />
          <input type="number" value={numPersonas} onChange={e => setNumPersonas(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Por favor, introduzca las horas diarias de trabajo por empleado:
          <br />
          <input type="number" value={horasPorDia} onChange={e => setHorasPorDia(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Por favor, introduzca la duración (en días) de su proyecto:
          <br />
          <input type="number" value={numDias} onChange={e => setNumDias(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          ¿Cuál es la tarifa por hora de los empleados?
          <br />
          <input type="number" value={costoHora} onChange={e => setCostoHora(parseFloat(e.target.value))} />
        </label>
      </div>
    </div>
  );
};

export default CostCalculator;
