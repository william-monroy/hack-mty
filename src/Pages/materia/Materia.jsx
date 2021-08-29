import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import HeaderMateria from '../../Components/headerMateria/HeaderMateria';
import TableMateria from '../../Components/tableMateria/TableMateria';
import CommentsMateria from '../../Components/comments/CommentsMateria';
import './Materia.css';

const columns = [
    {
        title: 'Tema',
        dataIndex: 'tema',
        key: 'tema',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Cantidad de usuarios',
        dataIndex: 'cantidad',
        align: 'center',
        key: 'cantidad',
    },
    {
        title: 'Fecha de creación',
        dataIndex: 'fecha',
        align: 'center',
        key: 'fecha',
    },
];

const data = [
    {
        key: '1',
        tema: 'Limites y derivadas',
        cantidad: 4,
        fecha: "15/02/20",
    },
    {
        key: '2',
        tema: 'Derivadas',
        cantidad: 4,
        fecha: "15/02/20",
    },
    {
        key: '3',
        tema: 'Integrales',
        cantidad: 4,
        fecha: "15/02/20",
    },
    {
        key: '4',
        tema: 'Métodos de Integración',
        cantidad: 4,
        fecha: "15/02/20",
    },
    {
        key: '5',
        tema: 'Fracciones Parciales',
        cantidad: 5,
        fecha: "15/02/20",
    },
    {
        key: '6',
        tema: 'Longitud de Arco',
        cantidad: 9,
        fecha: "15/02/20",
    },
    {
        key: '7',
        tema: 'Superficies',
        cantidad: 2,
        fecha: "15/02/20",
    },
    {
        key: '8',
        tema: 'Volúmenes',
        cantidad: 7,
        fecha: "15/02/20",
    },
    {
        key: '9',
        tema: 'Optimización',
        cantidad: 3,
        fecha: "15/02/20",
    },
    {
        key: '10',
        tema: 'Curvas paramétricas',
        cantidad: 6,
        fecha: "15/02/20",
    },
];

const Materia = () => {
    return (
        <div className="Materia">
            {/* Navbar */}
            <Navbar />
            <div className="main">
                {/* Sidebar */}
                <Sidebar />
                {/* Content */}
                <div className="Materia__content">
                    <HeaderMateria cantidad={10} nombre="Matemáticas" img={"Mate.jpg"} />
                    <TableMateria columns={columns} data={data}/>
                    <CommentsMateria />
                </div>
            </div>
            {/* Content */}
        </div>
    )
}

export default Materia;
