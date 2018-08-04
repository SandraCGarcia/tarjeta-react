import React from 'react';
import "./App.css";


class MainText extends React.Component {
  render() {
    const MainText = (
        <div className="texto">
          <p>{this.props.texto}</p>
        </div>
    );
    return MainText;
  }
}

export default MainText;
