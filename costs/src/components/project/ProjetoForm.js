import styles from './ProjetoForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

function ProjetoForm({ btnText }) {

    return (
        <form className={styles.form}>
            <Input type='text'
                text='Nome do projeto'
                name='name'
                placeholder='Insira o nome do projeto' />
            <Input type='number'
                text='Orçamento do projeto'
                name='budget'
                placeholder='Insira o orçamento total' />
            <div>
                <Select name='category_id' text='Selecione a categoria' />
            </div>
            <Submit text={btnText} />
        </form>
    )
}

export default ProjetoForm