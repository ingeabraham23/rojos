// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import "./NoTirarBasura.css";

function NoTirarBasura() {
  const tablaRef = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, {scale: 4}).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Notirarbasura.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      <table ref={tablaRef} className="tabla-basura">
        <tbody>
          <tr>
            <td className="encabezado-basura">Tira la basura en su lugar 👉 🚯 🚮</td>
          </tr>
          <tr>
            <td className="nota2-basura">
              Se informa a todos los operadores que, a partir del{" "}
              <b>miércoles 21 de agosto de 2022</b>, se implementarán medidas
              estrictas contra aquellos que sean sorprendidos tirando basura,
              objetos como piedras, o cualquier otro tipo de desecho dentro de
              la base, detrás de la base en el terreno, o hacia los vecinos.
            </td>
          </tr>
          <tr>
            <td className="nota2-basura">
              <b>Recordatorio:</b> Toda la basura y objetos deben ser
              depositados únicamente en los botes designados o en el contenedor
              grande. Esta medida se implementa para evitar conflictos con los
              vecinos y mantener un ambiente limpio y seguro.
            </td>
          </tr>
          <tr>
            <td className="nota3-basura">
              Las siguientes sanciones se aplicarán a quienes incumplan esta
              norma:
            </td>
          </tr>
          <tr>
            <td className="nota3-basura">
              <b>Castigo:</b> Se aplicará una sanción de 5 a 10 días de suspensión
              laboral.
            </td>
          </tr>
          <tr>
            <td className="nota3-basura">
              <b>Multa:</b> Además, se impondrá una multa económica que oscilará entre
              200 y 300 pesos. El monto recaudado se destinará al mantenimiento
              de la base.
            </td>
          </tr>
          <tr>
            <td className="nota4-basura">
              Es fundamental mantener el área limpia y respetar el entorno.
              Contamos con su colaboración para mantener la base en las mejores
              condiciones.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="copyright-basura">© JoyBoy</td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Basura
        </button>
      </div>
    </div>
  );
}

export default NoTirarBasura;
