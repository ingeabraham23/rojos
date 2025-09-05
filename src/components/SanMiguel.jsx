// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import "./SanMiguel.css";

function SanMiguel() {
  const tablaRef = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Tarifa san miguel.png";
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
              Tarifas San Miguel. Urbanos Rojos
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-sanmiguel">Origen</td>
            <td className="encabezado-tabla-sanmiguel">Destino</td>
            <td className="encabezado-tabla-sanmiguel">Costo</td>
          </tr>
          <tr>
            <td className="san-miguel">San Miguel</td>
            <td className="san-miguel">Teziutlan</td>
            <td className="san-miguel-precio">$ 8.50</td>
          </tr>
          <tr>
            <td className="san-miguel">San Miguel</td>
            <td className="san-miguel">Fresnillo</td>
            <td className="san-miguel-precio">$ 10.00</td>
          </tr>
          <tr>
            <td className="san-miguel">San Miguel</td>
            <td className="san-miguel">Hospital</td>
            <td className="san-miguel-precio">$ 12.00</td>
          </tr>
          <tr>
            <td className="san-miguel">San Miguel</td>
            <td className="san-miguel">Chignautla</td>
            <td className="san-miguel-precio">$ 14.00</td>
          </tr>
          <tr>
            <td className="chignaulingo">Chignaulingo</td>
            <td className="chignaulingo">Teziutlan</td>
            <td className="chignaulingo-precio">$ 8.00</td>
          </tr>
          <tr>
            <td className="chignaulingo">Chignaulingo</td>
            <td className="chignaulingo">Fresnillo</td>
            <td className="chignaulingo-precio">$ 10.00</td>
          </tr>
          <tr>
            <td className="chignaulingo">Chignaulingo</td>
            <td className="chignaulingo">Hospital</td>
            <td className="chignaulingo-precio">$ 12.00</td>
          </tr>
          <tr>
            <td className="chignaulingo">Chignaulingo</td>
            <td className="chignaulingo">Chignautla</td>
            <td className="chignaulingo-precio">$ 14.00</td>
          </tr>
          <tr>
            <td colSpan={4} className="nota-sanmiguel">
              La tarifa para la ruta Carrizal es la misma que para la ruta San
              Miguel.
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="copyright-sanmiguel">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar San Miguel 📸
        </button>
      </div>
      <h4>
        Video de YouTube que muestra como llegar a San Miguel partiendo desde el
        hospital Angel.
      </h4>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IVbU1eh4RCA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <hr></hr>
      <h4>
        Video de YouTube que muestra como llegar a la Base de Urbanos Rojos partiendo desde el
        San Miguel.
      </h4>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WwhR-t3WH9g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default SanMiguel;
