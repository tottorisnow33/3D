import React from 'react';
import { FC, useEffect, useState, useRef, useContext  } from "react";
import logo from './logo.svg';
import '../App.css';
import styled from "styled-components"
import axios from 'axios'

/********************************
 * メインウィンドウ作成ファイル
 ********************************/
function MainWindow() {

  const inputRef = useRef<HTMLInputElement>(null);  

    /******************************
   * geojsonファイル追加ボタン押下時のイベントハンドラ
   *****************************/
  const onfileInputChange = async (event: React.ChangeEvent<HTMLInputElement>)=> {
    console.log(event.target.files);
    const selectFile = event.target.files

    /*選択されたファイルループ*/
    for (let i = 0; i < selectFile?.length!; i++ ) {

      const file     = selectFile?.[i]
      const filename = selectFile?.[i].name
      console.log(filename)

      /**********画像のアップロード***********/
      const params = new FormData();

      /*型チェック*/
      if(typeof file == 'undefined'){return}
      if(typeof filename == 'undefined'){return}
      
      params.append('file', file);
      params.append("filename", filename)

      await axios.post(`http://localhost:8000/recog`, params,
            {
                headers: {
                'content-type': 'multipart/form-data',
            },
      })
      .then((response) =>{
        console.log("識別結果取得");
        console.log(response)
      })
      .catch((error)=>{
        console.log("接続失敗");
      })

    }
  }
  

  /******************************
   *ファイルアップロード押下時イベントハンドラ(これを経由して上のonfileInputChangeが呼ばれる)
   *****************************/
  const fileUpload = () => {
    inputRef.current?.click();
  }

  /********************************
  * メインウィンドウ本体
  ********************************/
  return (
    // <p>
      
    //     {/* <input hidden ref={inputRef} type="file" multiple accept=".png, .jpg" onChange={onfileInputChange} />
    //      */}
        
    // </p>
    <p>
    <SList>
    <SContainer>
      <STitle>田園</STitle>
      <SImg src={`${process.env.PUBLIC_URL}/田園.jpg`} alt="Logo" />
      <SButton onClick={fileUpload}>ダウンロード</SButton>
      <SButton onClick={fileUpload}>ビューイング</SButton>
    </SContainer>

    <SContainer>
      <STitle>田園</STitle>
      <SImg src={`${process.env.PUBLIC_URL}/田園.jpg`} alt="Logo" />
      <SButton onClick={fileUpload}>ダウンロード</SButton>
      <SButton onClick={fileUpload}>ビューイング</SButton>
    </SContainer>

    <SContainer>
      <STitle>田園</STitle>
      <SImg src={`${process.env.PUBLIC_URL}/田園.jpg`} alt="Logo" />
      <SButton onClick={fileUpload}>ダウンロード</SButton>
      <SButton onClick={fileUpload}>ビューイング</SButton>
    </SContainer>

    <SContainer>
      <STitle>田園</STitle>
      <SImg src={`${process.env.PUBLIC_URL}/田園.jpg`} alt="Logo" />
      <SButton onClick={fileUpload}>ダウンロード</SButton>
      <SButton onClick={fileUpload}>ビューイング</SButton>
    </SContainer>

    <SContainer>
      <STitle>田園</STitle>
      <SImg src={`${process.env.PUBLIC_URL}/田園.jpg`} alt="Logo" />
      <SButton onClick={fileUpload}>ダウンロード</SButton>
      <SButton onClick={fileUpload}>ビューイング</SButton>
    </SContainer>

    <SContainer>
      <STitle>田園</STitle>
      <SImg src={`${process.env.PUBLIC_URL}/田園.jpg`} alt="Logo" />
      <SButton onClick={fileUpload}>ダウンロード</SButton>
      <SButton onClick={fileUpload}>ビューイング</SButton>
    </SContainer>

    <SContainer>
      <STitle>田園</STitle>
      <SImg src={`${process.env.PUBLIC_URL}/田園.jpg`} alt="Logo" />
      <SButton onClick={fileUpload}>ダウンロード</SButton>
      <SButton onClick={fileUpload}>ビューイング</SButton>
    </SContainer>

    <SContainer>
      <STitle>田園</STitle>
      <SImg src={`${process.env.PUBLIC_URL}/田園.jpg`} alt="Logo" />
      <SButton onClick={fileUpload}>ダウンロード</SButton>
      <SButton onClick={fileUpload}>ビューイング</SButton>
    </SContainer>

    <SContainer>
      <STitle>田園</STitle>
      <SImg src={`${process.env.PUBLIC_URL}/田園.jpg`} alt="Logo" />
      <SButton onClick={fileUpload}>ダウンロード</SButton>
      <SButton onClick={fileUpload}>ビューイング</SButton>
    </SContainer>

    </SList>
  </p>
  );
}

export default MainWindow;


/********************************
 * CSS
 ********************************/
/*全体*/
 const SButton = styled.button`
    width: 100px;
    margin-top: 15px;
    margin-left: 15px;
    height: 50px;
    font-size: 10px;
    text-align: center;
    background-color: #fffeec;
    border: none;
    box-shadow: #ddd 3px 3px 3px 3px;
    border-radius: 8px;
    &:hover {
      cusor: pointer;
      opacity: 0.5;
    }
`

const SContainer = styled.div`
width: 250px;
height: 350px;
background-color: #ffffff;
box-shadow: #ddd 3px 3px 3px 3px;
border-radius: 8px;
margin-top: 20px;
margin-left: 20px;
display: inline-block;
`

const SList = styled.ul`
width: 100%;
// height: 90%;
background-color: #ffffff;
// box-shadow: #ddd 3px 3px 3px 3px;
border-radius: 8px;
// margin-top: 5%;
margin-left:0%;
margin-bottom: 30px;
`

const STitle = styled.h3`
width: 90%;
// height: 90%;
background-color: #ffffff;
// box-shadow: #ddd 3px 3px 3px 3px;
border-radius: 8px;
// margin-top: 5%;
margin-left: 5%;
`

const SImg = styled.img`
width: 200px;
height: 200px;
background-color: #ffffff;
// box-shadow: #ddd 3px 3px 3px 3px;
border-radius: 8px;
// margin-top: 5%;
margin-left: 10%;
`