import React from "react";
import API from "../../util/API.js";
import {Card} from "react-bootstrap";
import "../Box.css";

function CardLayout(props) {
    const result = API.results;
    console.log(result);
    const boxClass = "box box1 text-white";

    const carddata = (res, index) => {
        return(

            <Card className={boxClass} style={{backgroundColor: "darkcyan"}} key={index}>
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
        <div className="grid">
            {result.filter((val) => 
            {
            if (String(props.search) === "") {
                return val;
            } else if 
             (val.name.first.toLowerCase().includes(String(props.search).toLowerCase()) ||
              val.name.last.toLowerCase().includes(String(props.search).toLowerCase())) {
                 return val;
             } 
            }).map(carddata)}
        </div>
    )
}
export default CardLayout;