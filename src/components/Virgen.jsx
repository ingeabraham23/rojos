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
      <table
        ref={tablaVirgenRef}
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fffaf4",
          border: "2px solid #d4b48c",
          fontFamily: "serif",
        }}
      >
        <tbody>
          <tr>
            <td
              colSpan={6}
              style={{
                textAlign: "center",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <img
                src="/virgen.png"
                alt="Virgen de Guadalupe 1"
                style={{
                  width: "85px",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              />
              <img
                src="/virgen2.png"
                alt="Virgen de Guadalupe 2"
                style={{
                  width: "auto",
                  height: "115px",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              />
              <img
                src="/virgen3.png"
                alt="Virgen de Guadalupe 1"
                style={{
                  width: "85px",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                }}
              />
            </td>
          </tr>

          <tr>
            <td
              colSpan={6}
              style={{
                textAlign: "center",
                padding: "2px",
                display: "flex",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <img
                src="/urbanosrojos.png"
                alt="Virgen de Guadalupe 1"
                style={{
                  width: "150px",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </td>
          </tr>

          <tr>
            <td
              colSpan={6}
              style={{
                backgroundColor: "#d39b6a",
                color: "white",
                padding: "2px",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "18px",
                borderBottom: "2px solid #b17f52",
              }}
            >
              Cooperación para la Fiesta en Honor a la Virgen de Guadalupe
            </td>
          </tr>

          <tr><td style={{ height: "10px" }}></td></tr>

          <tr>
            <td
              colSpan={5}
              style={{
                padding: "3px",
                color: "#4a3b2f",
                fontSize: "12px",
                lineHeight: "1.5",
              }}
            >
              Compañeros operadores y postureros: como cada año, celebraremos la
              tradicional fiesta en honor a la Virgen de Guadalupe, con el fin de
              fortalecer la unión y la convivencia entre todos los integrantes de
              Urbanos Rojos.
            </td>
          </tr>

          <tr><td style={{ height: "10px" }}></td></tr>

          <tr>
            <td
              colSpan={5}
              style={{
                padding: "3px",
                color: "#4a3b2f",
                fontSize: "12px",
                lineHeight: "1.5",
              }}
            >
              Se solicita una cooperación de <b>$150 pesos</b> por persona: Chofer y Posturero, con el
              objetivo de cubrir los gastos de alimentos, decoración, pintura,
              iluminación y demás preparativos relacionados con esta celebración
              religiosa.
            </td>
          </tr>

          <tr><td style={{ height: "10px" }}></td></tr>

          <tr>
            <td
              colSpan={5}
              style={{
                padding: "3px",
                color: "#4a3b2f",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              La recolección se realizará del jueves 20 de noviembre al jueves 5 de
                diciembre.
            </td>
          </tr>

          {/* <tr>
            <td
              colSpan={5}
              style={{
                padding: "10px",
                backgroundColor: "#c94d4d",
                color: "white",
                fontWeight: "bold",
                borderRadius: "4px",
              }}
            >
              Pasada esta fecha, quienes no hayan aportado no podrán salir de la base,
              ya sea operador o posturero.
            </td>
          </tr> */}

          <tr><td style={{ height: "10px" }}></td></tr>

          <tr>
            <td
              colSpan={5}
              style={{
                padding: "3px",
                color: "#4a3b2f",
                fontSize: "12px",
                lineHeight: "1.5",
              }}
            >
              La cooperación será recibida por el checador <b>Pocoyó</b>, quien ha sido
              designado formalmente como encargado de la recolección. Les agradecemos
              su apoyo y les recordamos que pueden hacer su aportación en cualquier
              momento dentro del periodo establecido.
            </td>
          </tr>

          <tr><td style={{ height: "10px" }}></td></tr>

          <tr>
            <td
              colSpan={5}
              style={{
                padding: "3px",
                color: "#4a3b2f",
                fontSize: "12px",
                lineHeight: "1.5",
              }}
            >
              Agradecemos de antemano su colaboración y comprensión, confiando en que
              esta tradición seguirá siendo un lazo de unión para todos.
            </td>
          </tr>

          <tr><td style={{ height: "15px" }}></td></tr>

          <tr>
            <td
              colSpan={5}
              style={{
                padding: "8px",
                textAlign: "center",
                color: "#6e5a45",
                fontStyle: "italic",
                fontSize: "14px",
              }}
            >
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
