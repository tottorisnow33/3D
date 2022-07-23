import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../Atoms/Header';
import Footer from '../Atoms/Footer';
import MainWindow from '../Atoms/MainWindow';

function MainPage() {
  
  const handleClick = ()=>{
    console.log("test")
  }


  return (
    
    <div className="Main">
      <Header />
      <MainWindow />
      <Footer />
    </div>
  );
}

export default MainPage;