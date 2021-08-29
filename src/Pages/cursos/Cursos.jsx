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

    let cards = [
        {
            nombre: 'Matemática',
            cantidad: '10 cursos disponibles',
            temas: 'Límites • Derivadas • Antiderivadas • Integrales • Métodos de Integración • Fracciones Parciales • Longitud de Arco • Superficies • Volúmenes • Optimización • Áreas • Curvas paramétricas • Coordenadas polares...',
            visitas: '53K vistas'
        },
        {
            nombre: '',
            cantidad: '',
            temas: '',
            visitas: ''
        },
        {
            nombre: '',
            cantidad: '',
            temas: '',
            visitas: ''
        },
        {
            nombre: '',
            cantidad: '',
            temas: '',
            visitas: ''
        },
        {
            nombre: '',
            cantidad: '',
            temas: '',
            visitas: ''
        },
        {
            nombre: '',
            cantidad: '',
            temas: '',
            visitas: ''
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
                {cards.map((item, index) => (
                    <CardCurso nombre={item.nombre} cantidad={item.cantidad} temas={item.temas} visitas={item.visitas} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Cursos
