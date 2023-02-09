import React from 'react';

import './styles/main.css';
import { SidebarProvider } from './components/Sidebar/SidebarContext';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { CardTitle } from './components/CardTitle';
import Login from './pages/Login';
import Profile from './pages/Profile';
function App() {
  return (
    <SidebarProvider>
      <Router>
          <Sidebar>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/dashboard' element={<Home/>}/>
              <Route path='/AlterarLogin' element={<Login/>}/>
              <Route path='/EditarPerfil' element={<Profile/>}/>
            </Routes>
          </Sidebar>
      </Router>
    </SidebarProvider>
  )
}

export default App;
