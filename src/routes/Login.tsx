// 로그인을 담당하는 라우트

import { useState, useEffect } from "react";
import Loading from '../components/Login/Loading';
import LoginMain from "../components/Login/LoginMain"
import RunLogin from "../backend/RunLogin";
import LoginFailAlert from "../components/Login/LoginFailAlert"
import {Redirect}  from "react-router";

export default function Login() {
    const [loading, setLoading] = useState(true);           // 로딩페이지 보여주는 플레그
    // id: 사용자가 디비로부터 받아온 아이디
    // LoginMain, RunLogin 에 props 전달
    // 현재 컴포넌트인 Login 에서 할일 끝나면 Main 라우트로 props 전달
    // LoginMain 으로 setId 를 보내서, 입력창에 사용자가 id를 변경시킬때마다 setId 실행
    const [id, setId] = useState("");
    // passwd: 사용자가 입력한 패스워드
    // LoginMain, RunLogin 에 props 전달,
    // LoginMain 으로 setPasswd 를 보내서, 입력창에 사용자가 passwd를 변경시킬때마다 setPasswd 실행
    const [passwd, setPasswd] = useState("");    
    // RunLogin 컴포넌트 플레그
    // 주요 로직에 주의
    const [runLogin, setRunLogin] = useState(false);
    // LoginFailAlert 컴포넌트 플래그
    // RunLogin 컴포넌트에서 컨트롤 한다.
    const [failedAlarm, setFailedAlarm] = useState(false);
    // 현재 컴포넌트인 Login 에서 로그인 성공시 /main 으로 가기위한 리다이렉트 플래그
    // goMain 함수가 실행되면 켜지는 플래그
    const [goMainFlag, setGoMainFlag] = useState(false);

    //첫 화면은 로딩화면 이었는데
    // 3초후 꺼지고 로그인화면을 띄운다
    setTimeout(() => {
        setLoading(false);
    }, 3000);

    // setFailedAlarm 은 RunLogin 컴포넌트에서 컨트롤 하는데,
    // 만약 failedAlarm 플래그가 켜지면
    // useEffect가 바뀐것을 인지하여 1초후에 끈다.
    useEffect(() => {
        if(failedAlarm){
            setTimeout(() => {
                setFailedAlarm(false);
            }, 1000);
        }
    });
    //clean-up
    // 현재 컴포넌트인 Login 을 떠나 Main 으로 가기 전에
    // state 를 사용하는 컴포넌트를 끄기위해 존재.
    useEffect(() => {
        return () => {
            setRunLogin(false);
        }
    },[])
    // LoginMain 컴포넌트에서 사용함
    const login = () => {
        setRunLogin(true);
    };
    // RunLogin 에서 사용함
    const goMain = () => {
        setRunLogin(false);
        setGoMainFlag(true);
    }
    setTimeout(()=>{
        setLoading(false);
    },3000)
    return (
        <>
        {failedAlarm && <LoginFailAlert/>
            
           
        }
            {loading ? (
            <Loading/> 
            ): (
            <LoginMain
            passwd={passwd}
            id={id}
            setId={setId}
            setPasswd={setPasswd}
            login={login}
            />
        )}
        { runLogin && (
        <RunLogin 
            id={id}
            passwd={passwd}
            setRunLogin={setRunLogin}
            setFailedAlarm={setFailedAlarm}
            goMain = {goMain}
            />
        )}
        {goMainFlag && (
            <Redirect to={{
                pathname: "/main",
                state: {
                    iFromLogin : id
                }
            }}/>
        )}
        </>
    )
}