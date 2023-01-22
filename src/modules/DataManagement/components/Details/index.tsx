import React from "react";
import {useParams} from "react-router-dom";


export default function Details() {
    const {teiId} = useParams();


    return (
        <div className="center column w-100 h-100 align-center">
            <h1>Details for {teiId}</h1>
        </div>
    )
}
