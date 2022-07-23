import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Header from '../Atoms/Header';
import Footer from '../Atoms/Footer';
import MainWindow from '../Atoms/MainWindow';
import styled from "styled-components"

function MainPage() {
  
  const handleClick = ()=>{
    console.log("test")
  }


  return (
    
    <div className="Main">
      <Scontainer>
        <Header />
        <MainWindow />
        <Footer />
      </Scontainer>
    </div>
  );
}

export default MainPage;

const Scontainer = styled.div`
position: relative;
padding-bottom: 60px;
box-sizing: border-box;
min-height: 100vh;
`