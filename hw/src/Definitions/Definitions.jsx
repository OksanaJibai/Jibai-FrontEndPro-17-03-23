import React from "react";
import {Definition} from "../Definition/Definition";

export function Definitions({data}){
    return(
        <dl className="row">
            {data.map(el => <Definition key={el.id} data={(el)}/>)}
        </dl>
    )
}

export default Definitions;