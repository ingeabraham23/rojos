// eslint-disable-next-line no-unused-vars
import React from "react";
import "./TarjetasInformativas.css";
import gorra from "/tarjetas/se prohibe usar gorra.png";
import libramiento from "/tarjetas/reglamento libramiento y arco sur.png";
import si3cruces from "/tarjetas/quien puede darse la vuelta en 3 cruces.png";
import no3cruces from "/tarjetas/quien no puede darse la vuelta en 3 cruces.png";
import baseantesdelas9 from "/tarjetas/no lavar antes de las 9.png";
import basedespuesdelas9 from "/tarjetas/reglamento base despues de las 9.png";
import desfile from "/tarjetas/desfile.png";
import desayunoramales from "/tarjetas/reglamento desayuno ramales.png";
import desayunotalzintan from "/tarjetas/reglamento desayuno talzintan.png";
import virgen from "/tarjetas/virgen.png";

function TarjetasInformativas() {

  return (
    <div className="contenedor-tarjetas">
        <h3>Se prohibe el uso de gorra.</h3>
        <img src={gorra} className="foto" />
        <hr></hr>
        <h3>Puedes bajar por libramiento unicamente si al llegar a la base pasan de las 6 de la tarde.</h3>
        <img src={libramiento} className="foto" />
        <hr></hr>
        <h3>Puedes darte la vuelta en 3 cruces coahuixco.</h3>
        <img src={si3cruces} className="foto" />
        <hr></hr>
        <h3>No puedes darte la vuelta den 3 cruces coahuixco.</h3>
        <img src={no3cruces} className="foto" />
        <hr></hr>
        <h3>Reglamento base teziutlan antes de las 9.</h3>
        <img src={baseantesdelas9} className="foto" />
        <hr></hr>
        <h3>Reglamento base teziutlan despues de las 9.</h3>
        <img src={basedespuesdelas9} className="foto" />
        <hr></hr>
        <h3>Reglamento despues de terminar desfile en chignautla.</h3>
        <img src={desfile} className="foto" />
        <hr></hr>
        <h3>Reglamento desayuno ramales</h3>
        <img src={desayunoramales} className="foto" />
        <hr></hr>
        <h3>Reglamento desayuno talzintan</h3>
        <img src={desayunotalzintan} className="foto" />
        <hr></hr>
        <h3>Cooperacion anual para la fiesta en honor a la virgen de guadalupe.</h3>
        <img src={virgen} className="foto" />
        <hr></hr>
    </div>
  );
}

export default TarjetasInformativas;