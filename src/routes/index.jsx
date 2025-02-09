import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Layout from '../Layout';
import SupportPage from '../components/SupportPage';

const Root = () => (
    <Router>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<HomePage />} />
            <Route path='/support' element={<SupportPage />} />
          </Route>
      </Routes>
    </Router>
  );

export default Root