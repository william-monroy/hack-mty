import React from 'react'
import './Cursos.css'
import Tag from '../../Components/tag/Tag'
import CardCurso from '../../Components/cardCurso/CardCurso'

const Cursos = () => {
    let tags = [
        {
            text: 'Ingeniería y Ciencias',
            enabled: false,
        },
        {
            text: 'Ambiente Construido',
            enabled: false,
        },
        {
            text: 'Ciencias Sociales',
            enabled: true,
        },
        {
            text: 'Estudios Creativos',
            enabled: false,
        },
        {
            text: 'Negocios',
            enabled: false,
        },
        {
            text: 'Salud',
            enabled: false,
        }
    ]
    return (
        <div className="Cursos">
            <h3 className="Content-title">Materias</h3>
            <div className="tags">
                {tags.map((tag, index) => (
                    <Tag text={tag.text} enabled={tag.enabled} key={index} />
                ))}
            </div>
            <div className="cards">
                <CardCurso />
            </div>
        </div>
    )
}

export default Cursos
