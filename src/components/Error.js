import React from "react"
import PropTypes from "prop-types"

const Error = (props) => {
    return (
        <div>
            <p>This route {props.location.pathname} doesn't exist!</p>
        </div>
    )
}

export default Error;
