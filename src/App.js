import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import {useStateValue} from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log(dispatch)
  
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
          {/* Header */}
        <Header />

        <div className='app__body'>
          <Sidebar />
          <Switch>
            <Route path='/room/:roomId'>
              <Chat />
            </Route>
          </Switch>
            {/* Sidebar */}
            {/* React router -> chat screen */}
        </div>
        </>
        )}
        
      </Router>
    </div>
  );
}

export default App;
