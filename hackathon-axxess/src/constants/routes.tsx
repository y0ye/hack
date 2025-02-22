import { Routes, Route } from 'react-router-dom';
import App from '../App';
import HealthTracker from '../components/HealthTracker.tsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/HealthTracker" element={<HealthTracker/>} />
    </Routes>
  );
};

export default AppRoutes;