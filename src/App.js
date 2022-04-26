import './App.css';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Frontend/Pages/Home'
import Header from './Frontend/Header/Header';
import Footer from './Frontend/Footer/Footer';
import About from './Frontend/Pages/About';
import Checkout from './Frontend/Pages/Checkout';
import Login from './Frontend/Users/Login';
import Register from './Frontend/Users/Register';
import User from './Frontend/Users/User';
import ServiceDetails from './Frontend/Services/ServiceDetails';
import useServices from './Hooks/useServices';
import RequireAuth from './Frontend/Users/RequireAuth';
import Blogs from './Frontend/Blogs/Blogs';
import Error from './Frontend/Error/Error';
import ForgotPass from './Frontend/Users/ForgotPass';

export const serviceContext = createContext()
function App() {
  const [services] = useServices();
  return (
    <serviceContext.Provider value={[services]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/blogs' element={<Blogs></Blogs>}/>
        <Route path='/checkout' element={<Checkout></Checkout>}/>
        <Route path='/service/:serviceId' element={
              <RequireAuth>
                <ServiceDetails/>
              </RequireAuth>
        }/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/resetpassword' element={<ForgotPass></ForgotPass>}/>
        <Route path='/user' element={
          <RequireAuth>
                      <User></User>
              </RequireAuth>
        }/>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      
    <Footer></Footer>
    </serviceContext.Provider>
  );
}

export default App;
