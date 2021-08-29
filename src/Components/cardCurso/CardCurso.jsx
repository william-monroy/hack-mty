import React from 'react'
import './CardCurso.css'
import { UserOutlined, AntDesignOutlined, CheckOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';

const CardCurso = (props) => {
    return (
        <div className="CardCurso">
            <div className="card-top" style={{ backgroundImage: `"url(" + ${props.imagen} + ")"` }}>
            <h2 className="CardCurso-title">{props.nombre}</h2>
            </div>
            <div className="instructores">
                <Avatar.Group
                    maxCount={2}
                    size="large"
                    maxStyle={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                    }}
                >
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Avatar
                        style={{
                            backgroundColor: '#f56a00',
                        }}
                    >
                        K
                    </Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}
                        />
                    </Tooltip>
                    <Avatar
                        style={{
                            backgroundColor: '#1890ff',
                        }}
                        icon={<AntDesignOutlined />}
                    />
                </Avatar.Group>
            </div>
            <div className="card-bottom-c">
                <p className="card-cursos">{props.cantidad}</p>
                <p className="card-content">{props.temas}</p>
                <p className="visitas">{props.visitas}</p>
            </div>
        </div>
    )
}

export default CardCurso
