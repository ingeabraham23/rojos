// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import reglamento from "/reglamento.jpg";

import "./Sanciones.css";

function Sanciones() {
  const tablaRef = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Sanciones.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  async function descargarPDF() {
    const tabla = tablaRef.current;

    if (!tabla) return;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "letter",
    });

    // =========================
    // LOGOTIPO
    // =========================

    const logo = new Image();

    logo.src = `${import.meta.env.BASE_URL}urbanosrojos.png`;

    await new Promise((resolve, reject) => {
      logo.onload = resolve;
      logo.onerror = reject;
    });

    // Tamaño del logotipo
    const logoWidth = 110;

    // Obtener proporción original
    const proporcion = logo.height / logo.width;
    const logoHeight = logoWidth * proporcion;

    // Centrar horizontalmente
    const paginaAncho = pdf.internal.pageSize.getWidth();
    const logoX = (paginaAncho - logoWidth) / 2;

    pdf.addImage(logo, "PNG", logoX, 25, logoWidth, logoHeight);

    // =========================
    // TABLA
    // =========================

    autoTable(pdf, {
      html: tabla,

      startY: 100,

      theme: "grid",

      tableWidth: "auto",

      margin: {
        left: 25,
        right: 25,
        top: 20,
        bottom: 35,
      },

      styles: {
        fontSize: 11,
        cellPadding: 4,
        lineWidth: 0.5,
        lineColor: [80, 80, 80],
        textColor: [0, 0, 0],
        valign: "middle",
        halign: "center",
      },

      headStyles: {
        fontStyle: "bold",
        fillColor: [230, 230, 230],
        textColor: [0, 0, 0],
        lineWidth: 0.5,
        lineColor: [80, 80, 80],
      },

      bodyStyles: {
        lineWidth: 0.5,
        lineColor: [80, 80, 80],
      },

      footStyles: {
        fontSize: 7,
        textColor: [0, 0, 0],
        fillColor: [255, 255, 255],
        lineWidth: 0.5,
        lineColor: [80, 80, 80],
      },

      didParseCell: function (data) {
        // Columna de causas un poco más grande
        if (data.column.index === 1) {
          data.cell.styles.halign = "left";
        }
      },
    });

    // =========================
    // DESCARGAR
    // =========================

    pdf.save("Reglamento_Urbanos_Rojos.pdf");
  }

  return (
    <>
      <table className="tabla-sanciones" ref={tablaRef}>
        <thead>
          <tr>
            <td className="titulo-sanciones" colSpan={5}>
              Reglamento de Operación — Urbanos Rojos
            </td>
          </tr>
          <tr>
            <td className="encabezado-sanciones" rowSpan={2}>
              #
            </td>
            <td className="encabezado-sanciones" rowSpan={2}>
              Causas de sanción
            </td>
            <td className="encabezado-sanciones" colSpan={3}>
              Días por reporte
            </td>
          </tr>
          <tr>
            <td className="encabezado-sanciones-chico">Primero</td>
            <td className="encabezado-sanciones-chico">Segundo</td>
            <td className="encabezado-sanciones-chico">Tercero</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="columna-sanciones">1</td>
            <td className="columna-sanciones">
              Circular a exceso de velocidad
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">2</td>
            <td className="columna-sanciones">
              No respetar la velocidad de circulación establecida
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">3</td>
            <td className="columna-sanciones">
              Realizar maniobras de rebase indebidas en carretera
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">4</td>
            <td className="columna-sanciones">
              Descender pasajeros sobre la cinta asfáltica o en zonas de curva
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>

          <tr>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">
              Falta de precaución o manejo inadecuado de la unidad
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">6</td>
            <td className="columna-sanciones">
              Transportar acompañantes no autorizados dentro de la unidad
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">7</td>
            <td className="columna-sanciones">
              No concluir el recorrido completo
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">8</td>
            <td className="columna-sanciones">
              Utilizar el teléfono celular o fumar mientras conduce
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">9</td>
            <td className="columna-sanciones">
              Circular fuera de la ruta o de los lugares establecidos, sin
              autorización
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>

          <tr>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">
              Conductas obscenas mientras conduce
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">11</td>
            <td className="columna-sanciones">
              Conductas obscenas dentro de la terminal
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>

          <tr>
            <td className="columna-sanciones">12</td>
            <td className="columna-sanciones">
              Agresión a conductores en la vía pública
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">13</td>
            <td className="columna-sanciones">
              Presentar la unidad en condiciones inadecuadas de limpieza
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="columna-sanciones">14</td>
            <td className="columna-sanciones">
              Presentarse con una imagen o vestimenta inadecuada para el
              servicio
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>

          <tr>
            <td className="columna-sanciones">15</td>
            <td className="columna-sanciones">
              Incumplimiento del recorrido establecido para la ruta San Miguel
            </td>
            <td className="columna-sanciones">5</td>
            <td className="columna-sanciones">10</td>
            <td className="columna-sanciones">15</td>
          </tr>
          <tr>
            <td className="baja-sanciones">16</td>
            <td className="baja-sanciones">Manejar en estado de ebriedad</td>
            <td className="baja-sanciones" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td className="baja-sanciones">17</td>
            <td className="baja-sanciones">
              Falta de respeto, agresión al jefe de terminal y checador
            </td>
            <td className="baja-sanciones" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td className="baja-sanciones">18</td>
            <td className="baja-sanciones">
              Falta de respeto o agresión a los permisionarios
            </td>
            <td className="baja-sanciones" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td className="baja-sanciones">19</td>
            <td className="baja-sanciones">
              Agresión verbal o física entre compañeros
            </td>
            <td className="baja-sanciones" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td className="baja-sanciones">20</td>
            <td className="baja-sanciones">
              Dejar la unidad en manos de personal no autorizado
            </td>
            <td className="baja-sanciones" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td className="columna-sanciones">21</td>
            <td className="columna-sanciones" colSpan={4}>
              Todo reporte presentado por un usuario será evaluado y, en su
              caso, sancionado conforme al criterio de la directiva
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="pie-sanciones">
              <strong>Primer Reporte:</strong> Se aplicará una suspensión de 5
              días de sus actividades como operador de Urbanos Rojos<br></br>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="pie-sanciones">
              <strong>Segundo Reporte:</strong> Si, lamentablemente, se registra
              un segundo reporte debido a la misma falta, la sanción se
              incrementará a un periodo de 10 días de suspensión<br></br>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="pie-sanciones">
              <strong>Tercer Reporte:</strong> En el caso de un tercer reporte
              por la misma infracción, se aplicará una sanción más rigurosa, que
              consistirá en una suspensión de 15 días. Esto se hace con la
              intención de asegurar que las conductas no deseadas sean
              corregidas de manera efectiva
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="pie-sanciones">
              <strong>Nota:</strong> Todo conductor posturero que incurra en
              cualquiera de las sanciones anteriormente mencionadas causará baja
              definitiva de la ruta
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="copyright-sanciones">
              @el.joyboy.de.chignautla
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Sanciones
        </button>

        <button onClick={descargarPDF} className="boton-pdf">
          Descargar PDF
        </button>
      </div>

      <div>
        <img src={reglamento} className="foto" />
      </div>
    </>
  );
}

export default Sanciones;
