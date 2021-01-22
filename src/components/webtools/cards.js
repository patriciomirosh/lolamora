import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';



const Tarjetas = (props) => {
  return (
    <div style={{borderRadius:"10px"}}>
      <Card className="card" >
        <CardImg top className="cardstore"  src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText className="mb-2 text-muted" >{props.text}</CardText>
          <Button>Conocer</Button>
          
        </CardBody> 
    
      </Card>
    </div>
  );
};
const Tarjetas2 = (props) => {
    return (
        <div className="cards2">
        <Card>
          <CardImg top width="100%" src={props.newImg} alt={props.newImgAlt}/>
          <CardBody>
            <CardTitle tag="h5">{props.titleNew}</CardTitle>
            <CardText><small className="text-muted">{props.newText}</small></CardText>
           
          </CardBody>
        </Card>
        </div>
        );
    };
export  {Tarjetas,Tarjetas2};

