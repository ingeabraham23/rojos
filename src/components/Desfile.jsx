// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
// import antorcha from "/bannercristo.png";

import "./Desfile.css";

function Desfile() {
  const [desfileSeleccionado, setDesfileSeleccionado] = useState(
    "Desfile 20 de Noviembre",
  );

  const fechaActual = new Date().toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const desfiles = [
    "Desfile de la Primavera",
    "Desfile 5 de Mayo",
    "Desfile 16 de Septiembre",
    "Desfile 20 de Noviembre",
    "Desfile de la Revolución Mexicana",
    "Desfile Navideño",
  ];

  const tablaRef = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Desfile.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      <div className="selector-desfile">
        <label htmlFor="desfile">Seleccionar desfile</label>

        <select
          id="desfile"
          value={desfileSeleccionado}
          onChange={(e) => setDesfileSeleccionado(e.target.value)}
        >
          {desfiles.map((desfile) => (
            <option key={desfile} value={desfile}>
              {desfile}
            </option>
          ))}
        </select>
      </div>
      <table ref={tablaRef} className="tabla-desfile">
        <tbody>
          <tr>
            <td className="encabezado-desfile">
              <div className="titulo-desfile">{desfileSeleccionado}</div>

              <div className="fecha-desfile">{fechaActual}</div>
            </td>
          </tr>
          <tr>
            <td className="nota1-desfile">
              Al terminar el desfile, los operadores podrán darse la vuelta en{" "}
              <b>Chignautla</b> hacia la ruta que consideren conveniente,
              siempre manteniendo comunicación para no afectar al compañero
              enrolado desde Teziutlán.
            </td>
          </tr>

          <tr>
            <td className="encabezado-desfile">
              <b>Reglas de Respeto</b>
            </td>
          </tr>

          <tr>
            <td className="nota2-desfile">
              Está estrictamente prohibido meterse delante del compañero. Se
              permite adelantarse únicamente a la competencia (<b>Ruta 3</b> y{" "}
              <b>Amotac</b>).
            </td>
          </tr>

          <tr>
            <td className="encabezado-desfile">
              <b>Comunicación</b>
            </td>
          </tr>

          <tr>
            <td className="nota3-desfile">
              Se recomienda mantenerse en sintonía en el grupo de WhatsApp{" "}
              <b>“Urbanos Rojos”</b>. Quien no esté dentro puede solicitar su
              ingreso con <b>JoyBoy</b>.
            </td>
          </tr>

          <tr>
            <td className="encabezado-desfile">
              <b>Recomendaciones</b>
            </td>
          </tr>

          <tr>
            <td className="nota4-desfile">
              <ul>
                <li>Mantener comunicación clara.</li>
                <li>Evitar conflictos con la competencia.</li>
                <li>Conducir con orden y profesionalismo.</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td className="cita-desfile">
              “Obedezcan las reglas: una cosa es ser puerco… y otra ser
              trompudo.”
            </td>
          </tr>
          <br></br>
          <tr>
            <td colSpan={5} className="copyright-desfile">
               @el.joyboy.de.chignautla
            </td>
          </tr>
        </tbody>
      </table>

      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Indicaciones del Desfile
        </button>
      </div>
    </div>
  );
}

export default Desfile;
