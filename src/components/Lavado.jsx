// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./Lavado.css";

function Lavado() {
  const tarjetaRef = useRef(null);

  const capturarTarjeta = async () => {
    if (!tarjetaRef.current) return;

    const canvas = await html2canvas(tarjetaRef.current, {
      scale: 6,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const enlace = document.createElement("a");
    enlace.download = "lavado-urbanos-rojos.png";
    enlace.href = canvas.toDataURL("image/png");
    enlace.click();
  };

  return (
    <div className="lavado-contenedor">
      <div className="tarjeta-lavado" ref={tarjetaRef}>
        {/* IMAGEN */}
        <div className="imagenes-lavado">
          <img
            src={`${import.meta.env.BASE_URL}lavado/lavado1.jpeg`}
            alt="Lavado"
            className="imagen-lavado imagen-lavado-lateral"
          />

          <img
            src={`${import.meta.env.BASE_URL}lavado/rata.png`}
            alt="Urbanos Rojos"
            className="imagen-lavado imagen-lavado-centro"
          />

          <img
            src={`${import.meta.env.BASE_URL}lavado/lavado2.jpeg`}
            alt="Lavado"
            className="imagen-lavado imagen-lavado-lateral"
          />
        </div>

        {/* TITULO */}

        <div className="lavado-marca">AUTOLAVADO: RATA GUERA</div>

        {/* PRECIOS */}
        <div className="lavado-precios">
          <div className="precio-card completo">
            <span>Lavada completa + trapeada</span>

            <strong>$70</strong>

            <p>
              ✓ Llantas
              <br />
              ✓ Vidrios
              <br />
              ✓ Tablero
              <br />✓ Trapeada
            </p>

            <small>Servicio por etapas en cada vuelta a la base.</small>
          </div>

          <div className="precio-card basico">
            <span>Solo trapeada</span>

            <strong>$30</strong>

            <p>
              ✓ Llantas
              <br />
              ✓ Vidrios
              <br />
              ✓ Tablero
              <br />✓ Trapeada
            </p>

            <small>El servicio se distribuye en las vueltas a la base.</small>
          </div>
        </div>

        {/* NOTA */}
        <div className="lavado-nota">
          <b>💧 Nota:</b>

          <p>
            Si no ocupan lavado ni trapeada, pero utilizan agua para trapear o
            lavar sus llantas, deberán aportar
            <strong>$10 pesos.</strong>
          </p>
        </div>

        <div className="lavado-nota">
          <b>🍆 Nota:</b>

          <p>
            Por<strong>$5 pesos extras</strong>
            {" "}Te hace una cromada.
          </p>
        </div>

        {/* HORARIO */}
        <div className="lavado-horario">
          <div>
            <span>Lunes a sábado</span>
            <strong>De 8:00 a.m. a 5:00 p.m.</strong>
          </div>

          <div>
            <span>Domingos</span>
            <strong>De 8:00 a.m. a 2:00 p.m.</strong>
          </div>
        </div>
      </div>

      <button className="boton-capturar-lavado" onClick={capturarTarjeta}>
        📸 Guardar imagen
      </button>
    </div>
  );
}

export default Lavado;
