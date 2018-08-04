import React from 'react';
import "./App.css";


class Pie extends React.Component {
  render() {
    const Pie = (
        <div className="footer">
          <p className="read">Leer más...</p>
          <div>
            <p className="likes">37<i class="fas fa-heart" />
            </p>
          </div>
        </div>
    );
    return Pie;
  }
}

export default Pie;
