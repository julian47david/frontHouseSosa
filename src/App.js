import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'
import { Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Cursos from './components/Cursos'
import Blog from './components/Blog'
import About from './components/About'
import Contacto from './components/Contacto'




function App() {
  return (
    <ThemeProvider theme={theme}>

      <NavBar
      />
      <Routes>
        <Route exact path='/Inicio' element={<Inicio />}/>
        <Route exact path='/Cursos' element={<Cursos />}/>
        <Route exact path='/Blog' element={<Blog />}/>
        <Route exact path='/About' element={<About />}/>
        <Route exact path='/Contacto' element={<Contacto />}/>
      </Routes>

    </ThemeProvider>
  );
}

export default App;
