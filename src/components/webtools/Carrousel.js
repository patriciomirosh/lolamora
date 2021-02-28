import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import acto from '../images/reacstrap/acto.jpg'
import acto2 from '../images/reacstrap/acto2.jpg'
import cartel from '../images/reacstrap/cartel.jpeg'
import img1 from '../images/reacstrap/img1.jpg'
import patio from '../images/reacstrap/patio.jpeg'


const items = [
  {
    src: acto,
    altText: 'Jardían de Infantes',
    caption: 'Centro educativo',
    header: 'Mi Mundo encantado',
    key: '1'
  },
  {
    src: acto2,
    altText: 'Jardían de Infantes',
    caption: 'Centro educativo',
    header: 'Mi Mundo encantado',
    key: '2'
  },
  {
    src: cartel,
    altText: 'Jardían de Infantes',
    caption: 'Centro educativo',
    header: 'Mi Mundo encantado',
    key: '3'
  },
  {
    src: img1,
    altText: 'Jardían de Infantes',
    caption: 'Centro educativo',
    header: 'Mi Mundo encantado',
    key: '4'
  },
  {
    src: patio,
    altText: 'Jardían de Infantes',
    caption: 'Centro educativo',
    header: 'Mi Mundo encantado',
    key: '5'
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