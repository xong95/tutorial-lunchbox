import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./LoginMain.css";

interface PropTypes {
  id: string;
  passwd: string;
  setId: (id: string) => void;
  setPasswd: (passwd: string) => void;
  login: () => void;
}

export default function LoginMain({
  id,
  passwd,
  setId,
  setPasswd,
  login,
}: PropTypes) {
  return (
    <>
      <div className="fullsize loginMain">
        <section className="idAndPasswd">
          <div className="id form-floating">
            <input
              type="text"
              className="form-control"
              id="idInput"
              placeholder="ID"
              onChange={(e) => setId(e.target.value)}
            />
            <label htmlFor="passwdInput">ID</label>
          </div>
          <div className="passwd form-floating">
            <input
              type="password"
              className="form-control"
              id="passwdInput"
              placeholder="Password"
              onChange={(e) => setPasswd(e.target.value)}
            />
            <label htmlFor="passwdInput">Password</label>
          </div>
          <div className="buttionContainer">
            <div className="d-grid gap-2">
              <button
                onClick={login}
                className="loginButton btn btn-primary"
                type="button"
              >
                Login
              </button>
            </div>
          </div>
        </section>
        <section className="wannaJoin">
          <span>Is this your first time on this site?</span>
          <Link to="./join">join</Link>
        </section>
        <Footer />
      </div>
    </>
  );
}
