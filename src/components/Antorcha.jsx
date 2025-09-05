// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import antorcha from "/antorcha.png";

import "./Antorcha.css";

import foto01 from "/antorcha/01.jpg";
import foto02 from "/antorcha/02.jpg";
import foto03 from "/antorcha/03.jpg";
import foto04 from "/antorcha/04.png";

function Antorcha() {
  const tablaRef = useRef(null);
  const tablaRef2 = useRef(null);
  const tablaRef3 = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Itinerario Antorcha.png";
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
      downloadLink.download = "Reglas de carrera.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  function capturarTabla3() {
    const tabla = tablaRef3.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Reglas de cooperacion.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      <table ref={tablaRef} className="tabla-antorcha">
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }}>
              <img
                src={antorcha}
                className="foto"
                style={{ width: "350px", height: "auto" }}
              />
            </td>
          </tr>
          <tr>
            <td className="encabezado-antorcha">
              Carrera de Antorcha Urbanos rojos.
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">Inicio 9:00 - 9:20 PM</td>
          </tr>
          <tr>
            <td className="nota2-antorcha">
              Reunión en la gasolinera de Chignautla, Organización de los
              participantes y Breve charla sobre el recorrido y la logística.
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Partida: 9:20 PM</b>
            </td>
          </tr>
          <tr>
            <td className="nota3-antorcha">
              Salida rumbo a Las Delicias, Atempan. Tiempo estimado de llegada:
              9:40 PM.
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Punto 1: Las Delicias</b>
            </td>
          </tr>
          <tr>
            <td className="nota4-antorcha">
              Al llegar, se solicitará fuego de alguna antorcha que pase.
              Comienza la carrera de relevos. 10:00 PM.
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Paradas de Relevos</b>
            </td>
          </tr>
          <tr>
            <td className="nota5-antorcha">
              <ol>
                <li>El Puerto: 10:20 PM.</li>
                <li>La Parada de Sosa 10:40 PM.</li>
                <li>Templo Shalom 11:00 PM.</li>
                <li>
                  Chedraui: 11:20 PM. Última parada antes de la llegada al
                  destino principal.
                </li>
                <li>Catedral: 11:40 PM.</li>
              </ol>
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Destino Final: Catedral</b>
            </td>
          </tr>
          <tr>
            <td className="nota6-antorcha">
              <ul>
                <li>
                  Los corredores y participantes que lo deseen pueden descender
                  de las unidades.
                </li>
                <li>Inicia la carrera hacia la terminal.</li>
                <li>Orden del desfile:</li>
                <ol>
                  <li>Camioneta que lleva la imagen de la Virgen.</li>
                  <li>Corredores con la antorcha.</li>
                  <li>Camionetas y vehículos de apoyo.</li>
                </ol>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Base (Terminal)</b>
            </td>
          </tr>
          <tr>
            <td className="nota7-antorcha">
              <ul>
                <li>Al llegar.</li>
                <ol>
                  <li>
                    La camioneta con la Virgen se colocará frente al altar.
                  </li>
                  <li>
                    Los dos corredores principales colocarán las antorchas cerca
                    del altar como símbolo del esfuerzo colectivo.
                  </li>
                  <li>El padrino colocara la virgen en su altar.</li>
                </ol>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="copyright-antorcha">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Itinerario de Carrera
        </button>
      </div>

      <table ref={tablaRef2} className="tabla-antorcha">
        <tbody>
          <tr>
            <td className="encabezado-antorcha">
              Reglas y Recomendaciones Relacionadas con la Carrera
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">Vehículos Autorizados</td>
          </tr>
          <tr>
            <td className="nota2-antorcha">
              <ul>
                <li>
                  Únicamente podrán participar los vehículos designados por la
                  organización.
                </li>
                <li>
                  Prohibido que se integren camionetas o vehículos de rutas
                  ajenas como urbanos verdes, Ruta 1, Ruta 3, etc.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Puntualidad Obligatoria</b>
            </td>
          </tr>
          <tr>
            <td className="nota3-antorcha">
              <ul>
                <li>
                  Los horarios establecidos en el itinerario son definitivos.
                </li>
                <li>
                  No se harán modificaciones ni se esperará a personas que
                  lleguen tarde.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Orden Durante el Evento</b>
            </td>
          </tr>
          <tr>
            <td className="nota4-antorcha">
              <ul>
                <li>
                  Únicamente habrá dos camionetas destinadas al traslado de los
                  corredores.
                </li>
                <li>
                  Queda estrictamente prohibido que cualquier otra camioneta
                  traslade a los corredores.
                </li>
                <li>
                  Solo podrán participar los corredores previamente inscritos en
                  la lista oficial; no se permitirá la participación de personas
                  no registradas.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Seguridad en la Carrera</b>
            </td>
          </tr>
          <tr>
            <td className="nota5-antorcha">
              <ul>
                <li>
                  Los corredores recibirán una bebida hidratante para evitar
                  emergencias.
                </li>
                <li>
                  Se contará con personal de apoyo para asistir en caso de
                  incidentes.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Recomendaciones para los Participantes</b>
            </td>
          </tr>
          <tr>
            <td className="nota6-antorcha">
              <ul>
                <li>
                  Vestir ropa y calzado cómodo, adecuado para la actividad.
                </li>
                <li>
                  Llevar identificación y teléfonos de contacto en caso de
                  emergencia.
                </li>
                <li>
                  Mantener el orden y seguir las indicaciones del personal
                  organizador.
                </li>
                <li>
                  Respetar los puntos de parada designados para cambios de
                  relevo.
                </li>
                <li>Actuar con respeto hacia los demás participantes.</li>
                <li>
                  Cuidar los bienes comunitarios y mantener limpios los espacios
                  utilizados.
                </li>
                <li>
                  <b>Calentar antes de la carrera, en las Delicias.</b>
                </li>
                <li>
                  Recomendaciones de alimentación:
                  <ol>
                    <li>
                      Lo mas recomendable es tomar agua con miel durante la
                      carrera.
                    </li>
                    <li>Comer dulce en caso de que se te baje el azucar.</li>
                    <li>
                      Una hora antes puedes tomar un licuado de platano, ya que
                      si lo tomas poco tiempo antes de la carrera, te puede dar
                      el dolor de caballo.
                    </li>
                  </ol>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="copyright-antorcha">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla2} className="boton-capturar">
          Capturar Reglas de Carrera
        </button>
      </div>

      <table ref={tablaRef3} className="tabla-antorcha">
        <tbody>
          <tr>
            <td className="encabezado-antorcha">
              Reglas y Recomendaciones Relacionadas con la Cooperación
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">Responsabilidad Individual</td>
          </tr>
          <tr>
            <td className="nota2-antorcha">
              <ul>
                <li>
                  Cada participante debe considerar que su aportación es para sí
                  mismo y su familia.
                </li>
                <li>
                  <b>Excepción:</b> Si no asiste con su familia, puede llevar 1
                  o 2 vecinos o amigos bajo su responsabilidad.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Padrino de la Antorcha</b>
            </td>
          </tr>
          <tr>
            <td className="nota3-antorcha">
              <ul>
                <li>
                  El padrino del evento tiene permitido llevar varios invitados
                  en reconocimiento a su importante aporte económico y esfuerzo.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Destino de la Cooperación</b>
            </td>
          </tr>
          <tr>
            <td className="nota3-antorcha">
              <ul>
                <li>Las aportaciones están destinadas a:</li>
                <ul>
                  <li>Pintura, adornos y luces.</li>
                  <li>Preparación de alimentos (tamales y ponche).</li>
                </ul>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="nota1-antorcha">
              <b>Costo Estimado de Platillo</b>
            </td>
          </tr>
          <tr>
            <td className="nota4-antorcha">
              <ul>
                <li>
                  El costo promedio por persona es de $30 pesos, que incluye:
                </li>
                <ul>
                  <li>Dos tamales. (24 pesos)</li>
                  <li>Un vaso de ponche. (6 pesos)</li>
                </ul>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="copyright-antorcha">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla3} className="boton-capturar">
          Capturar Reglas de Cooperacion
        </button>
      </div>
      <hr></hr>
      <p>
        Camioneta del padrino Ramiro con la virgencita. Miercoles 11 de
        Diciembre 2024
      </p>
      <img src={foto01} className="foto" />
      <hr></hr>
      <p>Ticket chedraui 20 gatorade de 300 ml.</p>
      <img src={foto02} className="foto" />
      <hr></hr>
      <p>Ticket de chaleco brigadista con cintas reflejantes color azul.</p>
      <img src={foto03} className="foto" />
      <hr></hr>
      <p>
        Gastos totales. Antorcha 2024. Urbanos Rojos. De los cuales $800 se
        ingresaron de la caja de limosnas y los restantes $ 480 los dono el
        amigo JoyBoy.
      </p>
      <img src={foto04} className="foto" />
      <ol>
        <li>
          <b>Ubicación y Estacionamiento</b>
          <ul>
            <li>
              Se seleccionó un punto de reunión en el área adelante de Las
              Delicias, específicamente en el lado del carril hacia Perote,
              donde había suficiente espacio para estacionarse.
            </li>
          </ul>
        </li>
        <li>
          <b>Preparativos Iniciales</b>
          <ul>
            <li>
              En el lugar, se alistaron las antorchas y se prepararon las bolas
              de estopa.
            </li>
            <li>
              Se distribuyó la bebida a los corredores para su consumo antes de
              iniciar.
            </li>
          </ul>
        </li>
        <li>
          <b>Supervisión y Tareas de Apoyo</b>
          <ul>
            <li>
              Unidad 33:
              <ul>
                <li>
                  Encargada de supervisar el estado de las antorchas y de
                  brindar apoyo a los corredores, cuidandolos al ir a la misma
                  velocidad del corredor, protegiendoles de algun automovil.
                </li>
                <li>
                  Realizó tareas como remojar las bolas de estopa y
                  reemplazarlas en las antorchas cuando fue necesario.
                </li>
              </ul>
            </li>
            <li>
              Unidades 20 y 36:
              <ul>
                <li>
                  Ambas se alternaron en la labor de traslado de los corredores.
                </li>
                <li>
                  Una unidad inició movilizando a los corredores mientras la
                  otra los recogía al final del tramo, y posteriormente
                  intercambiaron roles.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Recomendaciones para Mejorar la Comunicación</b>
          <ul>
            <li>
              Se observó que el uso de WhatsApp y las llamadas no fue efectivo
              debido a la baja cobertura en la zona.
            </li>
            <li>
              Se recomienda considerar el uso de <b>walkie-talkies</b> para una
              comunicación más fluida en futuros eventos.
            </li>
          </ul>
        </li>
        <li>
          <b>Problemas Detectados y Soluciones Propuestas</b>
          <ul>
            <li>
              Algunos corredores se perdieron durante el recorrido porque otras
              antorchas estaban muy cerca de la nuestra, lo que causó confusión.
            </li>
            <li>
              Para evitar esto:
              <ul>
                <li>
                  Es importante instruir a los corredores para que, en caso de
                  duda, busquen siempre la <b>unidad piloto</b> que los está
                  guiando.
                </li>
                <li>
                  En futuras ediciones, se debería discutir este tema con los
                  corredores antes de iniciar.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Evaluación General</b>
          <ul>
            <li>
              Fuera de los inconvenientes mencionados, el evento transcurrió con
              éxito y de manera organizada.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Antorcha;
