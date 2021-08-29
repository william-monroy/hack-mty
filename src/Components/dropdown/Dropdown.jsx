import React from "react";
import "./Dropdown.css";
import { Link, useHistory } from "react-router-dom";
import { Button, Radio } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const Dropdown = (props) => {

  const handleClick = (hacia) => {
    props.tab(hacia)
  }

  const history = useHistory();
  const DropdownItem = (props) => {
    return (
      <div className="menu-item" onClick={()=>handleClick(props.hacia)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-button">{props.rightIcon}</span>
      </div>
    );
  };

  return (
    <div className="dropdown">
      <DropdownItem hacia="Perfil" leftIcon={<UserOutlined />}>
        Mi Perfil
      </DropdownItem>
      <DropdownItem link="CerrarSesion" leftIcon={<LogoutOutlined />}>
        Cerrar Sesión
      </DropdownItem>
    </div>
  );
};

export default Dropdown;
