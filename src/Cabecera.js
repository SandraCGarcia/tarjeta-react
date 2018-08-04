import React from 'react';
import "./App.css";
import foto from "./Sandra278x278.jpg";

class Cabecera extends React.Component {
  render() {
    const Cabecera = (
      <div className="cabecera">
        <img className="photo" src={foto}/>
        <div className="info">
          <h1 className="titulo">{this.props.name}</h1>
          <p className="fecha">{this.props.date}</p>
        </div>
      </div>
    );
    return Cabecera;
  }
}

export default Cabecera;
