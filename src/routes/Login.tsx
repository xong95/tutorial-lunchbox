import { useState } from "react";
import Loading from '../components/Login/Loading';
import LoginMain from "../components/Login/LoginMain"
import RunLogin from "../backend/RunLogin";

export default function Login() {
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState("");
    const [passwd, setPasswd] = useState("");
    const [runLogin, setRunLogin] = useState(false);
    const login = () => {
        setRunLogin(true);
    }
    setTimeout(()=>{
        setLoading(false);
    },3000)
    return (
        <>
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
        { runLogin ? <RunLogin id={id} passwd={passwd}/> :  <></> }
        </>
    )
}