import React from 'react'
import Content from '../../Components/content/Content'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="Dashboard">
            {/* Navbar */}
            <Navbar />
            <div className="main">
                {/* Sidebar */}
                <Sidebar />
                {/* Content */}
                <Content />
            </div>
        </div>
    )
}

export default Dashboard
