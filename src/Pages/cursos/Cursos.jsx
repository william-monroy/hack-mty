import React from 'react'
import './Cursos.css'
import Tag from '../../Components/tag/Tag'
import CardCurso from '../../Components/cardCurso/CardCurso'
import {Link} from 'react-router-dom'

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
            cantidad: '15 cursos disponibles',
            temas: 'Límites • Derivadas • Antiderivadas • Integrales • Métodos de Integración • Fracciones Parciales • Longitud de Arco • Superficies • Volúmenes • Optimización • Áreas • Curvas paramétricas • Coordenadas polares...',
            visitas: '5.2K vistas'
        },
        {
            nombre: 'Programación',
            cantidad: '10 cursos disponibles',
            temas: 'C++ • Kotlin • Android • Java • C# • Unity • Swift • Flutter • Dart • Go • Scala • Earlang • Diagramas de Flujo • Concurrencia • Notacion Algoritmica • Análisis de Complejidad de Algoritmos • Machine Learning • Data cience • R • Python...',
            visitas: '5.2K vistas'
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
                    <Link to="/Cursos/Materia">
                        <CardCurso nombre={item.nombre} cantidad={item.cantidad} temas={item.temas} visitas={item.visitas} key={index} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Cursos
