import React from 'react';
import ReactDOM from 'react-dom/client'
import './style.css'
import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom'
import  HomePage from './components/homepage'
import  About from './components/About'
import Contact from './components/Contact'
import  Documantaion from'./components/Documantaion'
import App from './components/App'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
   <Routes>
     <Route path="/"element={<App/>}/>
       <Route path="/homepage" element={<HomePage/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/documantaion" element={<Documantaion/>} >
       </Route>
   </Routes>
   </BrowserRouter>
);

export default ReactDOM