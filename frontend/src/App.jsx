import About from './components/About';
import Features from './components/Features';
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
    </>
  )
}

export default App
