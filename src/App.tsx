import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
// import Dashboard from './pages/Dashboard';
import NewDelivery from './pages/dashboard/NewDelivery';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import DispatchSuccess from './pages/dashboard/DispatchSuccess';
import PaymentHistory from './pages/dashboard/PaymentHistory';
import { useAppContext } from './hooks/AppContext';


function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/signup' element={isLoggedIn? <Navigate to={"/dashboard"} replace/> : <SignupPage/>} />
      <Route path='/login' element={isLoggedIn? <Navigate to={"/dashboard"} replace/> : <LoginPage/>} />
      
      <Route path='/dashboard' element={isLoggedIn? <DashboardLayout/> : <Navigate to={"/login"} replace/>}>
        <Route index element={<DashboardHome/>} />
        <Route path='new-delivery' element={<NewDelivery/>} />
        <Route path='payment-history' element={<PaymentHistory/>} />
        <Route path='new-delivery/dispatched-success' element={<DispatchSuccess/>} />
      </Route>
      
    </Routes>
    </>
  )
}

export default App;