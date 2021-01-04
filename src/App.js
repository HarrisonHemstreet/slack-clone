import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Let's build a slack-clone</h1>
      {/* Header */}
      <Header />

      <div className='app__body'>
        <Sidebar />
          {/* Sidebar */}
          {/* React router -> chat screen */}
      </div>
      
    </div>
  );
}

export default App;
