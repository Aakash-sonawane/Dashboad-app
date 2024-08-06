// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Sidebar from './components/SideBar.js';
import Dashboard from './Dashboard';
import data from './data.js'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-wrap'>
        <Sidebar/>
        <Dashboard data={data}/>
      </div>
    </div>
  );
}

export default App;
