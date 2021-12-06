import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import PageNotFound from './Shared/PageNotFound/PageNotFound';

function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;