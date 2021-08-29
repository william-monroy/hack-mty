import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import CommentsTema from '../../Components/comments/CommentsTema';
import './Tema.css';
import {Button, Avatar} from 'antd';
import {PlayCircleOutlined, DownloadOutlined} from '@ant-design/icons';



const Tema = () => {
    return (
        <div className="Tema">
            {/* Navbar */}
            <Navbar />
            <div className="main">
                {/* Sidebar */}
                <Sidebar />
                {/* Content */}
                <div className="Tema__content"> 
                    <div className="firstPart">
                        <iframe className="video" src="https://www.youtube.com/embed/d7Y9Om4KCUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                        <div className="dataVideo">
                            <h1 className="titleVideo">Integración por partes</h1>
                            <Button>Siguiente video</Button>
                        </div>
                        <div className="person">
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>W</Avatar>
                            <h3>William Monroy</h3>
                        </div>
                        <p className="description">Descricion del video, aquí va toda la descripcion del video.</p>
                        <CommentsTema />
                    </div>
                    <div className="secondPart">
                        <h1 className="title">Método de integración</h1>
                        <div className="Temas">
                            <h2 className="title_tema">Temas</h2>
                            <div className="bodyTemas">
                                <div className="tema1">
                                    <p className="indicador_Tema">1</p>
                                    <p className="titulo_Tema">Integración por sustitución o cambio de variable</p>
                                    <p className="duracion_Tema">16:04 min.</p>
                                </div>
                                <div className="tema2">
                                    <p className="indicador_Tema">2</p>
                                    <p className="titulo_Tema">Integración por sustitución trigonometrica</p>
                                    <p className="duracion_Tema">13:46 min.</p>
                                </div>
                                <div className="tema3">
                                    <p className="indicador_actual"><PlayCircleOutlined /></p>
                                    <p className="titulo_Tema">Integracion por partes</p>
                                    <p className="duracion_Tema">16:04 min.</p>
                                </div>
                                <div className="tema4">
                                    <p className="indicador_desactivado">4</p>
                                    <p className="titulo_Tema">Integrales racionales</p>
                                    <p className="duracion_Tema">25:04 min.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Archivos">
                            <h2 className="title_archivos">Archivos</h2>
                            <div className="bodyArchivos">
                                <div className="archivo1">
                                    <p className="indicador_Archivo"><DownloadOutlined /></p>
                                    <p className="titulo_Archivo">Formulario</p>
                                    <p className="tipo_Archivo">PDF</p>
                                </div>
                                <div className="archivo2">
                                    <p className="indicador_Archivo"><DownloadOutlined /></p>
                                    <p className="titulo_Archivo">Ejercicio 1</p>
                                    <p className="tipo_Archivo">PDF</p>
                                </div>
                                <div className="archivo3">
                                    <p className="indicador_Archivo"><DownloadOutlined /></p>
                                    <p className="titulo_Archivo">Ejercicio 2</p>
                                    <p className="tipo_Archivo">PDF</p>
                                </div>
                                <div className="archivo4">
                                    <p className="indicador_Archivo"><DownloadOutlined /></p>
                                    <p className="titulo_Archivo">Ejercicio 3</p>
                                    <p className="tipo_Archivo">PDF</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Content */}
        </div>
    )
}

export default Tema;
