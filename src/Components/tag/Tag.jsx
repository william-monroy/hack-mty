import React from 'react'
import './Tag.css'

const Tag = (props) => {
    return (
        <div
            className="Tag"
            style={{ backgroundColor: `${props.enabled ? '#6B5ECD' : '#353340'}` }}
        >
            {props.enabled ?
                <p
                    className="Tag-text enabled"
                >
                    {props.text}
                </p>
                :
                <p
                    className="Tag-text disabled"
                >
                    {props.text}
                </p>
            }
        </div>
    )
}

export default Tag
