import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import {auth, provider} from './firebase';

function App() {
  const [user, setUser] = useState(null);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        alert(error.message);
      });
  }

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
