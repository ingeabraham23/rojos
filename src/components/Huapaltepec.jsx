// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import "./Huapaltepec.css";

function Huapaltepec() {
  const tablaRef = useRef(null);
  const tablaRef2 = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Huapaltepec.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }
  function capturarTabla2() {
    const tabla = tablaRef2.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
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
      <table ref={tablaRef} className="tabla-huapaltepec">
        <tbody>
          <tr>
            <td colSpan={5} className="encabezado-huapaltepec">
              Horarios Huapaltepec. Urbanos Rojos
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-huapaltepec">#</td>
            <td className="encabezado-tabla-huapaltepec">Teziutlan</td>
            <td className="encabezado-tabla-huapaltepec">Huapaltepec</td>
            <td className="encabezado-tabla-huapaltepec">Subida</td>
            <td className="encabezado-tabla-huapaltepec">Bajada</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec"></td>
            <td className="unidad03-huapaltepec">6.25 a.m.</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec"></td>
            <td className="unidad30-huapaltepec">7:05 a.m.</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">7:00 a.m.</td>
            <td className="unidad03-huapaltepec">7:40 a.m.</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">8:20 a.m.</td>
            <td className="unidad30-huapaltepec">9:10 a.m.</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">9:30 a.m.</td>
            <td className="unidad03-huapaltepec">10:20 a.m.</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">10:30 a.m.</td>
            <td className="unidad30-huapaltepec">11:20 a.m.</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">11:30 a.m.</td>
            <td className="unidad03-huapaltepec">12:20 p.m.</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">12:30 p.m.</td>
            <td className="unidad30-huapaltepec">1:20 p.m.</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">1:30 p.m.</td>
            <td className="unidad03-huapaltepec">2:20 p.m.</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">2:30 p.m.</td>
            <td className="unidad30-huapaltepec">3:20 p.m.</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">3:30 p.m.</td>
            <td className="unidad03-huapaltepec">4:20 p.m.</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">4:30p.m.</td>
            <td className="unidad30-huapaltepec">5:20 p.m.</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">5:30 p.m.</td>
            <td className="unidad03-huapaltepec">6:20 p.m.</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">6:30 p.m.</td>
            <td className="unidad30-huapaltepec">7:20 p.m.</td>
            <td className="subida30-huapaltepec">Talzintan</td>
            <td className="subida30-huapaltepec">Sosa</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">7:15 p.m.</td>
            <td className="unidad03-huapaltepec">8:05 p.m.</td>
            <td className="subida03-huapaltepec">Sosa</td>
            <td className="subida03-huapaltepec">Talzintan</td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-huapaltepec">
              La primera huapaltepec que pasa por chignautla es la unidad 30,
              pasa por los arcos a las 6:35 de la mañana, sube por sosa,
              comienza a bajar de la base-huapaltepec a las 7:08, baja por
              coatzala-talzintan y llega a la base-teziutlan a las 7:50.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-huapaltepec">
              Los horarios pueden variar por causas como trafico, estado del
              camino, fallas mecanicas, entre otros factores.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-huapaltepec">
              De Teziutlan a Huapaltepec: $ 15.00.<br></br>
              De Huapaltepec a coahuixco-bachiller: $ 9.00.<br></br>
              De Huapaltepec a entrada a la arenera y chignautla: $ 10.00.<br></br>
              De Huapaltepec a fresnillo y teziutlan: $ 15.00.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-huapaltepec-roja">
              Apartir del domingo 10 de noviembre de 2024.<br></br>
              Y durante los siguientes domingos.<br></br>
              Se cancela la salida de 6:30 de la tarde.<br></br>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="copyright-huapaltepec">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Huapaltepec
        </button>
        <br></br>
      </div>

      {/*tabla 2 tabla 2 tabla 2 tabla 2 tabla 2 tabla 2 tabla 2 tabla 2 tabla 2 tabla 2*/}
      <table ref={tablaRef2} className="tabla-huapaltepec">
        <tbody>
          <tr>
            <td colSpan={6} className="encabezado-huapaltepec">
              Horarios Huapaltepec. Urbanos Rojos
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-huapaltepec">#</td>
            <td className="encabezado-tabla-huapaltepec">Teziutlan</td>
            <td className="encabezado-tabla-huapaltepec">Huapaltepec</td>

            <td className="encabezado-tabla-huapaltepec">Subida</td>
            <td className="encabezado-tabla-huapaltepec">Bajada</td>
            <td className="encabezado-tabla-huapaltepec">⏩</td>
          </tr>
          <tr>
            <td className="mañana-tarde-huapaltepec" colSpan={6}>
              En la mañana
            </td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec"></td>
            <td className="unidad03-huapaltepec">6.25</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
            <td className="unidad03-huapaltepec">6:45</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec"></td>
            <td className="unidad30-huapaltepec">7:05</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
            <td className="unidad30-huapaltepec">7:25</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">7:00</td>
            <td className="unidad03-huapaltepec">7:40</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
            <td className="unidad03-huapaltepec">7:50</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">8:20</td>
            <td className="unidad30-huapaltepec">9:10</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
            <td className="unidad30-huapaltepec">9:30</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">9:30</td>
            <td className="unidad03-huapaltepec">10:20</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
            <td className="unidad03-huapaltepec">10:40</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">10:30</td>
            <td className="unidad30-huapaltepec">11:20</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
            <td className="unidad30-huapaltepec">11:40</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">11:30</td>
            <td className="unidad03-huapaltepec">12:20</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
            <td className="unidad03-huapaltepec">12:40</td>
          </tr>
          <tr>
            <td className="mañana-tarde-huapaltepec" colSpan={6}>
              En la tarde
            </td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">12:30</td>
            <td className="unidad30-huapaltepec">1:20</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
            <td className="unidad30-huapaltepec">1:40</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">1:30</td>
            <td className="unidad03-huapaltepec">2:20</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
            <td className="unidad03-huapaltepec">2:40</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">2:30</td>
            <td className="unidad30-huapaltepec">3:20</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
            <td className="unidad30-huapaltepec">3:40</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">3:30</td>
            <td className="unidad03-huapaltepec">4:20</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
            <td className="unidad03-huapaltepec">4:40</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">4:30</td>
            <td className="unidad30-huapaltepec">5:20</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="subida30-huapaltepec">Talzintan</td>
            <td className="unidad30-huapaltepec">5:40</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">5:30</td>
            <td className="unidad03-huapaltepec">6:20</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="subida03-huapaltepec">Sosa</td>
            <td className="unidad03-huapaltepec">6:40</td>
          </tr>
          <tr>
            <td className="unidad30-huapaltepec">30</td>
            <td className="unidad30-huapaltepec">6:30</td>
            <td className="unidad30-huapaltepec">7:20</td>
            <td className="subida30-huapaltepec">Talzintan</td>
            <td className="subida30-huapaltepec">Sosa</td>
            <td className="unidad30-huapaltepec">7:40</td>
          </tr>
          <tr>
            <td className="unidad03-huapaltepec">03</td>
            <td className="unidad03-huapaltepec">7:15</td>
            <td className="unidad03-huapaltepec">8:05</td>
            <td className="subida03-huapaltepec">Sosa</td>
            <td className="subida03-huapaltepec">Talzintan</td>
            <td className="unidad03-huapaltepec">8:25</td>
          </tr>
          <tr>
            <td colSpan={6} className="nota-huapaltepec">
              Los horarios pueden variar por causas como trafico, estado del
              camino, fallas mecanicas, entre otros factores.
            </td>
          </tr>
          <tr>
            <td colSpan={6} className="nota-huapaltepec">
              De Teziutlan a Huapaltepec: $15.00.
            </td>
          </tr>
          <tr>
            <td colSpan={6} className="copyright-huapaltepec">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla2} className="boton-capturar">
          Capturar Huapaltepec
        </button>
      </div>
    </div>
  );
}

export default Huapaltepec;
