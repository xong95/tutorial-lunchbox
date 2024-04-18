// 로그인 실패시 화면 맨 위에 뜨는 alert 창이다
// 1초후 꺼짐

import "./LoginFailAlert.css";

export default function LoginFailAlert() {
  return (
    <>
      <div className="alert alert-danger" role="alert">
        login failed!
      </div>
    </>
  );
}
