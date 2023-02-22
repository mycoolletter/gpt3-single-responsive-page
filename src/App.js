import React from 'react';
import {Brand, CTA, Navbar} from './components';
import { Footer, Header, WhatGPT3, Possibility, Features, Blog} from './containers';
import './App.css'

function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App;