import React from 'react'
import {Tarjetas} from './cards'
import {Tarjetas2} from './cards'
import aprender from '../images/sample-lola-mora/aprender.jpg'
import confianza from '../images/sample-lola-mora/confianza.jpg'
import desafio from '../images/sample-lola-mora/desafio.jpg'
import juegos from '../images/sample-lola-mora/juegos.jpg'
import salto from '../images/sample-lola-mora/salto.jpg'
import Unidad from '../images/sample-lola-mora/Unidad.jpg'


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
      <div className="col-md"><Tarjetas2/></div> 
      <div className="col-md"><Tarjetas2/></div> 
      <div className="col-md"><Tarjetas2/></div> 
      </div>

    </div>



  )


}