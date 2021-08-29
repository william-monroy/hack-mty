import React, { useState } from 'react'
import Inicio from '../../Components/inicio/Inicio'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Cursos from '../cursos/Cursos'
import './Dashboard.css'
import Entrenamiento from '../entrenamiento/Entrenamiento'
import Estadisticas from '../estadisticas/Estadisticas'
import Ajustes from '../ajustes/Ajustes'
import Perfil from '../perfil/Perfil'
import PerfilEdit from '../perfilEdit/PerfilEdit'
import Dropdown from '../../Components/dropdown/Dropdown'

const Dashboard = () => {
    const [tab, setTab] = useState('Inicio');
    const [dropdown, setDropdown] = useState(false);

    const handleDrop = (dropdown) => {
        setDropdown(!dropdown);
    }

    const handleClick = (tab) => {
        setTab(tab);
    }

    return (
        <div className="Dashboard">
            <Navbar tab={handleClick} setTab={setTab} dropdown={handleDrop} setDropdown={setDropdown} />
            {dropdown ?
                <Dropdown tab={handleClick} setTab={setTab}/>
                :
                null
            }
            <div className="main">
                <Sidebar tab={handleClick} setTab={setTab} />
                {
                    tab === 'Inicio' ?
                        <Inicio />
                        : tab === 'Cursos' ?
                            <Cursos />
                            : tab === 'Entrenamiento' ?
                                <Entrenamiento />
                                : tab === 'Estadísticas' ?
                                    <Estadisticas />
                                    : tab === 'Ajustes' ?
                                        <Ajustes />
                                        : tab === 'Perfil' ?
                                            <Perfil tab={handleClick} setTab={setTab} />
                                            :
                                            <PerfilEdit tab={handleClick} setTab={setTab} />
                }
            </div>
        </div>
    )
}

export default Dashboard
