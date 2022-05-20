import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReview from './Pages/DashBoard/MyReview';
import MyHistory from './Pages/DashBoard/MyHistory';
import Users from './Pages/DashBoard/Users';
import AddDoctor from './Pages/DashBoard/AddDoctor';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageDoctors from './Pages/DashBoard/ManageDoctors';
import Payment from './Pages/DashBoard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route  path='/appointment' element={
      <RequireAuth>
        <Appointment></Appointment>
        </RequireAuth>
      }></Route>

      <Route  path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
        <Route index element={<MyAppointment></MyAppointment>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        <Route path='history' element={<MyHistory></MyHistory>}></Route>
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor> </RequireAdmin>}></Route>
        <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors></ManageDoctors> </RequireAdmin>}></Route>
      </Route>

      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
