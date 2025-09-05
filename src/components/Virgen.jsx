// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./Virgen.css";

function Virgen() {
  const tablaVirgenRef = useRef(null);

  function capturarTablaTiempos() {
    const tabla = tablaVirgenRef.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Cooperacion virgen.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div className="contenedor-tiempos">
      <table ref={tablaVirgenRef} className="tabla-tiempos">
        <tbody>
          <tr>
            <td colSpan={6} className="encabezado-virgen">
              Cooperacion para la fiesta anual en honor a la virgen de
              guadalupe.
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td colSpan={5} className="nota-virgen">
              Nos dirigimos a ustedes con el mayor respeto y consideración para
              informarles que, como es tradición, este año celebraremos la
              fiesta anual en honor a la Virgen de Guadalupe en la base de
              Urbanos Rojos. Este evento tiene como propósito no solo rendir
              homenaje a nuestra patrona, sino también fortalecer la unión entre
              todos los miembros de nuestra comunidad de trabajo.
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td colSpan={5} className="nota-virgen">
              Para cubrir los gastos necesarios, se solicita una cooperación de
              <b> $130</b> a cada operador y posturero. Esta contribución es
              esencial para poder atender debidamente a todos los asistentes,
              proporcionando alimentos como tamales y ponche, y para los demás
              preparativos. Los fondos también se destinarán a la decoración del
              altar de la Virgen, la pintura de los espacios, la compra de
              series de luces, y otros gastos relacionados con la celebración.
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td colSpan={5} className="nota-virgen">
              <strong>La recolección de esta cooperación comenzará el viernes 15 de
              noviembre, y la fecha límite de pago será el jueves 5 de
              diciembre.</strong>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-virgen-roja">
              <strong>Es importante mencionar que, pasada esta fecha, quienes
              no hayan realizado su contribución no se les dara salida de la base, ya
              sea operador o posturero.</strong> 
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td colSpan={5} className="nota-virgen">
              Entendemos y respetamos que algunos miembros de nuestro equipo
              pueden no compartir esta fe, sin embargo, les solicitamos
              amablemente su apoyo para esta tradición que beneficia a la
              comunidad en su totalidad y en la que todos participamos de una
              forma u otra.
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td colSpan={5} className="nota-virgen">
            Agradecemos de antemano su colaboración y su comprensión.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="copyright-virgen">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTablaTiempos} className="boton-capturar">
          Capturar Cooperacion Virgen
        </button>
      </div>
    </div>
  );
}

export default Virgen;
