import { useState } from "react";
import Loading from '../components/Login/Loading';
import LoginMain from "../components/Login/LoginMain"
import Footer from "../components/Footer"

export default function Login() {
    const [loading, setLoading] = useState(true);
    setTimeout(()=>{
        setLoading(false);
    },3000)
    return (
        <>
            {loading ? <Loading/> : <LoginMain/>}
        </>
    )
}