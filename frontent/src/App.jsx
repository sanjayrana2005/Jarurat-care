import './App.css'
import Header from './components/Header'
import PatientDetails from './components/PatientDetails';
import Patients from './components/Patients'
import {Routes, Route } from "react-router-dom";

function App() {
return (
  <main>
    <Header/>
      <Routes>
        <Route path="/" element={<Patients />} />
         <Route path="/patient/:id" element={<PatientDetails />} />
      </Routes>
  </main>
)
}

export default App
