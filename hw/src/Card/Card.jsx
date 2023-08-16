import React from "react";

export function Card({title,text}){
    return (
        <div className="card">
            <div className="card-body">
                {title && <h4 className="card-title">hi</h4>}
                {text && <p className="card-text">how are you?</p>}
            </div>
        </div>
    )
}