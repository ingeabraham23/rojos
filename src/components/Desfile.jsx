// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
// import antorcha from "/bannercristo.png";

import "./Desfile.css";


function Desfile() {
    const tablaRef = useRef(null);

    function capturarTabla() {
        const tabla = tablaRef.current;
        html2canvas(tabla, { scale: 4 }).then(function (canvas) {
            const pngUrl = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = "Desfile.png";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    }


    return (
        <div>
            <table ref={tablaRef} className="tabla-desfile">
                <tbody>
                    <tr>
                        <td className="encabezado-desfile">Desfile 20 de Noviembre
                        </td>
                    </tr>
                    <tr>
                        <td className="nota1-desfile">
                            Al terminar el desfile, los operadores podrán darse la vuelta en{" "}
                            <b>Chignautla</b> hacia la ruta que consideren conveniente, siempre
                            manteniendo comunicación para no afectar al compañero enrolado desde Teziutlán.
                        </td>
                    </tr>

                    <tr>
                        <td className="encabezado-desfile">
                            <b>Reglas de Respeto</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="nota2-desfile">
                            Está estrictamente prohibido meterse delante del compañero.
                            Se permite adelantarse únicamente a la competencia
                            (<b>Ruta 3</b> y <b>Amotac</b>).
                        </td>
                    </tr>

                    <tr>
                        <td className="encabezado-desfile">
                            <b>Comunicación</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="nota3-desfile">
                            Se recomienda mantenerse en sintonía en el grupo de WhatsApp{" "}
                            <b>“Urbanos Rojos”</b>.
                            Quien no esté dentro puede solicitar su ingreso con <b>JoyBoy</b>.
                        </td>
                    </tr>

                    <tr>
                        <td className="encabezado-desfile">
                            <b>Recomendaciones</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="nota4-desfile">
                            <ul>
                                <li>Mantener comunicación clara.</li>
                                <li>Evitar conflictos con la competencia.</li>
                                <li>Conducir con orden y profesionalismo.</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td className="cita-desfile">
                            “Obedezcan las reglas: una cosa es ser puerco… y otra ser trompudo.”
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td colSpan={5} className="copyright-desfile">
                            © JoyBoy
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="contenedor-boton">
                <button onClick={capturarTabla} className="boton-capturar">
                    Capturar Indicaciones del Desfile
                </button>
            </div>
        </div>
    );
}

export default Desfile;
