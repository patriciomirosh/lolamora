import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import aprendiendoingles from '../images/reacstrap/aprendiendoingles.jpg'
import niñorobotica from '../images/reacstrap/niñorobotica.jpg'
import niñosonriendo from '../images/reacstrap/niñosonriendo.jpg'


const items = [
  {
    src: aprendiendoingles,
    altText: 'aprendiendoingles',
    caption: 'Aprendamos Ingles desde el jardin para toda la vida',
    header: 'Escuela Bilingue',
    key: '1'
  },
  {
    src: niñorobotica,
    altText: 'niñorobotica',
    caption: 'Nos preparamos jugando para el mañana',
    header: 'Aprendamos Tecnologia',
    key: '2'
  },
  {
    src: niñosonriendo,
    altText: 'Aprender jugando',
    caption: 'Porque la infancia es una sola',
    header: 'Aprender jugando',
    key: '3'
  }
];

const Example = () =>{return(
<div className="row">
<div className="col-md-1"></div>
<div className="col-md-10" >
<UncontrolledCarousel items={items} />

</div>
</div>
)} ;

export default Example;