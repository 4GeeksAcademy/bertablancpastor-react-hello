import React from "react";
import Card from "./card.jsx";

const SectionCard = () => {

    return (
        <div class="container text-center p-0">
            <div class="row gx-0">
                <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 px-1">
                    <Card />
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 px-1">
                    <Card />
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 px-1">
                    <Card />
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 px-1">
                    <Card />
                </div>
            </div>
        </div>
    );

}

export default SectionCard;