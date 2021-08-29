import React from 'react'
import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <div className="MenuItem">
            <div
                className="item-icon"
                style={`{backgroundColor:${props.enabled ? props.color : '#494753'}}`}
            >
                {props.icon}
            </div>
            <div className="item-text">
                {props.text}
                style={`{color:${props.enabled ? '#fff' : '#808191'}}`, `{fontStyle:${props.enabled ? 'bold' : 'normal'}}`}
            </div>
        </div>
    )
}

export default MenuItem
