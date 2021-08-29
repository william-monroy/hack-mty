import React, {useState} from 'react'
import Inicio from '../../Components/inicio/Inicio'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Cursos from '../cursos/Cursos'
import './Dashboard.css'

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
                {console.log(tab)}
                {
                    tab === 'Inicio' ?
                    <Inicio />
                    : 
                    <Cursos />
                }
            </div>
        </div>
    )
}

export default Dashboard
