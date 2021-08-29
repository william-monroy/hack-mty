import React, {useState} from 'react'
import './Sidebar.css'
import { HomeFilled, BookFilled, RocketFilled, PieChartFilled, SettingFilled } from '@ant-design/icons';
import MenuItem from '../menuItem/MenuItem';
import { Switch } from 'antd';

const Sidebar = ({ tab, setTab }) => {

    const [inicioE,setInicioE] = useState(true);
    const [cursosE,setCursosE] = useState(false);
    const [entrenamientoE,setEntrenamientoE] = useState(false);
    const [estadisticasE,setEstadisticasE] = useState(false);
    const [ajustesE, setAjuestesE] = useState(false);
    
    let sidebar = [
        {
            icon: <HomeFilled />,
            text: 'Inicio',
            color: '#FF7551',
            enable: inicioE,
        },
        {
            icon: <BookFilled />,
            text: 'Cursos',
            color: '#22B07D',
            enable: cursosE,
        },
        {
            icon: <RocketFilled />,
            text: 'Entrenamiento',
            color: '#FFC700',
            enable: entrenamientoE,
        },
        {
            icon: <PieChartFilled />,
            text: 'Estadísticas',
            color: '#E890FF',
            enable: estadisticasE,
        },
        {
            icon: <SettingFilled />,
            text: 'Ajustes',
            color: '#839DFE',
            enable: ajustesE,
        },
    ]
    
    const handleClick = (tab, inicioE, cursosE, entrenamientoE, estadisticasE, ajustesE) => {
        setTab(tab);
        setInicioE(inicioE);
        setCursosE(cursosE);
        setEntrenamientoE(entrenamientoE);
        setEstadisticasE(estadisticasE);
        setAjuestesE(ajustesE);
        console.log(tab);
    }


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
                        tab={handleClick}
                        setTab={setTab}
                        inicioE={handleClick}
                        setInicioE={setInicioE}
                        cursosE={handleClick}
                        setCursosE={setCursosE}
                        entrenamientoE={handleClick}
                        setEntrenamientoE={setEntrenamientoE}
                        estadisticasE={handleClick}
                        setEstadisticasE={setEstadisticasE}
                        ajustesE={handleClick}
                        setAjuestesE={setAjuestesE}
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
