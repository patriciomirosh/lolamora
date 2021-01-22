import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';



const Tarjetas = (props) => {
  return (
    <div>
      <Card className="card" >
        <CardImg top className="cardstore"  src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText className="mb-2 text-muted" >{props.text}</CardText>
          <Button>Conocer</Button>
          <CardFooter/>
        </CardBody> 
    
      </Card>
    </div>
  );
};
const Tarjetas2 = (props) => {
    return (
        <div>
        <Card>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>is a wider card with supporting text below as a natural lead-in to additional content.content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        </div>
        );
    };
export  {Tarjetas,Tarjetas2};

