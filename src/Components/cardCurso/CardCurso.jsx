import React from 'react'
import './CardCurso.css'
import { Avatar } from 'antd';
import { UserOutlined, CheckOutlined } from '@ant-design/icons';

const CardCurso = (props) => {
    return (
        <div className="CardCurso">
            <div className="card-top" style={{ backgroundImage: `"url(" + ${ props.imagen } + ")"` }}>
            </div>
            <div className="instructor">
                <Avatar className="avatar" size={50} icon={props.avatar} />
                <div className="verificado">
                    <CheckOutlined style={{ Color: '#f9f9f9', fontSize: '10px' }} />
                </div>
            </div>
            <div className="card-bottom">
                <p className="card-instructor">{props.instructor}</p>
                <p className="card-title">{props.titulo}</p>
                <p className="visitas">{props.visitas}</p>
            </div>
        </div>
    )
}

export default CardCurso
