import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import Layout from '../Layout';

const Root = () => (
    <Router>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            {/* <Route path='/donate' element={<DonatePage />} /> */}
          </Route>
      </Routes>
    </Router>
  );

export default Root