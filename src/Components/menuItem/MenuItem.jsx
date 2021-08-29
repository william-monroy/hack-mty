import React from 'react'
import './MenuItem.css'

const MenuItem = (props) => {

    const handlerOnChange =()=> {
        if (props.text=='Inicio')
            props.inicioE(true)
        else 
            props.inicioE(false)
            if (props.text=='Cursos')
                props.cursosE(true)
            else
                props.cursosE(false)
                if (props.text=='Entrenamiento')
                    props.entrenamientoE(true)
                else
                    props.entrenamientoE(false)
                    if (props.text=='Estadisticas')
                        props.estadisticasE(true)
                    else
                        props.estadisticasE(false)
                        if (props.text=='Ajustes')
                            props.ajustesE(true)
                        else
                            props.ajustesE(false)
    }

    const handleClick = () => {
        props.tab(props.text)
        
    }

    return (
        <div className="MenuItem" onClick={() => handleClick()}>
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
