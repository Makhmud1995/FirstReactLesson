import React from 'react';
import {Link} from 'react-router-dom'
import '../style.css'

const App =()=> {
  return (
  <div className='container'>

    
      <Link  to='/'>
    <div className='tab'>
    <p>
      Home
    </p>
    </div>
    </Link>
   
    <Link to='/About'>
    <div className='tab'>
    <p>
      About
    </p>
    </div>
    </Link>
    <Link to='/Contact'>
    <div className='tab'>
    <p>
      Contact
    </p>
    </div>
    </Link>
    <Link to='/Documantaion'>
    <div className='tab'>
    <p>
      Documentation
    </p>
     </div>
    </Link>
   </div>
  )
}

export default App;
