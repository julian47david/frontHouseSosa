import './App.css';
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'
import { Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Cursos from './components/Cursos'
import ItemDetailContainer from './components/ItemDetailContainer'
import Blog from './components/Blog'
import About from './components/About'
import Contacto from './components/Contacto'




function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Cursos' element={<Cursos/>}/>
        <Route path='/Details/:id' element={<ItemDetailContainer/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='*' element={<h1>Ups! 404 Not Found</h1>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
