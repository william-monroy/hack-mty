import React from 'react';
import './TableMateria.css';
import { Table, Tag, Space } from 'antd';

const TableMateria = (props) => {
    return (
        <Table className="TableMateria" columns={props.columns} dataSource={props.data} />
    );
};

export default TableMateria;