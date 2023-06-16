import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Heading from './components/Heading';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
