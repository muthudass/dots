import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Dashboard } from './dashboard/dashboard.component';
import { Login } from './login/login.component';
import { LogoContainer } from './logo/logo.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<>
            {/* <div className='logo-header'><LogoContainer /></div> */}
            <div className='app-login'><Login /></div>
            <div className='footer'></div>
          </>} />
          {/* <Route path="/login" element={<>
            <div className='logo-header'><LogoContainer /></div>
            <div className='app-login'><Login /></div>
          </>} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
