import React from 'react';
import "./App.css";
import MainText from './MainText';
import Cabecera from './Cabecera';
import Pie from './Pie';


class Tarjeta extends React.Component {



  render() {
    const askName = prompt('Nombre');
    console.log(askName);

    const card = (
      <div className="App">
        <Cabecera 
          name={askName} 
          date="Agosto 2018"/>
        <MainText
        texto="Lorem ipsum dolor sit amet consectetur adipiscing elit aptent, vel
        quis himenaeos class venenatis ligula diam est mauris, quam libero
        lobortis at duis semper tellus. Laoreet netus malesuada parturient
        massa sociis molestie curae nec, gravida fusce hac id nostra urna in
        imperdiet, sed metus posuere ante enim per lectus. Auctor viverra
        suscipit platea quam per nam egestas donec, ornare tincidunt hac
        odio fames nulla a, scelerisque netus dis justo aptent eu
        consequat.Nostra ac convallis quam mi pretium nisl at ridiculus
        faucibus accumsan, nec platea nunc dictumst volutpat imperdiet felis
        velit tortor. Non varius venenatis mauris ornare pellentesque porta
        purus magnis leo odio tempor mi rutrum ultricies tellus molestie,
        dui gravida vulputate rhoncus pulvinar primis placerat commodo id
        vehicula consequat nullam nunc luctus tristique. A vestibulum
        himenaeos tristique mattis aenean cras nec habitant, dis fermentum
        et varius quis ultricies lacus consequat vulputate, arcu est euismod
        nisl proin purus maecenas."
        />
        <Pie/>
      </div>
    );
    return card;
  }
}

export default Tarjeta;
