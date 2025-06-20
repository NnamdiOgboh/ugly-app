
import './App.css';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Gallery />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
