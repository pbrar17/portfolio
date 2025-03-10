import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Footer from './components/Footer/footer';
import Skills from './components/Skills/skills';
import Examples from './components/Works/works';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Examples />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
