import React, { useState, useEffect } from 'react';

const Riesgos = ({ totalRiesgos }) => {
  const [valorRiesgos, setValorRiesgos] = useState(0);

  useEffect(() => {
    totalRiesgos(valorRiesgos);
  }, [valorRiesgos, totalRiesgos]);

  const handleRiesgos = (e) => {
    setValorRiesgos(parseFloat(e.target.value));
  };

  return (
    <div>
      <h2>Riesgos</h2>
      <div>
        <label>
          Todo negocio necesita un fondo para contingencias o imprevistos. ¿Cuánto le gustaría destinar a este propósito?
          <br />
          <input type="number" value={valorRiesgos} onChange={handleRiesgos} />
        </label>
      </div>
    </div>
  );
};

export default Riesgos;
