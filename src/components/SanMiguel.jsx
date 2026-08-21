// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import VideoYoutube from "./VideoYoutube";

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
      <table ref={tablaRef} className="tabla-tarifa-sanmiguel">
  <tbody>

    {/* TÍTULO */}
    <tr>
      <td colSpan={3} className="titulo-tarifa-sanmiguel">
        Tarifas San Miguel
        <span>URBANOS ROJOS</span>
      </td>
    </tr>

    {/* ENCABEZADOS */}
    <tr>
      <td className="encabezado-tarifa-sanmiguel">
        Origen
      </td>

      <td className="encabezado-tarifa-sanmiguel">
        Destino
      </td>

      <td className="encabezado-tarifa-sanmiguel">
        Costo
      </td>
    </tr>


    {/* SAN MIGUEL */}
    <tr>
      <td className="san-miguel">
        <span className="indicador-san-miguel"></span>
        San Miguel
      </td>

      <td className="san-miguel">
        Teziutlan
      </td>

      <td className="san-miguel-precio">
        $ 8.50
      </td>
    </tr>

    <tr>
      <td className="san-miguel">
        <span className="indicador-san-miguel"></span>
        San Miguel
      </td>

      <td className="san-miguel">
        Fresnillo
      </td>

      <td className="san-miguel-precio">
        $ 10.00
      </td>
    </tr>

    <tr>
      <td className="san-miguel">
        <span className="indicador-san-miguel"></span>
        San Miguel
      </td>

      <td className="san-miguel">
        Hospital
      </td>

      <td className="san-miguel-precio">
        $ 12.00
      </td>
    </tr>

    <tr>
      <td className="san-miguel">
        <span className="indicador-san-miguel"></span>
        San Miguel
      </td>

      <td className="san-miguel">
        Chignautla
      </td>

      <td className="san-miguel-precio">
        $ 14.00
      </td>
    </tr>


    {/* SEPARADOR */}
    <tr>
      <td colSpan={3} className="separador-ruta-sanmiguel">
        <span></span>
        Chignaulingo
        <span></span>
      </td>
    </tr>


    {/* CHIGNAULINGO */}
    <tr>
      <td className="chignaulingo">
        Chignaulingo
      </td>

      <td className="chignaulingo">
        Teziutlan
      </td>

      <td className="chignaulingo-precio">
        $ 8.00
      </td>
    </tr>

    <tr>
      <td className="chignaulingo">
        Chignaulingo
      </td>

      <td className="chignaulingo">
        Fresnillo
      </td>

      <td className="chignaulingo-precio">
        $ 10.00
      </td>
    </tr>

    <tr>
      <td className="chignaulingo">
        Chignaulingo
      </td>

      <td className="chignaulingo">
        Hospital
      </td>

      <td className="chignaulingo-precio">
        $ 12.00
      </td>
    </tr>

    <tr>
      <td className="chignaulingo">
        Chignaulingo
      </td>

      <td className="chignaulingo">
        Chignautla
      </td>

      <td className="chignaulingo-precio">
        $ 14.00
      </td>
    </tr>


    {/* NOTA */}
    <tr>
      <td colSpan={3} className="nota-tarifa-sanmiguel">
        <strong>Nota:</strong> La tarifa para la ruta Carrizal
        es la misma que para la ruta San Miguel.
      </td>
    </tr>


    {/* COPYRIGHT */}
    <tr>
      <td colSpan={3} className="copyright-tarifa-sanmiguel">
        @el.joyboy.de.chignautla
      </td>
    </tr>

  </tbody>
</table>


<div className="contenedor-boton-sanmiguel">
  <button
    onClick={capturarTabla}
    className="boton-capturar-sanmiguel"
  >
    📸 Capturar tarifas
  </button>
</div>

      <hr></hr>
      <div>
        <h1 className="titulo-h">
          Como llegar a San Miguel partiendo desde el hospital Angel.
        </h1>
        <VideoYoutube url="https://youtu.be/IVbU1eh4RCA" />
      </div>

      <div>
        <h1 className="titulo-h">
          Como llegar a la Base de Urbanos Rojos partiendo desde San Miguel.
        </h1>
        <VideoYoutube url="https://youtu.be/WwhR-t3WH9g" />
      </div>
    </div>
  );
}

export default SanMiguel;
