import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Movies, ViewActors, ViewMovie, Profile } from './views';
import Navbar from './components/Navbar/Navbar';
import { root } from './styles/styles';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main css={root.self}>
        <Routes>
          <Route path="/">
            <Route index element={<Movies />} />
            <Route path="/movie/:id" element={<ViewMovie />} />
          </Route>
          <Route path="/actors/:id" element={<ViewActors />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
