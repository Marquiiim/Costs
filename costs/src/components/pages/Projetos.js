import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Mensagem from '../layout/Mensagem'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projetos.module.css'

function Projetos() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state && location.state.message) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data => {
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>
                    Meus Projetos
                </h1>
                <LinkButton to='/novoprojeto' text='Criar Projeto' />
            </div>
            {message && <Mensagem type="success" msg={message} />}
            <Container customClass="start" >
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category ? project.category.name : 'Categoria não disponível'}
                            key={project.id} />
                    ))}
            </Container>
        </div>
    )
}

export default Projetos