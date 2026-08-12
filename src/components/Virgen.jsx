// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./Virgen.css";

function Virgen() {
  const tablaVirgenRef = useRef(null);

  function capturarTablaTiempos() {
    const tabla = tablaVirgenRef.current;

    html2canvas(tabla, {
      scale: 4,
      backgroundColor: "#fffaf2",
    }).then((canvas) => {
      const pngUrl = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");

      downloadLink.href = pngUrl;
      downloadLink.download = "Cooperacion-virgen.png";

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div className="contenedor-virgen">

      <table
        ref={tablaVirgenRef}
        className="tabla-virgen"
      >
        <tbody>

          {/* IMÁGENES DE LA VIRGEN */}
          <tr>
            <td className="imagenes-virgen">

              <img
                src="/virgen.png"
                alt="Virgen de Guadalupe"
                className="imagen-virgen imagen-virgen-lateral"
              />

              <img
                src="/virgen2.png"
                alt="Virgen de Guadalupe"
                className="imagen-virgen imagen-virgen-centro"
              />

              <img
                src="/virgen3.png"
                alt="Virgen de Guadalupe"
                className="imagen-virgen imagen-virgen-lateral"
              />

            </td>
          </tr>


          {/* LOGO URBANOS ROJOS */}
          <tr>
            <td className="logo-urbanos">

              <img
                src="/urbanosrojos.png"
                alt="Urbanos Rojos"
                className="imagen-urbanos"
              />

            </td>
          </tr>


          {/* TÍTULO */}
          <tr>
            <td className="titulo-virgen">

              <div className="titulo-principal-virgen">
                Cooperación para la Fiesta
              </div>

              <div className="subtitulo-virgen">
                en Honor a la Virgen de Guadalupe
              </div>

            </td>
          </tr>


          {/* DECORACIÓN */}
          <tr>
            <td className="separador-dorado">
              ✦ ✦ ✦
            </td>
          </tr>


          {/* INTRODUCCIÓN */}
          <tr>
            <td className="texto-virgen">

              Compañeros operadores y postureros: como cada año,
              celebraremos la tradicional fiesta en honor a la Virgen
              de Guadalupe, con el fin de fortalecer la unión y la
              convivencia entre todos los integrantes de
              <b> Urbanos Rojos.</b>

            </td>
          </tr>


          {/* COOPERACIÓN */}
          <tr>
            <td className="texto-virgen">

              Se solicita una cooperación de
              <span className="cantidad-virgen">
                $150 pesos
              </span>
              por persona: <b>Chofer y Posturero</b>, con el objetivo
              de cubrir los gastos de alimentos, decoración, pintura,
              iluminación y demás preparativos relacionados con esta
              celebración religiosa.

            </td>
          </tr>


          {/* FECHA */}
          <tr>
            <td className="bloque-fecha-virgen">

              <div className="etiqueta-fecha">
                PERIODO DE RECOLECCIÓN
              </div>

              <div className="fecha-virgen">
                <span> del </span>
                Jueves 20 de noviembre
                <span> al </span>
                jueves 5 de diciembre
              </div>

            </td>
          </tr>


          {/* ENCARGADO */}
          <tr>
            <td className="texto-virgen">

              La cooperación será recibida por el checador
              <span className="encargado-virgen">
                Pocoyó
              </span>,
              quien ha sido designado formalmente como encargado de
              la recolección.

              <br />

              Les agradecemos su apoyo y les recordamos que pueden
              hacer su aportación en cualquier momento dentro del
              periodo establecido.

            </td>
          </tr>


          {/* AGRADECIMIENTO */}
          <tr>
            <td className="agradecimiento-virgen">

              Agradecemos de antemano su colaboración y comprensión,
              confiando en que esta tradición seguirá siendo un lazo
              de unión para todos.

            </td>
          </tr>


          {/* DECORACIÓN FINAL */}
          <tr>
            <td className="decoracion-final-virgen">
              ❖
            </td>
          </tr>


          {/* COPYRIGHT */}
          <tr>
            <td className="copyright-virgen">
              @el.joyboy.de.chignautla
            </td>
          </tr>

        </tbody>
      </table>


      {/* BOTÓN */}
      <div className="contenedor-boton-virgen">

        <button
          onClick={capturarTablaTiempos}
          className="boton-capturar-virgen"
        >
          Capturar Cooperación Virgen
        </button>

      </div>

    </div>
  );
}

export default Virgen;