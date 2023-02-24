// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import react from 'react'
// import Login from "./components/loginComponent.jsx";
// import SignUp from "./components/signupComponent";
// import Details from "./components/userDetailsComponent";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <h1>Vola Finance</h1>
//         <Router>
//           <Routes>
//             <Route exact path="/" element={<Login />} />
//             <Route exact path="/signup" element={<SignUp />} />
//             <Route exact path="/details" element={<Details />} />
//           </Routes>
//         </Router>
//       </div>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/loginComponent.jsx";
import SignUp from "./components/signupComponent";
import Details from "./components/userDetailsComponent";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <div>
        <h1>Vola Finance</h1>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/details" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
