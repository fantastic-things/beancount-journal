import { HashRouter, Route, Routes } from 'react-router-dom';
import Journal from 'renderer/journal/Journal';
import Home from './Home';
import HomeLayout from './HomeLayout';

export default function Layout() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route
            path="storage"
            element={
              <div>
                <h1>Storage</h1>
              </div>
            }
          />
          <Route path="journal" element={<Journal />} />
          <Route
            path="about"
            element={
              <div>
                <h1>About</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}
