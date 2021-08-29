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
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
            imagen: {},
        },
        {
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
            imagen: {},
        },
        {
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
            imagen: {},
        },
        {
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
            imagen: {},
        },
        {
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
            imagen: {},
        },
        {
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
            imagen: {},
        },
        {
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
            imagen: {},
        },
        {
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
            imagen: {},
        },
        {
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
            imagen: {},
        },
        {
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
            imagen: {},
        },
        {
            titulo: '',
            instructor: '',
            visitas: '',
            avatar: {},
            duracion: '',
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
                <CardHome />
            </div>
        </div>
    )
}

export default Content
