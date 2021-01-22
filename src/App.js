import './App.css';
import NavBar from './components/navBar';
import Example from './components/webtools/Carrousel'
import {CardGrid} from './components/webtools/CardGrid'
import {CardGrid2} from './components/webtools/CardGrid'
import { Container } from './components/container';
import Footer from './components/Footer';
import {Header} from './components/header'

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Example/>
      <h3 style={{marginTop:"3%",marginBottom:"2%"}}>Niveles y Sede</h3>

    <CardGrid/>
    <Container/>
    <h3 style={{marginTop:"3%",marginBottom:"2%"}}>Ultimas Noticias</h3>
     <CardGrid2/> 
    <Footer/>
    <button className="btn-flotante" >M1</button>
    </div>
  )
}

export default App;
 