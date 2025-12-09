
import './App.css'
import Menu from './components-views/Menu'
import Sobre from './components-views/Sobre'
import CardHabilidades from './components-views/CardHabilidades'
import Projetos from './components-views/Projetos'
import Contato from './components-views/Contato'
import Footer from './components-views/Footer'

function App() {


  return (
    <div className='body-app'>
      <Menu />
      <Sobre />
      <CardHabilidades />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
