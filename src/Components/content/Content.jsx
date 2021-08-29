import React from 'react'
import CardHome from '../cardHome/CardHome'
import Tag from '../tag/Tag'
import './Content.css'

const Content = () => {

    let tags = [
        {
            text: 'Física',
            enabled: false,
        },
        {
            text: 'Matemática',
            enabled: false,
        },
        {
            text: 'Programación',
            enabled: true,
        },
        {
            text: 'Química',
            enabled: false,
        },
        {
            text: 'Circuitos',
            enabled: false,
        },
        {
            text: 'Biología',
            enabled: false,
        },
        {
            text: 'Contabilidad',
            enabled: false,
        },
        {
            text: 'Genética',
            enabled: false,
        },
        {
            text: 'Derecho',
            enabled: false,
        },
    ]

    let videos = [
        {
            titulo: 'Control de Versiones con Git',
            instructor: 'William Monroy',
            visitas: '53K vistas  •  hace 2 semanas',
            avatar: {},
            duracion: '25 min',
            imagen: {},
        },
        {
            titulo: 'Reacciones Quimicas',
            instructor: 'Anastasia Rios',
            visitas: '13K vistas  •  hace 1 semanas',
            avatar: {},
            duracion: '20 min',
            imagen: {},
        },
        {
            titulo: 'Integral Indefinida',
            instructor: 'Anastasia Rios',
            visitas: '45K vistas  •  hace 3 semanas',
            avatar: {},
            duracion: '30 min',
            imagen: {},
        },
        {
            titulo: 'Clases y Objetos',
            instructor: 'Carmina Agustín',
            visitas: '40K vistas  •  hace 1 semanas',
            avatar: {},
            duracion: '45 min',
            imagen: {},
        },
        {
            titulo: 'Movimiento Rectlineo',
            instructor: 'Febe Davila',
            visitas: '40K vistas  •  hace 1 semanas',
            avatar: {},
            duracion: '45 min',
            imagen: {},
        },
        {
            titulo: 'Herencia',
            instructor: 'Fortunato Zorrilla',
            visitas: '8K vistas  •  hace 3 días',
            avatar: {},
            duracion: '40 min',
            imagen: {},
        },
        {
            titulo: 'Reacciones Quimicas Inorganicas',
            instructor: 'Gertrudis Rossello',
            visitas: '16K vistas  •  hace 1 semanas',
            avatar: {},
            duracion: '30 min',
            imagen: {},
        },
        {
            titulo: 'Servicios Web REST',
            instructor: 'Iris Iborra',
            visitas: '18K vistas  •  hace 6 semanas',
            avatar: {},
            duracion: '55 min',
            imagen: {},
        },
        {
            titulo: 'Estructura Atómica',
            instructor: 'Luciano Pedraza',
            visitas: '5K vistas  •  hace 2 días',
            avatar: {},
            duracion: '25 min',
            imagen: {},
        },
        {
            titulo: 'Inglés par Entrevistas de Trabajo',
            instructor: '',
            visitas: '15K vistas  •  hace 1 semanas',
            avatar: {},
            duracion: '30 min',
            imagen: {},
        },
        {
            titulo: 'Edad De Hierro',
            instructor: 'Socorro Carrera',
            visitas: '2K vistas  •  hace 9 semanas',
            avatar: {},
            duracion: '45 min',
            imagen: {},
        },
        {
            titulo: 'Cuerpos Celestes',
            instructor: 'Florentia Torralba',
            visitas: '16K vistas  •  hace 3 semanas',
            avatar: {},
            duracion: '44 min',
            imagen: {},
        },
    ]


    return (
        <div className="Content">
            <h3 className="Content-title">Más Vistos</h3>
            <div className="tags">
                {tags.map((tag, index) => (
                    <Tag text={tag.text} enabled={tag.enabled} key={index} />
                ))}
            </div>
            <div className="cards">
                {videos.map((item, index) => (
                    <CardHome />
                ))}
            </div>
        </div>
    )
}

export default Content
