import React from 'react';
import logo from './logo.svg';
import '../App.css';
import styled from "styled-components"

/********************************
 * ヘッダー作成ファイル
 ********************************/
function Header() {
  


  /********************************
  * ヘッダー本体
  ********************************/
  return (
    <SHeader>
      <STitle>
        そのままDB
      </STitle>
      <Explain>
        風景や建造物, 小物を3Dオブジェクトとして保存するデータベースです。<br></br>
        生活や時代をそのままの姿で残していけたらと思って作成しました。<br></br>
        {/* DLしたファイルはCloud Compareなどのビューアで見ることができます。 */}
      </Explain>
    </SHeader>
  );
}

export default Header;


/********************************
 * CSS
 ********************************/
/*全体*/
 const SHeader = styled.header`
    font-size: 30px;
    max-width: 100%;
    display: flex;
    height: 120px;
    background-color: #86cecb;
    box-shadow: #000 0px 0px 4px 4px;
    `;

/*タイトル*/
const STitle = styled.h2`
    margin: 0px 0px 0px 40px
`;

const Explain = styled.div`
    font-size: 15px;
    margin: 0px 0px 0px 40px
`;