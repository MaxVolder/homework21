import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MakePost from './pages/MakePost';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="make" element={<MakePost />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;