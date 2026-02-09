// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./Reunion.css";

function Reunion() {
  const tablaVirgenRef = useRef(null);

  function capturarTablaTiempos() {
    const tabla = tablaVirgenRef.current;
    html2canvas(tabla, { scale: 6 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Reunion.png";
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
                padding: "1px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <img
                              src="/logo_puebla_gob.png"
                alt="Virgen de Guadalupe 1"
                style={{
                  width: "70px",
                  height: "30px",
                }}
              />
              <img
                              src="/MOVILIDAD_02.png"
                alt="Virgen de Guadalupe 2"
                style={{
                  width: "90px",
                  height: "40px",
                }}
              />
              <img
                              src="/puebla_frases_gob.png"
                alt="Virgen de Guadalupe 1"
                style={{
                  width: "110px",
                  height: "40px",
                }}
              />
                          <img
                              src="/urbanosrojos.png"
                              alt="Virgen de Guadalupe 1"
                              style={{
                                  width: "70px",
                                  height: "20px",
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
              Reunion Extraordinaria
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
                          Compañeros operadores, postureros y concesionarios: se les convoca a una reunión
                          general de la línea Urbanos Rojos, con el objetivo de fortalecer la organización,
                          la disciplina y el buen funcionamiento del servicio que brindamos a la ciudadanía.
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
                          Se les informa que la reunión se llevará a cabo el día{" "}
                          <b>miércoles 11 de febrero de 2026 a las 9:00 de la noche</b>, en el salón
                          {" "}<b>“María Bonita”</b>, ubicado en <b>Chignautla, Puebla</b>.
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
                          Es indispensable la presencia de todos, ya que se contará con la participación
                          de la <b>Delegada de Movilidad y Transporte de la región</b>.
                          Durante la reunión se tratarán temas de gran importancia para el servicio.
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
                          Entre los temas a tratar se incluyen: condiciones de las unidades
                          (luces, limpieza, accesorios, bota aguas, polarizado, calcomanías, llantas),
                          así como el trato al pasajero, el uso del teléfono celular, la presentación
                          personal, la vestimenta de los operadores y el cumplimiento del reglamento.
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
                          También se abordarán temas relacionados con la movilidad, la seguridad,
                          la imagen del transporte público y las disposiciones oficiales de la
                          Secretaría de Movilidad y Transporte.

            </td>
          </tr>


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
                          Los concesionarios serán los encargados de tomar lista de asistencia,
                          por lo que se les solicita puntualidad y compromiso con esta convocatoria.

                      </td>
                  </tr>


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
                          Agradecemos su atención y colaboración, confiando en que este esfuerzo
                          conjunto permitirá seguir mejorando nuestro servicio a la comunidad.

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
          Capturar Cooperacion Reunion
        </button>
      </div>
    </div>
  );
}

export default Reunion;
