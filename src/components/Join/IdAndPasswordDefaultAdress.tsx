import "./IdAndPasswordDefaultAdress.css";

interface PropTypes {
  id: string;
  password: string;
  address: string;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setAddress: (address: string) => void;
  alarmOn: () => void;
}
export default function IdAndPasswordDefaultAdress({
  id,
  setId,
  password,
  setPassword,
  address,
  setAddress,
  alarmOn
}: PropTypes) {
  const setUser = () => {

  }
  const join = () => {
    if(id !== ""  && password !== "") {
      setUser();
    } else {
      alarmOn()
    }
  }
  return (
    <>
      <div className="idAndPasswordDefaultAddress">
        <div className="id from-floating">
          <input
            type="text"
            className="form-control"
            id="idInJoinInput"
            placeholder="ID"
            onChange={(e) => setId(e.target.value)}
          />
          <label htmlFor="idInJoinInput">ID</label>
        </div>
        <div className="id from-floating">
          <input
            type="text"
            className="form-control"
            id="passwordInJoinInput"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="passwordInJoinInput">PASSWORD</label>
        </div>
        <div className="id from-floating">
          <input
            type="text"
            className="form-control"
            id="addressInJoinInput"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="addressInJoinInput">ADDRESS</label>
        </div>
      </div>
      <div className="buttionContainer">
        <div className="d-grid gap-2">
          <button
            className="loginButton btn btn-primary"
            type="button"
            onClick={join}
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
}
