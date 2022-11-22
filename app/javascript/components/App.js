import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import Error404 from './Error404';
import Home from './Home';
function App() {
    return (
     <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/greetings" element={<Greeting />}/>
            <Route path="*" element={<Error404 />} />
      </Routes>
    );
}
export default App; 