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
        <button>AI Summary</button>
        </div>
      </div>
      <div className='right'>
        <div className='widget'>
        <button>Medical Information</button>
        </div>
        <div className='widget'>
          <button>What Did I Miss?</button>
        </div>
      </div>
    </div>
  )
}

export default App
