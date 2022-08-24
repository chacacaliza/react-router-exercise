import React from 'react'
// import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
// import home from './home';
import {Link,Route, Routes} from 'react-router-dom';
import Artist from './Artist';
import './App.css';



function App() {
  return (
    <>
    <ul>
    <li><Link to="/artist/Ariana">Ariana</Link></li>
    <li><Link to="/artist/Taylor">Taylor</Link></li>
    <li><Link to="/artist/Zayn">Zayn</Link></li>
    <li><Link to="/artist/Gigi">Gigi</Link></li>
    <li><Link to="/artist/Jeon Jungkook">Jeon Jungkook</Link></li>
    <li><Link to="/artist/Kim Taehyung">Kim Taehyung</Link></li>
    <li><Link to="/artist/Park Jimin">Park Jimin</Link></li>
    <li><Link to="/artist/Kim Namjoon">Kim Namjoon</Link></li>
    <li><Link to="/artist/Kim Seokjin">Kim Seokjin</Link></li>
    <li><Link to="/artist/Min Yoongi">Min Yoongi</Link></li>
    <li><Link to="/artist/Jung Hoseok">Jung Hoseok</Link></li>
    <li><Link to="/artist/Charlie Puth">Charlie Puth</Link></li>
    <li><Link to="/artist/Billie">Billie</Link></li>
    <li><Link to="/artist/Troye Sivan">Troye Sivan</Link></li>
    <li><Link to="/artist/Lauv">Lauv</Link></li>
    </ul>

    <Routes>
    <Route path="/artist/:name" element={<Artist />}/>
    </Routes>
    </>
  );
}

export default App;













    // {/* <h1>List Favorite Artist</h1>
    // {
    //   artist.map ((item) =>
    //   <div><Link to={"/artist/"+item.id+"/"+item.name}>{item.name}</Link></div>
    //   )
    // } */}
    // <Routes>
    // <Route path='/root' element={<home/>}/>
    // <Route path="artist/:name" element={<artist />}/>
    // </Routes>

 


