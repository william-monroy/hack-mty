import React from 'react';
import './HeaderMateria.css';
import { Avatar, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const HeaderMateria = (props) => {
    return (
        <div className="HeaderMateria">
            <img className="HeaderMateria__image" src={`${process.env.PUBLIC_URL}/assets/${props.img}`} alt="portada" />
            <div className="HeaderMateria__content">
                <div className="bloq1">
                    <ArrowLeftOutlined />
                    <p>{props.cantidad} cursos disponibles</p>
                </div>
                <div className="bloq2">{props.nombre}</div>
                <div className="bloq3">
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
            </div>
        </div>
    );
}

export default HeaderMateria;
