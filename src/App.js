import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import PageNotFound from './Shared/PageNotFound/PageNotFound';
import UpdateNote from './Pages/UpdateNote/UpdateNote';

function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route exact path="/notes/update/:noteId" element={ <UpdateNote /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;