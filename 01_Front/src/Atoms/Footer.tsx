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
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    height:70px;
    background-color: #86cecb;
    `;

const SCopy = styled.p`
    margin-top-20px;
`