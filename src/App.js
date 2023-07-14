import './App.css';
import Navbar from './components/Navbar'
import { Account } from './components/Account';

function App() {
  return (
    <Account>
      <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        <Navbar />
        <div class="container">
          <h1>Campus Coder</h1>
          <hr />
          <p class="lead">
            Introducing Campus Coder!<br /><br />
            Are you a small business struggling to afford professionally done websites and automation scripts? Look no further!<br /><br />
            Imagine having access to a talented pool of computer science students, eager to take on your projects at a fraction of the price.<br /><br />
            Campus Coder is here to bridge the gap between small businesses and aspiring developers, creating a win-win situation for everyone involved!<br /><br />
            With 99.9% of businesses in the US falling into the small business category, we understand the challenges you face in accessing affordable development solutions.<br /><br />
            But fret not! Campus Coder is a revolutionary app that connects you with bright and passionate computer science students, hungry for real-world experience in their field.<br /><br />
            By working with these talented individuals, you not only get access to cost-effective solutions, but you also help nurture the next generation of tech superstars!<br /><br />
            With flexible timelines and a commitment to excellence, Campus Coder offers you the freedom to focus on what you do best, while talented students bring your visions to life.<br /><br />
            Whether it's developing websites, creating automation scripts, or tackling small tasks, Campus Coder empowers both businesses and students alike!<br /><br />
            So, join the vibrant community of visionaries and changemakers. Embrace innovation and unleash the power of collaboration with Campus Coder today!<br /><br />
            Don't miss this incredible opportunity to access top-notch talent, save money, and make a positive impact on the lives of aspiring developers. Register for Campus Coder now!
          </p>
          <hr />
        </div>
      </div>
    </Account>

  );
}

export default App;
