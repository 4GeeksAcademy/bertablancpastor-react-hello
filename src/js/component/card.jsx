import React from "react";

//Card component

const Card = () => {
    return (
        
        <div className="card col-3 col-12 mb-5 mt-5" style={{width: "18rem"}}>
            <img src="https://placehold.it/500x325" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
};



export default Card