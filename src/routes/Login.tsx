import { useState, useEffect } from "react";
import Loading from '../components/Login/Loading';
import LoginMain from "../components/Login/LoginMain"
import RunLogin from "../backend/RunLogin";
import LoginFailAlert from "../components/Login/LoginFailAlert"

export default function Login() {
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState("");
    const [passwd, setPasswd] = useState("");
    const [runLogin, setRunLogin] = useState(false);
    const [failedAlarm, setFailedAlarm] = useState(false);
    useEffect(() => {
        if(failedAlarm){
            setTimeout(() => {
                setFailedAlarm(false);
            }, 1000);
        }
    },[failedAlarm]);
    const login = () => {
        setRunLogin(true);
    };
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
        { runLogin ? <RunLogin 
                        id={id}
                        passwd={passwd}
                        setRunLogin={setRunLogin}
                        setFailedAlarm={setFailedAlarm}
                        /> :  <></> }
        </>
    )
}