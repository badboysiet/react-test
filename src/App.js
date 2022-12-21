import { Popular, Upcoming} from './Pages';
import Header from './Layouts/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
            <Route exact path="/" element={<Popular />} />
            <Route exact path="/upcoming" element={<Upcoming />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
