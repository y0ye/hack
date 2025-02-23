import { Routes, Route } from 'react-router-dom';
import App from '../App';
import HealthTracker from '../components/HealthTracker.tsx'
import AiSummary from '../components/AiSummary.tsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/HealthTracker" element={<HealthTracker/>} />
      <Route path="/AiSummary" element={<AiSummary/>} />
    </Routes>
  );
};

export default AppRoutes;