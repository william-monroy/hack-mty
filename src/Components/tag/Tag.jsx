import React from 'react'
import './Tag.css'

const Tag = (props) => {
    return (
        <div 
            className="Tag"
            style={{backgroundColor: `${props.enabled?'#6B5ECD':'#353340'}`}}
        >
            <p 
                className="Tag-text"
                style={{Color: `${props.enabled?'#f9f9f9':'#808191'}`}}
            >
                {props.text}
            </p>
        </div>
    )
}

export default Tag
