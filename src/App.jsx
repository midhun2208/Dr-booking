
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DrBooking from './Components/DrBooking/DrBooking';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import View from './Components/Viewdoc/View';



function App() {
  return (
    <div >
      <Header/>
        <Routes>
          <Route path='/' element={ <DrBooking/>}/>
          <Route path='/view/:id' element = {<View/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
