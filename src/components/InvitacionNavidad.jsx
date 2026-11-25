
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./InvitacionNavidad.css";

const BASE = import.meta.env.BASE_URL;

export default function InvitacionNavidad() {
  const invitacionRef = useRef(null);
  const [capturando, setCapturando] = useState(false);

  const capturarInvitacion = async () => {
    if (!invitacionRef.current) return;

    try {
      setCapturando(true);

      // Esperar a que las imágenes estén cargadas
      const imagenes = invitacionRef.current.querySelectorAll("img");

      await Promise.all(
        Array.from(imagenes).map((img) => {
          if (img.complete) return Promise.resolve();

          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      const canvas = await html2canvas(invitacionRef.current, {
        scale: 6,
        useCORS: true,
        backgroundColor: "#f8f3e8",
        logging: false,
      });

      const enlace = document.createElement("a");
      enlace.download = "Convivio-Navidad-2026.png";
      enlace.href = canvas.toDataURL("image/png");
      enlace.click();

    } catch (error) {
      console.error(error);
      alert("No se pudo generar la imagen.");
    } finally {
      setCapturando(false);
    }
  };

  return (
    <div className="pagina-navidad">

      <div
        className="invitacion-navidad"
        ref={invitacionRef}
      >

        {/* IMAGEN SUPERIOR */}
        <div className="navidad-imagen-superior">
          <img
            src={`${BASE}navidad/guirnalda-superior.png`}
            alt="Guirnalda navideña"
          />
        </div>

        <div className="navidad-contenido">

          <p className="navidad-etiqueta">
            UNA CELEBRACIÓN ENTRE COMPAÑEROS
          </p>

          {/* TÍTULO */}
          {/* <div className="navidad-titulo">
            <span className="titulo-pequeno">
              ¡Celebremos juntos!
            </span>

            <h1>Convivio</h1>
            <h2>Navideño</h2>
          </div> */}

          {/* ADORNO CENTRAL */}
          {/* <div className="navidad-imagen-central">
            <img
              src={`${BASE}navidad/adorno-central.png`}
              alt="Decoración de nochebuenas y pino"
            />
          </div> */}

          <p className="navidad-mensaje">
            Se acerca una de las épocas más bonitas del año
            y queremos compartir un momento agradable,
            lleno de alegría, buena convivencia y espíritu navideño.
          </p>

          {/* FECHA */}
          <div className="navidad-fecha">
            <span className="fecha-dia">SÁBADO</span>
            <strong>19</strong>
            <span className="fecha-mes">
              DICIEMBRE · 2026
            </span>
          </div>

          {/* COOPERACIÓN */}
          <div className="navidad-cooperacion">
            <span className="cooperacion-titulo">
              COOPERACIÓN
            </span>

            <strong>$200</strong>

            <span className="cooperacion-detalle">
              Exclusivamente para comida, refrescos y ponche.
            </span>
          </div>

          {/* PERIODO DE COOPERACIÓN */}
          <div className="navidad-pago">
            <div>
              <strong>Periodo para cooperar</strong>

              <p>
                Del sábado 21 de noviembre.
                Al martes 15 de diciembre.
              </p>
            </div>
          </div>

          {/* APORTACIONES EXTRAS */}
          <div className="navidad-voluntario">
            <h3>
              ¡También puedes aportar algo extra!
            </h3>

            <p>
              Si gustas, puedes llevar algún detalle adicional:
            </p>

            <div className="navidad-opciones">
              <span>Botana</span>
              <span>Bebidas</span>
              <span>Pastel</span>
              <span>Piñata</span>
            </div>

            <p className="voluntario-nota">
              Estas aportaciones son completamente voluntarias
              y no forman parte de los $200 de cooperación.
              Si deseas llevar algo adicional, te pedimos
              avisar con anticipación para poder contemplarlo.
            </p>
          </div>

          {/* DESPEDIDA */}
          <div className="navidad-despedida">
            <p>
              La cooperacion es valida para 1 sola persona, unicamente choferes mayores de 18 años.
            </p>
          </div>

        </div>

        {/* IMAGEN INFERIOR */}
        <div className="navidad-imagen-inferior">
          <img
            src={`${BASE}navidad/decoracion-inferior.png`}
            alt="Regalos y adornos navideños"
          />
        </div>

      </div>

      <button
        className="boton-capturar-navidad"
        onClick={capturarInvitacion}
        disabled={capturando}
      >
        {capturando
          ? "Generando imagen..."
          : "📸 Descargar invitación"}
      </button>

    </div>
  );
}
