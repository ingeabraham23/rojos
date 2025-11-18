// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
// import antorcha from "/bannercristo.png";

import "./CristoRey.css";


function CristoRey() {
    const tablaRef = useRef(null);
    const tablaRef2 = useRef(null);

    function capturarTabla() {
        const tabla = tablaRef.current;
        html2canvas(tabla, { scale: 4 }).then(function (canvas) {
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
        html2canvas(tabla, { scale: 4 }).then(function (canvas) {
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
            <table ref={tablaRef} className="tabla-antorcha">
                <tbody>

                    <tr>
                        <td className="encabezado-antorcha">
                            Logística Especial – Fiesta de Cristo Rey (Urbanos Rojos)
                        </td>
                    </tr>

                    <tr>
                        <td className="nota1-antorcha">
                            <b> De 6:00 AM a 9:00 AM</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="nota2-antorcha">
                            Todas las unidades podrán trabajar con destino al <b>Puerto</b>.
                            Pueden darse la vuelta donde gusten, cargar en la base hacia el puerto o trabajar en su ramal correspondiente.
                            Ambas opciones están permitidas durante este horario.
                        </td>
                    </tr>

                    <tr>
                        <td className="nota1-antorcha">
                            <b>De 9:00 AM a 3:00 PM – Trabajo por Enrolamiento</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="nota3-antorcha">
                            A partir de las 9:00 AM, el checador comenzará a enrolar a las unidades
                            conforme les toque turno:
                            <br />
                            <ul>
                                <li>Si al operador le toca <b>Puerto</b>, deberá realizar una vuelta al Puerto.</li>
                                <li>Si le toca <b>Ruta Normal</b>, trabajará su ruta correspondiente.</li>
                            </ul>
                            <br />
                            Después de su primer recorrido:
                            <ul>
                                <li>Si el operador fue al <b>Puerto</b>, en su siguiente vuelta le tocará Ruta Normal.</li>
                                <li>Si inició en <b>Ruta Normal</b>, su siguiente vuelta será al Puerto.</li>
                            </ul>
                            <b>Importante:</b>
                            Los que vayan en ruta normal desde su primera vuelta pueden ir al Puerto únicamente si se quedan sin pasaje.
                            Sin embargo, al regresar nuevamente se les asignará Ruta Normal.
                            <br />
                            <br />
                            <b>Importante — Facultad del Checador:</b>
                            <br />
                            El checador, como autoridad operativa en turno, podrá <b>repetirle al operador la misma ruta</b> (ya sea Ruta Normal o Puerto) si así lo considera necesario para mantener el orden, el flujo vehicular o la correcta distribución de unidades.
                            <br /><br />
                            En consecuencia, y por motivos de organización:
                            <ul>
                                <li>
                                    <b>Ninguna decisión del checador deberá ser cuestionada</b>, pues responde a las necesidades operativas del momento y busca garantizar equilibrio y orden en la prestación del servicio.
                                </li>
                            </ul>
                        </td>
                    </tr>


                    <tr>
                        <td className="nota1-antorcha">
                            <b>Despues de las 3:00 PM . Libre al Puerto</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="nota5-antorcha">
                            A partir de las 3:00 PM todas las unidades podrán dirigirse al
                            <b>Puerto con total libertad</b>, pero cumpliendo las siguientes reglas:
                            <ol>
                                <li>Las unidades deberán ir <b>vacías</b> hacia el Puerto.</li>
                                <li>No podrán cargar pasaje al subir, solo cargarán <b>de bajada</b>.</li>
                                <li>
                                    Se otorga <b>prioridad</b> a los compañeros que salgan desde la base
                                    hacia el Puerto.
                                </li>
                                <li>
                                    Pueden salir vacíos por Bicentenario sin cargar, o bien dar la vuelta
                                    vacíos hacia el Puerto por donde gusten.
                                </li>
                            </ol>
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
                    Capturar Logistica Cristo
                </button>
            </div>




            <table ref={tablaRef2} className="tabla-antorcha">
                <tbody>

                    <tr>
                        <td className="encabezado-antorcha">
                            Tarifas Oficiales y Apoyo Operativo – Urbanos Rojos
                        </td>
                    </tr>

                    {/* TARIFA DE 10 PESOS */}
                    <tr>
                        <td className="nota1-antorcha">
                            <b>Tarifa: $10.00 MXN</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="nota2-antorcha">
                            Aplica para usuarios que aborden desde:
                            <ul>
                                <li><b>Teziutlán – Fresnillo</b></li>
                                <li><b>Retorno de Bimbo</b></li>
                            </ul>
                            Con destino hacia el <b>Puerto</b>.
                        </td>
                    </tr>

                    {/* TARIFA DE 9 PESOS */}
                    <tr>
                        <td className="nota1-antorcha">
                            <b>Tarifa: $9.00 MXN</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="nota3-antorcha">
                            Aplica para usuarios que aborden desde:
                            <ul>
                                <li><b>Parada El Capulín</b></li>
                                <li><b>Linda Tarde</b></li>
                            </ul>
                            Con destino hacia el <b>Puerto</b>.
                        </td>
                    </tr>

                    {/* TARIFA DE 8 PESOS */}
                    <tr>
                        <td className="nota1-antorcha">
                            <b>Tarifa: $8.00 MXN</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="nota4-antorcha">
                            Aplica para usuarios que aborden a partir de:
                            <ul>
                                <li><b>Parada San Mateo en adelante</b></li>
                            </ul>
                            Con destino hacia el <b>Puerto</b>.
                        </td>
                    </tr>

                    {/* APOYO OPERATIVO EN EL PUERTO */}
                    <tr>
                        <td className="nota1-antorcha">
                            <b>Apoyo Operativo en el Puerto</b>
                        </td>
                    </tr>

                    <tr>
                        <td className="nota5-antorcha">
                            Para garantizar un flujo ordenado de pasaje y evitar que la competencia
                            capte a los usuarios que corresponden a nuestras unidades, se ha designado
                            a una persona encargada de apoyar en la zona del <b>Puerto</b>.
                            <br /><br />

                            Dicho apoyo consiste en orientar, llamar y dirigir a los pasajeros hacia
                            las camionetas de Urbanos Rojos, asegurando una operación eficiente y
                            evitando pérdidas de servicio.
                            <br /><br />

                            <b>Persona designada:</b>
                            <ul>
                                <li><b>Nicolás – “El Guapo”</b></li>
                            </ul>

                            Este apoyo es fundamental para mantener presencia y competitividad en la zona.
                            Su colaboración es constante, activa y en beneficio directo del colectivo de
                            operadores.
                            <br /><br />

                            <b>Invitación a la Comisión Voluntaria:</b><br />
                            Se solicita atentamente a los operadores brindar una <b>contribución voluntaria</b>
                            a Nicolás (“El Guapo”) en reconocimiento a su labor de apoyo.
                            Se invita de manera respetuosa y profesional
                            a todos los compañeros a participar, ya que su esfuerzo repercute en un beneficio
                            general para la ruta. En pocas palabras no se vayan a hacer pendejos con su comision. 🤬
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
                    Capturar Tabla de Tarifas
                </button>
            </div>
            <hr></hr>
            
        </div>
    );
}

export default CristoRey;
