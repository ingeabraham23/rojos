// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import "./Telefonos.css";

function Telefonos() {
  const tablaRef = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, {scale: 4}).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Directorio telefonico.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div className="contenedor-telefonos">
      <table ref={tablaRef} className="tabla-telefonos">
        <tbody>
          <tr>
            <td colSpan={2} className="encabezado-telefonos">Directorio telefonico</td>
          </tr>
          <tr>
            <td colSpan={2} className="encabezado-tabla-telefonos">Refacciones ⚙</td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Refaccionaria Francia</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2313134310">231 313 4310</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">El guerito Autopartes Electricas</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311346416">231 134 6416</a></td>
          </tr>
          <tr>
            <td colSpan={2} className="encabezado-tabla-telefonos">Mecanicos 🔧</td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Fernando Zamora</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311742040">231 174 2040</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Tavo portilla</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2313192346">231 319 2346</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Chiquillo</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311646509">231 164 6509</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Poxco Agustín</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311328339">231 132 8339</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Hojalatero Parada de sosa</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311665546">231 166 5546</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Hojalatero Don Marce</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311374341">231 137 4341</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Especialista en radiadores. Pancho</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311066096">231 106 6096</a></td>
          </tr>
          <tr>
            <td colSpan={2} className="encabezado-tabla-telefonos">Letreros 💳</td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Don Benito</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2312065331">231 206 5331</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Guera</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311007232">231 100 7232</a></td>
          </tr>
          <tr>
            <td colSpan={2} className="encabezado-tabla-telefonos">Comida 🍖</td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Doña Juanita Coahuixco</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311282227">231 128 2227</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Tortas Los Arcos</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2312059392">231 205 9392</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Pollos el Indio Chignautla</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2312055939">231 205 5939</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Pollos el Indio Santa Juanita</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311295638">231 129 5638</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Tacos Mitzi</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311167640">231 116 7640</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Tacos Escuela patria</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311206094">231 120 6094</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Tacos de Res Chignautla</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311214163">231 121 4163</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Tacos Don Gera Chignautla</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2313116572">231 311 6572</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Pizzas angelotti chignautla</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2313116889">231 311 6889</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Luci Calzonuda</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311414734">231 141 4734</a></td>
          </tr>



          <tr>
            <td colSpan={2} className="encabezado-tabla-telefonos">Otros</td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Mugres Chacharitas</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311471127">231 147 1127</a></td>
          </tr>
          <tr>
            <td className="nota2-telefonos">Las Aguilas Imprenta</td>
            <td className="phone-link"><a className="phone-link2" href="tel:2311442817">231 144 2817</a></td>
          </tr>

          <tr>
            <td colSpan={2} className="copyright-telefonos">© JoyBoy</td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Telefonos
        </button>
      </div>
    </div>
  );
}

export default Telefonos;
