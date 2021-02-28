import React from 'react'
import {Tarjetas,Tarjetas2} from './cards'
import proyecto from '../images/sample-lola-mora/proyecto.jpg'
import covid from '../images/sample-lola-mora/covid.png'
import areas from '../images/sample-lola-mora/areas.jpg'
import inscripcion from '../images/sample-lola-mora/inscipcion.jpg'
import cartel from '../images/sample-lola-mora/cartel.jpeg'




export const CardGrid = () => {
  return (
    
    <div className="">
 <div className=" maincard" style={{marginTop:"5%",textAlign:"center"}}>
      <div><Tarjetas img={proyecto} text="Proyecto institucional" title="Proyecto institucional" subtitle="card" /></div> 
      <div><Tarjetas img={covid} text="" title="Protocolos Covid-19" subtitle="card" /></div> 
      <div><Tarjetas img={areas} text="" title="Areas educativas" subtitle="card" /></div> 
      </div>
      

      {/* <div className=" maincard " style={{marginTop:"5%"}}>
      <div><Tarjetas img={juegos} text="" title="Juegos" subtitle="card" /></div> 
      <div><Tarjetas img={salto} text="" title="Amigos" subtitle="card" /></div> 
      <div><Tarjetas img={Unidad} text="" title="Unidad" subtitle="card" /></div> 
      </div> */}
    
    </div>
  )
}

export const CardGrid2 = () =>{
  return(
    <div>
    <div className="maincard" style={{marginTop:"5%",marginBottom:"10%"}}>
       <div ><Tarjetas2 newImg={inscripcion}  newImgAlt="incripcion" titleNew="Inscripciones 2021"  newText="Información"/></div> 
       <div ><Tarjetas2 newImg={cartel}  newImgAlt="robotica" titleNew="Fotos"  newText="Aprende Robotica con nosotros"/></div> 
       <div ><Tarjetas2 newImg={cartel}  newImgAlt="verano" titleNew="Ultimas noticias"  newText="Disfruta el Verano"/></div> 
       </div>
 
     </div>



  )


}