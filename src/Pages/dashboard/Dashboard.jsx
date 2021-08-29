import React, {useState} from 'react'
import Inicio from '../../Components/inicio/Inicio'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Cursos from '../cursos/Cursos'
import './Dashboard.css'
import Entrenamiento from '../entrenamiento/Entrenamiento'
import Estadisticas from '../estadisticas/Estadisticas'
import Ajustes from '../ajustes/Ajustes'

const Dashboard = () => {
    const [tab,setTab] = useState('Inicio');

    const handleClick = (tab) => {
        setTab(tab);
    } 

    return (
        <div className="Dashboard">
            <Navbar />
            <div className="main">
                <Sidebar tab={handleClick} setTab={setTab}/>
                {
                    tab === 'Inicio' ?
                    <Inicio />
                    : tab === 'Cursos' ?
                    <Cursos />
                    : tab === 'Entrenamiento' ?
                    <Entrenamiento />
                    : tab === 'Estadisticas' ?
                    <Estadisticas />
                    :
                    <Ajustes />
                }
            </div>
        </div>
    )
}

export default Dashboard
