import "./main.css";
import React, { useState, useEffect } from "react";
import AmbienteTrabajo from "./Componentes/AmbienteTrabajo/AmbienteTrabajo";
import CostCalculator from './Componentes/CostCalculator';
import Gastos from "./Componentes/Gastos";
import Riesgos from "./Componentes/Riesgos";

const App = () => {
  const [totalAmbi, setTotalAmbi] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCostos, setTotalCostos] = useState(0);
  const [totalGastos, setTotalGastos] = useState(0);
  const [totalRiesgos, setTotalRiesgos] = useState(0);
  const [totalCosGasRie, setTotalCosGasRie] = useState(0);
  const [gananciaPorcentaje, setGananciaPorcentaje] = useState(0);
  const [ganancia, setGanancia] = useState(0);
  const [totalSinImpuestos, setTotalSinImpuestos] = useState(0);
  const [rti, setRti] = useState(0);
  const [reteica, setReteica] = useState(0);
  const [iva, setIva] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotalCostos = totalAmbi + totalCost;
    setTotalCostos(newTotalCostos);
  }, [totalAmbi, totalCost]);

  useEffect(() => {
    const newTotalCosGasRie = totalCostos + totalGastos + totalRiesgos;
    setTotalCosGasRie(newTotalCosGasRie);
  }, [totalCostos, totalGastos, totalRiesgos]);

  useEffect(() => {
    const newGanancia = (gananciaPorcentaje / 100) * totalCosGasRie;
    setGanancia(newGanancia);
  }, [gananciaPorcentaje, totalCosGasRie]);

  useEffect(() => {
    const newTotalSinImpuestos = totalCosGasRie + ganancia;
    setTotalSinImpuestos(newTotalSinImpuestos);
  }, [totalCosGasRie, ganancia]);

  useEffect(() => {
    const newRti = 0.11 * totalSinImpuestos;
    setRti(newRti);
  }, [totalSinImpuestos]);

  useEffect(() => {
    const newReteica = 0.01 * rti;
    setReteica(newReteica);
  }, [rti]);

  useEffect(() => {
    const newIva = 0.19 * (rti + reteica + totalSinImpuestos - ganancia);
    setIva(newIva);
  }, [rti, reteica, totalSinImpuestos, ganancia]);

  useEffect(() => {
    const newTotal = rti + reteica + iva + totalSinImpuestos;
    setTotal(newTotal);
  }, [rti, reteica, iva, totalSinImpuestos]);

  const handleTotalAmbi = (newTotal) => {
    setTotalAmbi(newTotal);
  };

  const handleTotalCost = (newTotal) => {
    setTotalCost(newTotal);
  };

  const handleTotalGastos = (newTotal) => {
    setTotalGastos(newTotal);
  };

  const handleTotalRiesgos = (newTotal) => {
    setTotalRiesgos(newTotal);
  };

  const handleGananciaPorcentaje = (e) => {
    setGananciaPorcentaje(parseFloat(e.target.value));
  };

  return (
    <div>
      <h1>Calculadora de costeos de software</h1>
      <div className="contenido">
        <div className="margen">
          <h2>Costos</h2>
          <hr/>
          <div>
            <AmbienteTrabajo total={totalAmbi} setTotalAmbi={handleTotalAmbi} />
            <p>Total Ambiente Trabajo: ${totalAmbi}</p>
          </div>
          <div>
            <CostCalculator totalCost={handleTotalCost} />
            <p>Total costos de personal: ${totalCost}</p>
          </div>
          <h4>En Componentes de COSTOS de su proyecto, se estima un total de:</h4>
          <p>${totalCostos}</p>
        </div>
      </div>
      <hr />
      <div className="contenido">
        <div className="margen">
          <Gastos totalGastos={handleTotalGastos} />
          <h4>En componentes de GASTOS de su proyecto, se estima un total de:</h4>
          <p> ${totalGastos}</p>
        </div>
      </div>
      <hr />
      <div className="contenido">
        <div className="margen">
          <Riesgos totalRiesgos={handleTotalRiesgos} />
          <h4>En componentes RIESGOS de su proyecto, se estima un total de: </h4>
          <p>${totalRiesgos}</p>
        </div>
      </div>
      <hr />
      <div className="contenido">
        <div className="margen">
          <h2>Ganancias</h2>
          <label>
            ¿qué porcentaje de ganancias desea obtener por la realizacion del proyecto?
            <br />
            <input type="number" value={gananciaPorcentaje} onChange={handleGananciaPorcentaje} />
          </label>
          <p>Ganancia: ${ganancia}</p>
        </div>
      </div>
      <hr />
      <div className="contenido">
        <div className="margen">
          <h3>Total sin Impuestos:</h3>
          <p>${totalSinImpuestos}</p>
        </div>
      </div>
      <hr />
      <div className="contenido">
        <div className="margen">
          <h2>Impuestos</h2>
          <div>
            <h3>RTI (Retención en la fuente sobre ingresos laborales):</h3>
            <p>${rti}</p>
          </div>
          <div>
            <h3>Reteica (Retención en la fuente sobre ingresos de industria y comercio):</h3>
            <p>${reteica}</p>
          </div>
          <div>
            <h3>IVA (Impuesto al Valor Agregado):</h3>
            <p>${iva}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="contenido">
        <div className="margen">
          <h2>Total:</h2>
          <p>${total}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
