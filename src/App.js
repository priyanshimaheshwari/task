import { BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage"
import SinglePage from "./pages/Singlepage"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" Component={Homepage}/>
          <Route exact path="/about" Component={Aboutpage}/>
          <Route exact path="/singleshow/:id" Component={SinglePage}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
