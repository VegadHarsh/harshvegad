import React from 'react';
import "./App.css";
import Layout from "./Layout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from "./common/Home";
import Contact from './common/Contact';
import About from './common/About';
import Projects from './common/Projects';
import Notfound from "./common/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path='home' element={<Home />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path="about" element={<About/>}/>
      <Route path='projects' element={<Projects/>}/>
      {/* 404 Route - must be last */}
      <Route path="*" element={<Notfound/>} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
