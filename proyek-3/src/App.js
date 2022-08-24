

import {Link,Route, Routes} from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import User from './pages/User/User';
import Gallery from './pages/Gallery/Gallery';
import Favorite from './pages/Favorite/Favorite';
import Profile from './pages/User/Profile/Profile';
import Settings from './pages/User/Settings/Settings';
import Music from './pages/Favorite/Music/Music';



function App() {
    return (
        <>
        <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/User'>User</Link></li>
            <ul>
              <li><Link to='User/Profile'>Profile</Link></li>
              <li><Link to='User/Settings'>Settings</Link></li>
            </ul>
            <li><Link to='/Gallery'>Gallery</Link></li>
            <li><Link to='/Favorite'>Favorite</Link></li>
            <ul>
              <li><Link to='Favorite/Music'>Music</Link></li>
            </ul>           
        </ul>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/User' element={<User/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/Favorite' element={<Favorite/>}/>

            {/* Nested router */}
            <Route path='/Favorite/Music' element={<Music/>}/>
            <Route path='/User/Profile' element={<Profile/>}/>
            <Route path='/User/Settings' element={<Settings/>}/>
        </Routes>
        </>
    )
}
 export default App;
