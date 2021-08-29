import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="Dashboard">
            {/* Navbar */}
            <Navbar />
            {/* Sidebar */}
            <Sidebar />
            {/* Content */}
        </div>
    )
}

export default Dashboard
