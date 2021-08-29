import React from 'react'
import './Search.css'
import { SearchOutlined } from '@ant-design/icons'

const Search = () => {
    return (
        <div className="Search">
            <input type="text" className="search" placeholder="Buscar" />
            <SearchOutlined style={{ color: '#808191', fontSize: '20px' }}/>
        </div>
    )
}

export default Search
