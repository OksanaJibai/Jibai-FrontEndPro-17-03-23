import React from 'react';
import PropTypes from "prop-types";

export function Definition({data}) {
    const {dt, dd} = data

    return (
        <>
            <dt className="col-sm-3">{dt}</dt>
            <dd className="col-sm-9">{dd}</dd>
        </>
    )
}

Definition.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
                dt: PropTypes.string,
                dd: PropTypes.string,
                id: PropTypes.number,
            }
        )
    )
}