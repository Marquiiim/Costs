import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/Submit'

import styles from './ServiceForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }) {

    function submit() {

    }

    function handleChange(e) {

    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />
            <Input
                type='number'
                text='Custo do serviço'
                name='cost'
                placeholder='Insira o valor do total'
                handleOnChange={handleChange}
            />
            <Input
                type='text'
                text='Descrição do serviço'
                name='description'
                placeholder='Descreva o serviço'
                handleOnChange={handleChange}
            />
            <SubmitButton text={textBtn} />
        </form>
    )
}

export default ServiceForm