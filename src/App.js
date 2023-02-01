import './App.css';
import Blogs from './components/Blogs/Blogs';
import Collection from './components/Collection/Collection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Mathods from './components/Mathods/Mathods';
import Side2 from './components/Sides/Side2';
import Side3 from './components/Sides/Side3';
// import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Main />
      <Side2 />
      <Side3 />
      <Blogs />
      <Collection />
      <Mathods />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
