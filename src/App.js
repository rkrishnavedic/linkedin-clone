import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import Feed from './components/feed/feed';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import {logout, login,selectUser} from './features/userSlice';
import Login from './components/login/login';
import {auth} from './firebase/firebase';
function App() {

  const user = useSelector(selectUser); 
  const dispatch = useDispatch();
  
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        console.log('auth');
        dispatch(login({
          email: authUser.email,
          uid: authUser.uid,
          displayName: authUser.displayName,
          photoUrl: authUser.photoURL
        }))
      }else{
        dispatch(logout())
      }
    })
  },[]);

  return (
    <div className="app">

      {!user? 
      <Login/>
      :
      <>
      <Header/>
      <div className="app-body">
        <Sidebar/>
        <Feed/>
      </div>
      </>
      }
    </div>

  );
}

export default App;
