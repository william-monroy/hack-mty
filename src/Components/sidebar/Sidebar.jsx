import React from 'react'
import './Sidebar.css'
import { HomeFilled, BookFilled, RocketFilled, PieChartFilled, SettingFilled } from '@ant-design/icons';
import MenuItem from '../menuItem/MenuItem';

const Sidebar = () => {

    const sidebar = {
        Inicio: {
            icon: <HomeFilled />,
            text: 'Inicio',
            color: '#FF7551',
            enable: true,
        },
        Cursos: {
            icon: <BookFilled />,
            text: 'Cursos',
            color: '#22B07D',
            enable: false,
        },
        Entretenimiento: {
            icon: <RocketFilled />,
            text: '#FFC700',
            color: '',
            enable: false,
        },
        Estadisticas: {
            icon: <PieChartFilled />,
            text: 'Estadísticas',
            color: '#E890FF',
            enable: false,
        },
        Ajustes: {
            icon: <SettingFilled />,
            text: 'Ajustes',
            color: '#839DFE',
            enable: false,
        },
    }

    return (
        <div className="Sidebar">
            <p className="Sidebar-title">MENU</p>
            {sidebar.map(item => {
                <MenuItem icon={item.icon} text={item.text} color={item.color} enabled={item.enable} />
            })}
        </div>
    )
}

export default Sidebar
