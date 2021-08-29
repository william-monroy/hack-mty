import React from 'react'
import './PerfilEdit.css'
import { Avatar } from 'antd'

const PerfilEdit = (props) => {

    const handleClick = () => {
        props.tab('Perfil')
    }

    return (
        <div className="PerfilEdit">
            <card className="info">
                <Avatar
                    size={{ xs: 85, sm: 90, md: 100, lg: 100, xl: 150, xxl: 150 }}
                    src="https://i.postimg.cc/5yKxr7sP/Avatar.png"
                />
                <div className="form">
                    <div className="input">
                        <p className="input-label">Nombres</p>
                        <input className="input-text" type="text" value="William Frank" />
                    </div>
                    <div className="input">
                        <p className="input-label">Apellidos</p>
                        <input className="input-text" type="text" value="Monroy Mamani" />
                    </div>
                    <div className="input">
                        <p className="input-label">Carrera</p>
                        <input className="input-text" type="text" value="Ingeniería en Tecnologías Computacionales" />
                    </div>
                    <div className="input">
                        <p className="input-label">Semestre</p>
                        <input className="input-text" type="text" value="3" />
                    </div>
                    <div className="input">
                        <p className="input-label">Correo electrónico</p>
                        <input className="input-text" type="text" value="william_monroy777@hotmail.com" />
                    </div>
                    <div className="input">
                        <p className="input-label">Número telefónico</p>
                        <input className="input-text" type="text" value="+51 935995979" />
                    </div>
                </div>
                <div className="button inst" onClick={()=>handleClick()}>Guardar Datos</div>
            </card>
        </div>
    )
}

export default PerfilEdit
