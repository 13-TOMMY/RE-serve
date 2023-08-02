import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import MapReservation from './pages/MapReservation/MapReservation';
import PersonalReservations from './pages/PersonalReservations/PersonalReservations';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/map-reservation" element={<MapReservation />} />
          <Route path="/personal-peservations" element={<PersonalReservations />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
