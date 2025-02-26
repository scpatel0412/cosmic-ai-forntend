import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import About from './pages/About'
import Register from './pages/Register'
import Contact from './pages/Contact'
import { Bounce, ToastContainer } from 'react-toastify'
import Chat from './pages/Chat'
import PrivateRoute from './PrivateRoute'
import Subscription from './pages/Subscription'
import Success from './pages/Success'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route element={<PrivateRoute />}>
          <Route path="/chat/:id?" element={<Chat />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/success" element={<Success />} />
        </Route>
        <Route path="*" element={<Navigate to='/not-found' />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </BrowserRouter>
  )
}

export default App
