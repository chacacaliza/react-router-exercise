

import {Link,Route, Routes} from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Galery from './pages/Galery/Galery';
import Music from './pages/Music/Music';
import Film from './pages/Film/Film';

function App() {
    return (
        <>
        <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/Profile'>Profile</Link></li>
            <li><Link to='/Galery'>Galery</Link></li>
            <li><Link to='/Music'>Music</Link></li>
            <li><Link to='/Film'>Film</Link></li>
        </ul>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/Galery' element={<Galery/>}/>
            <Route path='/Music' element={<Music/>}/>
            <Route path='/Film' element={<Film/>}/>
        </Routes>
        </>
    )
}
 export default App;
