import React from "react";
import API from "../../util/API.js";
import {Card} from "react-bootstrap";
import "../Box.css";

function CardLayout() {
    const result = API.results;

    const carddata = (res, index) => {
        return(

            <Card className="box box1" style={{backgroundColor: "cyan"}} key={index}>
                <div className="md-col-4 flex d-inline-flex imageDisp">
                <img variant="top" src={res.picture.thumbnail} style={{borderRadius: "50%"}} alt="user"/>
                </div>
                <Card.Body className="floatRight">
                <Card.Title>{res.name.first} {res.name.last}</Card.Title>    
                <Card.Text>{res.email}</Card.Text>
                <Card.Text>{res.phone}</Card.Text>
                <Card.Text>{res.location.city}, {res.location.state}</Card.Text>
                </Card.Body>
            </Card>  
       
        )
    }

    return (
        <div className="App">
            {result.map(carddata)}
        </div>
    )
}
export default CardLayout;