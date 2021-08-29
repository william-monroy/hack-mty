import React from 'react'
import './Sidebar.css'
import { HomeFilled, BookFilled, RocketFilled, PieChartFilled, SettingFilled } from '@ant-design/icons';
import MenuItem from '../menuItem/MenuItem';

const Sidebar = () => {

    let sidebar = [
        {
            icon: <HomeFilled />,
            text: 'Inicio',
            color: '#FF7551',
            enable: true,
        },
        {
            icon: <BookFilled />,
            text: 'Cursos',
            color: '#22B07D',
            enable: false,
        },
        {
            icon: <RocketFilled />,
            text: '#FFC700',
            color: '',
            enable: false,
        },
        {
            icon: <PieChartFilled />,
            text: 'Estadísticas',
            color: '#E890FF',
            enable: false,
        },
        {
            icon: <SettingFilled />,
            text: 'Ajustes',
            color: '#839DFE',
            enable: false,
        },
    ]

    return (
        <div className="Sidebar">
            <p className="Sidebar-title">MENU</p>
            {sidebar.map((item, i) => (
                <MenuItem
                    key={i}
                    icon={item.icon}
                    text={item.text}
                    color={item.color}
                    enabled={item.enable}
                />
            ))}
        </div>
    )
}

export default Sidebar
