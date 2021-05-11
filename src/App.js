import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import Feed from './components/feed/feed';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import {logout, login,selectUser} from './features/userSlice';
import Login from './components/login/login';
import {auth, db} from './firebase/firebase';
import Widgets from './components/widgets/widgets';

function App() {

  const user = useSelector(selectUser); 
  const dispatch = useDispatch();
  
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        console.log('auth');

        const userRef = db.collection('user').doc(`${authUser.uid}`)
                    .get()
                    .then((doc)=>{
                      const dataObj = doc.data();
                      dispatch(login({
                        email: authUser.email,
                        uid: authUser.uid,
                        background: dataObj.backgroundURL,
                        desc: dataObj.bio,
                        displayName: dataObj.displayName,
                        photoUrl: dataObj.photoURL
                      }))
                    })

       
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
        <Widgets/>
      </div>
      </>
      }
    </div>

  );
}

export default App;
