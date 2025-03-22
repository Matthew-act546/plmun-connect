import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import Home from './components/Home';
import NavigationalBar from './components/NavigationalBar';
import './styles/styles.scss';

function App() {


  return (
    <>
      <NavigationalBar/>
      <Home />
      <About />
      <Features />
      <Footer />
    </>
  )
}

export default App
