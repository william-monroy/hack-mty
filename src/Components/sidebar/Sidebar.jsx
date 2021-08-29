import React from 'react'
import './Sidebar.css'
import { HomeFilled, BookFilled, RocketFilled, PieChartFilled, SettingFilled } from '@ant-design/icons';
import MenuItem from '../menuItem/MenuItem';
import { Switch } from 'antd';

const Sidebar = ({ tab, setTab }) => {

    {console.log(tab)}

    let sidebar = [
        {
            icon: <HomeFilled />,
            text: 'Inicio',
            color: '#FF7551',
            enable: `${tab==='Inicio'?true:false}`,
        },
        {
            icon: <BookFilled />,
            text: 'Cursos',
            color: '#22B07D',
            enable: `${tab==='Cursos'?true:false}`,
        },
        {
            icon: <RocketFilled />,
            text: 'Entrenamiento',
            color: '#FFC700',
            enable: `${tab==='Entretenimiento'?true:false}`,
        },
        {
            icon: <PieChartFilled />,
            text: 'Estadísticas',
            color: '#E890FF',
            enable: `${tab==='Estadísticas'?true:false}`,
        },
        {
            icon: <SettingFilled />,
            text: 'Ajustes',
            color: '#839DFE',
            enable: `${tab==='Ajustes'?true:false}`,
        },
    ]

    return (
        <div className="Sidebar">
            <div className="top">
                <p className="Sidebar-title">MENU</p>
                {sidebar.map((item, i) => (
                    <MenuItem
                        key={i}
                        icon={item.icon}
                        text={item.text}
                        color={item.color}
                        enabled={item.enable}
                        tab={tab}
                        setTab={setTab}
                    />
                ))}
            </div>
            <div className="bottom">
                <Switch defaultChecked />
                <p className="bottom-text">Modo Oscuro</p>
            </div>
        </div>
    )
}

export default Sidebar
