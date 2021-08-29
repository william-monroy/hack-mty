import { Avatar } from 'antd'
import React from 'react'
import './Perfil.css'

const Perfil = (props) => {

    const handleClick = () => {
        props.tab('PerfilEdit')
    }

    return (
        <div className="Perfil">
            <card className="info">
                <Avatar
                    size={{ xs: 85, sm: 90, md: 100, lg: 100, xl: 150, xxl: 150 }}
                    src="https://i.postimg.cc/25JWNyMF/profile-pic.jpg"
                />
                <p className="info-name">William Monroy Mamani</p>
                <p className="info-carrera">
                    <span className="campo">Carrera: </span>
                    Ingeniería en Tecnologías Computacionales
                </p>
                <p className="info-semestre">
                    <span className="campo">Semestre: </span>
                    3
                </p>
                <p className="info-correo">
                    <span className="campo">Correo: </span>
                    william_monroy777@hotmail.com
                </p>
                <p className="info-telefono">
                    <span className="campo">Teléfono: </span>
                    +51 935995979
                </p>
                <card className="buttons">
                    <div className="button edit" onClick={()=>handleClick()}>Editar Datos</div>
                    <div className="button pwd">Cambiar Contraseña</div>
                </card>
                    <div className="button inst">Aplicar para Instructor</div>
            </card>
        </div>
    )
}

export default Perfil
