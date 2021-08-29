import React from 'react'
import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <div className="MenuItem">
            {
                props.enabled ?
                    <div
                        className="item-icon enabled"
                        style={{ backgroundColor: props.color }}
                    >
                        {props.icon}
                    </div>
                    :
                    <div
                        className="item-icon disabled"
                        style={{ backgroundColor: '#353340' }}
                    >
                        {props.icon}
                    </div>
            }
            <div
                className="item-text"
            >
                <p 
                    style={{ color: `${props.enabled ? '#f9f9f9f' : '#808191'}` }, { fontStyle: `${props.enabled ? 'bold' : 'normal'}` }}
                >
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default MenuItem
