
import MenuComponent from './components/MenuComponent';
import GridComponent from './components/GridComponent';
import { BrowserRouter as Router, Route, Routes , Navigate, } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import DashboardPage from './components/DashboardPage';


function App() {
  return (
    <div className = "main-box">
    <div className="columns is-desktop is-flex">
          <div className="column is-2 is-flex" >
          <MenuComponent/>
          </div>
          <div className="column is-9 is-flex">
          <Router>
          <Routes>
            <Route exact path = "/" element = {<GridComponent />}/>
            <Route exact path = "/about" element = {<AboutPage />}/>
            <Route exact path = "/dashboard" element = {<DashboardPage />}/>
            <Route path="/home" element={<Navigate to="/" replace />} />
          </Routes>
          </Router>
          </div>
        </div>
    </div>
  );
}

export default App;
