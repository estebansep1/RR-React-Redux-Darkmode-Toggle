import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'

function App() {
  
  return (
    <div style={{ backgroundColor: 'white', color: 'white' }} className="App">
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
