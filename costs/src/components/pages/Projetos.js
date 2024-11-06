import { useLocation } from 'react-router-dom'

import Mensagem from '../layout/Mensagem'

function Projetos() {

    const location = useLocation()
    let message = ''
    if (location.state && location.state.message) {
        message = location.state.message
    }

    return (
        <div>
            <h1>Meus Projetos</h1>
            {message && <Mensagem type="success" msg={message} />}
        </div>
    )
}

export default Projetos