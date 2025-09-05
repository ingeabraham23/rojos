// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import reglamento from "/reglamento.jpg"

import "./Sanciones.css";

function Sanciones() {
  const tablaRef = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, {scale: 4}).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Sanciones.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <>
      <table className="tabla-sanciones" ref={tablaRef}>
        <thead>
          <tr>
            <td className="titulo-sanciones" colSpan={5}>Reglamento Urbanos Rojos</td>
          </tr>
          <tr>
            <td className="encabezado-sanciones" rowSpan={2}>
              #
            </td>
            <td className="encabezado-sanciones" rowSpan={2}>
              Causas de Sanción.
            </td>
            <td className="encabezado-sanciones" colSpan={3}>
              Días por reporte.
            </td>
          </tr>
          <tr>
            <td className="encabezado-sanciones-chico">1<sup>er</sup></td>
            <td className="encabezado-sanciones-chico">2<sup>do</sup></td>
            <td className="encabezado-sanciones-chico">3<sup>ro</sup></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="columna-sanciones">1</td>
            <td className="columna-sanciones">Circular a exceso de velocidad.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">2</td>
            <td className="columna-sanciones">No circular a paso lento.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">3</td>
            <td className="columna-sanciones">Rebasar cuando circulen en carretera.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">4</td>
            <td className="columna-sanciones">Descargar pasaje en cinta asfáltica o curva.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="baja-sanciones">5</td>
            <td className="baja-sanciones">Manejar en estado de ebriedad.</td>
            <td className="baja-sanciones" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td className="columna-sanciones">6</td>
            <td className="columna-sanciones">Falta de precaución y mala operación del vehículo.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">7</td>
            <td className="columna-sanciones">Tener acompañante dentro del vehículo.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">8</td>
            <td className="columna-sanciones">No concluir el recorrido completo.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">9</td>
            <td className="columna-sanciones">Llamar por teléfono o fumar mientras conduce.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">
              Circular fuera de ruta y lugares preestablecidos a cualquier hora.
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">11</td>
            <td className="columna-sanciones">
            Cualquier reporte por parte del usuario se sancionará a criterio.
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="baja-sanciones">12</td>
            <td className="baja-sanciones">
            Falta de respeto, agresión al jefe de terminal y checador.
            </td>
            <td className="baja-sanciones" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td className="baja-sanciones">13</td>
            <td className="baja-sanciones">
            Falta de respeto o agresión a los permisionarios.
            </td>
            <td className="baja-sanciones" colSpan={3}>
              Baja definitiva.
            </td>
          </tr>
          <tr>
            <td className="columna-sanciones">14</td>
            <td className="columna-sanciones">Obscenidades mientras conduce.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">15</td>
            <td className="columna-sanciones">Obscenidades dentro de la terminal.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="baja-sanciones">16</td>
            <td className="baja-sanciones">Agresión verbal o física entre compañeros.</td>
            <td className="baja-sanciones" colSpan={3}>
              Baja definitiva.
            </td>
          </tr>
          <tr>
            <td className="columna-sanciones">17</td>
            <td className="columna-sanciones">Agresión a conductores en la vía pública.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">18</td>
            <td className="columna-sanciones">Traer la unidad sucia.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">19</td>
            <td className="columna-sanciones">Mala presentación del conductor.</td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="baja-sanciones">20</td>
            <td className="baja-sanciones">
              Dejar la unidad en manos de personal no autorizado.
            </td>
            <td className="baja-sanciones" colSpan={3}>
              Baja definitiva.
            </td>
          </tr>
          <tr>
            <td className="otra-sanciones">21</td>
            <td className="otra-sanciones">
              Por falta de cumplimiento a la ruta San miguel.
            </td>
            <td className="otra-sanciones" colSpan={3}>
              Se para camioneta al día siguiente.
            </td>
          </tr>
          <tr>
            <td className="otra-sanciones">22</td>
            <td className="otra-sanciones">Falta</td>
            <td className="otra-sanciones" colSpan={3}>
              Hablar con directiva.
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="pie-sanciones">
              <strong>Primer Reporte:</strong> Se le impondrá una sanción de 5
              días de suspensión de sus actividades como operador de urbanos
              rojos.<br></br>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="pie-sanciones">
            <strong>Segundo Reporte:</strong> Si, lamentablemente, se registra
              un segundo reporte debido a la misma falta, la sanción se
              incrementará a un periodo de 10 días de suspensión.<br></br>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="pie-sanciones">
            <strong>Tercer Reporte:</strong> En el caso de un tercer reporte
              por la misma infracción, se aplicará una sanción más rigurosa, que
              consistirá en una suspensión de 15 días. Esto se hace con la
              intención de asegurar que las conductas no deseadas sean
              corregidas de manera efectiva.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="pie-sanciones">
              <strong>Nota:</strong> Todo conductor posturero que incurra en
              cualquier sanción de las antes mencionadas, causara baja
              definitiva dentro de la ruta.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="copyright-sanciones">© JoyBoy</td>
          </tr>
        </tfoot>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Sanciones
        </button>
      </div>
      <div>
      <img src={reglamento} className='foto'/>
      </div>
    </>
  );
}

export default Sanciones;
