import React from 'react';
import logo from './logo.svg';
import '../App.css';
import styled from "styled-components"

/********************************
 * フッター作成ファイル
 ********************************/
function Fotter() {
  
  /********************************
  * フッター本体
  ********************************/
  return (
    <SFotter>
      <SCopy>&copy; 2022 MACTY</SCopy>
    </SFotter>
    
  );
}

export default Fotter;


/********************************
 * CSS
 ********************************/
/*全体*/
 const SFotter = styled.footer`
    width: 100%;
    display: flex;
    text-align: center;
    height:70px;
    background-color: #86cecb;
    // position: absolute;
    bottom: 0;
    `;

const SCopy = styled.p`
    margin:auto
`