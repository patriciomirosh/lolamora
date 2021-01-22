import React from 'react'
import {Tarjetas} from './cards'
import {Tarjetas2} from './cards'
import aprender from '../images/sample-lola-mora/aprender.jpg'
import confianza from '../images/sample-lola-mora/confianza.jpg'
import desafio from '../images/sample-lola-mora/desafio.jpg'
import juegos from '../images/sample-lola-mora/juegos.jpg'
import salto from '../images/sample-lola-mora/salto.jpg'
import Unidad from '../images/sample-lola-mora/Unidad.jpg'
import incripcion from '../images/sample-lola-mora/incripcion.jpg'
import robotica from '../images/sample-lola-mora/robotica.jpg'
import verano from '../images/sample-lola-mora/verano.jpg'



export const CardGrid = () => {
  return (
    <div>
 <div className="row" style={{marginTop:"5%"}}>
      <div className="col-md"><Tarjetas img={aprender} text="aprender en grupos" title="Aprender" subtitle="card" /></div> 
      <div className="col-md"><Tarjetas img={confianza} text="" title="Confiar en nosotros" subtitle="card" /></div> 
      <div className="col-md"><Tarjetas img={desafio} text="" title="Desafio" subtitle="card" /></div> 
      </div>

      <div className="row" style={{marginTop:"5%"}}>
      <div className="col-md"><Tarjetas img={juegos} text="" title="Juegos" subtitle="card" /></div> 
      <div className="col-md"><Tarjetas img={salto} text="" title="Amigos" subtitle="card" /></div> 
      <div className="col-md"><Tarjetas img={Unidad} text="" title="Unidad" subtitle="card" /></div> 
      </div>
    </div>
  )
}

export const CardGrid2 = () =>{
  return(
    <div>
   <div className="row" style={{marginTop:"5%"}}>
      <div className="col-md"><Tarjetas2 newImg={incripcion}  newImgAlt="incripcion" titleNew="Abiertas Incripciones"  newText="Ya estan abiertas las inscripciones para el 2021"/></div> 
      <div className="col-md"><Tarjetas2 newImg={robotica}  newImgAlt="robotica" titleNew="Robotica"  newText="Aprende Robotica con nosotros"/></div> 
      <div className="col-md"><Tarjetas2 newImg={verano}  newImgAlt="verano" titleNew="Llego el Verano"  newText="Disfruta el Verano"/></div> 
      </div>

    </div>



  )


}