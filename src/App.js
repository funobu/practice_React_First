import logo from './logo.svg';
import './App.css';
import HeaderMenu from './Components/Header/HeaderMenu';
import Basic1 from './Components/practice/basic1';
import Basic2 from './Components/practice/Basic2';

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <Basic1 title="こんにちは" />
      <Basic2 />
    </div>
  );
}

export default App;
