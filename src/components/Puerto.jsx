// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import "./Puerto.css";

function Puerto() {
  const tablaRef = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Tarifa El Puerto.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      <table ref={tablaRef} className="tabla-sanmiguel">
        <tbody>
          <tr>
            <td colSpan={3} className="encabezado-sanmiguel">
              Tarifas El Puerto. Urbanos Rojos
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-sanmiguel">Origen</td>
            <td className="encabezado-tabla-sanmiguel">Destino</td>
            <td className="encabezado-tabla-sanmiguel">Costo</td>
          </tr>
          <tr>
            <td className="tarifa10">Teziutlan</td>
            <td className="tarifa10">El Puerto</td>
            <td className="tarifa10">$ 10.00</td>
          </tr>
          <tr>
            <td className="tarifa10">Retorno Bimbo</td>
            <td className="tarifa10">El Puerto</td>
            <td className="tarifa10">$ 10.00</td>
          </tr>
          <tr>
            <td className="tarifa09">Capulin</td>
            <td className="tarifa09">El Puerto</td>
            <td className="tarifa09">$ 9.00</td>
          </tr>
          <tr>
            <td className="tarifa09">Linda Tarde</td>
            <td className="tarifa09">El Puerto</td>
            <td className="tarifa09">$ 9.00</td>
          </tr>
          <tr>
            <td className="tarifa08">San Mateo</td>
            <td className="tarifa08">El Puerto</td>
            <td className="tarifa08">$ 8.00</td>
          </tr>
          <tr>
            <td colSpan={3} className="copyright-sanmiguel">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar El Puerto 📸
        </button>
      </div>
    </div>
  );
}

export default Puerto;
