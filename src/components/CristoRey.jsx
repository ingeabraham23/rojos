// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
// import antorcha from "/bannercristo.png";

import "./CristoRey.css";

function CristoRey() {
  const [personaApoyo, setPersonaApoyo] = useState("");

  const tablaRef = useRef(null);
  const tablaRef2 = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, { scale: 6 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Logistica el puerto.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  function capturarTabla2() {
    const tabla = tablaRef2.current;
    html2canvas(tabla, { scale: 6 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Tafiras el puerto.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      {/* ================= PRIMERA TABLA ================= */}

      <table ref={tablaRef} className="tabla-cristo">
        <tbody>
          <tr>
            <td className="encabezado-tabla-cristo">
              Logística Especial: Fiesta de Cristo Rey
            </td>
          </tr>

          <tr>
            <td className="encabezado-cristo">
              <b>De 6:00 AM a 9:00 AM</b>
            </td>
          </tr>

          <tr>
            <td className="nota1-cristo">
              A excepción de las rutas (Tacopan, Tepepan y Huapaltepec).
              <br />
              Todas las demás unidades podrán trabajar con destino al
              <b> Puerto</b>. Pueden darse la vuelta donde gusten, cargar en la
              base hacia el Puerto o trabajar en su ramal correspondiente. Ambas
              opciones están permitidas durante este horario.
            </td>
          </tr>

          <tr>
            <td className="encabezado-cristo">
              <b>Después de las 9:00 de la mañana</b>
            </td>
          </tr>

          <tr>
            <td className="nota2-cristo">
              A partir de las 9:00 AM, el checador comenzará a enrolar a las
              unidades conforme les toque turno.
              <br />
              <br />
              <b>Opción adicional para los operadores:</b>
              <br />
              Quien guste también podrá darse la vuelta en
              <b> Chignautla o Fresnillo </b>
              con dirección hacia el Puerto, o bien irse
              <b> completamente vacío </b>
              a cargar directamente al Puerto para prestar el servicio a los
              pasajeros que bajan.
              <br />
              <br />
              <b>Para quienes salen de la base hacia el Puerto:</b>
              <br />
              Los operadores deberán estar conscientes de que habrá compañeros
              que opten por darse la vuelta en <b>
                Fresnillo o Chignautla
              </b>{" "}
              para dirigirse al Puerto. Por lo tanto,{" "}
              <b>no deberán molestarse, reclamar ni generar conflictos</b> por
              esta situación.
              <br />
              <br />
              <b>Facultad del Checador:</b>
              <br />
              El checador, como autoridad operativa en turno, podrá{" "}
              <b>repetirle al operador la misma ruta</b>
              (ya sea Ruta Normal o Puerto) si así lo considera necesario.
              <ul>
                <li>
                  <b>Ninguna decisión del checador deberá ser cuestionada</b>,
                  pues responde a las necesidades operativas del momento y busca
                  garantizar equilibrio y orden en la prestación del servicio.
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td className="copyright-cristo">@el.joyboy.de.chignautla</td>
          </tr>
        </tbody>
      </table>

      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Logística Cristo
        </button>
      </div>

      {/* ================= CAMPO PERSONA DESIGNADA ================= */}

      <div className="campo-persona-apoyo">
        <label htmlFor="personaApoyo">
          Persona designada para el apoyo operativo:
        </label>

        <input
          id="personaApoyo"
          type="text"
          value={personaApoyo}
          onChange={(e) => setPersonaApoyo(e.target.value)}
          placeholder="Escribe el nombre de la persona"
        />
      </div>

      {/* ================= SEGUNDA TABLA ================= */}

      <table ref={tablaRef2} className="tabla-antorcha">
        <tbody>
          <tr>
            <td className="encabezado-tabla-cristo">
              Tarifas Oficiales y Apoyo Operativo
            </td>
          </tr>

          {/* TARIFA DE 10 PESOS */}

          <tr>
            <td className="encabezado-cristo">
              <b>Tarifa: $10.00 MXN</b>
            </td>
          </tr>

          <tr>
            <td className="nota1-cristo">
              Aplica para usuarios que aborden desde: <b>Teziutlán – Centro</b>{" "}
              Hasta: <b>Retorno de Bimbo,</b> Con destino hacia el <b>Puerto</b>
              .
            </td>
          </tr>

          {/* TARIFA DE 9 PESOS */}

          <tr>
            <td className="encabezado-cristo">
              <b>Tarifa: $9.00 MXN</b>
            </td>
          </tr>

          <tr>
            <td className="nota2-cristo">
              Aplica para usuarios que aborden desde: <b>Parada El Capulín</b>{" "}
              Hasta: <b>Linda Tarde,</b> Con destino hacia el <b>Puerto</b>.
            </td>
          </tr>

          {/* TARIFA DE 8 PESOS */}

          <tr>
            <td className="encabezado-cristo">
              <b>Tarifa: $8.00 MXN</b>
            </td>
          </tr>

          <tr>
            <td className="nota3-cristo">
              Aplica para usuarios que aborden a partir de:{" "}
              <b>Parada San Mateo </b> En adelante, Con destino hacia el{" "}
              <b>Puerto</b>.
            </td>
          </tr>

          {/* APOYO OPERATIVO */}

          <tr>
            <td className="encabezado-cristo">
              <b>Apoyo Operativo en el Puerto</b>
            </td>
          </tr>

          <tr>
            <td className="nota4-cristo">
              Para garantizar un flujo ordenado de pasaje y evitar que la
              competencia capte a los usuarios que corresponden a nuestras
              unidades, se ha designado a una persona encargada de apoyar en la
              zona del <b>Puerto</b>.
              <br />
              <br />
              Dicho apoyo consiste en orientar, llamar y dirigir a los pasajeros
              hacia las camionetas de Urbanos Rojos.
              <br />
              <br />
              <b>Persona designada:</b>{" "}
              <b>{personaApoyo.trim() || "Por designar"}</b>
              <br />
              <br />
              <b>Comisión para la persona designada:</b>
              <br />
              Se solicita atentamente a los operadores brindar una
              <b> contribución </b>
              a la persona encargada, en reconocimiento a su labor de apoyo.
              <br />
              <br />
              En pocas palabras, no se vayan a hacer pendejos con su comisión.
              🤬
            </td>
          </tr>

          <tr>
            <td className="copyright-cristo">@el.joyboy.de.chignautla</td>
          </tr>
        </tbody>
      </table>

      <div className="contenedor-boton">
        <button onClick={capturarTabla2} className="boton-capturar">
          Capturar Tabla de Tarifas
        </button>
      </div>

      <hr />
    </div>
  );
}

export default CristoRey;
