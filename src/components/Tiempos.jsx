// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./Tiempos.css";

function Tiempos() {
  const tablaTiemposRef = useRef(null);
  const tablaEncuentroRef = useRef(null);
  const tablaGasolinaRef = useRef(null);

  function capturarTablaTiempos() {
    const tabla = tablaTiemposRef.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Tiempos.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  function capturarTablaEncuentro() {
    const tabla = tablaEncuentroRef.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Encuentro.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  function capturarTablaGasolina() {
    const tabla = tablaGasolinaRef.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Gasolina.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div className="contenedor-tiempos">
      <table ref={tablaTiemposRef} className="tabla-tiempos">
        <tbody>
          <tr>
            <td colSpan={6} className="encabezado-tiempos">
              Tiempos
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tiempos">Ruta</td>
            <td className="encabezado-tabla-tiempos" colSpan={2}>
              Retorno Bimbo
            </td>
            <td className="encabezado-tabla-tiempos">Los arcos</td>
            <td className="encabezado-tabla-tiempos">Vuelta</td>
          </tr>
          <tr>
            <td className="fila-sanisidro-tiempos">San Isidro</td>
            <td className="fila-sanisidro-tiempos" colSpan={2}>
              15 min.
            </td>
            <td className="fila-sanisidro-tiempos">23 min.</td>
            <td className="fila-sanisidro-tiempos">35 min.</td>
          </tr>
          <tr>
            <td className="fila-calicapan-tiempos">Calicapan</td>
            <td className="fila-calicapan-tiempos" colSpan={2}>
              15 min.
            </td>
            <td className="fila-calicapan-tiempos">20 min.</td>
            <td className="fila-calicapan-tiempos">30 min.</td>
          </tr>
          <tr>
            <td className="fila-sosa-tiempos">Sosa</td>
            <td className="fila-sosa-tiempos" colSpan={2}>
              15 min.
            </td>
            <td className="fila-sosa-tiempos">20 min.</td>
            <td className="fila-sosa-tiempos">30 min.</td>
          </tr>
          <tr>
            <td className="fila-tezotepec-tiempos">Tezotepec</td>
            <td className="fila-tezotepec-tiempos" colSpan={2}>
              15 min.
            </td>
            <td className="fila-tezotepec-tiempos">20 min.</td>
            <td className="fila-tezotepec-tiempos">30 min.</td>
          </tr>
          <tr>
            <td className="fila-coahuixco-tiempos">Coahuixco</td>
            <td className="fila-coahuixco-tiempos" colSpan={2}>
              15 min.
            </td>
            <td className="fila-coahuixco-tiempos">20 min.</td>
            <td className="fila-coahuixco-tiempos">30 min.</td>
          </tr>
          <tr>
            <td className="fila-coahuixco-tiempos">Talzintan</td>
            <td className="fila-coahuixco-tiempos" colSpan={2}>
              15 min.
            </td>
            <td className="fila-coahuixco-tiempos">20 min.</td>
            <td className="fila-coahuixco-tiempos">33 min.</td>
          </tr>
          <tr>
            <td className="fila-tacopan-tiempos">Tacopan</td>
            <td className="fila-tacopan-tiempos" colSpan={2}>
              15 min.
            </td>
            <td className="fila-tacopan-tiempos">20 min.</td>
            <td className="fila-tacopan-tiempos">40 min.</td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-tiempos">
              Queremos informar que los tiempos establecidos para las distintas
              rutas han sido determinados mediante un estudio detallado y
              riguroso que tomó varios días en completarse. Este análisis ha
              permitido fijar tiempos que optimicen la eficiencia del servicio
              sin comprometer la seguridad.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-tiempos">
              Estos tiempos están calculados para asegurar que el recorrido se
              realice con un ritmo adecuado, evitando tanto el exceso de
              velocidad como un ritmo demasiado lento. La prioridad en todo
              momento es la integridad de los pasajeros, la unidad, y la
              seguridad de los vehículos y personas en el entorno vial.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-tiempos">
              Agradecemos su compromiso con la puntualidad y la responsabilidad
              en el cumplimiento de estos tiempos, siempre priorizando la
              seguridad como nuestro principal objetivo.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-tiempos">
              Situaciones como competencia en carretera, tráfico ocasionado por
              vehículos descompuestos, procesiones, manifestaciones, o
              mantenimiento en las vías pueden afectar los tiempos planificados.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-tiempos">
              En caso de enfrentar cualquiera de estas circunstancias, es
              necesario tomar evidencia (fotografías o videos) y reportarla al
              grupo de WhatsApp Urbanos Rojos para informar sobre la situación y
              asegurar un registro adecuado.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-tiempos">
              Agradecemos su colaboración para mantener informada a la
              coordinación y brindar un servicio seguro y eficiente para todos.
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td colSpan={5} className="copyright-tiempos">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTablaTiempos} className="boton-capturar">
          Capturar Tiempos
        </button>
      </div>

      {/* encuentro   encuentro   encuentro   encuentro   encuentro   encuentro   encuentro   encuentro  */}
      <table ref={tablaEncuentroRef} className="tabla-tiempos">
        <tbody>
          <tr>
            <td className="encabezado-tiempos" colSpan={5}>
              Donde encontrar al compañero
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tiempos">Ruta</td>
            <td className="encabezado-tabla-tiempos" colSpan={2}>
              Minimo
            </td>
            <td className="encabezado-tabla-tiempos" colSpan={2}>
              Maximo
            </td>
          </tr>
          <tr>
            <td className="fila-sanisidro-tiempos">San Isidro</td>
            <td className="fila-sanisidro-tiempos" colSpan={2}>
              3 cruces de 5 de mayo
            </td>
            <td className="fila-sanisidro-tiempos" colSpan={2}>
              Beto perez
            </td>
          </tr>
          <tr>
            <td className="fila-calicapan-tiempos">Calicapan</td>
            <td className="fila-calicapan-tiempos" colSpan={2}>
              La costeña
            </td>
            <td className="fila-calicapan-tiempos" colSpan={2}>
              Antigua Vía
            </td>
          </tr>
          <tr>
            <td className="fila-sosa-tiempos">Sosa</td>
            <td className="fila-sosa-tiempos" colSpan={2}>
              Mercadito
            </td>
            <td className="fila-sosa-tiempos" colSpan={2}>
              Fuente
            </td>
          </tr>
          <tr>
            <td className="fila-tezotepec-tiempos">Tezotepec</td>
            <td className="fila-tezotepec-tiempos" colSpan={2}>
              Antena
            </td>
            <td className="fila-tezotepec-tiempos" colSpan={2}>
              Papelería america
            </td>
          </tr>
          <tr>
            <td className="fila-coahuixco-tiempos">Coahuixco</td>
            <td className="fila-coahuixco-tiempos" colSpan={2}>
              Antigua Vía
            </td>
            <td className="fila-coahuixco-tiempos" colSpan={2}>
              Cyber
            </td>
          </tr>
          <tr>
            <td className="fila-tacopan-tiempos">Tacopan</td>
            <td className="fila-tacopan-tiempos" colSpan={2}>
              Parada de sosa
            </td>
            <td className="fila-tacopan-tiempos" colSpan={2}>
              El puerto
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-tiempos">
              Queremos informar que los puntos de encuentro establecidos para
              cada ruta han sido determinados mediante un estudio exhaustivo que
              tomó varios días en completarse. Este análisis permitió fijar
              ubicaciones y tiempos que optimizan el servicio, asegurando que el
              relevo se realice en un ritmo adecuado.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-tiempos">
              El objetivo de estos puntos es que los conductores mantengan un
              ritmo eficiente, sin necesidad de correr ni ir demasiado despacio,
              priorizando en todo momento la seguridad de los pasajeros, la
              unidad, y de los vehículos y personas alrededor. La integridad de
              todos es nuestra máxima prioridad, y estos puntos se eligieron con
              el propósito de evitar riesgos.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="nota-tiempos">
              Agradecemos su compromiso para cumplir con estas ubicaciones y
              tiempos de manera responsable y segura.
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td colSpan={5} className="copyright-tiempos">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTablaEncuentro} className="boton-capturar">
          Capturar Encuentro
        </button>
      </div>

      {/* gasolina   gasolina   gasolina   gasolina   gasolina   gasolina   gasolina   gasolina  */}
      <table ref={tablaGasolinaRef} className="tabla-tiempos">
        <tbody>
          <tr>
            <td className="encabezado-tiempos" colSpan={6}>
              Gasto de gasolina (octubre de 2024 $ 24.40 litro)
            </td>
          </tr>
          <tr>
            <td className="encabezado-tabla-tiempos">Ruta</td>
            <td className="encabezado-tabla-tiempos">km. 👆</td>
            <td className="encabezado-tabla-tiempos">km. 👇</td>
            <td className="encabezado-tabla-tiempos">Gasolina subida</td>
            <td className="encabezado-tabla-tiempos">Gasolina bajada</td>
            <td className="encabezado-tabla-tiempos">Vuelta redonda</td>
          </tr>
          <tr>
            <td className="fila-sanisidro-tiempos">San Isidro</td>
            <td className="fila-sanisidro-tiempos">9.4</td>
            <td className="fila-sanisidro-tiempos">8.3</td>
            <td className="fila-sanisidro-tiempos">$ 37.60</td>
            <td className="fila-sanisidro-tiempos">$ 33.20</td>
            <td className="fila-sanisidro-tiempos">$ 70.80</td>
          </tr>
          <tr>
            <td className="fila-calicapan-tiempos">Calicapan</td>
            <td className="fila-calicapan-tiempos">8.7</td>
            <td className="fila-calicapan-tiempos">7.5</td>
            <td className="fila-calicapan-tiempos">$ 34.80</td>
            <td className="fila-calicapan-tiempos">$ 30.00</td>
            <td className="fila-calicapan-tiempos">$ 64.80</td>
          </tr>
          <tr>
            <td className="fila-sosa-tiempos">Sosa</td>
            <td className="fila-sosa-tiempos">8.9</td>
            <td className="fila-sosa-tiempos">8.1</td>
            <td className="fila-sosa-tiempos">$ 35.60</td>
            <td className="fila-sosa-tiempos">$ 32.40</td>
            <td className="fila-sosa-tiempos">$ 68.00</td>
          </tr>
          <tr>
            <td className="fila-tezotepec-tiempos">Tezotepec</td>
            <td className="fila-tezotepec-tiempos">8.8</td>
            <td className="fila-tezotepec-tiempos" colSpan={2}></td>
            <td className="fila-tezotepec-tiempos" colSpan={2}></td>
          </tr>
          <tr>
            <td className="fila-coahuixco-tiempos">Coahuixco</td>
            <td className="fila-coahuixco-tiempos">11.1</td>
            <td className="fila-coahuixco-tiempos">10.3</td>
            <td className="fila-coahuixco-tiempos">$ 44.40</td>
            <td className="fila-coahuixco-tiempos">$ 41.20</td>
            <td className="fila-coahuixco-tiempos">$ 85.60</td>
          </tr>
          <tr>
            <td className="fila-tacopan-tiempos">Tacopan</td>
            <td className="fila-tacopan-tiempos">NR</td>
            <td className="fila-tacopan-tiempos" colSpan={2}></td>
            <td className="fila-tacopan-tiempos" colSpan={2}></td>
          </tr>
          <tr>
            <td colSpan={6} className="nota-tiempos">
              Les informamos que los gastos de gasolina establecidos para cada
              ruta han sido determinados tras un estudio detallado que llevó
              varios días en completarse. Este análisis se realizó tomando como
              referencia el precio de la gasolina en octubre de 2024, que es de
              24.40 pesos por litro, y el consumo promedio de 4 pesos de
              gasolina por kilómetro, utilizando como unidad piloto la unidad
              número 36.
            </td>
          </tr>
          <tr>
            <td colSpan={6} className="nota-tiempos">
              Estos datos nos permiten asignar de manera justa y precisa los
              gastos de combustible, adaptados a las necesidades y
              características de cada ruta.
            </td>
          </tr>
          <tr><td></td></tr>
          <tr>
            <td colSpan={6} className="copyright-tiempos">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTablaGasolina} className="boton-capturar">
          Capturar Gasto Gasolina
        </button>
      </div>
    </div>
  );
}

export default Tiempos;
