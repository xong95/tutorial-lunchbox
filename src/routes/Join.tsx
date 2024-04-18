// 회원가입을 담당하는 라우트
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import IdAndPasswordDefaultAdress from "../components/Join/IdAndPasswordDefaultAdress";
import JoinFailAlert from "../components/Join/JoinFailAlert";
import Footer from "../components/Footer";
import "./Join.css";

export default function Join() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [idAndPasswordDefaultAdress, setIdAndPasswordDefaultAdress] =
    useState(true);
  const [failedAlert, setFailedAlert] = useState(false);
  const [goMainFlag, setGoMainFlag] = useState(false);

  // 실패했을 경우에 알람은 1초후에 꺼진다.
  const alarmOn = () => {
    setFailedAlert(true);
    setTimeout(() => {
      setFailedAlert(false);
    }, 1000);
  };
  // clean-up
  // 현재  컴포넌트인 Join을 떠나 Main으로 가기전에
  // state를 사용하는 컴포넌트를 끄기 위해 존재
  useEffect(() => {
    return () => {
      setIdAndPasswordDefaultAdress(false);
      setGoMainFlag(false);
    };
  }, []);
  return (
    <>
      <div className="joinMain fullsize">
        {/* 평소엔 가려져 있다가 회원가입 실패시 */}
        {failedAlert && <JoinFailAlert />}
        {/* 컴포넌트를 따로뺀 이유는 Main으로 가기전 mutation작동을 중지시키기 위함 */}
        {idAndPasswordDefaultAdress && (
          <IdAndPasswordDefaultAdress
            id={id}
            setId={setId}
            password={password}
            setPassword={setPassword}
            address={address}
            setAddress={setAddress}
            alarmOn={alarmOn}
            setGoMainFlag={setGoMainFlag}
          />
        )}
        <Footer />
        {goMainFlag && (
          <Redirect
            to={{
              pathname: "/main",
              state: {
                idFromLogin: id,
              },
            }}
          />
        )}
      </div>
    </>
  );
}
