import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './components/Register';
import User from './components/User';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App