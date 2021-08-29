import React from 'react'
import './Sidebar.css'
import { HomeFilled, BookFilled, RocketFilled, PieChartFilled, SettingFilled } from '@ant-design/icons';

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
            text:'',
            color:'',
            enable: false,
        },
        Ajustes: {
            icon: <SettingFilled />,
            text:'',
            color:'',
            enable: false,
        },
    }

    return (
        <div className="Sidebar">
            <p className="Sidebar-title">MENU</p>
        </div>
    )
}

export default Sidebar
