/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";

import antorcha from "/antorcha2025.png";
import foto01 from "/antorcha/01.jpg";
import foto02 from "/antorcha/02.jpg";
import foto03 from "/antorcha/03.jpg";
import foto04 from "/antorcha/04.png";

import "./Antorcha.css";

// Carga los datos guardados para conservar la configuración entre visitas.
function obtenerDatosGuardados() {
  try {
    return JSON.parse(localStorage.getItem("datosAntorcha")) || {};
  } catch {
    return {};
  }
}

// Función reutilizable para capturar cualquiera de los comunicados.
async function capturarComunicado(referencia, nombreArchivo) {
  if (!referencia.current) return;

  try {
    const canvas = await html2canvas(referencia.current, {
      scale: 6,
      backgroundColor: "#fffaf0",
      useCORS: true,
      logging: false,
      imageTimeout: 15000,
    });

    const enlace = document.createElement("a");
    enlace.download = nombreArchivo;
    enlace.href = canvas.toDataURL("image/png");
    enlace.click();
  } catch (error) {
    console.error("Error al capturar el comunicado:", error);
    alert("No fue posible generar la imagen. Intenta nuevamente.");
  }
}

function Encabezado({ numero, titulo, subtitulo }) {
  return (
    <header className="antorcha-encabezado">
      <div className="antorcha-numero">{numero}</div>

      <div className="antorcha-titulo">
        <span>URBANOS ROJOS</span>
        <h2>{titulo}</h2>
        {subtitulo && <p>{subtitulo}</p>}
      </div>

      <div className="antorcha-decoracion" aria-hidden="true">
        ✦
      </div>
    </header>
  );
}

function Apartado({ titulo, children, icono }) {
  return (
    <section className="antorcha-apartado">
      <h3>
        {icono && <span aria-hidden="true">{icono}</span>}
        {titulo}
      </h3>
      <div className="antorcha-contenido">{children}</div>
    </section>
  );
}

function BotonCaptura({ referencia, nombre, texto }) {
  return (
    <button
      type="button"
      className="antorcha-boton"
      onClick={() => capturarComunicado(referencia, nombre)}
    >
      <span aria-hidden="true">↓</span>
      {texto}
    </button>
  );
}

function Antorcha() {
  const datosIniciales = obtenerDatosGuardados();

  const [fechaEvento, setFechaEvento] = useState(datosIniciales.fecha || "");
  const [horaEvento, setHoraEvento] = useState(datosIniciales.hora || "20:40");
  const [lugarEvento, setLugarEvento] = useState(
    datosIniciales.lugar || "Gasolinera de Chignautla",
  );

  const itinerarioRef = useRef(null);
  const carreraRef = useRef(null);
  const cooperacionRef = useRef(null);

  // Guarda automáticamente la fecha, hora y lugar para futuras visitas.
  useEffect(() => {
    localStorage.setItem(
      "datosAntorcha",
      JSON.stringify({
        fecha: fechaEvento,
        hora: horaEvento,
        lugar: lugarEvento,
      }),
    );
  }, [fechaEvento, horaEvento, lugarEvento]);

  const fechaFormateada = fechaEvento
    ? new Date(`${fechaEvento}T12:00:00`).toLocaleDateString("es-MX", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Fecha por definir";

  const horaFormateada = horaEvento
    ? new Date(`2000-01-01T${horaEvento}:00`).toLocaleTimeString("es-MX", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : "Hora por definir";

  return (
    <main className="antorcha-pagina">
      {/* FORMULARIO: DATOS EDITABLES DEL EVENTO */}
      <section className="antorcha-formulario">
        <div className="antorcha-formulario-titulo">
          <span aria-hidden="true">⚙️</span>
          <div>
            <h2>Datos de la carrera</h2>
            <p>Configura la información de esta edición.</p>
          </div>
        </div>

        <div className="antorcha-campos">
          <label>
            Fecha del evento
            <input
              type="date"
              value={fechaEvento}
              onChange={(e) => setFechaEvento(e.target.value)}
            />
          </label>

          <label>
            Hora de reunión
            <input
              type="time"
              value={horaEvento}
              onChange={(e) => setHoraEvento(e.target.value)}
            />
          </label>

          <label className="antorcha-campo-lugar">
            Lugar de reunión
            <input
              type="text"
              value={lugarEvento}
              onChange={(e) => setLugarEvento(e.target.value)}
              placeholder="Ej. Gasolinera de Chignautla"
            />
          </label>
        </div>
        <p className="antorcha-aviso-guardado">
          Los datos se guardan automáticamente en este dispositivo.
        </p>
      </section>

      {/* COMUNICADO 1: ITINERARIO */}
      <div className="antorcha-grupo">
        <article ref={itinerarioRef} className="antorcha-cartel">
          <Encabezado numero="01" titulo="Carrera de Antorcha" />
          {/* Los datos se muestran en el cartel y forman parte de la captura. */}
          <div className="antorcha-datos-evento">
            <div className="antorcha-dato">
              <strong>📅 {fechaFormateada}</strong>
            </div>
            <div className="antorcha-dato">
              <strong>⏰ {horaFormateada}</strong>
            </div>
            <div className="antorcha-dato">
              <strong>📍 {lugarEvento.trim() || "Por definir"}</strong>
            </div>
          </div>

          <div className="antorcha-cuerpo">
            <Apartado titulo="Reunión de participantes" icono="📍">
              <strong className="antorcha-hora">8:40 – 9:10 PM</strong>
              <p>
                Reunión en la gasolinera de Chignautla, organización de los
                participantes y breve charla sobre el recorrido y la logística.
              </p>
            </Apartado>

            <Apartado titulo="Partida" icono="🏁">
              <strong className="antorcha-hora">9:10 PM</strong>
              <p>
                Salida rumbo al Puerto. Tiempo estimado de llegada: 9:20 PM.
              </p>
            </Apartado>

            <Apartado titulo="Inicio: El Puerto" icono="🔥">
              <strong className="antorcha-hora">9:30 PM</strong>
              <p>
                Al llegar, se solicitará fuego de alguna antorcha que pase.
                Comienza la carrera de relevos.
              </p>
            </Apartado>

            <Apartado titulo="Destino final: Catedral" icono="⛪">
              <ul>
                <li>
                  Los corredores y participantes que lo deseen pueden descender
                  de las unidades.
                </li>
                <li>Inicia la carrera hacia la terminal.</li>
                <li>Orden del desfile:</li>
              </ul>
              <ol>
                <li>Camioneta que lleva la imagen de la Virgen.</li>
                <li>Corredores con la antorcha.</li>
                <li>Camionetas y vehículos de apoyo.</li>
              </ol>
            </Apartado>

            <Apartado titulo="Base (Terminal)" icono="🕯️">
              <p>
                <strong>Al llegar:</strong>
              </p>
              <ol>
                <li>La camioneta con la Virgen se colocará frente al altar.</li>
                <li>
                  Los dos corredores principales colocarán las antorchas cerca
                  del altar como símbolo del esfuerzo colectivo.
                </li>
                <li>El padrino colocará la Virgen en su altar.</li>
              </ol>
            </Apartado>
          </div>

          <footer className="antorcha-pie">
            <span>TRADICIÓN · FE · UNIDAD</span>
            <strong>@el.joyboy.de.chignautla</strong>
          </footer>
        </article>

        <BotonCaptura
          referencia={itinerarioRef}
          nombre="Itinerario_Antorcha.png"
          texto="Capturar itinerario"
        />
      </div>

      {/* COMUNICADO 2: REGLAS DE CARRERA */}
      <div className="antorcha-grupo">
        <article ref={carreraRef} className="antorcha-cartel">
          <Encabezado
            numero="02"
            titulo="Reglas de la Carrera"
            subtitulo="Organización, seguridad y recomendaciones"
          />

          <div className="antorcha-cuerpo">
            <Apartado titulo="Vehículos autorizados" icono="🚐">
              <ul>
                <li>
                  Prohibido que se integren camionetas o vehículos de rutas
                  ajenas como urbanos verdes, Ruta 1, Ruta 3, etc.
                </li>
              </ul>
            </Apartado>

            <Apartado titulo="Puntualidad obligatoria" icono="⏰">
              <ul>
                <li>
                  No se harán modificaciones ni se esperará a personas que
                  lleguen tarde.
                </li>
              </ul>
            </Apartado>

            <Apartado titulo="Orden durante el evento" icono="📋">
              <ul>
                <li>
                  Únicamente habrá dos camionetas destinadas al traslado de los
                  corredores.
                </li>
                <li>
                  Queda estrictamente prohibido que cualquier otra camioneta
                  traslade a los corredores.
                </li>
              </ul>
            </Apartado>

            <Apartado titulo="Recomendaciones para participantes" icono="👟">
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
              </ul>

              <div className="antorcha-destacado">
                ¡IMPORTANTE!
                <p>Calentar antes de la carrera, en el Puerto.</p>
              </div>

              <strong className="antorcha-subtitulo">
                Recomendaciones de alimentación
              </strong>
              <ol>
                <li>
                  Lo más recomendable es tomar agua con miel durante la carrera.
                </li>
                <li>Comer dulce en caso de que se te baje el azúcar.</li>
                <li>
                  Una hora antes puedes tomar un licuado de plátano, ya que si
                  lo tomas poco tiempo antes de correr, te puede dar el dolor de
                  caballo.
                </li>
              </ol>
            </Apartado>
          </div>

          <footer className="antorcha-pie">
            <span>SEGURIDAD · DISCIPLINA · COMPROMISO</span>
            <strong>@el.joyboy.de.chignautla</strong>
          </footer>
        </article>

        <BotonCaptura
          referencia={carreraRef}
          nombre="Reglas_Carrera.png"
          texto="Capturar reglas de carrera"
        />
      </div>

      {/* COMUNICADO 3: COOPERACIÓN */}
      <div className="antorcha-grupo">
        <article ref={cooperacionRef} className="antorcha-cartel">
          <Encabezado
            numero="03"
            titulo="Reglas de Cooperación"
            subtitulo="Responsabilidad y organización del evento"
          />

          <div className="antorcha-cuerpo">
            <Apartado titulo="Responsabilidad individual" icono="🤝">
              <ul>
                <li>
                  Cada participante debe considerar que su aportación es para sí
                  mismo y su familia.
                </li>
                <li>
                  <strong>Excepción:</strong> Si no asiste con su familia, puede
                  llevar 1 o 2 vecinos o amigos bajo su responsabilidad.
                </li>
              </ul>
            </Apartado>

            <Apartado titulo="Padrino de la Antorcha" icono="🏅">
              <p>
                El padrino del evento tiene permitido llevar varios invitados en
                reconocimiento a su importante aporte económico y esfuerzo.
              </p>
            </Apartado>

            <Apartado titulo="Destino de la cooperación" icono="💰">
              <p>Las aportaciones están destinadas a:</p>
              <ul>
                <li>Pintura, adornos y luces.</li>
                <li>Alimentos (tortillas, refrescos, platos y vasos).</li>
                <li>Renta de mesas, lona y sillas.</li>
              </ul>
            </Apartado>
          </div>

          <footer className="antorcha-pie">
            <span>PARTICIPACIÓN · APOYO · UNIDAD</span>
            <strong>© JoyBoy</strong>
          </footer>
        </article>

        <BotonCaptura
          referencia={cooperacionRef}
          nombre="Reglas_Cooperacion.png"
          texto="Capturar reglas de cooperación"
        />
      </div>

      {/* ARCHIVO HISTÓRICO: ANTROCHA 2024 */}
      <section className="antorcha-historial">
        <div className="antorcha-historial-titulo">
          <span>MEMORIA DEL EVENTO</span>
          <h2>Antorcha 2024</h2>
          <p>Recuerdos, gastos y experiencias de la edición anterior.</p>
        </div>

        <div className="antorcha-fotos">
          <div className="antorcha-foto-card">
            <img src={foto01} alt="Camioneta del padrino Ramiro" />
            <p>
              Camioneta del padrino Ramiro con la virgencita. Miércoles 11 de
              diciembre de 2024.
            </p>
          </div>

          <div className="antorcha-foto-card">
            <img src={foto02} alt="Ticket de bebidas hidratantes" />
            <p>Ticket Chedraui: 20 Gatorade de 300 ml.</p>
          </div>

          <div className="antorcha-foto-card">
            <img src={foto03} alt="Chaleco de brigadista" />
            <p>
              Ticket de chaleco brigadista con cintas reflejantes color azul.
            </p>
          </div>

          <div className="antorcha-foto-card">
            <img src={foto04} alt="Comprobante de gastos de antorcha" />
            <p>
              Gastos totales. Antorcha 2024. Urbanos Rojos. De los cuales $800
              se ingresaron de la caja de limosnas y los restantes $480 los donó
              el amigo JoyBoy.
            </p>
          </div>
        </div>

        <div className="antorcha-historial-titulo">
          <h2>Experiencia y observaciones</h2>
          <p>Aprendizajes para futuras ediciones.</p>
        </div>

        <div className="antorcha-observaciones">
          <Apartado titulo="Ubicación y estacionamiento">
            <p>
              Se seleccionó un punto de reunión en el área adelante de Las
              Delicias, específicamente en el lado del carril hacia Perote,
              donde había suficiente espacio para estacionarse.
            </p>
          </Apartado>

          <Apartado titulo="Preparativos iniciales">
            <ul>
              <li>
                En el lugar, se alistaron las antorchas y se prepararon las
                bolas de estopa.
              </li>
              <li>
                Se distribuyó la bebida a los corredores para su consumo antes
                de iniciar.
              </li>
            </ul>
          </Apartado>

          <Apartado titulo="Supervisión y tareas de apoyo">
            <strong>Unidad 33:</strong>
            <ul>
              <li>
                Encargada de supervisar el estado de las antorchas y de brindar
                apoyo a los corredores, cuidándolos al ir a la misma velocidad
                del corredor, protegiéndolos de algún automóvil.
              </li>
              <li>
                Realizó tareas como remojar las bolas de estopa y reemplazarlas
                en las antorchas cuando fue necesario.
              </li>
            </ul>

            <strong>Unidades 20 y 36:</strong>
            <ul>
              <li>
                Ambas se alternaron en la labor de traslado de los corredores.
              </li>
              <li>
                Una unidad inició movilizando a los corredores mientras la otra
                los recogía al final del tramo, y posteriormente intercambiaron
                roles.
              </li>
            </ul>
          </Apartado>

          <Apartado titulo="Mejoras en la comunicación">
            <ul>
              <li>
                Se observó que el uso de WhatsApp y las llamadas no fue efectivo
                debido a la baja cobertura en la zona.
              </li>
              <li>
                Se recomienda considerar el uso de walkie-talkies para una
                comunicación más fluida en futuros eventos.
              </li>
            </ul>
          </Apartado>

          <Apartado titulo="Problemas detectados y soluciones">
            <p>
              Algunos corredores se perdieron durante el recorrido porque otras
              antorchas estaban muy cerca de la nuestra, lo que causó confusión.
            </p>
            <p>Para evitar esto:</p>
            <ul>
              <li>
                Es importante instruir a los corredores para que, en caso de
                duda, busquen siempre la unidad piloto que los está guiando.
              </li>
              <li>
                En futuras ediciones, se debería discutir este tema con los
                corredores antes de iniciar.
              </li>
            </ul>
          </Apartado>

          <Apartado titulo="Evaluación general">
            <p>
              Fuera de los inconvenientes mencionados, el evento transcurrió con
              éxito y de manera organizada.
            </p>
          </Apartado>
        </div>

        <footer className="antorcha-historial-pie">
          URBANOS ROJOS · TRADICIÓN QUE NOS UNE
          <span>© JoyBoy</span>
        </footer>
      </section>
    </main>
  );
}

export default Antorcha;
