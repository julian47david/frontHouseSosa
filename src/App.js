import './App.css';
import { BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'
import { Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:category' element={<ItemListContainer />}/>
          <Route path='/Details/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>Ups! 404 Not Found</h1>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>  
  );
}

// <Route path='/Cursos' element={<Cursos/>}/>
// <Route path='/Blog' element={<Blog/>}/>
// <Route path='/About' element={<About/>}/>
// <Route path='/Contacto' element={<Contacto/>}/>
export default App;
