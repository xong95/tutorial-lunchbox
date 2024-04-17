// 회원가입을 담당하는 라우트
import {useState} from "react";
import IdAndPasswordDefaultAdress from "../components/Join/IdAndPasswordDefaultAdress";
import Footer from "../components/Footer";
import "./Join.css"

export default function Join() {
    const [id,setId] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const alarmOn = () => {
        
    }
    return (
        <>
            <div className="joinMain fullsize">
                <IdAndPasswordDefaultAdress
                    id={id}
                    setId={setId}
                    password={password}
                    setPassword={setPassword}
                    address={address}
                    setAddress={setAddress}
                    alarmOn={alarmOn}
                />
                <Footer/>
            </div>
        </>
    )
}