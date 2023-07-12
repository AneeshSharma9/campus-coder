import './App.css';
import Navbar from './components/Navbar'
import { Account } from './components/Account';

function App() {
  return (
    <Account>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <Navbar />
        <h1>Campus Coder</h1>
      </div>
    </Account>

  );
}

export default App;
