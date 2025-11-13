import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
// import Dashboard from './pages/Dashboard';
import NewDelivery from './pages/dashboard/NewDelivery';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      
      <Route path='/dashboard' element={<DashboardLayout/>}>
        <Route index element={<DashboardHome/>} />
        <Route path='new-delivery' element={<NewDelivery/>} />
      </Route>
      
    </Routes>
    </>
  )
}

export default App;