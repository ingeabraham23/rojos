// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import "./Tepepan.css";

function Tepepan() {
  const tablaRef = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, {scale: 4}).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Huapaltepec.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      <table ref={tablaRef} className="tabla-tepepan">
        <tbody>
          <tr>
            <td colSpan={7} className="encabezado-tepepan">
              Horarios Tepepan. Urbanos Rojos
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan" colSpan={3}>En la mañana</td>
            <td className="centro-tepepan">-</td>
            <td className="encabezado-tabla-tepepan" colSpan={3}>En la tarde</td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan">#</td>
            <td className="encabezado-tabla-tepepan">Teziutlan</td>
            <td className="encabezado-tabla-tepepan">Tepepan</td>
            <td className="centro-tepepan"></td>
            <td className="encabezado-tabla-tepepan">#</td>
            <td className="encabezado-tabla-tepepan">Teziutlan</td>
            <td className="encabezado-tabla-tepepan">Tepepan</td>
          </tr>

          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan"></td>
            <td className="unidadc-tepepan">6.20</td>
            <td className="centro-tepepan"></td>
            <td className="unidadb-tepepan">B</td>
            <td className="unidadb-tepepan">12:15</td>
            <td className="unidadb-tepepan">12:45</td>
          </tr>
          <tr>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan"></td>
            <td className="unidada-tepepan">6:40</td>
            <td className="centro-tepepan"></td>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan">1:00</td>
            <td className="unidada-tepepan">1:30</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">B</td>
            <td className="unidadb-tepepan"></td>
            <td className="unidadb-tepepan">7:00</td>
            <td className="centro-tepepan"></td>
            <td className="unidadb-tepepan">B</td>
            <td className="unidadb-tepepan">1:50</td>
            <td className="unidadb-tepepan">2:20</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">6:50</td>
            <td className="unidadc-tepepan">7:20</td>
            <td  className="centro-tepepan"></td>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan">2:40</td>
            <td className="unidada-tepepan">3:10</td>
          </tr>
          <tr>
            <td className="unidadd-tepepan">05</td>
            <td className="unidadd-tepepan"></td>
            <td className="unidadd-tepepan">7:30</td>
            <td className="centro-tepepan"></td>
            <td className="unidadb-tepepan">B</td>
            <td className="unidadb-tepepan">3:15</td>
            <td className="unidadb-tepepan">3:45</td>
          </tr>
          <tr>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan">7:10</td>
            <td className="unidada-tepepan">7:40</td>
            <td className="centro-tepepan"></td>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan">4:00</td>
            <td className="unidada-tepepan">4:30</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">B</td>
            <td className="unidadb-tepepan">7:30</td>
            <td className="unidadb-tepepan">8:00</td>
            <td className="centro-tepepan"></td>
            <td className="unidadb-tepepan">B</td>
            <td className="unidadb-tepepan">4:50</td>
            <td className="unidadb-tepepan">5:20</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">7:50</td>
            <td className="unidadc-tepepan">8:25</td>
            <td className="centro-tepepan"></td>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan">5:40</td>
            <td className="unidada-tepepan">6:10</td>
          </tr>
          <tr>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan">8:10</td>
            <td className="unidada-tepepan">8:40</td>
            <td className="centro-tepepan"></td>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">6:10</td>
            <td className="unidadc-tepepan">6:40</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">B</td>
            <td className="unidadb-tepepan">9:00</td>
            <td className="unidadb-tepepan">9:30</td>
            <td className="centro-tepepan"></td>
            <td className="unidadb-tepepan">B</td>
            <td className="unidadb-tepepan">6:40</td>
            <td className="unidadb-tepepan">7:10</td>
          </tr>
          <tr>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan">10:00</td>
            <td className="unidada-tepepan">10:30</td>
            <td className="centro-tepepan"></td>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan">7:15</td>
            <td className="unidada-tepepan">7:45</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">B</td>
            <td className="unidadb-tepepan">10:50</td>
            <td className="unidadb-tepepan">11:20</td>
            <td className="centro-tepepan"></td>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">7:40</td>
            <td className="unidadc-tepepan">8:10</td>
          </tr>
          <tr>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan">11:40</td>
            <td className="unidada-tepepan">12:10</td>
            <td className="centro-tepepan"></td>
            <td className="unidadb-tepepan">B</td>
            <td className="unidadb-tepepan">8:00</td>
            <td className="unidadb-tepepan">8:30</td>
          </tr>
          <tr>
            <td className="sin-horario"></td>
            <td className="sin-horario"></td>
            <td className="sin-horario"></td>
            <td className="centro-tepepan"></td>
            <td className="unidada-tepepan">A</td>
            <td className="unidada-tepepan">8:30</td>
            <td className="unidada-tepepan">9:00</td>
          </tr>
          <tr>
            <td colSpan={7} className="nota-tepepan">
              Los dias domingos en la mañana no hay servicio en los horarios de <b>6:20</b>, <b>7:20</b>, <b>7:30</b> y <b>8:25</b> desde Tepepan.
            </td>
          </tr>
          <tr>
            <td colSpan={7} className="nota-tepepan">
              Los dias domingos en la tarde no hay servicio en los horarios de <b>6:10</b>, <b>7:40</b> y <b>8:30</b> desde Teziutlan.
            </td>
          </tr>
          <tr>
            <td colSpan={7} className="nota-tepepan">
              De Teziutlan a Tepepan - La barda: <b>$ 10.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={7} className="nota-tepepan">
              De Teziutlan a Tepepan: <b>$ 11.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="nota-tepepan">
              De Tepepan al Capulín: <b>$ 8.00</b>.
            </td>
            <td colSpan={3} className="nota-tepepan">
              De Tepepan al Fresnillo: <b>$ 9.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={7} className="copyright-tepepan">© JoyBoy</td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Tepepan
        </button>
      </div>
    </div>
  );
}

export default Tepepan;
