import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Plans from './components/Plans';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 
    return(
      <BrowserRouter>
      <Routes>
          <Route path='/' Component={Home} />
          <Route path='/plans' Component={Plans} />
      </Routes>
      </BrowserRouter>
    )
  
  // return (
  //   <div>
  //     <Header />
  //         <Home />
  //     <Footer />
  //   </div>
  // );
}

export default App
