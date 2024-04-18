//회원가입 실패시 화면 맨 위에 뜨는 경고창
//1초후 꺼짐

import "./JoinFailAlert.css";
export default function JoinFailAlert() {
  return (
    <>
      <div className="alert alert-danger" role="alert">
        회원가입 실패
      </div>
    </>
  );
}
