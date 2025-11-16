import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Koleksi from './pages/Koleksi';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Home />} />
        <Route path="koleksi" element={<Koleksi />} />
      </Route>
    </Routes>
  );
}

export default App;