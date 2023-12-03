import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="navbar-spacer">
        <Outlet/>
      </div>
    </>
  )
}

export default App