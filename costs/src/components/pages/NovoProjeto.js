import { useNavigate } from 'react-router-dom'

import styles from './NovoProjeto.module.css'

import ProjetoForm from '../project/ProjetoForm'

function NovoProjeto() {

    const navigate = useNavigate()

    function createPost(project) {

        // Initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
            .then(resp => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projetos')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.novoprojeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjetoForm btnText='Criar Projeto' handleSubmit={createPost} />
        </div>
    )
}

export default NovoProjeto