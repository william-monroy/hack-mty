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
                { props.enabled ?
                <p
                    className="item-text enabled" 
                    
                >
                    {props.text}
                </p>
                :
                <p
                    className="item-text disabled"
                >
                    {props.text}
                </p>
                }
            </div>
        </div>
    )
}

export default MenuItem
