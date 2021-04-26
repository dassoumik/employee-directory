import React from "react";
import "./index.css";


function DisplayCards (props) {
    const displayClass = "card-display pl-3 pr-0 pt-2 pb-2 text-right";
    const displayClassDark = "card-display-dark p-3 text-right";
    const displayImage = "image-display flex col-md-4";
    const displayFloat = "displayFloat col-md-12";



    return (
        <div className="text-center"> 
        <div className="m-5">
          <div className="card-deck">  
            <div className={displayClass}>
                <img className={displayImage} src={props.image} alt="user"/>
                <aside className={displayFloat}>
                <div>{props.name}</div>
                <div>{props.email}</div>
                <div>{props.phone}</div>
                {/* <div>{props.DOB}</div> */}
                </aside>
              {/* <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                   <small className="text-muted">
                     Someone famous in <cite title="Source Title">{props.name}</cite>
                   </small>
                </footer>
              </blockquote> */}
            </div>
            <div className={displayClassDark}>
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                   <small className="text-muted">
                     Someone famous in <cite title="Source Title">{props.name}</cite>
                   </small>
                </footer>
              </blockquote>
            </div>
            <div className={displayClass}>
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                   <small className="text-muted">
                     Someone famous in <cite title="Source Title">{props.name}</cite>
                   </small>
                </footer>
              </blockquote>
            </div>
          </div>  
          </div> 
          <div>
          <div className="m-5">
          <div className="card-deck">  
            <div className={displayClassDark}>
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                   <small className="text-muted">
                     Someone famous in <cite title="Source Title">{props.name}</cite>
                   </small>
                </footer>
              </blockquote>
            </div>
            <div className={displayClass}>
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                   <small className="text-muted">
                     Someone famous in <cite title="Source Title">{props.name}</cite>
                   </small>
                </footer>
              </blockquote>
            </div>
            <div className={displayClassDark}>
              <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">
                   <small className="text-muted">
                     Someone famous in <cite title="Source Title">{props.name}</cite>
                   </small>
                </footer>
              </blockquote>
            </div>
          </div>   
        </div>
          </div>
        </div>
    )
}

export default DisplayCards;

