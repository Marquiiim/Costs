import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Container from './components/layout/Container'

import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Compania from './components/pages/Compania'
import NovoProjeto from './components/pages/NovoProjeto'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contato'>Contato</Link>
        </li>
        <li>
          <Link to='/compania'>Compania</Link>
        </li>
      </ul>

      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/compania' element={<Compania />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/novoprojeto' element={<NovoProjeto />} />
        </Routes>
      </Container>

      <p>
        Footer
      </p>
    </Router>
  );
}

export default App;
