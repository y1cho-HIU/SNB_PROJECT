import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Join from './Join';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"


//비로그인 상태일때
//회원가입과 로그인 기능
//submit버튼 어떻게 mui 넣는지?

function Welcome(){
    const [wantJoin, setWantJoin] = useState(false); //로그인할건지 회원가입할건지...초기엔 로그인 창 띄우게.
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const onIdHandler = (event) => {
        setInputId(event.target.value);
    }
    const onPwHandler = (event) => {
        setInputPw(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputId)
        console.log(inputPw)

        //서버로 보내기... axios? await?
        //response가 200이면 로그인
        //아니면 false...
    }
    

    return <div>
        <BrowserRouter>
            <h2>WELCOME</h2>
            {wantJoin?<Join /> : 
            <div className="starting">
                <form onSubmit={onSubmit}>
                    <p><input type="text" name="id" placeholder="ID" value={inputId} onChange={onIdHandler}/></p>
                    <p><input type="password" placeholder="PASSWORD" value={inputPw} onChange={onPwHandler}/></p>
                    <Button type="submit">로그인</Button>
                </form>
                <Link to="/join" onClick={event=>{
                    event.preventDefault();
                    setWantJoin(true);
                }}>회원가입</Link>
                {/* <Button variant="outlined" href="/join" onClick={event=>{
                    event.preventDefault();
                    setWantJoin(true);
                }}>회원가입</Button> */}
            </div>}
        </BrowserRouter>
    </div>
}
export default Welcome;