import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page components
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

// styles
import './App.css';

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <NavBar />
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route exact path='/recipes/:id' element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
