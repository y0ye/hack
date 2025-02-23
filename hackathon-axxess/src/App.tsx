import './App.css'
import {useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate();

  return (

    <div className="dashboard">
      <div className='left'>
        <div className='widget'>
          <button onClick={() => navigate('/HealthTracker')}>Health Tracker</button>
        </div>
        <div className='widget'>
        <button onClick={() => navigate('/AiSummary')}>Ask an AI</button>
        </div>
      </div>
      <div className='right'>
        <div className='widget'>
        <button onClick={() => navigate('/MedicalData')}>Medical Information</button>
        </div>
      </div>
    </div>
  )
}

export default App
