import React from "react";
import API from "../../util/API.js";
import {Card} from "react-bootstrap";

function CardLayout() {
    const result = API.results;

    const carddata = (res, index) => {
        return(
            <Card style={{width: "18rem"}} key={index}>
                <Card.Img variant = "top" src={res.picture.thumbnail} style={{borderRadius: "50%"}}/>
                <Card.Body>
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