import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout, selectUser } from './app/userSlice';
import { useDispatch, useSelector } from 'react-redux'
import Profile from './screens/Profile';
import Details from './screens/Details';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))

      }
      else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [])
  return (
    <div className="app">
      <Router>
        {!user ? (<Login />) : (
          <Switch>
            <Route exact path='/details'>
              <Details />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </Router>

    </div>
  );
}

export default App;
