import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Layout from '../Layout';
import SupportPage from '../components/SupportPage';
// import Missions from '../components/missions/Missions';
import Missions from '../components/missions/Missions';

const Root = () => (
    <Router>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<HomePage />} />
            <Route path='/support' element={<SupportPage />} />
            <Route path='/missions' element={<Missions />} />
          </Route>
      </Routes>
    </Router>
  );

export default Root