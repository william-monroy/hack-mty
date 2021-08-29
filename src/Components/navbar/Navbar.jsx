import React from 'react'
import './Navbar.css'
import { Avatar, Badge } from 'antd';
import { UserOutlined, DownOutlined, BellFilled } from '@ant-design/icons';
import Search from '../search/Search';


const Navbar = () => {
    return (
        <div className="Navbar">
            <h2 className="Navbar-title">HackMTY</h2>
            <Search/>
            <div className="Navbar-user">
                <Avatar
                    size={{ xs: 15, sm: 20, md: 30, lg: 30, xl: 40, xxl: 40 }}
                    icon={<UserOutlined />}
                />
                <p className="Navbar-user-name">William</p>
                <DownOutlined style={{ color: '#808191', fontSize: '20px' }} />
                <Badge count={5}>
                    <BellFilled
                        className="Navbar-user-notification"
                        style={{ color: '#808191', fontSize: '30px' }}
                    />
                </Badge>
            </div>

        </div>
    )
}

export default Navbar
