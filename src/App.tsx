import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Articles from './pages/Articles';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Layout from './pages/Layout';
import './sass/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='articles/:articleId' element={<Articles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
