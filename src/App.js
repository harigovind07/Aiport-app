import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Service from './Components/Service';
import ContactUs from './Components/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faq from './Components/Faq';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Faq' element={<Faq/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
