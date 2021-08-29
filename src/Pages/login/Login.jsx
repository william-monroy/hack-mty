import React from 'react'
import './Login.css';
import { Checkbox } from 'antd';
import { Button } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Login = () => {

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <div className="Login">
            <div className="card-login">
                <div className="card-header">
                    <h3>Login</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <div className="input">
                                <p className="input-label">Correo electrónico</p>
                                <input className="input-text" type="text" placeholder="example@example.com" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input">
                                <p className="input-label">Constraseña</p>
                                <input className="input-text" type="text" placeholder="••••••••••" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="checkbox">
                                <Checkbox className="input-label" onChange={onChange}>Recuérdame</Checkbox>
                            </div>
                        </div>
                        <div className="buttons-card">
                            <Link to="/dashboard" >
                                <Button type="primary" shape="round" icon={<LoginOutlined />} size={30}>
                                    Iniciar Sesión
                                </Button>
                            </Link>
                            <Link to="/Signup" >
                                <Button type="primary" shape="round" icon={<UserAddOutlined />} size={30}>
                                    Crear Cuenta
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
