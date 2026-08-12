// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import "./Tepepan.css";

function Tepepan() {
  const mañanaLunesASabado = useRef(null);
  const diaLunesASabado = useRef(null);
  const domingoMañanaYTarde = useRef(null);

  function capturarTabla(tabla, nombre) {
    html2canvas(tabla, { scale: 8 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${nombre}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      <table ref={mañanaLunesASabado} className="tabla-tepepan">
        <tbody>
          <tr>
            <td colSpan={3} className="encabezado-tepepan">
              Horarios Tepepan. Urbanos Rojos
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan" colSpan={3}>
              En la mañana
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan">#</td>
            <td className="encabezado-tabla-tepepan">Teziutlan</td>
            <td className="encabezado-tabla-tepepan">Tepepan</td>
          </tr>
          <tr>
            <td className="unidada-tepepan">05</td>
            <td className="unidada-tepepan"></td>
            <td className="unidada-tepepan">6.15</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan"></td>
            <td className="unidadb-tepepan">6:30</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan"></td>
            <td className="unidadc-tepepan">6:45</td>
          </tr>
          <tr>
            <td className="unidadd-tepepan">17</td>
            <td className="unidadd-tepepan"></td>
            <td className="unidadd-tepepan">7:00</td>
          </tr>
          <tr>
            <td className="unidada-tepepan">05</td>
            <td className="unidada-tepepan">6:45</td>
            <td className="unidada-tepepan">7.15</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">7:00</td>
            <td className="unidadb-tepepan">7:30</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">7:15</td>
            <td className="unidadc-tepepan">7:45</td>
          </tr>
          <tr>
            <td className="unidadd-tepepan">17</td>
            <td className="unidadd-tepepan">7:30</td>
            <td className="unidadd-tepepan">8:00</td>
          </tr>
          <tr>
            <td className="unidada-tepepan">05</td>
            <td className="unidada-tepepan">7:45</td>
            <td className="unidada-tepepan">8.15</td>
          </tr>

          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">8:00</td>
            <td className="unidadb-tepepan">8:30</td>
          </tr>

          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">8:15</td>
            <td className="unidadc-tepepan">8:45</td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              La unidad 17 que saca de tepepan a las 7:00 am pasa por libramiento bicentenario para llegar a teziutlán.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              Solamente el de Medias y el de Horas (6:30, 7:00, 7:30, 8:00,
              8:30) entran a terraceria.
            </td>
          </tr>

          <tr>
            <td colSpan={3} className="nota-tepepan">
              A partir de 8.45 de la mañana y durante todo el dia ya pasan por
              ambos sectores (Pavimento y Terraceria).
            </td>
          </tr>

          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Teziutlan a Tepepan - La barda: <b>$ 10.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Teziutlan a Tepepan: <b>$ 11.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Tepepan al Capulín: <b>$ 8.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Tepepan al Fresnillo: <b>$ 9.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="copyright-tepepan">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          onClick={() =>
            capturarTabla(
              mañanaLunesASabado.current,
              "mañanaLunesASabado",
            )
          }
          className="boton-capturar-tepepan"
        >
          {" "}
          Descargar Tepepan mañana Lunes a Sabado
        </button>
      </div>

      <table ref={diaLunesASabado} className="tabla-tepepan">
        <tbody>
          <tr>
            <td colSpan={7} className="encabezado-tepepan">
              Horarios Tepepan. Urbanos Rojos
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan" colSpan={3}>
              A partir de las 9:00 de la mañana
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan" colSpan={3}>
              De Lunes a Sabado
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan">#</td>
            <td className="encabezado-tabla-tepepan">Teziutlan</td>
            <td className="encabezado-tabla-tepepan">Tepepan</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">9:00</td>
            <td className="unidadb-tepepan">9.45</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">09:50</td>
            <td className="unidadc-tepepan">10:35</td>
          </tr>

          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">10:45</td>
            <td className="unidadb-tepepan">11.30</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">11:35</td>
            <td className="unidadc-tepepan">12:20</td>
          </tr>

          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">12:20</td>
            <td className="unidadb-tepepan">01.10</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">01:00</td>
            <td className="unidadc-tepepan">01:45</td>
          </tr>

          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">01:55</td>
            <td className="unidadb-tepepan">02.30</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">02:35</td>
            <td className="unidadc-tepepan">03:20</td>
          </tr>

          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">03:15</td>
            <td className="unidadb-tepepan">04.00</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">04:00</td>
            <td className="unidadc-tepepan">04:45</td>
          </tr>

          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">04:45</td>
            <td className="unidadb-tepepan">05.30</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">05:35</td>
            <td className="unidadc-tepepan">06:25</td>
          </tr>

          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">06:05</td>
            <td className="unidadb-tepepan">06.40</td>
          </tr>
          <tr>
            <td className="unidada-tepepan">05</td>
            <td className="unidada-tepepan">06:30</td>
            <td className="unidada-tepepan">06:55</td>
          </tr>

          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">06:55</td>
            <td className="unidadc-tepepan">07:25</td>
          </tr>

          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">07:20</td>
            <td className="unidadb-tepepan">07.40</td>
          </tr>

          <tr>
            <td className="unidada-tepepan">05</td>
            <td className="unidada-tepepan">07:45</td>
            <td className="unidada-tepepan"></td>
          </tr>

          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">08:15</td>
            <td className="unidadc-tepepan"></td>
          </tr>

          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">08:40</td>
            <td className="unidadb-tepepan"></td>
          </tr>

          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Teziutlan a Tepepan - La barda: <b>$ 10.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Teziutlan a Tepepan: <b>$ 11.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Tepepan al Capulín: <b>$ 8.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Tepepan al Fresnillo: <b>$ 9.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="copyright-tepepan">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          onClick={() =>
            capturarTabla(diaLunesASabado.current, "diaLunesASabado")
          }
          className="boton-capturar-tepepan"
        >
          {" "}
          Descargar Tepepan dia Lunes a Sabado
        </button>
      </div>

      <table ref={domingoMañanaYTarde} className="tabla-tepepan">
        <tbody>
          <tr>
            <td colSpan={7} className="encabezado-tepepan">
              Horarios Tepepan. Urbanos Rojos
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan" colSpan={3}>
              Domingo en la mañana
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan">#</td>
            <td className="encabezado-tabla-tepepan">Teziutlan</td>
            <td className="encabezado-tabla-tepepan">Tepepan</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan"></td>
            <td className="unidadc-tepepan">06:40</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan"></td>
            <td className="unidadb-tepepan">07:00</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">07:15</td>
            <td className="unidadc-tepepan">07:45</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">07:30</td>
            <td className="unidadb-tepepan">08:00</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">08:15</td>
            <td className="unidadc-tepepan">08:45</td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan" colSpan={3}>
              Domingo en la tarde{" "}
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tepepan">#</td>
            <td className="encabezado-tabla-tepepan">Teziutlan</td>
            <td className="encabezado-tabla-tepepan">Tepepan</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">05:40</td>
            <td className="unidadc-tepepan">06:15</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">06:30</td>
            <td className="unidadb-tepepan">07:05</td>
          </tr>
          <tr>
            <td className="unidadc-tepepan">08</td>
            <td className="unidadc-tepepan">07:15</td>
            <td className="unidadc-tepepan">07:40</td>
          </tr>
          <tr>
            <td className="unidadb-tepepan">02</td>
            <td className="unidadb-tepepan">08:00</td>
            <td className="unidadb-tepepan"></td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Teziutlan a Tepepan - La barda: <b>$ 10.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Teziutlan a Tepepan: <b>$ 11.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Tepepan al Capulín: <b>$ 8.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="nota-tepepan">
              De Tepepan al Fresnillo: <b>$ 9.00</b>.
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="copyright-tepepan">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          onClick={() =>
            capturarTabla(
              domingoMañanaYTarde.current,
              "domingoMañanaYTarde",
            )
          }
          className="boton-capturar-tepepan"
        >
          {" "}
          Descargar Tepepan domingo mañana y tarde
        </button>
      </div>

      <div className="foto-tepepan">
        Foto del poste que se encuentra en tepepan con los horarios.
        <img
          src={`${import.meta.env.BASE_URL}/poste.jpeg`}
          alt={"Poste horarios"}
        />
      </div>
    </div>
  );
}

export default Tepepan;
