// 회원가입을 담당하는 라우트

import Footer from "../components/Footer";
import "./Join.css"

export default function Join() {
    return (
        <>
            <div className="joinMain fullsize">
                <div className="idAndPasswordDefaultAddress">
                    <div className="id from-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="idInJoinInput"
                            placeholder="ID"
                        />
                        <label htmlFor="idInJoinInput">ID</label>
                    </div>
                    <div className="id from-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="passwordInJoinInput"
                            placeholder="Password"
                        />
                        <label htmlFor="passwordInJoinInput">PASSWORD</label>
                    </div>
                    <div className="id from-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="addressInJoinInput"
                            placeholder="Address"
                        />
                        <label htmlFor="addressInJoinInput">ADDRESS</label>
                    </div>
                </div>
                <div className="buttionContainer">
                        <div className="d-grid gap-2">
                            <button className="loginButton btn btn-primary" type="button">Join</button>
                        </div>
                    </div>
                <Footer/>
            </div>
        </>
    )
}