import Navbar from './components/navbar/Navbar'; 
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./components/pages/home/Home";

// import {Header} from "./components";


function App() {
  return (
  //  <main>
  //    <header className="header-bg">
  //      <Navbar/>
  //      <Header/>
  //    </header>
  //  </main>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/"  element={<Home/>} />
    </Routes>
    </BrowserRouter>


  );
}

export default App;
