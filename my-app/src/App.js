import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import 'flowbite';  // Import Flowbite JS for interactivity
import MyCarousel from './components/test';


function App() {
  return (
    <div className="App h-screen">
   <Header/>
   <MyCarousel/>

    </div>
  );
}

export default App;
