import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import NewDelivery from './pages/NewDelivery';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route index element={<NewDelivery/>} />
      </Route>
      
    </Routes>
    </>
  )
}

export default App;