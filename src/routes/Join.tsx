// 회원가입을 담당하는 라우트
import {useState} from "react";
import IdAndPasswordDefaultAdress from "../components/Join/IdAndPasswordDefaultAdress";
import JoinFailAlert from "../components/Join/JoinFailAlert"
import Footer from "../components/Footer";
import "./Join.css"

export default function Join() {
    const [id,setId] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const[failedAlert, setFailedAlert] = useState(false);

    // 실패했을 경우에 알람은 1초후에 꺼진다.
    const alarmOn = () => {
        setFailedAlert(true);
        setTimeout(() => {
            setFailedAlert(false);
        }, 1000);
    }
    return (
        <>
            <div className="joinMain fullsize">
                {/* 평소엔 가려져 있다가 회원가입 실패시 */}
                {failedAlert && <JoinFailAlert/>}
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