

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






// import "./App.css";
// import Avatar from "./avatar/avatar";
// import StudentInfo from "./studentInfo/studentInfo";
// import avatar from "./assets/avatar1.jpg";
// import avatar2 from "./assets/avatar2.jpg";

// function App() {
//   return <div className="App">
//       <Avatar src={avatar} />
//       <Avatar src={avatar2} />
//       <StudentInfo name={'Mila'} status={'Student Coding Amman'} 
//       bio={'Sangat tertarik dengan React.js'}/>
//       <StudentInfo name={'Chaca'} status={'Student UMM'} 
//       bio={'Sangat tidak tertarik dengan React.js'}/>
//       </div>;
// }

// export default App;







// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
