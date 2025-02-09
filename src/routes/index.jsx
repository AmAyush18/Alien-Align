import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Layout from '../Layout';
import DonatePage from '../components/DonatePage';

const Root = () => (
    <Router>
      <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<HomePage />} />
            {/* <Route path='/donate' element={<DonatePage />} /> */}
          </Route>
      </Routes>
    </Router>
  );

export default Root